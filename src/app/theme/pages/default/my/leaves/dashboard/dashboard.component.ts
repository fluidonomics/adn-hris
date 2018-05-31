import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { LeaveForwardComponent } from './leave-forward/leave-forward.component';
import { AuthService } from "../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { LeaveService } from '../leave.service';

@Component({
    selector: "app-my-leaves-dashboard",
    templateUrl: "./dashboard.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {

    leaveBalance: any = [];
    upcomingHolidays: any = [];
    recentTransactions: any = [];
    employeeList: any;
    currentUser: UserData;

    leaveList: any;
    dashboardTab: string = 'my';

    constructor(
        private leaveService: LeaveService,
        public authService: AuthService,
        private utilityService: UtilityService
    ) {

    }

    ngOnInit() {
        this.currentUser = this.authService.currentUserData;

        if (this.currentUser.roles.indexOf('HR') > -1) {
            this.getLeaveDetails('HR');
        } else if (this.currentUser.roles.indexOf('Supervisor') > -1) {
            this.getHolidays();
            this.getTransactions();
            this.getLeaveBalance();
            this.getLeaveDetails('Supervisor');
        } else {
            this.getHolidays();
            this.getTransactions();
            this.getLeaveBalance();
        }
    }

    getLeaveDetails(role) {
        if (!role) {
            if (this.currentUser.roles.indexOf('HR') > -1) {
                role = 'HR';
            } else if (this.currentUser.roles.indexOf('Supervisor') > -1) {
                role = 'Supervisor';
            }
        }
        this.leaveService.getLeaveDetailsByRole(role, this.currentUser._id).subscribe(
            res => {
                if (res.ok) {
                    this.leaveList = res.json() || [];
                    if (this.leaveList && this.leaveList.length > 0) {
                        this.leaveList = this.leaveList.map(leave => {
                            leave.allowActions = leave.isApproved == null && leave.isCancelled == null;
                            leave.days = this.utilityService.subtractDates(leave.fromDate, leave.toDate);
                            return leave;
                        });
                        console.log(this.leaveList);
                    }
                }
            },
            error => {
                console.error(error);
            });
    }

    getHolidays() {
        this.leaveService.getLeaveHolidays(2018).subscribe(res => {
            if (res.ok) {
                this.upcomingHolidays = res.json() || [];
            }
        })
    }

    getTransactions() {
        this.leaveService.getEmployeeLeaveDetails(this.currentUser._id).subscribe(res => {
            if (res.ok) {
                let body = res.json();
                this.recentTransactions = body.data || [];
                // this.recentTransactions.forEach(tran => {
                //     if (tran.isApproved == null && tran.isCancelled ==null) {
                //         tran.status = 'Pending';
                //     } else if(tran.isApproved == true && tran.isCancelled == false) {
                //         tran.status = 'Pending Cancel';
                //     } else if(tran.isApproved == false ){
                //         tran.status = 'Rejected';
                //     } else if(tran.isCancelled == true) {
                //         tran.status = 'Cancelled';
                //     } else if(tran.isApproved == true) {
                //         tran.status = 'Approved';
                //     }

                //     // if (tran.isCancelled == true) {
                //     //     tran.status = 'Cancelled';
                //     // } else {
                //     //     if (tran.isApproved == true) {
                //     //         tran.status = 'Approved';
                //     //     } else {
                //     //         tran.status = 'Rejected';
                //     //     }
                //     // }
                // });
            }
        })
    }

    getLeaveBalance() {
        this.leaveService.getEmployeeLeaveBalance(this.currentUser._id).subscribe(res => {
            if (res.ok) {
                this.leaveBalance = res.json() || [];
                this.leaveBalance.forEach(bal => {
                    switch (bal.leaveType) {
                        case 1:
                            bal.type = "Annual Leave";
                            break;
                        case 2:
                            bal.type = "Sick Leave";
                            break;
                        case 3:
                            bal.type = "Maternity Leave";
                            break;
                        case 4:
                            bal.type = "Special Leave";
                            break;
                    }
                });
            }
        })
    }
}
