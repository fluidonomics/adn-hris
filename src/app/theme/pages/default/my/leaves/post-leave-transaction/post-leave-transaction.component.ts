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
    employeeBalances: any = [];
    inProbation: boolean = false;
    fetchingBalances: boolean = false;
    currentDate: Date = new Date()

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
        this.leavetransaction.days = null;
        this.leavetransaction.balance = null;
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

    getEmployeeProbationDetails() {
        this.leaveService.getEmployeeProbationDetails(this.currentEmpId).subscribe(res => {
            if (res.ok) {
                let data = res.json();
                if (data) {
                    this.inProbation = data.result || false;
                }
            }
        });
    }

    onChangeEmployee() {
        this.fetchingBalances = true;
        this.employeeBalances = [];
        this.leaveService.getEmployeeLeaveBalance(this.leavetransaction.employee).subscribe(res => {
            if (res.ok) {
                this.employeeBalances = res.json() || [];
            }
        }, err => {
            console.log("Unable to fetch balances");
        }, () => {
            this.fetchingBalances = false;
        })
    }

    onChangeLeaveType() {
        let empBal = this.employeeBalances.find(bal => {
            if (bal) {
                return bal.leaveType == this.leavetransaction.leavetype;
            }
        });
        this.leavetransaction.balance = empBal ? empBal.leaveBalance : 0;
    }


    postLeaveTransactionDetails(form, data: any) {
        this.areDaysValid = data.days > 0;
        this.isBalanceValid = data.balance || !(data.balance <= 0 || data.balance < data.days);

        if (form.valid && this.areDaysValid && this.isBalanceValid) {
            let _postData: any = {};
            _postData.fromDate = data.fromDate;
            _postData.toDate = data.toDate;
            _postData.leave_type = data._id;
            _postData.reason = data.reason;
            _postData.emp_id = data.employee;
            //_postData.createdBy = data.currentEmpId;
            _postData.updatedBy = this.currentEmpId;

            let text = "";
            if (this.inProbation) {
                text = "This employee is under probation";
            }
            swal({
                title: 'Are you sure?',
                text: text,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value) {
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
                            this.handleError(this, error);
                        });
                }
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
        if (type === 'fromDate') {
            this.leavetransaction.days = this.utilityService.subtractDates(e, this.leavetransaction.toDate);
            this.leavetransaction.toDate = null;
        }
        else {
            this.leavetransaction.days = this.utilityService.subtractDates(this.leavetransaction.fromDate, e);
        }
    }

    handleError(that, err) {
        mApp.unblock('#applyLeavePanel');
        let msg = "";
        if (err.error.message) {
            msg = err.error.message;
        } else if (err.body.error.message) {
            msg = err.body.error.message;
        }
        swal("An Error Occured", msg, "error");
    }
}
