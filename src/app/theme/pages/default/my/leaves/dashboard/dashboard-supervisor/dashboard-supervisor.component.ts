import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import { UserData } from '../../../../../../../base/_interface/auth.model';
import { LeaveService } from '../../leave.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from "../../../../../../../../environments/environment";
import { CommonService } from "../../../../../../../base/_services/common.service";
import swal from 'sweetalert2';

declare var mApp;

@Component({
    selector: "app-my-leaves-dashboard-supervisor",
    templateUrl: "./dashboard-supervisor.component.html",
    encapsulation: ViewEncapsulation.None
})
export class DashboardSupervisorComponent implements OnInit {

    leaveBalance: any = [];
    upcomingHolidays: any = [];
    recentTransactions: any = [];
    teamLeaves: any = [];
    financialYearList: any = [];

    employeeList: any;
    currentUser: UserData;
    imageBase: string;
    leaveList: any;
    dashboardTab: string = null;
    isSuperVisor: boolean = false;
    isHr: boolean = false;
    isSpin: boolean = false;
    currentFinancialYear: string;
    fiscalYearId: string;

    overviewChartData: any = [];
    overviewChartDataFilter: any = {
        date: new Date()
    };

    teamLeavesFilter: any = {
        date: new Date()
    };

    leaveApprovalFilter: any = {
        date: new Date(),
        employeeId: null,
        leaveTypeId: null
    };

    leaveTransactionsFilter: any = {
        date: new Date(),
        employeeId: null,
        leaveTypeId: null,
        status: null
    };

    leavesForApproval: any = [];
    leavesTransactions: any = [];
    supervisorTeamEmployeeList: any = [];

    constructor(
        private leaveService: LeaveService,
        public authService: AuthService,
        private utilityService: UtilityService,
        private route: ActivatedRoute,
        private commonService: CommonService
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
    }
    getFinancialYearDetails() {
        this.currentFinancialYear = "1";
        this.loadDashboard();
        this.commonService.getFinancialYear().subscribe(
            res => {
                if (res.ok) {
                    this.financialYearList = res.json() || [];
                    this.currentFinancialYear = this.financialYearList.filter(f => f.isYearActive === true)[0].financialYearName;
                    this.fiscalYearId = this.financialYearList.filter(f => f.isYearActive === true)[0]._id;
                    this.loadDashboard();

                }
            },
            error => {
                console.log(error);
            }
        );
    }
    loadDashboard() {
        this.loadFilterData();
        this.getOverviewChartData();
        this.getTeamLeaves();
        this.getTeamLeavesForApproval();
        this.getTeamLeavesTransactions();
    }

    loadFilterData() {
        this.getEmployeeList();
        this.getLeaveTypes();
        this.getStatusList();
    }



    getEmployeeList() {
        this.leaveService.getSupervisorTeamMember(this.currentUser._id).subscribe(res => {
            if (res.ok) {
                this.supervisorTeamEmployeeList = res.json().data || [];
            }
        })
    }

    statusList: any = [];
    getStatusList() {
        this.statusList = [
            { type: "Applied" },
            { type: "Pending Approval" },
            { type: "Cancelled" }
        ];
    }

    leaveTypeList: any = []
    getLeaveTypes() {
        this.leaveService.getLeaveTypes().subscribe(res => {
            if (res.ok) {
                this.leaveTypeList = res.json() || [];
            }
        })
    }

    getOverviewChartData() {
        this.leaveService.getTeamLeavesByMonth(this.currentUser._id, this.overviewChartDataFilter.date.getMonth() + 1, this.overviewChartDataFilter.date.getFullYear()).subscribe(res => {
            if (res.ok) {
                var data = res.json().data || [];
                let chartData = [];
                data.sort((a, b) => a._id > b._id);
                data.forEach((leave, i) => {
                    chartData.push({
                        "leaveType": leave.leaveTypeName,
                        "leaveCount": leave.totalAppliedLeaves
                    })
                });
                this.overviewChartData = chartData;
            }
        })
    }


    getTeamLeaves() {
        this.leaveService.getTeamLeaves(this.currentUser._id, this.teamLeavesFilter.date.getMonth() + 1).subscribe(res => {
            if (res.ok) {
                let body = res.json();
                this.teamLeaves = body.data || [];
            }
        })
    }

    getTeamLeavesForApproval() {
        this.leaveService.getLeaveDetailsByFilter(this.currentUser._id, this.leaveApprovalFilter.date.getMonth() + 1, this.leaveApprovalFilter.date.getFullYear(),
            this.leaveApprovalFilter.employeeId, this.leaveApprovalFilter.leaveTypeId, "Applied").subscribe(res => {
                if (res.ok) {
                    this.leavesForApproval = res.json().data || [];
                }
            })
    }

    getTeamLeavesTransactions() {
        this.leaveService.getLeaveDetailsByFilter(this.currentUser._id, this.leaveTransactionsFilter.date.getMonth() + 1, this.leaveTransactionsFilter.date.getFullYear(),
            this.leaveTransactionsFilter.employeeId, this.leaveTransactionsFilter.leaveTypeId, this.leaveTransactionsFilter.status).subscribe(res => {
                if (res.ok) {
                    this.leavesTransactions = res.json().data || [];
                }
            })
    }

    approveRejectLeave(leaveId, status) {
        let body = {
            "id": leaveId,
            "status": status,
            "reason": null
        };

        // let text = 'Leave during probabtion are not encouraged until unless its an emergency case';
        let text = '';
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
                mApp.block('.recentTransactionPortlet', {
                    overlayColor: '#000000',
                    type: 'loader',
                    state: 'success',
                    // message: 'Please wait...'
                });

                this.leaveService.cancelApproveLeave(body).subscribe(res => {
                    if (res.ok) {
                        let text = status === "Approved" ? 'Leave Approved Successfully' : 'Leave Rejected Successfully';
                        swal(text, "", "success");
                        this.getTeamLeavesForApproval();
                        this.getTeamLeavesTransactions();
                    }
                }, error => {
                    console.log(error);
                }, () => {
                    mApp.unblock('.recentTransactionPortlet');
                })
            }
        });

    }


    // --------------------------------------------------------------------------

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
        // this.leaveService.getLeaveHolidays(2018).subscribe(res => {
        //     if (res.ok) {
        //         this.upcomingHolidays = res.json() || [];
        //         let todaysDate = new Date();
        //         let nextmonth = new Date(todaysDate.getFullYear(), todaysDate.getMonth() + 2, 0);
        //         this.upcomingHolidays = this.upcomingHolidays.filter(hol => (new Date(hol.date) > new Date() && new Date(hol.date) < nextmonth));
        //     }
        // })
    }

    getTransactions() {
        this.leaveService.getEmployeeLeaveDetails(this.currentUser._id, this.fiscalYearId).subscribe(res => {
            if (res.ok) {
                let body = res.json();
                this.recentTransactions = body.data || [];
            }
        })
    }

    getLeaveBalance() {
        this.leaveService.getEmployeeLeaveBalance(this.currentUser._id, this.fiscalYearId).subscribe(res => {
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
