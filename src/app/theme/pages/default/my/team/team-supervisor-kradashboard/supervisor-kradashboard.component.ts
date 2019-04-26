import { Component, Input, OnInit, ViewEncapsulation, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { LeaveService, LeaveStatus } from '../../leaves/leave.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from "../../../../../../../environments/environment";
import { CommonService } from "../../../../../../base/_services/common.service";
import { MyTeamService } from '../my-team.service';
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';


declare var mApp;

@Component({
    selector: "app-my-leaves-dashboard-supervisor",
    templateUrl: "./supervisor-kradashboard.component.html",
    encapsulation: ViewEncapsulation.None,
    providers : [LeaveService]
})
export class SupervisorKraDashboardComponent implements OnInit {
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
    fiscalYearId: string;
    isSelectedEmployeeOnProbation = false;

    employeeSearch: any;
    kraSearch: any;
    kraSearchView: any;
    employeeData: any = [];
    _currentEmpId: number;
    kraData: any = [];
    kraDataView: any = [];
    //imageBase: any;
    kraReverse: boolean = true;
    employeeReverse: boolean = true;

    overviewChartData: any = [];
    overviewChartDataFilter: any = {
        date: this.leaveService.getCurrentMonthDates()
    };

    teamLeavesFilter: any = {
        date: this.leaveService.getCurrentMonthDates(),
        page: 1
    };

    leaveApprovalFilter: any = {
        date: this.leaveService.getCurrentMonthDates(),
        employeeId: null,
        leaveTypeId: null,
        page: 1
    };

    leaveTransactionsFilter: any = {
        date: this.leaveService.getCurrentMonthDates(),
        employeeId: null,
        leaveTypeId: null,
        status: null,
        page: 1
    };

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
        private modalService: BsModalService,
        private _myteamService: MyTeamService,
        private router: Router
    ) {
        this.imageBase = environment.content_api_base.imgBase;
    }

    ngOnInit() {
        this.imageBase = environment.content_api_base.imgBase;
        this.authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this.authService.currentUserData._id;
                this.loadAllEmployee();
            });
        //this.imageBase = environment.content_api_base.apiBase;
        this.route.params.subscribe(p => {
            this.dashboardTab = p.type;
            if (p.leave_id !== undefined) {
                this.showModal = true;
                this.modalLeaveId = p.leave_id;
            }
        });
        this.authService.validateToken().subscribe(res => {
            this.currentUser = this.authService.currentUserData;
        });
    }



    loadAllEmployee() {
        this.utilityService.showLoader("#employeeApproval");
        this.utilityService.showLoader("#kraApproval");
        this.utilityService.showLoader("#kraApprovalView");
        this._myteamService.getAllEmployee()
            .subscribe(
                res => {
                    let data = res.json().data || [];
                    data = data.filter(obj => obj.supervisor_id == this._currentEmpId);
                    if (data.length > 0) {
                        let profileData = data.filter(obj => obj.profileProcessDetails.hrStatus == "Submitted" && obj.profileProcessDetails.supervisorStatus != "Approved");
                        this.employeeData = profileData || [];
                        this.utilityService.hideLoader("#employeeApproval");
                        this._myteamService.getKraForApproval(this._currentEmpId).subscribe(
                            resApproval => {
                                this.loadKraData(resApproval.json().data);
                            },
                            error => {

                            }
                        )

                    }
                    else {
                        this.employeeData = [];
                        this.utilityService.hideLoader("#employeeApproval");
                        this.utilityService.hideLoader("#kraApproval");
                        this.utilityService.hideLoader("#kraApprovalView");

                    }
                },
                error => {
                    this.utilityService.hideLoader("#employeeApproval");
                    this.utilityService.hideLoader("#kraApproval");
                    this.utilityService.hideLoader("#kraApprovalView");

                });
    }


    loadKraData(data: any) {
        let __this = this;
        //data = data.filter(obj => obj.supervisor_id == this._currentEmpId || obj.secondarySupervisor_id == this._currentEmpId);
        data.forEach(function (element) {
            if (element) {
                if (element.status == "Submitted") {
                    element.fullName = element.emp_name;
                    __this.kraData.push(element);
                }
                else if (element.status == "Approved") {
                    element.fullName = element.emp_name;
                    // for (var i = 0; i < 3; i++) {

                        __this.kraDataView.push(element);
                    // }
                }
            }
        });
        this.utilityService.hideLoader("#kraApproval");
        this.utilityService.hideLoader("#kraApprovalView");

    }

    gotoKraView(kra) {
        this.router.navigateByUrl("/my/team/workflows/kra-view/" + kra._id + "/" + kra.emp_id);
    }


}
