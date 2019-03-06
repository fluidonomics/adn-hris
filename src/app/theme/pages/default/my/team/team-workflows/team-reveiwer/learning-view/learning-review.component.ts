import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { LearningReviewService } from "./learning-review.service"
import { CommonService } from "../../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { environment } from '../../../../../../../../../environments/environment'

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.learning-view",
    templateUrl: "./learning-review.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [LearningReviewService]
})
export class LearningReview {

    @ViewChild('learningDetailModal') learningDetailModal: TemplateRef<any>;

    window: any = window;
    kraCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];

    kraInfoData: any = [];
    learningInfoData: any = [];

    isSubmitted: boolean = false;


    isKraAvaliable: boolean = false;

    param_emp_id: number;
    param_master_id: number;
    param_id: number;
    kraWorkFlowData: any = [];

    status: any;
    statusq: any;
    isDisabled: boolean = false;
    isDis: boolean = true;
    user: any;
    showStat = false;

    learningData: any;
    _currentEmpId: number;

    devArea: [
        'Individual Development',
        'Functional Development'
    ]
    imageBase: any;



    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _learningService: LearningReviewService,
        private modalService: BsModalService
    ) {
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);

    }

    ngOnInit() {
        //debugger;
        this._currentEmpId = this._authService.currentUserData._id;
        this._authService.validateToken().subscribe(
            res => {
                this._route.params.subscribe(params => {
                    if (params['id'] && params['emp_id']) {
                        this.param_id = params['id'];
                        this.param_emp_id = parseInt(params['emp_id']);
                        this.param_master_id = parseInt(params['id']);
                        console.log("path var : ", params['id']);
                        this.initData();
                    }
                });
            });
        this.imageBase = environment.content_api_base.imgBase;

    }

    initData() {
        //console.log("route : ", this._route.url._value[])
        this.loadSupervisorData();
        this.loadLearningEmployee();
        this.getEmployee();
    }

    loadLearningEmployee() {
        // debugger;

        this._learningService.getEmployeeLearningDetails(this.param_master_id).subscribe(
            res => {
                //console.log("response : ", res.json().result.message);
                this.learningInfoData = res.json().result.message;
                for (let lr of this.learningInfoData) {
                    var found = this.supervisorData.some(function (el) {
                        return el._id === lr.supervisorId;
                    });
                    if (!found) {
                        this.supervisorData.push({ _id: lr.supervisorId, fullName: lr.supervisor_name });
                    }
                }
                this.isDis = res.json().status == 'Approved' ? true : false;
                this.statusq = res.json().status;
                console.log("learning info data : ", this.learningInfoData);
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
    }


}
