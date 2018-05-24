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

    constructor(
        private leaveService: LeaveService,
        public authService: AuthService,
        private utilityService: UtilityService
    ) {

    }

    ngOnInit() {
        this.currentUser = this.authService.currentUserData;

        if (this.currentUser.roles.indexOf('HR') > -1 || this.currentUser.roles.indexOf('Supervisor') > -1) {
            this.getLeaveDetails();
        } else {
            this.getHolidays();
            this.getTransactions();
            this.getLeaveBalance();
        }

        this.leaveBalance = [
            {
                title: "LOP",
                balance: 0
            },
            {
                title: "PL",
                balance: 11
            },
            {
                title: "COF",
                balance: 0
            },
            {
                title: "OH",
                balance: 4
            }
        ];

        this.recentTransactions = [
            {
                holidayType: "LOP",
                startDate: new Date("12/02/2017"),
                endDate: new Date("12/11/2017"),
                description: "Going Home",
                status: "Approved"
            },
            {
                holidayType: "PL",
                startDate: new Date("10/12/2017"),
                endDate: null,
                description: null,
                status: "Approved"
            }
        ]
    }

    getLeaveDetails() {
        this.leaveService.getHRLeaveDetails().subscribe(
            res => {
                if (res.ok) {
                    this.leaveList = res.json().data;
                    if (this.leaveList) {
                        this.leaveList = this.leaveList.map(leave => {
                            leave.days = this.utilityService.subtractDates(leave.toDate, leave.fromDate);
                            return leave;
                        });
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
            }
        })
    }

    getLeaveBalance() {
        this.leaveService.getEmployeeLeaveBalance(this.currentUser._id).subscribe(res => {
            if (res.ok) {
                this.leaveBalance = res.json() || [];
                this.leaveBalance.forEach(bal => {
                    switch (bal.leave_type) {
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
