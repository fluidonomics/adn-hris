import { Component, Input, OnInit, ViewEncapsulation, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from '../../../../../../base/_services/authService.service';
import swal from 'sweetalert2';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { LeaveService } from '../leave.service';
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { Subscription } from 'rxjs';
import { NgSelectComponent } from '@ng-select/ng-select';
import { Observable } from 'rxjs/Observable';
declare var mApp;


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./apply.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ApplyComponent implements OnInit, OnDestroy {

    @ViewChild('ddLeaveType') ddLeaveType: NgSelectComponent;

    leaveapplication: any = {};
    fromsessiondropdownitems = ['text'];
    tosessiondropdownitems = ['text'];
    supervisorDetails: any;
    leaveTypeList: any = [];
    leaveTypesDetails: Observable<Array<any>>;
    emailDetails: any;
    areDaysValid: boolean = true;
    isBalanceValid: boolean = true;
    isAttachmentRequired: boolean = false;
    currentUser: UserData;
    employeeBalances: any = [];

    getLeaveTypeByEmpIdSubs: Subscription;

    constructor(
        private leaveService: LeaveService,
        private _commonService: CommonService,
        private _authService: AuthService,
        private utilityService: UtilityService
    ) {

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
        this.getLeaveTypeByEmpIdSubs = this.leaveService.getLeaveTypeByEmpId(this.currentUser._id).subscribe(data => {
            this.leaveTypeList.push(data);
            this.leaveTypesDetails = this.leaveTypeList;
        });
    }

    getAllSupervisorDetails() {
        this._commonService.getKraSupervisor(this.currentUser._id)
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
                return bal.leaveType == this.leaveapplication.leaveType;
            }
        });
        this.leaveapplication.balance = empBal ? empBal.leaveBalance : 0;
    }

    postEmployeeLeaveDetails(form, data: any) {
        debugger;
        this.areDaysValid = data.days > 0;
        this.isBalanceValid = !(data.balance <= 0 || data.balance < data.days);

        if ((data.days >= 3 && data.leaveType == 2) || data.leaveType == 3) {
            if (!data.attachment) {
                this.isAttachmentRequired = true;
            }
        } else {
            this.isAttachmentRequired = false;
        }


        if (form.valid && this.areDaysValid && this.isBalanceValid && !this.isAttachmentRequired) {
            let ccToMail = [];
            if (data.ccTo) {
                data.ccTo.forEach(cc => {
                    let mail = this.emailDetails.find(email => {
                        return email._id == cc;
                    });
                    if (mail)
                        ccToMail.push(mail.personalEmail + '~' + mail.emp_name);
                });
            }

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
                    this.handleError(this, error);
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
        if (type === 'fromDate') {
            this.leaveapplication.days = this.utilityService.subtractDates(e, this.leaveapplication.toDate);
        }
        else {
            this.leaveapplication.days = this.utilityService.subtractDates(this.leaveapplication.fromDate, e);
        }
    }

    handleError(that, err) {
        mApp.unblock('#applyLeavePanel');
        let msg = "";
        if (err.error.message) {
            msg = err.error.message;
        }
        swal("An Error Occured", msg, "error");
    }

    ngOnDestroy(): void {
        this.getLeaveTypeByEmpIdSubs.unsubscribe();
    }
}