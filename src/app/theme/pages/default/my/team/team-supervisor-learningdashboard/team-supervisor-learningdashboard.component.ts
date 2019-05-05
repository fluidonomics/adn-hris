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
import { LearningService } from '../../../services/learning.service';


declare var mApp;

@Component({
    selector: "app-my-leaves-dashboard-supervisor",
    templateUrl: "./team-supervisor-learningdashboard.component.html",
    encapsulation: ViewEncapsulation.None,
    providers : [LearningService,LeaveService]
})
export class SupervisorLearningDashboardComponent implements OnInit {
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
    learningSearch: any;
    learningSearchView: any;
    employeeData: any = [];
    _currentEmpId: number;
    learningData: any = [];
    learningDataView: any = [];
    //imageBase: any;
    learningReverse: boolean = true;
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
        private _learningService: LearningService,
        private leaveService : LeaveService,
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
                this.loadLearningBySupervisor(this._currentEmpId,"Submitted");
                this.loadLearningViewBySupervisor(this._currentEmpId,"Approved");
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



    loadLearningBySupervisor(sup_Id: number,status:string) {

        this._learningService.getLearningBySupervisor(sup_Id,status).subscribe(res => {
            this.learningData = res.json().result.message || [];
        }, error => {
            console.log(error);
        });
    } 

    loadLearningViewBySupervisor(sup_Id: number,status:string) {

        this._learningService.getLearningBySupervisor(sup_Id,status).subscribe(res => {
            this.learningDataView = res.json().result.message || [];
        }, error => {
            console.log(error);
        });
    }

    gotoLearningData(Learning) {
        console.log("learn : ", Learning);
        this.router.navigateByUrl("/my/team/workflows/learning-detailed-view/" + "approval/" + Learning.learning_master_details._id + "/" + Learning.emp_details._id);
    }


}
