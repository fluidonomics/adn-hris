import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { CommonService } from "../../../../../base/_services/common.service";
import { HrService } from "../hr.service";
import { UtilityService } from '../../../../../base/_services/utilityService.service';
import { AuthService } from "../../../../../base/_services/authService.service";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

declare var $
declare var mApp;
import swal from 'sweetalert2';
import { LeaveService } from '../../my/leaves/leave.service';
import { KraService } from '../../my/workflows/kra/kra.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { NgForm } from '@angular/forms';
import { MtrService } from '../../services/mtr.service';
import { LearningService } from '../../services/learning.service';
import { PipService } from '../../services/pip.service';
import * as _ from 'lodash';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--addemployee",
    templateUrl: "./transferResponsibility.component.html",
    styleUrls: ["./transferResponsibility.component.scss"],
    encapsulation: ViewEncapsulation.None,
    providers: [KraService, LeaveService, MtrService]
})
export class TransferResponsibilityComponent implements OnInit {

    @ViewChild('openRequestsModal') mtrDetailModal: TemplateRef<any>;
    @ViewChild('transferForm') transferForm: NgForm;

    supervisorTransferTypeData: any = [{
        name: "Supervisor Transfer",
        id: "tranfser"
    }, {
        name: "Supervisor Correction",
        id: "correction"
    }];
    employeesData: any = [];
    secondarySuperviserDetails: any = {};
    supervisorData: any = [];
    secondarySupervisorData: any = [];
    selectedEmployee: any = {};
    request: any = {};
    companiesData: any = [];
    _currentEmpId: number;
    primarySupervisor: any;
    seconderySupervisor: any;
    modalRef: BsModalRef;
    employeeOpenLeaveRequest: any[] = [];
    employeeOpenKraRequest: any[] = [];
    employeeOpenMtrRequest: any[] = [];
    employeeOpenLearningRequest: any[] = [];
    employeeOpenPipgRequest: any[] = [];
    oldPrimarySupervisor: any;
    oldSecondarySupervisor: any;
    fiscalYearId: any;
    constructor(
        private _commonService: CommonService,
        private _hrService: HrService,
        public utilityService: UtilityService,
        public _authService: AuthService,
        private modalService: BsModalService,
        private leaveService: LeaveService,
        private kraService: KraService,
        private mtrService: MtrService,
        private learningService: LearningService,
        private pipservice: PipService
    ) {

    }

    ngOnInit() {
        this._currentEmpId = this._authService.currentUserData._id;
        this.fiscalYearId = this._commonService.getFiscalYearIdLocal();
        this.initDropdown();
    }

    //Filled Init Dropdown 
    initDropdown() {
        this.loadAllEmployee();
    }
    loadAllEmployee() {
        this._hrService.getAllEmployee().subscribe(res => {
            let data = res.json().data || [];
            if (data.length > 0) {
                this.employeesData = data || [];
            }
            else {
                this.employeesData = data.json().data || [];
            }
            this.employeesData.forEach(element => {
                element.combinedName = element.fullName + "[" + element.userName + "]";
            });
        }, error => {
        });
    }
    employeeSelected(selectedEmpId) {
        this.employeeOpenLeaveRequest = [];
        this.employeeOpenKraRequest = [];
        this.selectedEmployee = this.employeesData.filter(obj => obj._id == selectedEmpId)[0];
        this._commonService.getSupervisor(this.selectedEmployee.grade_id).subscribe(res => {
            let supervisors = res.json() || [];
            supervisors = supervisors.filter(s => {
                return s._id != this.selectedEmployee._id;
            })
            this.supervisorData = supervisors;
            this.secondarySupervisorData = supervisors;

            this.supervisorData.forEach(element => {
                element.combinedName = element.fullName + "[" + element.userName + "]";
            });
            this.secondarySupervisorData.forEach(element => {
                element.combinedName = element.fullName + "[" + element.userName + "]";
            });
        })
        this.getEmployeeDetails(selectedEmpId);
    }
    primarySupervisorSelected(selectedPrimarySupervisorId) {
        this.secondarySupervisorData = this.secondarySupervisorData.filter(obj => obj._id != selectedPrimarySupervisorId);
    }
    getEmployeeDetails(selectedEmpId) {
        this._hrService.getEmployeeDetails(selectedEmpId).subscribe(res => {
            if (res.ok) {
                let details = res.json().data[0] || {};

                if (details.supervisorDetails.secondarySupervisorDetails) {
                    this.seconderySupervisor = details.supervisorDetails.secondarySupervisorDetails.fullName + " [" + details.supervisorDetails.secondarySupervisorDetails.userName + "]";
                    this.request.secondarySupervisorEmp_id = details.supervisorDetails.secondarySupervisorDetails._id;
                } else {
                    this.seconderySupervisor = "";
                    this.request.secondarySupervisorEmp_id = null;
                }
                if (details.supervisorDetails.primarySupervisorDetails) {
                    this.primarySupervisor = details.supervisorDetails.primarySupervisorDetails.fullName + " [" + details.supervisorDetails.primarySupervisorDetails.userName + "]";
                    this.request.primarySupervisorEmp_id = details.supervisorDetails.primarySupervisorDetails._id;
                } else {
                    this.primarySupervisor = "";
                    this.request.primarySupervisorEmp_id = null;
                }

                this.oldPrimarySupervisor = details.supervisorDetails.primarySupervisorEmp_id;
                this.oldSecondarySupervisor = details.supervisorDetails.secondarySupervisorEmp_id;

            }
        }, error => {
            console.log(error);
        });
    }






