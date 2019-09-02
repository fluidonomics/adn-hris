import { Component } from '@angular/core';
import { ScriptLoaderService } from "../../../../../../../_services/script-loader.service";
import { PapService } from "../../../../services/pap.service";
import { CommonService } from "../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from "../../../../../../../base/_services/utilityService.service";

import swal from 'sweetalert2';


@Component({
    selector: 'grievance-phase-initiate',
    templateUrl: 'grievance-phase-initiate.component.html',
    styleUrls: ['grievance-phase-initiate.component.scss']
})
export class GrievancePhaseInitiateComponent {

    employeesData: any = [];
    employee: any = {};
    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    _currentEmpId: number;
    itemPerPage: number = 10;
    param_emp_id;
    showGrievancePhase: boolean = false;
    grievanceEndDate;
    currentDate = new Date();
    allPapData = [];
    showGrievanceInitForm: boolean = false;
    grievancePap = [];
    filteredGrievancePap = [];
    deparmentData: any = [];
    filterBy: any = {
        departments: []
    };
    fiscalYearId: string;
    constructor(private _script: ScriptLoaderService,
        private _papService: PapService,
        private _commonService: CommonService,
        public _authService: AuthService,
        public utilityService: UtilityService,
    ) {

    }
    ngOnInit() {
        this._authService.validateToken().subscribe(res => {
            this._currentEmpId = this._authService.currentUserData._id;
            this.fiscalYearId = this._commonService.getFiscalYearIdLocal();
            this.getAllPap();
            this.loadDepartment();
        });
    }

    ngAfterViewInit() {
    }

    loadDepartment() {
        this._commonService.getDepartment().subscribe(res => {
            if (res.ok) {
                // this.employeeData = [];
                this.deparmentData = res.json();
            }
        }, error => {
        });
    }


    getAllPap() {
        this._papService.getAllPap(this.fiscalYearId).subscribe(res => {
            this.allPapData = res || [];
            this.grievancePap = this.allPapData.filter(pap => {
                if (pap.reviewerStatus == 'Approved' && pap.grievanceStatus == null && pap.isDeleted == false && pap.isSentToSupervisor == true && pap.isRatingCommunicated == true && pap.status == 'Approved') {
                    return true;
                } else {
                    return false;
                }
            });
            this.showGrievanceInitForm = this.grievancePap.length > 0;
            this.filteredGrievancePap = this.grievancePap;
        });
    }

    filterEmployees() {
        if (this.filterBy && this.filterBy.departments) {
            if (this.filterBy.departments && this.filterBy.departments.length > 0) {
                this.filteredGrievancePap = this.grievancePap.filter(pap => this.filterBy.departments.includes(pap.employeeofficedetails.department_id));
            }
            if (this.filterBy.departments.length == 0) {
                this.filteredGrievancePap = this.grievancePap;
            }
        }
        else {
            this.filteredGrievancePap = this.grievancePap;
        }
    }

    initGrievancePhase(form) {
        if (form.valid) {
            let eligibleEmployees = this.filteredGrievancePap.filter(pap => pap.grievanceRaiseEndDate == null);
            if (eligibleEmployees.length <= 0) {
                swal("No employees eligible for Grievance Phase", "", "error");
                return;
            }
            let employees = eligibleEmployees.map(g => {
                let emp = {
                    empId: g.emp_id,
                    papMasterId: g._id
                }
                return emp;
            });
            let data = {
                updatedBy: this._currentEmpId,
                grievanceEndDate: this.grievanceEndDate,
                employees: employees,
                action_link: window.location.origin + '/my/workflows/pap?fiscalYearId=' + this.fiscalYearId,
            };

            swal({
                title: 'Are you sure?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value) {
                    this._papService.initGrievancePhase(data).subscribe(res => {
                        swal("Grievance Phase Initiated", "", "success");
                        this.getAllPap();
                        form.resetForm();
                    });
                }
            });
        }
    }
}
