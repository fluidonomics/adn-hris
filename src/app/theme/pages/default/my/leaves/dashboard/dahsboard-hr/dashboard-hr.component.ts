import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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


declare var mApp;

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

    overviewChartData: any = [];
    overviewChartDataFilter: any = {
        date: this.leaveService.getCurrentMonthDates()
    };

    teamLeavesFilter: any = {
        date: this.leaveService.getCurrentMonthDates()
    };

    leaveApprovalFilter: any = {
        date: this.leaveService.getCurrentMonthDates(),
        employeeId: null,
        leaveTypeId: null
    };

    leaveTransactionsFilter: any = {
        date: this.leaveService.getCurrentMonthDates(),
        employeeId: null,
        leaveTypeId: null,
        status: null
    };

    leavesForApproval: any = [];
    leavesTransactions: any = [];
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
        // this.getOverviewChartData();
        // this.getTeamLeaves();
        // this.getTeamLeavesForApproval();
        // this.getTeamLeavesTransactions();
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
                    })
                });
                this.overviewChartData = chartData;
            }
        })
    }

    getTeamLeaves() {
        this.leaveService.getTeamLeaves(this.currentUser._id, this.teamLeavesFilter.date[0], this.teamLeavesFilter.date[1], LeaveStatus.Approved).subscribe(res => {
            if (res.ok) {
                let body = res.json();
                this.teamLeaves = body.data || [];
            }
        })
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

    approveRejectLeave(e, leaveId, leaveStatus, operationStatus, reason) {
        if (e) {
            e.stopPropagation();
        }
        let body: any = {
            "id": leaveId,
            "status": leaveStatus,
            "reason": reason,
            "updatedBy": this.currentUser._id
        };

        if (operationStatus == 'Approved') {
            if (leaveStatus == LeaveStatus.Applied) {
                body.approved = true;
            }
            else if (leaveStatus == LeaveStatus.PendingWithdrawal) {
                body.withdrawn = true;
            }
            else if (leaveStatus == LeaveStatus.PendingCancellation) {
                body.cancelled = true;
            }
        } else if (operationStatus == 'Reject') {
            if (leaveStatus == LeaveStatus.Applied) {
                body.rejected = true;
            }
            else if (leaveStatus == LeaveStatus.PendingWithdrawal) {
                body.withdrawn = false;
            }
            else if (leaveStatus == LeaveStatus.PendingCancellation) {
                body.cancelled = false;
            }
        }

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
                        let text = operationStatus === "Approved" ? 'Leave Approved Successfully' : 'Leave Rejected Successfully';
                        swal(text, "", "success");
                        this.getTeamLeavesForApproval();
                        this.getTeamLeavesTransactions();
                        if (this.modalRef) {
                            this.modalRef.hide();
                        }
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
    showLeaveDetail(leaveId, templateRef) {
        debugger;
        this.leaveDetails = {};
        this.modalRef = this.modalService.show(templateRef, Object.assign({}, { class: 'gray modal-lg' }));

        this.leaveService.getLeaveDetailsById(leaveId).subscribe(res => {
            if (res.ok) {
                let body = res.json();
                if (body.data[0]) {
                    this.leaveDetails.leave = body.data[0];
                }
            }
        });
    }

    refresh() {
        this.isSpin = true;
        this.loadDashboard();
    }
}
