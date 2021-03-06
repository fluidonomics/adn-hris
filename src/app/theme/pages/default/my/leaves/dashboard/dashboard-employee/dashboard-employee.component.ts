import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import { UserData } from '../../../../../../../base/_interface/auth.model';
import { LeaveService, LeaveStatus } from '../../leave.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from "../../../../../../../../environments/environment";
import { CommonService } from "../../../../../../../base/_services/common.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import swal from 'sweetalert2';

declare var mApp;

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

    holidayFilter: any = {
        date: this.leaveService.getCurrentMonthDates(),
        page: 1
    };
    transactionFilter: any = {
        date: this.leaveService.getCurrentMonthDates(),
        status: 'All',
        page: 1
    };
    overviewChartFilter: any = {
        date: this.leaveService.getCurrentMonthDates()
    };
    overviewChartData: any = [];
    leaveStatuses: any = [];
    modalRef: BsModalRef;

    constructor(
        private leaveService: LeaveService,
        public authService: AuthService,
        private utilityService: UtilityService,
        private route: ActivatedRoute,
        private commonService: CommonService,
        private router: Router,
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
        this.getLeaveStatuses();
        this.getLeaveBalance();
        this.getHolidays();
        this.getTransactions();
    }

    getLeaveBalance() {
        this.leaveService.getEmployeeLeaveBalance(this.currentUser._id, this.fiscalYearId).subscribe(res => {
            if (res.ok) {
                this.leaveBalance = res.json() || [];
                this.leaveBalance.sort((a, b) => a.leaveTypeId > b.leaveTypeId);
                this.getOverviewChartData();
            }
        })
    }

    getHolidays() {
        if (this.holidayFilter) {
            this.leaveService.getLeaveHolidays(this.holidayFilter.date[0], this.holidayFilter.date[1]).subscribe(res => {
                if (res.ok) {
                    this.upcomingHolidays = res.json() || [];
                }
            })
        }
    }

    getTransactions() {
        if (this.transactionFilter.date && this.transactionFilter.status) {
            this.leaveService.getLeaveTransactionDetails(this.currentUser._id, this.transactionFilter.date[0], this.transactionFilter.date[1], this.transactionFilter.status).subscribe(res => {
                if (res.ok) {
                    this.recentTransactions = res.json() || [];
                    this.recentTransactions = this.recentTransactions.sort((a, b) => b._id - a._id);
                }
            })
        }
    }

    getOverviewChartData() {
        if (this.overviewChartFilter) {
            this.leaveService.getEmployeeLeavesByMonth(this.currentUser._id, null, null, this.overviewChartFilter.date[0], this.overviewChartFilter.date[1]).subscribe(res => {
                if (res.ok) {
                    var data = res.json() || [];
                    data.sort((a, b) => a.leaveTypeId > b.leaveTypeId);
                    let chartData = [];
                    data.forEach((leave, i) => {
                        let bal = this.leaveBalance.find(bal => bal.leaveTypeId == leave.leaveTypeId);
                        if (bal.allotedLeave > 0) {
                            chartData.push({
                                "leaveType": leave.leaveType,
                                "leaveCount": leave.appliedLeave
                            })
                        }
                    });
                    this.overviewChartData = chartData;
                }
            })
        }
    }

    getLeaveStatuses() {
        this.leaveStatuses = ['All', ...this.leaveService.getLeaveStatuses()];
    }

    leaveDetails: any = {};
    showLeaveDetail(leaveId, templateRef, event) {
        if (event) {
            event.stopPropagation();
        }
        this.leaveDetails = {};
        this.modalRef = this.modalService.show(templateRef, Object.assign({}, { class: 'gray modal-lg' }));

        this.leaveService.getLeaveDetailsById(leaveId).subscribe(res => {
            if (res.ok) {
                let body = res.json();
                if (body.data[0]) {
                    this.leaveDetails.leave = body.data[0];
                    if (this.leaveDetails.leave.emp_id) {
                        this.leaveService.getEmployeeLeaveBalance(this.leaveDetails.leave.emp_id, 1).subscribe(res => {
                            if (res.ok) {
                                let balances = res.json() || [];
                                if (balances.length > 0) {
                                    let balance = balances.filter(b => { return b.leaveTypeId == this.leaveDetails.leave.leave_type })[0];
                                    this.leaveDetails.leave.balance = balance.leaveBalance;
                                }
                            }
                        })
                    }
                }
            }
        });
    }

    leaveDetailsForm: any = {};
    cancelWithdrawLeave() {
        if (this.leaveDetails.leave.status != LeaveStatus.Applied) {
            if (!this.leaveDetails.remarks) {
                this.leaveDetailsForm.remarks = {
                    error: true
                }
                return;
            } else {
                this.leaveDetailsForm.remarks = {
                    error: false
                }
            }
        }

        let body: any = {
            "_id": this.leaveDetails.leave._id,
            "updatedBy": this.currentUser._id,
            "reason2": this.leaveDetails.remarks
        };

        swal({
            title: 'Are you sure?',
            text: '',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                mApp.block('.leaveDetailsPortlet', {
                    overlayColor: '#000000',
                    type: 'loader',
                    state: 'success',
                    // message: 'Please wait...'
                });

                this.leaveService.cancelWithdrawLeave(body).subscribe(res => {
                    this.modalRef.hide();
                    let text = 'Leave Withdrawal Sent To Supervisor For Approval';
                    if (this.leaveDetails.leave.status === LeaveStatus.Applied) {
                        text = 'Leave Withdrawn Successfully';
                    }
                    swal(text, "", "success");
                    this.getOverviewChartData();
                    this.getLeaveBalance();
                    this.getTransactions();
                }, error => {
                    mApp.unblock('.leaveDetailsPortlet');
                    console.log(error);
                }, () => {
                    mApp.unblock('.leaveDetailsPortlet');
                });
            }
        });
    }


    refresh() {
        this.isSpin = true;
        this.loadDashboard();
    }
}
