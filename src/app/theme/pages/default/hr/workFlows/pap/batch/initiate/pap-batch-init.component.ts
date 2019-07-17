import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { PapService } from "../../../../../services/pap.service";

import swal from 'sweetalert2';
import { UtilityService } from "../../../../../../../../base/_services/utilityService.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { EmployeeBatchSelectionGridComponent } from "../../../../../shared/components/employee-batch-selection-grid/employee-batch-selection-grid.component";
import { DepartmentGradeFilterComponent } from "../../../../../shared/components/department-grade-filter/department-grade-filter.component";


@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper.papinit',
    templateUrl: 'pap-batch-init.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [PapService]
})

export class PapBatchInitComponent implements OnInit {

    filterBy: any = {};
    batchData: any = {
        "emp_id_array": []
    };
    employees = [];
    selectedEmployees = [];
    currentDate = new Date();
    _currentEmpId: number;

    @ViewChild('grid') employeeBatchSelectionGrid: EmployeeBatchSelectionGridComponent;
    @ViewChild('filter') departmentGradeFilterComponent: DepartmentGradeFilterComponent;

    constructor(
        private papService: PapService,
        private utilityService: UtilityService,
        public _authService: AuthService
    ) {
    }

    ngOnInit() {
        this._authService.validateToken().subscribe(res => {
            this._currentEmpId = this._authService.currentUserData._id;
            this.getEmployeesForPap();
        });
    }

    onFilterSelected(filterBy) {
        this.filterBy = {};
        Object.assign(this.filterBy, filterBy);
    }
    OnemployeeChecked(selectedEmployee) {
        this.selectedEmployees = selectedEmployee;
    }

    getEmployeesForPap() {
        this.papService.getEmployeesForPapInitiate().subscribe(res => {
            this.employees = res || [];
            this.employees = this.employees.filter(e => {
                if (e.type == 'pap') {
                    return e.pap_master.length == 0 && e.grade_id < 13;
                } else {
                    return true && e.grade_id < 13;
                }
            });
        });
    }

    initiateBatch(form) {
        if (form.valid) {
            let data: any = {
                batchName: this.batchData.batchName,
                batchEndDate: this.batchData.batchEndDate
            };
            data.emp_id_array = this.selectedEmployees.map(item => {
                return {
                    emp_id: item.emp_id,
                    mtr_master_id: item.mtr_master_id,
                    supervisor_id: item.supervisor_id,
                    officeEmail: item.emp_emailId,
                    type: item.type
                }
            });

            if (data.emp_id_array.length > 0) {
                swal({
                    title: 'Are you sure?',
                    text: "",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if (result.value) {
                        data.createdBy = this._currentEmpId;
                        data.batchEndDate = this.batchData.batchEndDate;
                        data.action_link = window.location.origin + '/my/workflows/pap';
                        this.utilityService.showLoader('#initiate-loader');
                        this.papService.initiatePapProcess(data).subscribe(res => {
                            if (res) {
                                this.utilityService.hideLoader('#initiate-loader');
                                swal("Success", "Batch Initiated Successfully", "success");
                                form.resetForm();
                                this.clearForm();
                            }
                            this.getEmployeesForPap();
                        }, error => {
                            this.utilityService.hideLoader('#initiate-loader');
                        });
                    }
                })
            }
            else {
                swal('Oops!', 'No employee selected', 'warning')
            }
        }
    }

    clearForm() {
        this.selectedEmployees = [];
        this.batchData = {
            "emp_id_array": []
        };
        this.filterBy = {};
        this.employeeBatchSelectionGrid.clear();
        this.departmentGradeFilterComponent.clear();
    }
}