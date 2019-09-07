import * as $ from 'jquery';
import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { CommonService } from "../../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { UtilityService } from "../../../../../../../../base/_services/utilityService.service";
import { PipDetailedViewService } from './pip-detailed-view.service';
import { environment } from '../../../../../../../../../environments/environment'

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.learning-detailed-view",
    templateUrl: './pip-detailed-view.component.html',
    styleUrls: ['./pip-detailed-view.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [PipDetailedViewService]
})

export class PipDetailedViewComponent {
    @ViewChild('pipDetailModal') pipDetailModal: TemplateRef<any>;
    @ViewChild('pipCompletionModal') pipCompletionModal: TemplateRef<any>;

    window: any = window;
    supervisorData: any = [];
    PipAgendaData: any = [];
    pipInfoData: any = [];
    pipMasterData: any = [];
    istsix: boolean = false;
    param_emp_id: number;
    param_master_id: number;
    param_id: number;
    param_from: string;
    statusq: any;
    isDisabled: boolean = false;
    isSup: boolean = true;
    isDis: boolean = true;
    user: any;
    masterStatus: string;
    primarySupervisorId: number;
    showPIPApprovalMessage: boolean;
    finalReviewEnable: boolean = false;
    dateDifference: number;
    isCommentOfMonth1Enable: boolean = false;
    isCommentOfMonth2Enable: boolean = false;
    isCommentOfMonth3Enable: boolean = false;
    isCommentOfMonth4Enable: boolean = false;
    isCommentOfMonth5Enable: boolean = false;
    isCommentOfMonth6Enable: boolean = false;
    saveEnabled: boolean = false;
    fiscalYearId: string;
    learningData: any;
    _currentEmpId: number;
    imageBase: any;
    agenda_arraynum: number;

