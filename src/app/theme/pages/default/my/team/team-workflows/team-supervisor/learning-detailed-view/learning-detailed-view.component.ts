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
import { LearningDetailedViewService } from './learning-detailed-view.service';
import { environment } from '../../../../../../../../../environments/environment'

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.learning-detailed-view",
    templateUrl: "./learning-detailed-view.component.html",
    styleUrls: ['./learning-detailed-view.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [LearningDetailedViewService]
})

export class LearningDetailedViewComponent {

    @ViewChild('learningDetailModal') learningDetailModal: TemplateRef<any>;

    window: any = window;
    kraCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];

    kraInfoData: any = [];
    learningInfoData: any = [];
    // learningInfoDataArr: any = [];

    isSubmitted: boolean = false;


    isKraAvaliable: boolean = false;

    param_emp_id: number;
    param_master_id: number;
    param_from: string;
    param_id: number;
    kraWorkFlowData: any = [];

    status: any;
    statusq: any;
    isDisabled: boolean = false;
    isDis: boolean = true;
    isSup: boolean = true;
    user: any;
    showStat = false;

    learningData: any;
    _currentEmpId: number;

    imageBase: any;

    devArea: [
        'Individual Development',
        'Functional Development'
    ]


    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _learningService: LearningDetailedViewService,
        private modalService: BsModalService,
        private utilityService: UtilityService,
        private router: Router
    ) {
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);

    }

    ngOnInit() {
        this._currentEmpId = this._authService.currentUserData._id;
        this._authService.validateToken().subscribe(
            res => {
                this._route.params.subscribe(params => {
                    if (params['id'] && params['emp_id']) {
                        this.param_id = params['id'];
                        this.param_emp_id = parseInt(params['emp_id']);
                        this.param_master_id = parseInt(params['id']);
                        this.param_from = params['from'];
                        console.log("path var : ", params['id']);
                        //debugger;
                        this.initData();
                    }
                });
            });
        this.imageBase = environment.content_api_base.imgBase;
            //debugger;

    }

    initData() {
        //console.log("route : ", this._route.url._value[])
        this.loadSupervisorData();
        this.loadLearningEmployee();
        this.getEmployee();
    }

    loadLearningEmployee() {

        this._learningService.getLearningInfo(this.param_master_id).subscribe(
            res => {
                console.log("response : ", res.json().result.message);
                this.learningInfoData = res.json().result.message;

                for (let lr of this.learningInfoData) {
                    var found = this.supervisorData.some(function (el) {
                        return el._id === lr.supervisorId;
                    });
                    if (!found) { this.supervisorData.push({ _id: lr.supervisorId, fullName: lr.supervisor_name }); }
                }

                if (this.param_from == "approval") {
                    this.learningInfoData = this.learningInfoData.filter(learn => learn.status == "Submitted");
                    if (this.learningInfoData.length == 0) {
                        this.router.navigateByUrl("/my/team/workflows/supervisor");
                    }
                    //debugger;
                }


                this.isDis = res.json().status == 'Approved' ? true : false;
                this.statusq = res.json().status;
                console.log("learningInfoData : ", this.learningInfoData);
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

    preSaveLearningDetails(learningData: any, Remarks: String) {
        if (!learningData.supervisorComment) {
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
                        learningMasterId: this.param_master_id,
                        learningDetailId: learningData._id,
                        empId: this.user._id,
                        supervisorId: this._currentEmpId,
                        supervisor_name: this.user.supervisorDetails.fullName,
                        action_link: window.location.origin + '/my/learning',
                        isApproved: isApproved,
                        supervisorComment: learningData.supervisorComment,
                        progressStatus: learningData.progressStatus
                    }
                    //debugger;
                    this.utilityService.showLoader('.mtrDetailsPortlet');
                    this._learningService.approveLearning(request).subscribe(res => {
                        if (res.ok && isApproved) {
                            this.modalRef.hide();
                            this.utilityService.hideLoader('.mtrDetailsPortlet');
                            swal({
                                title: 'Approved Successfully!',
                                text: "Learning Agenda has been Approved",
                                type: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#66BB6A',
                                confirmButtonText: 'OK'
                            });
                            this.loadLearningEmployee();

                        }
                        else {
                            this.modalRef.hide();
                            this.utilityService.hideLoader('.mtrDetailsPortlet');
                            swal({
                                title: 'Sent Back Successfully!',
                                text: "Learning Agenda has been Sent Back",
                                type: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#66BB6A',
                                confirmButtonText: 'OK'
                            });
                            this.loadLearningEmployee();
                        }
                    }, err => {
                        if (err.status == 300) {
                            let error = err.json() || {};
                            swal("Error", error.title, "error");
                            this.loadLearningEmployee();
                            this.modalRef.hide();
                        }
                        this.utilityService.hideLoader('.m-content');
                    })
                }
            });
        }

    }

    // saveLearningDetails(index: number, status: string) {
    //     this.learningInfoData[index].status = status;
    //     debugger;
    //     this._learningService.approveLearning(this.learningInfoData[index]).subscribe(res => {
    //         if (res.ok) {
    //             this.modalRef.hide();
    //             if (status == 'SendBack' || this.learningInfoData.filter(x => x.supervisorStatus == 'Approved').length == this.learningInfoData.length) {
    //                 let kraStatus = (status == 'SendBack' ? 'SendBack' : 'Approved');
    //                 //this.saveKraWorkFlow({ _id: this.param_id, status: kraStatus })
    //             }
    //         }
    //     },
    //         error => {
    //         });
    // }

    modalRef: BsModalRef;
    learnData: any = {};
    showLearningDetail(index, event) {
        console.log("index and event : ", index, event);
        this.modalRef = this.modalService.show(this.learningDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.learnData = this.learningInfoData[index];
        this.learnData.no = index + 1;
        // this.learnData.weightage = this.weightageData.find(f => f._id == this.learnData.weightage_id);
        // this.learnData.category = this.kraCategoryData.find(f => f._id == this.learnData.category_id);
        console.log("learningdata no : ", this.learnData);
        if (this.learnData.status == "Approved" || this.learnData.status == "SendBack") {
            this.isDisabled = true;
        }
        else {
            this.isDisabled = false;
        }

        if (this.learnData.supervisorId == this._currentEmpId) {
            this.isSup = true;
        }
        else {
            this.isSup = false;
        }
    }


}