    //Submit Add Employee Form
    onTransferSubmit(form) {
        if (form.valid) {
            if (this.request.primarySupervisorEmp_id == this.request.secondarySupervisorEmp_id) {
                swal({
                    title: "Error",
                    text: "Primary and secondary supervisors cannot be same",
                    type: 'error',
                    showCancelButton: false,
                    confirmButtonColor: '#66BB6A',
                    confirmButtonText: 'OK'
                });
                return;
            }
            console.log(this.request);

            this.checkEmployeesOpenRequests(form).then(res => {
                if (res.result) {
                    this.proceedToTransfer(res.form);
                }
            });
        }
    }
    transfer() {
        swal({
            title: 'Are you sure?',
            text: "Do you want continue?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                this.request.user_id = this._currentEmpId;
                this.request.oldPrimarySupervisor = this.oldPrimarySupervisor;
                this.request.oldSecondarySupervisor = this.oldSecondarySupervisor;
                this.utilityService.showLoader('.m-content');
                this._hrService.updateSupervisortransferInfo(this.request).subscribe(data => {
                    if (data.ok) {
                        let status = data.json() || false;
                        if (status) {
                            swal({
                                title: 'Supervisor Revision Successful',
                                text: "",
                                type: 'success',
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                                showConfirmButton: false,
                                timer: 1000
                            }).then((result) => {
                                this.transferForm.resetForm();
                                this.reset();
                            });
                            //debugger;
                        } else {
                            swal({
                                title: '',
                                text: "Supervisor Revision Failed",
                                type: 'warning',
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                                showConfirmButton: false,
                                timer: 1000
                            }).then((result) => {
                                this.transferForm.resetForm();
                                this.reset();
                            });
                        }
                    }
                });
            }
        });
    }

    proceedToTransfer(form) {
        if (this.modalRef) {
            this.modalRef.hide();
        }
        let titletxt = "Supervisor Transfer";
        let bodytxt = "Supervisor Transfer will transfer subordinate to the new Supervisor."
        if (this.request.change_type != "tranfser") {
            titletxt = "Supervisor Corection";
            bodytxt = "Supervisor correction will change Approval authority from previous transactions(Leaves,KRA) as well Preffered for New Employees only."
        }
        swal({
            title: titletxt,
            text: bodytxt,
            type: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#66BB6A',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (this.request.change_type != "tranfser") {
                swal({
                    title: "Supervisor Corection",
                    text: "Audit trail will be gone. Please use this feature only for temporary supervisor change.",
                    type: 'warning',
                    showCancelButton: false,
                    confirmButtonColor: '#66BB6A',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    this.transfer();
                })
            }
            else {
                this.transfer();
            }


        });
    }

    reset() {
        this.request = {};
        this.utilityService.hideLoader('.m-content');
    }

    checkUserNameExists(_element) {
        if (_element.valid) {
            this._commonService.checkUserNameExists(_element.value).subscribe(data => {
                if (data.json())
                    _element.control.setErrors({ "userNameExists": true })
            }, error => {
                _element.control.setErrors(null)
            });
        }
    }

    checkEmployeesOpenRequests(form) {
        let data = {
            form: form,
            result: false
        };
        return new Promise<any>((resolve, reject) => {
            if (this.request.change_type === "tranfser") {
                this.employeeOpenLeaveRequest = [];
                this.employeeOpenKraRequest = [];
                forkJoin(
                    this.leaveService.getLeaveDetailsByEmployeeId(this.request.emp_id),
                    this.kraService.getKraByEmployeeId(this.request.emp_id),
                    this.mtrService.getEmployeeMtrWorkFlowInfo(this.request.emp_id),
                    this.learningService.getEmployeeLearningInfo(this.request.emp_id),
                    this.pipservice.getPipInfo(this.request.emp_id)
                ).subscribe(res => {
                    let leaveData = res[0].json().data || [];
                    let kraData = res[1].json().data || [];
                    let mtrData = res[2].json().result.message || [];
                    let learningData = res[3].json().result.message || [];
                    let pipData = res[4].json().result.message || [];

                    this.employeeOpenLeaveRequest = leaveData.filter(leave => {
                        return leave.leaveStatus != "Approved" && leave.leaveStatus != "Cancelled" && leave.leaveStatus != "Withdrawn" && leave.leaveStatus != "Rejected";
                    });

                    this.employeeOpenKraRequest = kraData.filter(kra => {
                        return kra.supervisorStatus != "Approved";
                    });

                    mtrData = mtrData.filter(mtr => {
                        return mtr.mtr_master_status != "Approved";
                    });

                    learningData = learningData.filter(learn => {
                        return learn.status != "Approved";
                    });

                    pipData = pipData.filter(pip => {
                        return (pip.status != "Approved" && pip.status != "Completed");
                    });

                    this.employeeOpenMtrRequest = _.chain(mtrData)
                        .groupBy("mtr_master_id").map(function (v, i) {
                            return {
                                mtrDetailCount: v.length,
                                status: v[0].mtr_master_status,
                                createdAt: v[0].mtr_master_details.createdAt,
                                updatedAt: v[0].mtr_master_details.updatedAt
                            }
                        }).value();
                    this.employeeOpenLearningRequest = _.chain(learningData)
                        .groupBy("_id").map(function (v, i) {
                            return {
                                //learningDetailCount: v.length,
                                status: v[0].status,
                                createdAt: v[0].createdAt,
                                updatedAt: v[0].updatedAt
                            }
                        }).value();

                    this.employeeOpenPipgRequest = _.chain(pipData)
                        .groupBy("_id").map(function (v, i) {
                            return {
                                //learningDetailCount: v.length,
                                status: v[0].status,
                                createdAt: v[0].createdAt,
                                updatedAt: v[0].updatedAt
                            }
                        }).value();
                    if (this.employeeOpenLeaveRequest.length > 0 || this.employeeOpenKraRequest.length > 0 || this.employeeOpenMtrRequest.length > 0 || this.employeeOpenLearningRequest.length > 0 || this.employeeOpenPipgRequest.length > 0) {
                        this.request.leaveIds = this.employeeOpenLeaveRequest.map(leave => leave._id);
                        this.request.kraIds = this.employeeOpenKraRequest.map(kra => kra._id);
                        this.request.mtrIds = mtrData.map(mtr => mtr._id);
                        this.request.learningIds = learningData.map(learning => learning._id);
                        this.request.pipIds = pipData.map(pip => pip._id);
                        // debugger;
                        this.modalRef = this.modalService.show(this.mtrDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
                        resolve(data);
                    } else {
                        data.result = true;
                        resolve(data);
                    }



                });
            } else {
                data.result = true;
                resolve(data);
            }
        });
    }
}