    supervisorPerformanceRating = [
        {
            '_id': 1,
            'supervisorRating': "Met Expectation"
        },
        {
            '_id': 2,
            'supervisorRating': "Not Met Expectation"
        }
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

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _pipService: PipDetailedViewService,
        private modalService: BsModalService,
        private utilityService: UtilityService
    ) {
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);

    }
    ngOnInit() {
        this.showPIPApprovalMessage = false;
        this._currentEmpId = this._authService.currentUserData._id;
        this._authService.validateToken().subscribe(
            res => {
                this.fiscalYearId = this._commonService.getFiscalYearIdLocal();
                this._route.params.subscribe(params => {
                    if (params['id'] && params['emp_id']) {
                        this.param_id = params['id'];
                        this.param_emp_id = parseInt(params['emp_id']);
                        this.param_master_id = parseInt(params['id']);
                        this.param_from = params['from'];
                        this.initData();
                    }
                });
            });
        this.imageBase = environment.content_api_base.imgBase;


    }
    initData() {
        this.loadPipEmployee();
        this.loadSupervisorData();
        this.getEmployee();
        this.loadPipBySupervisor(this._currentEmpId, "Approved");
    }
    loadPipBySupervisor(sup_Id: number, status: string) {

        this._pipService.getPipBySupervisor(sup_Id, status, this.fiscalYearId).subscribe(res => {
            this.pipMasterData = res.json().result.message || [];
            this.pipMasterData = this.pipMasterData.filter(pip => pip._id == this.param_id);
        }, error => {
            swal("Error", error.title, "error");
        });
    }
    loadPipEmployee() {

        this._pipService.getPipDetails(this.param_master_id).subscribe(
            res => {

                this.pipInfoData = res.json().result.message;
                if (this.param_from == "approval") {
                    this.pipInfoData = this.pipInfoData.filter(learn => learn.status == "Submitted");
                    if (this.pipInfoData.length == 0) {
                        this._router.navigateByUrl("/my/team/workflows/supervisor");
                    }

                }
                if (this.pipInfoData.length > 0) {
                    this.masterStatus = this.pipInfoData[0].master_status;
                    this.primarySupervisorId = this.pipInfoData[0].primary_supervisor;
                    if (this.pipInfoData[0].master_status != "Submitted")
                        this.showPIPApprovalMessage = this.pipInfoData[0].sup_final_com == null;
                    else
                        this.showPIPApprovalMessage = false;

                    this.isDis = res.json().status == 'Approved' ? true : false;
                    this.statusq = res.json().status;
                }
                else {
                    this.showPIPApprovalMessage = false;
                }
            },
            error => {


            }
        );
    }
    loadSupervisorData() {
        this._commonService.getKraSupervisor(this.param_emp_id)
            .subscribe(
                data => {
                    this.supervisorData = data.json();
                },
                error => {
                });
    }
    getEmployee() {
        this._commonService.getEmployee(this.param_emp_id).subscribe(res => {
            if (res.ok) {
                this.user = res.json() || {};
            }
        })
    }
    preSaveLearningDetails(pipData: any, Remarks: String) {
        if (!pipData.superviserInitialComment) {
            swal({
                title: 'Please fill remarks!',
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
                    let isApproved: boolean = false;
                    if (Remarks == "Approved") {
                        isApproved = true;
                    }
                    let request = {
                        pipMasterId: this.param_master_id,
                        pipDetailId: pipData._id,
                        empId: this.user._id,
                        supervisorId: this._currentEmpId,
                        supervisor_name: this.user.supervisorDetails.fullName,
                        action_link: window.location.origin + '/my/pip?fiscalYearId=' + this.fiscalYearId,
                        isApproved: isApproved,
                        superviserInitialComment: pipData.superviserInitialComment,
                    }

                    this.utilityService.showLoader('.mtrDetailsPortlet');
                    this._pipService.approvePip(request).subscribe(res => {
                        if (res.ok && isApproved) {
                            this.modalRef.hide();
                            this.utilityService.hideLoader('.mtrDetailsPortlet');
                            swal({
                                title: 'Approved Successfully!',
                                text: "PIP Agenda has been Approved",
                                type: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#66BB6A',
                                confirmButtonText: 'OK'
                            });
                            this.loadPipEmployee();
                        }
                        else {
                            this.modalRef.hide();
                            this.utilityService.hideLoader('.mtrDetailsPortlet');
                            swal({
                                title: 'Sent Back Successfully!',
                                text: "PIP Agenda has been Sent Back",
                                type: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#66BB6A',
                                confirmButtonText: 'OK'
                            });
                            this.loadPipEmployee();
                        }
                        this.utilityService.hideLoader('.m-content');
                    }, err => {
                        let error = err.json() || {};
                        if (err.status == 301) {
                            swal("Oops!", error.title, "warning");
                        } else {
                            swal("Error", error.title, "error");
                        }
                        this.loadPipEmployee();
                        this.modalRef.hide();
                        this.utilityService.hideLoader('.m-content');
                    })
                }
            });
        }

    }
    saveLearningDetails(pipData: any, Remarks: String, form) {

        let request = {
            pipMasterId: this.param_master_id,
            pipDetailId: pipData._id,
            empId: this.user._id,
            supervisorId: this._currentEmpId,
            updatedBy: this._currentEmpId,
            //supervisor_name: this.user.supervisorDetails.fullName,
            //action_link: window.location.origin + '/my/pip',
            //superviserInitialComment: pipData.superviserInitialComment,
            supComment_month1: pipData.supComment_month1,
            supComment_month2: pipData.supComment_month2,
            supComment_month3: pipData.supComment_month3,
            supComment_month4: pipData.supComment_month4,
            supComment_month5: pipData.supComment_month5,
            supComment_month6: pipData.supComment_month6,
            //timelines: pipData.timelines
            supervisorPerformanceRating: pipData.supervisorPerformanceRating,
            superviserFinalReview: pipData.superviserFinalReview


        }



        if (form.valid) {

            this._pipService.savePip(request).subscribe(res => {
                if (res.ok) {
                    this.modalRef.hide();
                    this.utilityService.hideLoader('.mtrDetailsPortlet');
                    swal({
                        title: 'Saved Successfully!',
                        text: "PIP Agenda has been Saved",
                        type: 'success',
                        showCancelButton: false,
                        confirmButtonColor: '#66BB6A',
                        confirmButtonText: 'OK'
                    });
                    this.loadPipEmployee();

                }
            }, err => {
                if (err.status == 300) {
                    let error = err.json() || {};
                    swal("Error", error.title, "error");
                    this.loadPipEmployee();
                    this.modalRef.hide();
                }
                this.utilityService.hideLoader('.m-content');
            })
        }

    }
    saveComments(pipData: any) {
        if (pipData.hr_final_com) {
            swal({
                title: 'Please fill remarks!',
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
                        masterId: pipData.pip_master_details._id,
                        updatedAt: new Date(),
                        updatedBy: this._currentEmpId,
                        hrFinalCom: pipData.pip_master_details.hr_final_com,
                        empFinalCom: pipData.pip_master_details.emp_final_com,
                        revFinalCom: pipData.pip_master_details.rev_final_com,
                        supFinalCom: pipData.pip_master_details.sup_final_com
                    }

                    this.utilityService.showLoader('.mtrDetailsPortlet');
                    this._pipService.updateMaster(request).subscribe(res => {
                        if (res.ok) {
                            this.modalRef.hide();
                            this.utilityService.hideLoader('.mtrDetailsPortlet');
                            swal({
                                title: 'Submitted Successfully!',
                                text: "",
                                type: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#66BB6A',
                                confirmButtonText: 'OK'
                            });
                            //this.loadPipEmployee();

                        }
                    }, err => {
                        if (err.status == 300) {
                            let error = err.json() || {};
                            swal("Error", error.title, "error");
                            //this.loadPipEmployee();
                            this.modalRef.hide();
                        }
                        this.utilityService.hideLoader('.m-content');
                    })
                }
            });
        }

    }
    modalRef: BsModalRef;
    pipData: any = {};
    showPipDetails(index, event) {

        this.modalRef = this.modalService.show(this.pipDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.pipData = this.pipInfoData[index];
        this.pipData.no = index + 1;

        this.monthlyCommentValidation();
        this.isSaveEnabled();
        this.isFinalreviewEnabled();

        for (let x = 0; x < this.PipAgendaData.length; x++) {
            if (this.PipAgendaData[x]._id == this.param_id) {
                this.agenda_arraynum = x;
            }
        }
        // this.learnData.weightage = this.weightageData.find(f => f._id == this.learnData.weightage_id);
        // this.learnData.category = this.kraCategoryData.find(f => f._id == this.learnData.category_id);
        if (this.pipData.status == "Approved" || this.pipData.status == "SendBack" || this.pipData.status == "Completed") {
            this.isDisabled = true;
        }
        else {
            this.isDisabled = false;
        }

        if (this.pipData.supervisor_id == this._currentEmpId) {
            this.isSup = true;

        }
        else {
            this.isSup = false;
        }


        if (this.pipData.master_timelines == 6) {
            this.istsix = true;
        }
        else {
            this.istsix = false;
        }
    }
    showCompletionDetails() {
        this.modalRef = this.modalService.show(this.pipCompletionModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.pipData = this.pipMasterData[0];
        this.pipData.no = 1;

        if (this.pipData.pip_master_details.emp_final_com && this.pipData.pip_master_details.sup_final_com) {

            $("#sup_final_com").attr('disabled', 'disabled');
            $("#submitForm").remove();
        }

        if (!this.pipData.pip_master_details.emp_final_com) {

            $("#sup_final_com").attr('disabled', 'disabled');
            $("#submitForm").remove();
        }

    }
    monthlyCommentValidation() {

        if (this.pipData.dateDifference >= 1 && this.pipData.dateDifference < 2
            && this.pipData.empComment_month1 && !this.pipData.supComment_month1) {

            this.isCommentOfMonth1Enable = true;
        } else if (this.pipData.dateDifference >= 2 && this.pipData.dateDifference < 3
            && this.pipData.empComment_month2 && !this.pipData.supComment_month2) {

            this.isCommentOfMonth2Enable = true;
        } else if (this.pipData.dateDifference >= 3 && this.pipData.dateDifference < 4
            && this.pipData.empComment_month3 && !this.pipData.supComment_month3) {

            this.isCommentOfMonth3Enable = true;
        } else if (this.pipData.dateDifference >= 4 && this.pipData.dateDifference < 5
            && this.pipData.empComment_month4 && !this.pipData.supComment_month4) {

            this.isCommentOfMonth4Enable = true;
        } else if (this.pipData.dateDifference >= 5 && this.pipData.dateDifference < 6
            && this.pipData.empComment_month5 && !this.pipData.supComment_month5) {

            this.isCommentOfMonth5Enable = true;
        } else if (this.pipData.dateDifference >= 6 && this.pipData.dateDifference < 7
            && this.pipData.empComment_month6 && !this.pipData.supComment_month6) {

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

        if (this.isCommentOfMonth1Enable || this.isCommentOfMonth2Enable || this.isCommentOfMonth3Enable ||
            this.isCommentOfMonth4Enable || this.isCommentOfMonth5Enable || this.isCommentOfMonth6Enable) {

            this.saveEnabled = true;
        } else {
            this.saveEnabled = false;
        }

    }
    isFinalreviewEnabled() {

        if (this.pipData.dateDifference >= this.pipData.master_timelines && this.pipData.master_timelines == 3 &&
            this.pipData.empComment_month3 && !this.pipData.supervisorPerformanceRating && !this.pipData.superviserFinalReview) {
            this.finalReviewEnable = true;
        } else if (this.pipData.dateDifference >= this.pipData.master_timelines && this.pipData.master_timelines == 6 &&
            this.pipData.empComment_month6 && !this.pipData.supervisorPerformanceRating && !this.pipData.superviserFinalReview) {
            this.finalReviewEnable = true;
        } else {
            this.finalReviewEnable = false;
        }

    }
}
