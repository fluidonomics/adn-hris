import { Component, Input, OnInit, ViewEncapsulation, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import { UserData } from '../../../../../../../base/_interface/auth.model';
import { LeaveService, LeaveStatus } from '../../leave.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from "../../../../../../../../environments/environment";
import { CommonService } from "../../../../../../../base/_services/common.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { forkJoin } from 'rxjs/observable/forkJoin';
import * as FileSaver from 'file-saver';


declare var mApp;

@Component({
    selector: "app-my-leaves-dashboard-supervisor",
    templateUrl: "./dashboard-supervisor.component.html",
    encapsulation: ViewEncapsulation.None
})
export class DashboardSupervisorComponent implements OnInit {
    @ViewChild('leaveDetailModal') leaveDetailModal: TemplateRef<any>;
    showModal: boolean = false;
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
    fiscalYearId: any;
    isSelectedEmployeeOnProbation = false;

    overviewChartData: any = [];
    overviewChartDataFilter: any = {};
    teamLeavesFilter: any = {};
    leaveApprovalFilter: any = {};
    leaveTransactionsFilter: any = {};

    leavesForApproval: any = [];
    leavesTransactions: any = [];
    supervisorTeamEmployeeList: any = [];
    modalRef: BsModalRef;
    modalLeaveId: any;

    p1: number = 1;

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
            if (p.leave_id !== undefined) {
                this.showModal = true;
                this.modalLeaveId = p.leave_id;
            }
        });
        this.authService.validateToken().subscribe(res => {
            this.currentUser = this.authService.currentUserData;
            this.fiscalYearId = this.commonService.getFiscalYearIdLocal();
            this.getFinancialYearDetails();
            if (this.showModal) {
                this.showLeaveDetail(this.modalLeaveId, this.leaveDetailModal, true);
            }
        });
    }
    getFinancialYearDetails() {
        this.commonService.getFinancialYear().subscribe(
            res => {
                if (res.ok) {
                    this.financialYearList = res.json() || [];
                    this.currentFinancialYear = this.financialYearList.filter(f => f._id == this.fiscalYearId)[0];
                    this.setFilters();
                    this.loadDashboard();
                    this.loadFilterData();
                }
            },
            error => {
                console.log(error);
            }
        );
    }

    loadDashboard() {
        this.getOverviewChartData();
        this.getTeamLeaves();
        this.getTeamLeavesForApproval();
        this.getTeamLeavesTransactions();
    }

    setFilters() {
        this.overviewChartDataFilter = {
            date: this.leaveService.getCurrentMonthDates(this.currentFinancialYear)
        };

        this.teamLeavesFilter = {
            date: this.leaveService.getCurrentMonthDates(this.currentFinancialYear),
            page: 1
        };

        this.leaveApprovalFilter = {
            date: this.leaveService.getCurrentMonthDates(this.currentFinancialYear),
            employeeId: null,
            leaveTypeId: null,
            page: 1
        };

        this.leaveTransactionsFilter = {
            date: this.leaveService.getCurrentMonthDates(this.currentFinancialYear),
            employeeId: null,
            leaveTypeId: null,
            status: null,
            page: 1
        };
    }

    loadFilterData() {
        this.getEmployeeList();
        this.getLeaveTypes();
        this.getStatusList();
    }

    getEmployeeList() {
        this.leaveService.getSupervisorTeamMember(this.currentUser._id).subscribe(res => {
            if (res.ok) {
                let finalList = res.json().data || [];
                let tempList = [];
                //code to show only distinct employees on team leaves filter
                finalList.forEach(element => {
                    if (tempList.length > 0) {
                        let flag = false;
                        tempList.forEach((f) => {
                            if (f.employeeDetails.fullName == element.employeeDetails.fullName) {
                                flag = true;
                                return;
                            }
                        });
                        if (!flag) {
                            tempList.push(element);
                        }
                    } else {
                        tempList.push(element);
                    }
                });
                this.supervisorTeamEmployeeList = tempList;
            }
        })
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

    getOverviewChartData() {
        this.leaveService.getTeamLeavesByMonth(this.currentUser._id, this.overviewChartDataFilter.date[0], this.overviewChartDataFilter.date[1], LeaveStatus.Approved).subscribe(res => {
            if (res.ok) {
                var data = res.json().data || [];
                let chartData = [];
                data.sort((a, b) => a._id > b._id);
                data.forEach((leave, i) => {
                    chartData.push({
                        "leaveType": leave.leaveTypeName,
                        "leaveCount": leave.totalAppliedLeaves
                    });
                });
                this.overviewChartData = chartData;
            }
        });
    }


    getTeamLeaves() {
        this.leaveService.getTeamLeaves(this.currentUser._id, this.teamLeavesFilter.date[0], this.teamLeavesFilter.date[1], LeaveStatus.Approved).subscribe(res => {
            if (res.ok) {
                let body = res.json();
                this.teamLeaves = body.data || [];
            }
        });
    }

    getTeamLeavesForApproval() {
        this.leavesForApproval = [];
        let appliedLeavesSubs = this.leaveService.getLeaveDetailsByFilter(this.currentUser._id, this.leaveApprovalFilter.date[0], this.leaveApprovalFilter.date[1],
            this.leaveApprovalFilter.employeeId, this.leaveApprovalFilter.leaveTypeId, LeaveStatus.Applied);
        let withdrawnLeavesSubs = this.leaveService.getLeaveDetailsByFilter(this.currentUser._id, this.leaveApprovalFilter.date[0], this.leaveApprovalFilter.date[1],
            this.leaveApprovalFilter.employeeId, this.leaveApprovalFilter.leaveTypeId, LeaveStatus.PendingWithdrawal)
        let cancelLeavesSubs = this.leaveService.getLeaveDetailsByFilter(this.currentUser._id, this.leaveApprovalFilter.date[0], this.leaveApprovalFilter.date[1],
            this.leaveApprovalFilter.employeeId, this.leaveApprovalFilter.leaveTypeId, LeaveStatus.PendingCancellation)
        forkJoin(appliedLeavesSubs, withdrawnLeavesSubs, cancelLeavesSubs)
            .subscribe(results => {
                if (results[0].ok) {
                    let leaves = results[0].json().data || [];
                    if (leaves.length > 0) {
                        this.leavesForApproval = [... this.leavesForApproval, ...leaves];
                    }
                }
                if (results[1].ok) {
                    let leaves = results[1].json().data || [];
                    if (leaves.length > 0) {
                        this.leavesForApproval = [... this.leavesForApproval, ...leaves];
                    }
                }
                if (results[2].ok) {
                    let leaves = results[2].json().data || [];
                    if (leaves.length > 0) {
                        this.leavesForApproval = [... this.leavesForApproval, ...leaves];
                    }
                }
            });
    }

    getTeamLeavesTransactions() {
        this.leaveService.getLeaveDetailsByFilter(this.currentUser._id, this.leaveTransactionsFilter.date[0], this.leaveTransactionsFilter.date[1],
            this.leaveTransactionsFilter.employeeId, this.leaveTransactionsFilter.leaveTypeId, this.leaveTransactionsFilter.status).subscribe(res => {
                if (res.ok) {
                    this.leavesTransactions = res.json().data || [];
                }
            })
    }

    leaveDetailsForm: any = {};
    approveRejectLeave(e, leaveId, leaveStatus, operationStatus, reason) {
        if (e) {
            e.stopPropagation();
        }

        if (operationStatus === "Reject") {
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
            "id": leaveId,
            "status": leaveStatus,
            "updatedBy": this.currentUser._id,
            "link": window.location.origin + '/my/leaves/dashboard/employee'
        };

        if (operationStatus == 'Approved') {
            if (leaveStatus == LeaveStatus.Applied) {
                body.approved = true;
                body.supervisorReason = reason;
            }
            else if (leaveStatus == LeaveStatus.PendingWithdrawal) {
                body.withdrawn = true;
                body.supervisorReason2 = reason;
            }
            else if (leaveStatus == LeaveStatus.PendingCancellation) {
                body.cancelled = true;
                body.supervisorReason2 = reason;
            }
        } else if (operationStatus == 'Reject') {
            if (leaveStatus == LeaveStatus.Applied) {
                body.rejected = true;
                body.supervisorReason = reason;
            }
            else if (leaveStatus == LeaveStatus.PendingWithdrawal) {
                body.withdrawn = false;
                body.supervisorReason2 = reason;
            }
            else if (leaveStatus == LeaveStatus.PendingCancellation) {
                body.cancelled = false;
                body.supervisorReason2 = reason;
            }
        }

        // let text = 'Leave during probabtion are not encouraged until unless its an emergency case';
        let text = '';
        if (this.isSelectedEmployeeOnProbation) {
            text = 'Leave during probabtion are not encouraged until unless its an emergency case';
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
                mApp.block('.recentTransactionPortlet', {
                    overlayColor: '#000000',
                    type: 'loader',
                    state: 'success',
                    // message: 'Please wait...'
                });
                this.leaveService.cancelApproveLeave(body).subscribe(res => {
                    if (res.ok) {
                        if (this.modalRef) {
                            this.modalRef.hide();
                        }
                        let text = '';
                        if (leaveStatus == LeaveStatus.PendingCancellation || leaveStatus == LeaveStatus.PendingWithdrawal) {
                            text = operationStatus === "Approved" ? 'Leave Withdrawn Successfully' : 'Leave Rejected Successfully';
                        } else {
                            text = operationStatus === "Approved" ? 'Leave Approved Successfully' : 'Leave Rejected Successfully';
                        }
                        swal(text, "", "success");
                        this.loadDashboard();
                    }
                }, error => {
                    console.log(error);
                }, () => {
                    mApp.unblock('.recentTransactionPortlet');
                })
            }
        });

    }

    leaveDetails: any = {};
    btnApproveText: string = 'Approve Leave';
    btnRejectText: string = 'Reject Leave';
    showLeaveModalActionTools: boolean = true;
    showLeaveDetail(leaveId, templateRef, showActionTools) {
        debugger;
        this.showLeaveModalActionTools = showActionTools;
        this.leaveDetails = {};

        this.leaveService.getLeaveDetailsById(leaveId).subscribe(res => {
            if (res.ok) {
                let body = res.json();
                if (body.data[0]) {
                    if (this.currentUser._id !== body.data[0].applyTo) {
                        return;
                    }

                    this.leaveDetails.leave = body.data[0];
                    if (this.leaveDetails.leave.status == LeaveStatus.PendingCancellation || this.leaveDetails.leave.status == LeaveStatus.PendingWithdrawal) {
                        this.btnApproveText = 'Approve';
                        this.btnRejectText = 'Reject';
                    } else {
                        this.btnApproveText = 'Approve Leave';
                        this.btnRejectText = 'Reject Leave';
                    }
                    if (this.leaveDetails.leave.emp_id) {
                        this.leaveService.getEmployeeLeaveBalance(this.leaveDetails.leave.emp_id, this.fiscalYearId).subscribe(res => {
                            if (res.ok) {
                                let balances = res.json() || [];
                                if (balances.length > 0) {
                                    this.getEmployeeProbationDetails(this.leaveDetails.leave.emp_id);
                                    let balance = balances.filter(b => { return b.leaveTypeId == this.leaveDetails.leave.leave_type })[0];
                                    this.leaveDetails.leave.balance = balance.leaveBalance;
                                }
                            }
                        })
                    }
                    if (!showActionTools) {
                        this.leaveDetails.remarks = this.leaveDetails.leave.supervisorReason;
                    }
                    this.modalRef = this.modalService.show(templateRef, Object.assign({}, { class: 'gray modal-lg' }));
                }
            }
        });
    }

    getEmployeeProbationDetails(emp_id) {
        this.leaveService.getEmployeeProbationDetails(emp_id).subscribe(res => {
            if (res.ok) {
                let data = res.json();
                if (data) {
                    this.isSelectedEmployeeOnProbation = data.result || false;
                }
            }
        });
    }
    viewAttachement(leave) {
        window.open(environment.content_api_base.imgBase + leave.attachment, '_blank');
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

    onfiscalYearChange(e) {
        // this.currentFinancialYear = this.financialYearList.filter(f => f._id == this.fiscalYearId)[0];
        this.setFilters();
        this.loadDashboard();
    }

    refresh() {
        this.isSpin = true;
        this.loadDashboard();
    }
}
