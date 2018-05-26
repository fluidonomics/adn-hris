import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from '../../../../../../base/_services/authService.service';
import swal from 'sweetalert2';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { LeaveService } from '../leave.service';
declare var mApp;


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./apply.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ApplyComponent implements OnInit {

    leaveapplication: any = {};

    fromsessiondropdownitems = ['text'];
    tosessiondropdownitems = ['text'];
    supervisorDetails: any;
    leaveTypesDetails: any;
    emailDetails: any;
    areDaysValid: boolean = true;
    isBalanceValid: boolean = true;
    isAttachmentRequired: boolean = false;
    currentUser: UserData;
    employeeBalances: any = [];

    constructor(
        private leaveService: LeaveService,
        private _commonService: CommonService,
        private _authService: AuthService
    ) {
        this._commonService.getSupervisor()
    }
    ngOnInit(): void {
        this.InitValues();
        this.getLeaveTypes();
        this.getAllSupervisorDetails();
        this.getAllEmailListOfEmployee();
    }
    InitValues() {
        this.leaveapplication.days = 0;
        this.leaveapplication.balance = 0;
        this.currentUser = this._authService.atCurrentUserData;
        this.getEmployeeLeaveBalance();
    }

    getLeaveTypes() {
        this.leaveService.getLeaveType().subscribe(
            res => {
                if (res.ok) {
                    this.leaveTypesDetails = res.json();
                }
            },
            error => {
                console.error(error);
            });
    }
    getAllSupervisorDetails() {
        this._commonService.getSupervisor()
            .subscribe(
                res => {
                    if (res.ok) {
                        this.supervisorDetails = res.json();
                    }
                },
                error => {
                    console.log(error);
                });
    }
    getAllEmailListOfEmployee() {
        this.leaveService.getEmployeeEmailDetails().subscribe(
            res => {
                if (res.ok) {
                    let body = res.json();
                    this.emailDetails = body.data || [];
                }
            },
            error => {
                console.log(error);
            });
    }

    getEmployeeLeaveBalance() {
        this.leaveService.getEmployeeLeaveBalance(this.currentUser._id).subscribe(res => {
            if (res.ok) {
                this.employeeBalances = res.json() || [];
            }
        })
    }

    onChangeLeaveType() {
        let empBal = this.employeeBalances.find(bal => {
            if (bal) {
                return bal.leave_type == this.leaveapplication.leaveType;
            }
        });
        this.leaveapplication.balance = empBal ? empBal.balance : 0;
    }

    postEmployeeLeaveDetails(form, data: any) {
        this.areDaysValid = data.days > 0;
        this.isBalanceValid = !(data.balance <= 0 || data.balance < data.days);

        if (data.days > 3) {
            if (!data.attachment) {
                this.isAttachmentRequired = true;
            }
        } else {
            this.isAttachmentRequired = false;
        }


        if (form.valid && this.areDaysValid && this.isBalanceValid && !this.isAttachmentRequired) {
            let ccToMail = [];
            data.ccTo.forEach(cc => {
                let mail = this.emailDetails.find(email => {
                    return email._id == cc;
                });
                if (mail)
                    ccToMail.push(mail.personalEmail + '~' + mail.emp_name);
            });

            let _postData: any = {};
            _postData.applyTo = data.applyToId;
            _postData.fromDate = data.fromDate;
            _postData.toDate = data.toDate;
            _postData.leave_type = data.leaveType;
            _postData.reason = data.reason;
            _postData.contactDetails = data.contactDetail;
            _postData.ccTo = ccToMail;
            _postData.emp_id = this.currentUser._id;
            _postData.createdBy = this.currentUser._id;
            _postData.updatedBy = this.currentUser._id;

            mApp.block('#applyLeavePanel', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                // message: 'Please wait...'
            });
            this.leaveService.saveEmployeeLeaveDetails(_postData).subscribe(
                res => {
                    mApp.unblock('#applyLeavePanel');
                    swal("Leave Applied", "", "success");
                    this.resetForm(form);
                },
                error => {
                    mApp.unblock('#applyLeavePanel');
                    console.log(error);
                });
        }
    }

    onLeaveAppSubmit(form) {
        this.postEmployeeLeaveDetails(form, this.leaveapplication);
    }

    resetForm(form) {
        form.resetForm();
        form.submitted = false;
        this.areDaysValid = true;
        this.isBalanceValid = true;
        this.isAttachmentRequired = false;
        this.getEmployeeLeaveBalance();
    }

    calculateDays(e: any, type: string) {
        let diff: number;
        if (type === 'fromDate') {
            diff = Math.ceil((Date.parse(this.leaveapplication.toDate) - Date.parse(e)) / (1000 * 3600 * 24));
        }
        else {
            diff = Math.ceil((Date.parse(e) - Date.parse(this.leaveapplication.fromDate)) / (1000 * 3600 * 24));
        }
        if (diff < 0) {
            this.leaveapplication.days = 0;
            if (type === 'fromDate') {
                this.leaveapplication.fromDate = this.leaveapplication.fromDate;
                return;
            }
            else {
                this.leaveapplication.toDate = this.leaveapplication.toDate;
                return;
            }
        }
        if (!isNaN(diff))
            this.leaveapplication.days = diff + 1;
        else
            this.leaveapplication.days = 0;

    }
}