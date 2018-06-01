import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { UserData } from '../../../../../../../base/_interface/auth.model';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveService } from '../../leave.service';
import swal from 'sweetalert2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
    selector: "app-dashboard-details",
    templateUrl: "./dashboard-details.component.html",
    styleUrls: ["./dashboard-details.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class DashboardDetailsComponent implements OnInit {

    leave: any = {};
    employee: UserData;
    leaveId: number;
    workFlowHistory: any;
    emailList: any = [];
    remarks: string;
    ccTo: any = [];
    leaveBalance: number = 0;
    isRemarkEmpty: boolean = false;
    wfhFilter: string = '';
    wfhSort: string = '';
    wfhReverse: boolean = false;
    p2: number = 1;

    constructor(
        private authService: AuthService,
        private leaveService: LeaveService,
        private utilityService: UtilityService,
        private router: Router,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        this.employee = this.authService.currentUserData;
        this.route.params.subscribe(param => {
            this.leaveId = param.id;
            Observable.forkJoin([this.getLeaveDetails(), this.getEmployeeEmails()])
                .subscribe((response) => {
                    this.processEmployeeEmails(response[1]);
                    this.processLeaveDetails(response[0]);
                    console.log(this.leave);
                    console.log(this.emailList);
                });
            this.getWorkflowHistory();
        })
    }

    getLeaveDetails() {
        return this.leaveService.getLeaveDetailsById(this.leaveId);
    }
    processLeaveDetails(data) {
        let body = data.json();
        if (body.data && body.data.length > 0) {
            this.leave = body.data[0];
            if (this.leave) {
                this.leave.days = this.utilityService.subtractDates(this.leave.fromDate, this.leave.toDate);
                if (!this.leave.status || this.leave.status == 'Cancelled' || this.leave.status == 'Rejected' || this.leave.status == '' || this.leave.status == 'Cancel Rejected' || this.leave.status == 'Approved') {
                    this.leave.allowActions = false;
                } else {
                    this.leave.allowActions = true;
                }
                if (this.leave.ccTo) {
                    let listOfcc = this.leave.ccTo.split(',');
                    listOfcc.forEach(cc => {
                        this.ccTo.push(parseInt(cc));
                    });
                }
                this.leaveService.getEmployeeLeaveBalance(this.leave.emp_id).subscribe(leaveBalanceResponse => {
                    if (leaveBalanceResponse.ok) {
                        let leaveBalance = leaveBalanceResponse.json();
                        if (leaveBalance.length > 0) {
                            let empBal = leaveBalance.find(bal => bal.leaveType == this.leave.leave_type);
                            this.leave.balance = empBal.leaveBalance;
                        }
                    }
                })
            }
        }
    }

    getEmployeeEmails() {
        return this.leaveService.getEmployeeEmailDetails();
    }
    processEmployeeEmails(res) {
        if (res.ok) {
            let body = res.json();
            this.emailList = body.data || [];
        }
    }

    getWorkflowHistory() {
        this.leaveService.getWorkflowHistory(this.leaveId).subscribe(data => {
            let body = data.json();
            if (body.data) {
                this.workFlowHistory = body.data;
            }
        });
    }

    sortWorkflowHistory(key: string) {
        this.wfhSort = key;
        this.wfhReverse = !this.wfhReverse;
    }

    goBack() {
        this.router.navigate(['my/leaves/dashboard']);
    }

    saveAcceptRejectLeave(flag: boolean) {

        if (this.remarks != undefined) {
            if (this.remarks.trim().length < 1) {
                this.isRemarkEmpty = true;
                return;
            }
            else {
                this.isRemarkEmpty = false;
            }
        }
        else {
            this.isRemarkEmpty = true;
            return;
        }
        let text = "";
        if (this.leave.employmentStatus == 2 || this.leave.employmentStatus == 3) {
            text = "This employee is under Probation";
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
                let ccToMail = [];
                this.ccTo.forEach(cc => {
                    let mail = this.emailList.find(email => {
                        return email._id == cc;
                    });
                    if (mail)
                        ccToMail.push(mail.personalEmail + '~' + mail.emp_name);
                });
                let data: any = {
                    _id: this.leaveId,
                    emp_id: this.employee._id,
                    isApproved: flag,
                    isCancelled: null,
                    updatedBy: this.employee._id,
                    ccTo: ccToMail,
                    reason: this.remarks,
                    remarks: this.remarks,
                    status: flag ? 'Approved' : 'Rejected'
                }
                if (this.leave.status == 'Cancel Pending') {
                    data.isApproved = true;
                    if (flag) {
                        data.isCancelled = true;
                        data.status = 'Cancelled';
                    } else {
                        data.isCancelled = null;
                        data.status = 'Cancel Rejected';
                    }
                }
                this.utilityService.showLoader('#frmLeave');
                this.leaveService.saveAcceptRejectLeave(data).subscribe(res => {
                    if (res.ok) {
                        this.utilityService.hideLoader('#frmLeave');
                        let promise;
                        if (flag) {
                            promise = swal("Leave Approved", "", "success");
                        }
                        else {
                            promise = swal("Leave Rejected", "", "success");
                        }
                        promise.then(success => {
                            this.goBack();
                        });
                    }
                }, err => {
                    console.log(err);
                    this.utilityService.hideLoader('#frmLeave');
                })
            }

        });
    }
}
