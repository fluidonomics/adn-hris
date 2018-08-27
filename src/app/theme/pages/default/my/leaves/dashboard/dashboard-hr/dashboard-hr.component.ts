import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import { UserData } from '../../../../../../../base/_interface/auth.model';
import { LeaveService, LeaveStatus } from '../../leave.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from "../../../../../../../../environments/environment";
import { CommonService } from "../../../../../../../base/_services/common.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AmChartOptions } from '../../charts/monthly-leave-chart/monthly-leave-chart.component';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

declare var mApp;
declare var moment;

@Component({
    selector: "app-my-leaves-dashboard-hr",
    templateUrl: "./dashboard-hr.component.html",
    encapsulation: ViewEncapsulation.None
})
export class DashboardHrComponent implements OnInit {

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

    leaveAvailedChartData: any = [];
    leaveAvailedChartOptions: AmChartOptions = {};
    leaveAvailedChartDataFilter: any = {
        date: this.leaveService.getCurrentMonthDates()
    };

    approvedStatusChartData: any = [];
    approvedStatusChartOptions: AmChartOptions = {};
    approvedStatusChartDataFilter: any = {
        date: this.leaveService.getCurrentMonthDates()
    };

    teamLeavesFilter: any = {
        date: this.leaveService.getCurrentMonthDates()
    };

    employeeOnLeavesFilter: any = {
        date: this.leaveService.getCurrentMonthDates(),
        employeeId: null,
        leaveTypeId: null
    };

    leaveTransactionsFilter: any = {};

    leavesForApproval: any = [];
    employeeOnLeaves: any = [];
    supervisorTeamEmployeeList: any = [];
    modalRef: BsModalRef;

    constructor(
        private leaveService: LeaveService,
        public authService: AuthService,
        private utilityService: UtilityService,
        private route: ActivatedRoute,
        private commonService: CommonService,
        private modalService: BsModalService
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

        this.leaveAvailedChartOptions = {
            valueAxes: {
                precision: 2
            }
        };

        this.approvedStatusChartOptions = {
            valueAxes: {
                precision: 2
            }
        };

        let dates = this.leaveService.getCurrentMonthDates();
        this.leaveTransactionsFilter.fromDate = dates[0];
        this.leaveTransactionsFilter.toDate = dates[1];
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
        this.getLeaveAvailedPercentage();
        this.getApprovedStatusPercentage();
        this.getEmployeeOnLeaves();
    }

    loadFilterData() {
        this.getLeaveTypes();
        this.getStatusList();
        this.getAllEmployee();
        this.getDivision();
        this.getDepartment();
    }

    statusList: any = [];
    getStatusList() {
        this.statusList = this.leaveService.getLeaveStatuses();
    }

    leaveTypeList: any = []
    getLeaveTypes() {
        this.leaveService.getLeaveTypes().subscribe(res => {
            if (res.ok) {
                this.leaveTypeList = res.json() || [];
            }
        })
    }

    getAllEmployee() {
        this.leaveService.getAllEmployee().subscribe(res => {
            if (res.ok) {
                this.employeeList = res.json().data || [];
            }
        })
    }

    divisionList: any = [];
    getDivision() {
        this.commonService.getDivision().subscribe(res => {
            if (res.ok) {
                this.divisionList = res.json() || [];
            }
        })
    }

    departmentList: any = [];
    getDepartment() {
        this.commonService.getDepartment().subscribe(res => {
            if (res.ok) {
                this.departmentList = res.json() || [];
            }
        })
    }

    getLeaveAvailedPercentage() {
        this.leaveService.getLeaveAvailedPercentage(this.currentUser._id, this.leaveAvailedChartDataFilter.date[0], this.leaveAvailedChartDataFilter.date[1]).subscribe(res => {
            if (res.ok) {
                var data = res.json() || [];
                let chartData = [];
                data.sort((a, b) => a.leaveTypeId > b.leaveTypeId);
                data.forEach((leave, i) => {
                    chartData.push({
                        "leaveType": leave.leaveType,
                        "leaveCount": parseFloat(leave.percentage).toFixed(2)
                    })
                });
                this.leaveAvailedChartData = chartData;
            }
        })
    }

    getApprovedStatusPercentage() {
        this.leaveService.getLeaveAvailedPercentage(this.currentUser._id, this.leaveAvailedChartDataFilter.date[0], this.leaveAvailedChartDataFilter.date[1]).subscribe(res => {
            if (res.ok) {
                var data = res.json() || [];
                let chartData = [];
                data.sort((a, b) => a.leaveTypeId > b.leaveTypeId);
                data.forEach((leave, i) => {
                    chartData.push({
                        "leaveType": leave.leaveType,
                        "leaveCount": parseFloat(leave.percentage).toFixed(2)
                    })
                });
                this.leaveAvailedChartData = chartData;
            }
        })
    }

    getEmployeeOnLeaves() {
        this.leaveService.getEmployeeOnLeaves(this.currentUser._id, this.employeeOnLeavesFilter.date[0], this.employeeOnLeavesFilter.date[1]).subscribe(res => {
            if (res.ok) {
                this.employeeOnLeaves = res.json().data || [];
            }
        })
    }

    getHrLeaveTransactionsExcel() {
        let body: any = {
            fromDate: moment(this.leaveTransactionsFilter.fromDate).format('L'),
            toDate: moment(this.leaveTransactionsFilter.toDate).format('L')
        }

        if (this.leaveTransactionsFilter.leaveType) {
            body.leaveType = this.leaveTransactionsFilter.leaveType
        };
        if (this.leaveTransactionsFilter.division) {
            body.division = this.leaveTransactionsFilter.division
        };
        if (this.leaveTransactionsFilter.employee) {
            body.empId = this.leaveTransactionsFilter.employee
        };
        if (this.leaveTransactionsFilter.status) {
            body.status = this.leaveTransactionsFilter.status
        };
        if (this.leaveTransactionsFilter.department) {
            body.department = this.leaveTransactionsFilter.department
        };
        if (this.leaveTransactionsFilter.userName) {
            body.userName = this.leaveTransactionsFilter.userName
        };
        this.leaveService.getHrLeaveTransactionsExcel(body).subscribe(res => {
            debugger;
            if (res.ok) {
                let data = res.json().data || [];
                if (data && data.length > 0) {
                    new Angular5Csv(data, 'Leave Transaction Report');
                }
            }
        })
    }


    // leaveDetails: any = {};
    // showLeaveDetail(leaveId, templateRef) {
    //     debugger;
    //     this.leaveDetails = {};
    //     this.modalRef = this.modalService.show(templateRef, Object.assign({}, { class: 'gray modal-lg' }));

    //     this.leaveService.getLeaveDetailsById(leaveId).subscribe(res => {
    //         if (res.ok) {
    //             let body = res.json();
    //             if (body.data[0]) {
    //                 this.leaveDetails.leave = body.data[0];
    //             }
    //         }
    //     });
    // }

}
