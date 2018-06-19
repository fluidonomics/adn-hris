import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { LeaveForwardComponent } from './leave-forward/leave-forward.component';
import { AuthService } from "../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { LeaveService } from '../leave.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from "../../../../../../../environments/environment";

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
    imageBase: string;
    leaveList: any;
    dashboardTab: string = null;
    isSuperVisor: boolean = false;
    isHr: boolean = false;
    isSpin: boolean = false;

    constructor(
        private leaveService: LeaveService,
        public authService: AuthService,
        private utilityService: UtilityService,
        private route: ActivatedRoute
    ) {
        this.imageBase = environment.content_api_base.imgBase;
    }

    ngOnInit() {
        this.imageBase = environment.content_api_base.imgBase;
        this.route.params.subscribe(p => {
            this.dashboardTab = p.type;
        });
        this.authService.validateToken().subscribe(res => {
            this.currentUser = this.authService.currentUserData;
            this.loadDashboard();
        });
    }

    loadDashboard() {
        if (this.currentUser.roles.indexOf('HR') > -1) {
            this.getHolidays();
            this.getTransactions();
            this.getLeaveBalance();
            this.getLeaveDetails('HR');
            this.isHr = true;
        } else if (this.currentUser.roles.indexOf('Supervisor') > -1) {
            this.getHolidays();
            this.getTransactions();
            this.getLeaveBalance();
            this.getLeaveDetails('Supervisor');
            this.isSuperVisor = true;
        } else {
            this.getHolidays();
            this.getTransactions();
            this.getLeaveBalance();
        }
    }

    getLeaveDetails(role) {
        this.leaveList = [];
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
                            leave.days = this.utilityService.subtractDates(leave.fromDate, leave.toDate);
                            if (!leave.status || leave.status == 'Cancelled' || leave.status == 'Rejected' || leave.status == '' || leave.status == 'Cancel Rejected' || leave.status == 'Approved') {
                                leave.allowActions = false;
                            } else {
                                leave.allowActions = true;
                            }
                            return leave;
                        });
                    }
                }
            },
            error => {
                console.error(error);
            }, () => {
                this.isSpin = false;
            });
    }

    getHolidays() {
        this.leaveService.getLeaveHolidays(2018).subscribe(res => {
            if (res.ok) {
                this.upcomingHolidays = res.json() || [];
                let todaysDate=new Date(); 
                let nextmonth=new Date(todaysDate.getFullYear(),todaysDate.getMonth()+2,0); 
                this.upcomingHolidays = this.upcomingHolidays.filter(hol => (new Date(hol.date) > new Date() && new Date(hol.date) < nextmonth));
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

    refresh() {
        this.isSpin = true;
        this.loadDashboard();
    }
}
