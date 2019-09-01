import { FormBuilder, NgForm } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { CommonService } from "../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { forEach } from "@angular/router/src/utils/collection";
import { NgSelectComponent } from '@ng-select/ng-select';
import * as _ from 'lodash';
import { UtilityService } from "../../../../../../base/_services/utilityService.service";
import { PipService } from "../../../services/pip.service"
import { PARAMETERS } from "@angular/core/src/util/decorators";
@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.my-pip",
    templateUrl: "./pip.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [PipService]
})
export class MyPipComponent {

    @ViewChild('myPipDetailModal') myPipDetailModal: TemplateRef<any>;
    @ViewChild('myPipCompletionModal') myPipCompletionModal: TemplateRef<any>;

    param_id: number;
    _currentEmpId: number;
    isLearningAvaliable: boolean = false;
    agenda_arraynum: number;
    PipAgendaData: any = [];
    pipData: any = {};
    pipInfoData: any = [];
    pipDetails: any = [];
    currentIndex: number;
    saveEnable: boolean = false;
    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    itemPerPage: number = 10;
    timelinesData = [
        {
            '_id': 3,
            'timeline': "3 Months"
        },
        {
            '_id': 6,
            'timeline': "6 Months"
        }
    ];
    progressStatusData = [
        'Open',
        'Completed'
    ];
    finalRecommendation = [
        {
            '_id': 1,
            'final_recommendation': "Continue in current role"
        },
        {
            '_id': 2,
            'final_recommendation': "Internal Movement"
        },
        {
            '_id': 3,
            'final_recommendation': "Remedial action"
        }
    ];
    suparr = [];
    showSub: boolean = false;
    supervisorData: any = [];
    isDisabled: boolean = false;
    isCompleted: boolean = false;
    isVisible: boolean = true;
    showStats: boolean = false;
    isApproved: boolean = false;
    isInitiated: boolean = false;
    employee: any = {};
    dateDifference: number;
    isCommentOfMonth1Enable: boolean = false;
    isCommentOfMonth2Enable: boolean = false;
    isCommentOfMonth3Enable: boolean = false;
    isCommentOfMonth4Enable: boolean = false;
    isCommentOfMonth5Enable: boolean = false;
    isCommentOfMonth6Enable: boolean = false;
    saveEnabled: boolean = false;
    modalRef: BsModalRef;
    currentEmployee: any = {};
    progressStatuses = [];
    colorStatuses = [];
    showStat = false;
    fiscalYearId: string;
    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _pipService: PipService,
        private modalService: BsModalService,
        private utilityService: UtilityService) {
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);
        this.progressStatuses = this._pipService.progressStatuses;
        this.colorStatuses = this._pipService.colorStatuses;

    }
    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.fiscalYearId = this._commonService.getFiscalYearIdLocal();
                this._route.queryParams.subscribe(params => {
                    if (params['id']) {
                        this.param_id = params['id'];
                        this.loadData();
                    }
                    else {
                        this.param_id = null;
                        this.loadPipAgendaInfo();
                    }
                });
            });
    }
    savePipAgendas(form, id: number) {
        if (form.valid) {
            this.pipInfoData[this.pipData.no - 1] = JSON.parse(JSON.stringify(this.pipData));
            this.savePipDetails(this.pipData.no - 1);
        }
    }
    savePipDetails(index: number) {
        let request = {
            _id: this.pipInfoData[index]._id,
            master_id: this.param_id,
            supervisor_id: this.pipInfoData[index].supervisor_id,
            status: this.pipInfoData[index].status,
            measureOfSuccess: this.pipInfoData[index].measureOfSuccess,
            isDeleted: false,
            createdBy: this._currentEmpId,
            updatedBy: this.pipInfoData[index].updatedBy,
            action_link: window.location.origin + '/my/team/workflows/supervisor?fiscalYearId=' + this.fiscalYearId,
            areaofImprovement: this.pipInfoData[index].areaofImprovement,
            empId: this._authService.currentUserData._id,
            actionPlan: this.pipInfoData[index].actionPlan,
            timelines: this.pipInfoData[index].timelines,
            fiscalYearId: this.fiscalYearId,
            employeeInitialComment: this.pipInfoData[index].employeeInitialComment,
            empComment_month1: this.pipInfoData[index].empComment_month1,
            empComment_month2: this.pipInfoData[index].empComment_month2,
            empComment_month3: this.pipInfoData[index].empComment_month3,
            empComment_month4: this.pipInfoData[index].empComment_month4,
            empComment_month5: this.pipInfoData[index].empComment_month5,
            empComment_month6: this.pipInfoData[index].empComment_month6
        }
        let isError: boolean = false;

        if (isError) {
            swal({
                title: 'Oops!',
                text: ' Dropped colour status need status as Dropped only',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
        }
        else {
            this._pipService.savePip(request).subscribe(res => {
                this.utilityService.hideLoader('.m-content');
                if (res.ok) {
                    let data = res.json();
                    this.pipInfoData[index] = data.result.message
                    swal({
                        title: 'Success',
                        text: "PIP Process has been saved",
                        type: 'success',
                        showCancelButton: false,
                        confirmButtonColor: '#66BB6A',
                        confirmButtonText: 'OK'
                    });
                    this.modalRef.hide();
                }
                this.loadData();
            }, error => {
                this.utilityService.hideLoader('.m-content');
                this.modalRef.hide();
            });
        }

    }
    loadData() {
        this.loadPipAgendaInfo();
        this.loadSupervisorData();
        this.loadPipDetailsInfo();
        this.loadEmployeeDetails();
    }
    loadPipAgendaInfo() {
        this._pipService.getPipInfo(this._currentEmpId, this.fiscalYearId).subscribe(res => {
            let data = res.json();
            this.PipAgendaData = data.result.message;
        }, error => {
            swal("Error", error.title, "error");
        });;
    }
    loadprevsupervisor() {
        for (let pip of this.pipInfoData) {
            if (pip.supervisor_id != "") {
                var found = this.supervisorData.some(function (el) {
                    return el._id === pip.supervisor_id;
                });
                if (!found) {
                    this.supervisorData.push({ _id: pip.supervisor_id, fullName: pip.supervisor_name, canSelect: false });
                }
            }
        }
    }
    showPIPApprovalMessage: boolean;
    showPIPApprovalMessageButton: boolean;
    loadPipDetailsInfo() {
        this._pipService.getPipDetails(this.param_id).subscribe(res => {
            let data = res.json();
            this.pipInfoData = data.result.message;
            if (this.pipInfoData.length > 0) {
                this.showSub = this.pipInfoData.filter(pip => pip.master_status != "Submitted" && pip.master_status != "Approved" && pip.master_status != "Completed").length > 0;

                if (this.pipInfoData[0].master_timelines == 3 && this.pipInfoData.filter(f => f.empComment_month3 != null).length == this.pipInfoData.length) {
                    this.showPIPApprovalMessage = this.pipInfoData[0].master_status == "Approved" && this.pipInfoData[0].emp_final_com == null;
                    this.showPIPApprovalMessageButton = this.pipInfoData[0].master_status == "Approved" && this.pipInfoData[0].emp_final_com != null;
                }
                else if (this.pipInfoData[0].master_timelines == 4 && this.pipInfoData.filter(f => f.empComment_month4 != null).length == this.pipInfoData.length) {
                    this.showPIPApprovalMessage = this.pipInfoData[0].master_status == "Approved" && this.pipInfoData[0].emp_final_com == null;
                    this.showPIPApprovalMessageButton = this.pipInfoData[0].master_status == "Approved" && this.pipInfoData[0].emp_final_com != null;
                }
                else if (this.pipInfoData[0].master_timelines == 5 && this.pipInfoData.filter(f => f.empComment_month5 != null).length == this.pipInfoData.length) {
                    this.showPIPApprovalMessage = this.pipInfoData[0].master_status == "Approved" && this.pipInfoData[0].emp_final_com == null;
                    this.showPIPApprovalMessageButton = this.pipInfoData[0].master_status == "Approved" && this.pipInfoData[0].emp_final_com != null;
                }
                else if (this.pipInfoData[0].master_timelines == 6 && this.pipInfoData.filter(f => f.empComment_month6 != null).length == this.pipInfoData.length) {
                    this.showPIPApprovalMessage = this.pipInfoData[0].master_status == "Approved" && this.pipInfoData[0].emp_final_com == null;
                    this.showPIPApprovalMessageButton = this.pipInfoData[0].master_status == "Approved" && this.pipInfoData[0].emp_final_com != null;
                }
                else {
                    this.showPIPApprovalMessage = false;
                    this.showPIPApprovalMessageButton = false
                }
                this.loadprevsupervisor();
            }
            else {
                this.showPIPApprovalMessage = false;
                this.pipInfoData = [
                    {

                        _id: null,
                        master_id: this.param_id,
                        supervisor_id: "",
                        status: "Initiated",
                        measureOfSuccess: "",
                        isDeleted: false,
                        createdBy: "",
                        updatedBy: this._currentEmpId,
                        //progressStatus: this.pipInfoData[index].progressStatus,
                        areaofImprovement: "",
                        actionPlan: "",
                        timelines: "",
                        finalReview: "",
                        finalRating: "",
                        empComment_month1: "",
                        empComment_month2: "",
                        empComment_month3: "",
                        empComment_month4: "",
                        empComment_month5: "",
                        empComment_month6: "",
                        supComment_month1: "",
                        supComment_month2: "",
                        supComment_month3: "",
                        supComment_month4: "",
                        supComment_month5: "",
                        supComment_month6: "",
                        employeeInitialComment: "",
                        superviserInitialComment: ""

                    }
                ];
            }

        }, error => {
        });;


    }
    loadSupervisorData() {
        this._commonService.getKraSupervisor(this._currentEmpId).subscribe(data => {

            this.supervisorData = data.json();
        }, error => {
        });
    }
    loadEmployeeDetails() {
        this._commonService.getEmployee(this._currentEmpId).subscribe(res => {
            this.currentEmployee = res.json() || {};
        });
    }
    addPipHtml() {
        //let learnA = this.learningInfoData.filter(learn => learn.status != 'Initiated');
        //if (learnA && learnA.length < 3) {
        let data = {
            _id: null,
            master_id: this.param_id,
            supervisor_id: "",
            status: "Initiated",
            measureOfSuccess: "",
            isDeleted: false,
            createdBy: "",
            updatedBy: this._currentEmpId,
            //progressStatus: this.pipInfoData[index].progressStatus,
            areaofImprovement: "",
            actionPlan: "",
            timelines: "",
            finalReview: "",
            finalRating: "",
            empComment_month1: "",
            empComment_month2: "",
            empComment_month3: "",
            empComment_month4: "",
            empComment_month5: "",
            empComment_month6: "",
            supComment_month1: "",
            supComment_month2: "",
            supComment_month3: "",
            supComment_month4: "",
            supComment_month5: "",
            supComment_month6: "",
            employeeInitialComment: "",
            superviserInitialComment: ""
        };

        this.pipInfoData.push(data);
    }
    submitPipAgenda(isFormDirty) {
        if (this.pipInfoData.length > 0) {
            swal({
                title: 'Are you sure?',
                text: "",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value) {
                    let data = {
                        master_id: this.param_id,
                        empId: this._currentEmpId,
                        supervisor_id: this.currentEmployee.supervisorDetails._id,
                        emp_name: this.currentEmployee.fullName,
                        supervisor_name: this.currentEmployee.supervisorDetails.fullName,
                        action_link: window.location.origin + '/my/team/workflows/supervisor?fiscalYearId=' + this.fiscalYearId
                    }
                    this.utilityService.showLoader('.m-content');
                    this._pipService.submitPip(data).subscribe(res => {
                        this.utilityService.hideLoader('.m-content');
                        if (res.ok) {
                            swal({
                                title: 'Submitted Successfully!',
                                text: "PIP Agendas have been submitted for Supervisor Approval.",
                                type: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#66BB6A',
                                confirmButtonText: 'OK'
                            });
                            this.loadPipDetailsInfo();
                        }
                    }, err => {
                        let error = err.json() || {};
                        if (err.status == 301) {
                            swal("Oops!", error.title, "warning");
                        } else {
                            swal("Error", error.title, "error");
                        }
                        this.loadPipDetailsInfo();
                        this.utilityService.hideLoader('.m-content');
                    });
                }
            });

        } else {
            swal({
                title: 'Error! ',
                text: "No Agendas Added!",
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            });

        }

    }
    saveComments(pipData: any) {

        if (pipData.emp_final_com === null || pipData.emp_final_com === "") {
            swal({
                title: 'Please Fill Employee Comments!',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
        }
        else {

            swal({
                title: 'Are you sure?',
                // text: text,
                type: 'warning',
                showCancelButton: true,
                // confirmButtonColor: confirmButtonColor,
                cancelButtonColor: '#9a9caf',
                // confirmButtonText: confirmButtonText
            }).then((result) => {
                if (result.value) {

                    let request = {
                        masterId: this.PipAgendaData[this.currentIndex]._id,
                        updatedAt: new Date(),
                        updatedBy: this._currentEmpId,
                        hrFinalCom: pipData.hr_final_com,
                        empFinalCom: pipData.emp_final_com,
                        revFinalCom: pipData.rev_final_com,
                        supFinalCom: pipData.sup_final_com,
                        finalRecommendation: pipData.final_recommendation
                    }

                    this.utilityService.showLoader('.mtrDetailsPortlet');
                    this._pipService.updateMaster(request).subscribe(res => {
                        if (res.ok) {
                            this.modalRef.hide();
                            this.showPIPApprovalMessage = false;
                            this.utilityService.hideLoader('.mtrDetailsPortlet');
                            swal({
                                title: 'Submitted Successfully!',
                                text: "",
                                type: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#66BB6A',
                                confirmButtonText: 'OK'
                            });
                            this.loadPipAgendaInfo();

                        }
                    }, err => {
                        let error = err.json() || {};
                        if (err.status == 301) {
                            swal("Oops!", error.title, "warning");
                        } else {
                            swal("Error", error.title, "error");
                        }
                        this.loadPipAgendaInfo();
                        this.modalRef.hide();
                        this.utilityService.hideLoader('.m-content');
                    })
                }
            });
        }

    }
    onStatusChange(event) {

        if (event == "Completed") {
            this.isCompleted = true;
        } else {
            this.isCompleted = false;
        }
    }
    showPipDetails(index: number) {

        this.modalRef = this.modalService.show(this.myPipDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.pipData = JSON.parse(JSON.stringify(this.pipInfoData[index]));
        this.pipData.no = index + 1;

        this.monthlyCommentValidation();
        this.isSaveEnabled();

        for (let x = 0; x < this.PipAgendaData.length; x++) {
            if (this.PipAgendaData[x]._id == this.param_id) {
                this.agenda_arraynum = x;
            }
        }
        if (this.pipData.status == "SendBack" || this.pipData.status == "Initiated") {
            this.isDisabled = false;
        }
        else {
            this.isDisabled = true;
        }
        if (this.pipData.progressStatus == "Completed") {
            this.isCompleted = true;
        }
        else {
            this.isCompleted = false;
        }
        if (this.pipData.status === "Initiated" || this.pipData.status === "SendBack") {
            this.isInitiated = true;
        }
        else {
            this.isInitiated = false;
            this.loadprevsupervisor();
        }
        if (this.pipData.status == "Approved") {
            this.isApproved = true;
        }
        else {
            this.isApproved = false;
        }
    }
    showCompletionDetails(index: number) {

        this.currentIndex = index === undefined ? 0 : index;
        this.modalRef = this.modalService.show(this.myPipCompletionModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.pipData = JSON.parse(JSON.stringify(this.PipAgendaData[this.currentIndex]));
        this.pipData.no = this.currentIndex + 1;

        if (this.pipData.emp_final_com) {

            $("#empcom").attr('disabled', 'disabled');
            $("#submitFormPostPip").remove();
        }
    }
    monthlyCommentValidation() {
        if (this.pipData.dateDifference >= 1 && this.pipData.dateDifference < 2 && !this.pipData.empComment_month1) {
            this.isCommentOfMonth1Enable = true;
        } else if (this.pipData.dateDifference >= 2 && this.pipData.dateDifference < 3 && !this.pipData.empComment_month2) {
            this.isCommentOfMonth2Enable = true;
        } else if (this.pipData.dateDifference >= 3 && this.pipData.dateDifference < 4 && !this.pipData.empComment_month3) {
            this.isCommentOfMonth3Enable = true;
        } else if (this.pipData.dateDifference >= 4 && this.pipData.dateDifference < 5 && !this.pipData.empComment_month4) {
            this.isCommentOfMonth4Enable = true;
        } else if (this.pipData.dateDifference >= 5 && this.pipData.dateDifference < 6 && !this.pipData.empComment_month5) {
            this.isCommentOfMonth5Enable = true;
        } else if (this.pipData.dateDifference >= 6 && this.pipData.dateDifference < 7 && !this.pipData.empComment_month6) {
            this.isCommentOfMonth6Enable = true;
        } else {
            this.isCommentOfMonth1Enable = false;
            this.isCommentOfMonth2Enable = false;
            this.isCommentOfMonth3Enable = false;
            this.isCommentOfMonth4Enable = false;
            this.isCommentOfMonth5Enable = false;
            this.isCommentOfMonth6Enable = false;
        }
    }
    isSaveEnabled() {


        if ((this.isCommentOfMonth1Enable || this.isCommentOfMonth2Enable || this.isCommentOfMonth3Enable ||
            this.isCommentOfMonth4Enable || this.isCommentOfMonth5Enable || this.isCommentOfMonth6Enable) && this.pipData.status != "Completed") {

            // this.saveEnabled = true;
            this.saveEnable = true;
        } else {

            this.saveEnable = false;
        }

    }
}

