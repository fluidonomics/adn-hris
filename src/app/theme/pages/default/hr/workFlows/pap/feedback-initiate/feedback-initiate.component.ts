import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from "@angular/core";
import { PapService } from "../../../../services/pap.service";

import swal from 'sweetalert2';
import { UtilityService } from "../../../../../../../base/_services/utilityService.service";
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { HrService } from "../../../hr.service";
import { environment } from '../../../../../../../../environments/environment'
import { forkJoin } from "rxjs/observable/forkJoin";


@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper.papinit',
    templateUrl: 'feedback-initiate.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [PapService]
})

export class FeedbackInitiateComponent implements OnInit {

    filterBy: any = {};
    batchData: any = {
        "emp_id_array": []
    };
    employees = [];
    selectedEmployees = [];
    employeeFilterData = [];
    itemPerPage: number = 20;
    search: any;
    reverse: any;
    currentDate = new Date();
    _currentEmpId: number;
    imageBase: any;
    key = "";
    p2 = 1;
    isCheckAll;
    employeeData;

    grievanceEmployees = [];
    grievanceFilteredEmployees = [];
    grievanceSearch: any;
    grievanceIsCheckAll;
    grievanceKey = "";
    grievanceReverse: any;
    grievanceP2 = 1;


    constructor(
        private papService: PapService,
        private utilityService: UtilityService,
        public _authService: AuthService,
        private hrService: HrService
    ) {
    }

    ngOnInit() {
        this._authService.validateToken().subscribe(res => {
            this._currentEmpId = this._authService.currentUserData._id;
            this.getAllEmployee();
        });
        this.imageBase = environment.content_api_base.imgBase;
    }
    getAllEmployee() {
        forkJoin([
            this.papService.getEmployeesForFeedbackInit(),
            this.papService.getEmployeesForGrievanceFeedbackInit()
        ]).subscribe(res => {
            this.employees = res[0];
            this.employeeFilterData = res[0];

            this.grievanceEmployees = res[1];
            this.grievanceFilteredEmployees = res[1];
        });
    }


    onFilterSelected(filterBy) {
        this.filterBy = {};
        Object.assign(this.filterBy, filterBy);
        this.filterEmployee();
    }

    filterEmployee() {
        if (this.filterBy && (this.filterBy.grades || this.filterBy.departments)) {
            if (this.filterBy.departments && this.filterBy.departments.length > 0) {
                // this.employeeFilterData = this.employees.filter(obj => this.filterBy.departments.includes(obj.employeeofficedetails.department_id) && obj.emp_grade_id < 13);
                this.employeeFilterData = this.employees.filter(obj => this.filterBy.departments.includes(obj.employeeofficedetails.department_id));
                //data=data.filter(obj=>obj.department_id.some(e=>this.filterBy.departments.some(ele=>ele==e)))
            }
            if (this.filterBy.grades && this.filterBy.grades.length > 0) {
                this.employeeFilterData = this.employees.filter(obj => this.filterBy.grades.includes(obj.employeedetails.grade_id));
                //data=data.filter(obj=>obj.grade_id.some(e=>this.filterBy.grades.some(ele=>ele==e)))
            }
            if (this.filterBy.grades.length == 0 && this.filterBy.departments.length == 0) {
                this.employeeFilterData = this.employees;
            }
        }
        else {
            this.employeeFilterData = this.employees;
        }
    }

    filterGrievanceEmployee() {
        if (this.filterBy && (this.filterBy.grades || this.filterBy.departments)) {
            if (this.filterBy.departments && this.filterBy.departments.length > 0) {
                this.grievanceFilteredEmployees = this.grievanceEmployees.filter(obj => this.filterBy.departments.includes(obj.employeeofficedetails.department_id));
            }
            if (this.filterBy.grades && this.filterBy.grades.length > 0) {
                this.grievanceFilteredEmployees = this.grievanceEmployees.filter(obj => this.filterBy.grades.includes(obj.employeedetails.grade_id));
            }
            if (this.filterBy.grades.length == 0 && this.filterBy.departments.length == 0) {
                this.grievanceFilteredEmployees = this.grievanceEmployees;
            }
        }
        else {
            this.grievanceFilteredEmployees = this.grievanceEmployees;
        }
    }

    initFeedback() {
        let selectedData = this.employeeFilterData.filter(obj => obj.checked == true);
        let selectedIds = selectedData.map(item => {
            return item.emp_id
        })
        if (selectedIds.length != 0) {
            let request = {
                "updatedBy": this._currentEmpId,
                "empIds": selectedIds
            }
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
                    this.papService.papInitiateFeedback(request).subscribe(res => {
                        if (res.ok) {
                            swal("Success", "Feedback Initiated Successfully", "success");
                            this.getAllEmployee();
                            this.isCheckAll = false;
                        }
                    });
                }
            })
        } else {
            swal('Oops!', 'No employee selected', 'warning')
        }

    }

    initGrievanceFeedback() {
        let selectedData = this.grievanceFilteredEmployees.filter(obj => obj.checked == true);
        let selectedIds = selectedData.map(item => {
            return item.emp_id
        })
        if (selectedIds.length != 0) {
            let request = {
                "updatedBy": this._currentEmpId,
                "empIds": selectedIds
            }
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
                    this.papService.papInitiateGrievanceFeedback(request).subscribe(res => {
                        if (res.ok) {
                            swal("Success", "Grievnace Feedback Initiated Successfully", "success");
                            this.getAllEmployee();
                            this.grievanceIsCheckAll = false;
                        }
                    });
                }
            })
        } else {
            swal('Oops!', 'No employee selected', 'warning')
        }
    }

    selectAllEmployee($event) {
        this.employeeFilterData.forEach(element => {
            element.checked = $event.target.checked;
        });
    }

    selectGrievanceAllEmployee($event) {
        this.grievanceFilteredEmployees.forEach(element => {
            element.checked = $event.target.checked;
        });
    }

    sort(key) {

    }
}