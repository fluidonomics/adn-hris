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

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--addemployee",
    templateUrl: "./transferResponsibility.component.html",
    styleUrls: ["./transferResponsibility.component.scss"],
    encapsulation: ViewEncapsulation.None,
    providers: [KraService, LeaveService]
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

    constructor(
        private _commonService: CommonService,
        private _hrService: HrService,
        public utilityService: UtilityService,
        public _authService: AuthService,
        private modalService: BsModalService,
        private leaveService: LeaveService,
        private kraService: KraService
    ) {

    }

    ngOnInit() {
        this._currentEmpId = this._authService.currentUserData._id;
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

    proceedToTransfer(form) {
        if (this.modalRef) {
            this.modalRef.hide();
        }
        let titletxt = "Supervisor Transfer";
        let bodytxt = "Supervisor Transfer will transfer subordinate to the new Supervisor All the pending approvals till date will be done by previous Supervisor only."
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
        });
    }

    reset() {
        this.request = {};
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
                    this.kraService.getKraByEmployeeId(this.request.emp_id)
                ).subscribe(res => {
                    let leaveData = res[0].json().data || [];
                    let kraData = res[1].json().data || [];

                    this.employeeOpenLeaveRequest = leaveData.filter(leave => {
                        return leave.status != "Approved" && leave.status != "Cancelled" && leave.status != "Withdrawn";
                    })

                    this.employeeOpenKraRequest = kraData.filter(kra => {
                        return kra.supervisorStatus != "Approved";
                    })
                    if (this.employeeOpenLeaveRequest.length > 0 || this.employeeOpenKraRequest.length > 0) {
                        this.request.leaveIds = this.employeeOpenLeaveRequest.map(leave => leave._id);
                        this.request.kraIds = this.employeeOpenKraRequest.map(kra => kra._id);
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

