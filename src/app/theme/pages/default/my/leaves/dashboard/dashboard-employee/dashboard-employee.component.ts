import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import { UserData } from '../../../../../../../base/_interface/auth.model';
import { LeaveService } from '../../leave.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from "../../../../../../../../environments/environment";
import { CommonService } from "../../../../../../../base/_services/common.service";


@Component({
    selector: "app-my-leaves-dashboard-employee",
    templateUrl: "./dashboard-employee.component.html",
    encapsulation: ViewEncapsulation.None
})
export class DashboardEmployeeComponent implements OnInit {

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
    financialYearList: any = [];
    currentFinancialYear: string;
    fiscalYearId: string;

    holidayFilter: any;
    transactionFilter: any = {
        date: new Date(),
        status: 'All'
    };
    overviewChartFilter: any = new Date();

    leaveStatus = [
        "All",
        "Applied",
        "Pending Approval",
        "Cancelled"
    ]

    constructor(
        private leaveService: LeaveService,
        public authService: AuthService,
        private utilityService: UtilityService,
        private route: ActivatedRoute,
        private commonService: CommonService,
        private router: Router
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
            this.getFinancialYearDetails();
        });
        this.holidayFilter = new Date();
    }

    gotoApplyLeave() {
        this.router.navigate(["./my/leaves/apply"]);
    }

    getFinancialYearDetails() {
        this.fiscalYearId = "1";
        this.loadDashboard();
        // this.commonService.getFinancialYear().subscribe(
        //     res => {
        //         if (res.ok) {
        //             this.financialYearList = res.json() || [];
        //             this.currentFinancialYear = this.financialYearList.filter(f => f.isYearActive === true)[0].financialYearName;
        //             this.fiscalYearId = this.financialYearList.filter(f => f.isYearActive === true)[0]._id;
        //             this.loadDashboard();
        //         }
        //     },
        //     error => {
        //         console.log(error);
        //     }
        // );
    }

    loadDashboard() {
        this.getLeaveBalance();
        this.getHolidays();
    }

    getLeaveBalance() {
        this.leaveService.getEmployeeLeaveBalance(this.currentUser._id, this.fiscalYearId).subscribe(res => {
            if (res.ok) {
                this.leaveBalance = res.json() || [];
            }
        })
    }

    getHolidays() {
        if (this.holidayFilter) {
            let date = new Date(this.holidayFilter);
            this.leaveService.getLeaveHolidays(date.getMonth() + 1, date.getFullYear()).subscribe(res => {
                if (res.ok) {
                    this.upcomingHolidays = res.json() || [];
                }
            })
        }
    }

    getTransactions() {
        if (this.transactionFilter.date && this.transactionFilter.status) {
            this.leaveService.getLeaveTransactionDetails(this.currentUser._id, this.transactionFilter.getMonth() + 1).subscribe(res => {
                if (res.ok) {
                    this.recentTransactions = res.json() || [];
                }
            })
        }
    }

    getOverviewChartData() {

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





    refresh() {
        this.isSpin = true;
        this.loadDashboard();
    }
}
