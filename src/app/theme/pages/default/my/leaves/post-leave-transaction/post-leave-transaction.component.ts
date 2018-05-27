import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from '../../../../../../base/_services/authService.service';
import swal from 'sweetalert2';
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { LeaveService } from '../leave.service';
declare var mApp;

const now = new Date();

@Component({
    selector: "app-my-leaves-post-leave-transaction",
    templateUrl: "./post-leave-transaction.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class PostLeaveTransactionComponent implements OnInit {

    leavetransaction: any = {};
    employeeList: any;
    leaveTypesDetails: any;
    currentEmpId: any;
    areDaysValid: boolean = true;
    isBalanceValid: boolean = true;

    constructor(
        private leaveService: LeaveService,
        private commonService: CommonService,
        private authService: AuthService,
        private utilityService: UtilityService
    ) {
    }
    ngOnInit(): void {
        this.InitValues();
        this.getEmployeeList();
        this.getLeaveTypes();
    }
    InitValues() {
        this.leavetransaction.days = 0;
        this.leavetransaction.balance = 0;
        this.authService.validateToken().subscribe(
            res => {
                this.currentEmpId = this.authService.currentUserData._id;
            });
    }

    getEmployeeList() {
        this.leaveService.getAllEmployee().subscribe(
            res => {
                if (res.ok) {
                    let body = res.json();
                    this.employeeList = body.data || [];
                }
            },
            error => {
                console.error(error);
            });
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

    postLeaveTransactionDetails(form, data: any) {
        this.areDaysValid = data.days > 0;
        this.isBalanceValid = !(data.balance <= 0 || data.balance < data.days);

        if (form.valid && this.areDaysValid && this.isBalanceValid) {
            let _postData: any = {};
            _postData.fromDate = data.fromDate;
            _postData.toDate = data.toDate;
            _postData.leave_type = data._id;
            _postData.reason = data.reason;
            _postData.emp_id = data.employee;
            //_postData.createdBy = data.currentEmpId;
            _postData.updateBy = this.currentEmpId;

            mApp.block('#applyLeavePanel', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                // message: 'Please wait...'
            });
            this.leaveService.saveEmployeeLeaveDetails(_postData).subscribe(
                res => {
                    mApp.unblock('#applyLeavePanel');
                    swal("Post Leave Transaction", "", "success");
                    this.resetForm(form);
                },
                error => {
                    mApp.unblock('#applyLeavePanel');
                    console.log(error);
                });
        }
    }

    onLeaveTransactionSubmit(form) {
        this.postLeaveTransactionDetails(form, this.leavetransaction);
    }

    resetForm(form) {
        form.resetForm();
        form.submitted = false;
        form.controls.days.setErrors({ 'required': null })
        form.controls.balance.setErrors({ 'required': null })
    }

    calculateDays(e: any, type: string) {
        let diff: number;
        if (type === 'fromDate') {
            diff = this.utilityService.subtractDates(e, this.leavetransaction.toDate);
        }
        else {
            diff = this.utilityService.subtractDates(this.leavetransaction.fromDate, e);
        }
        if (diff < 0) {
            this.leavetransaction.days = 0;
            if (type === 'fromDate') {
                this.leavetransaction.fromDate = this.leavetransaction.fromDate;
                return;
            }
            else {
                this.leavetransaction.toDate = this.leavetransaction.toDate;
                return;
            }
        }
        if (!isNaN(diff))
            this.leavetransaction.days = diff + 1;
        else
            this.leavetransaction.days = 0;

    }
}
