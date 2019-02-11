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

    window: any = window;
    kraCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];

    kraInfoData: any = [];
    PipAgendaData: any = [];
    pipInfoData: any = [];

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

    imageBase:any;

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
        this._currentEmpId = this._authService.currentUserData._id;
        debugger;
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
        this.loadPipEmployee();
        //   this.loadKraCategoryData();
        //   this.loadWeightAgeData();
        this.loadSupervisorData();
        //   this.loadKraInfo();
        this.getEmployee();
    }

    loadPipEmployee() {

        this._pipService.getPipDetails(this.param_master_id).subscribe(
            res => {
                console.log("response : ", res.json().result.message);
                this.pipInfoData = res.json().result.message;
                this.isDis = res.json().status == 'Approved' ? true : false;
                this.statusq = res.json().status;
                console.log("learningInfoData : ", this.pipInfoData);
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
        if (!pipData.supervisorComment) {
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
                        action_link: window.location.origin + '/my/pip',
                        isApproved: isApproved,
                        supervisorComment: pipData.supervisorComment,
                    }
                    //debugger;
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
            });
        }

    }


    modalRef: BsModalRef;
    pipData: any = {};
    showPipDetails(index, event) {
        console.log("index and event : ", index, event);
        this.modalRef = this.modalService.show(this.pipDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.pipData = this.pipInfoData[index];
        this.pipData.no = index + 1;
        // this.learnData.weightage = this.weightageData.find(f => f._id == this.learnData.weightage_id);
        // this.learnData.category = this.kraCategoryData.find(f => f._id == this.learnData.category_id);
        console.log("learningdata no : ", this.pipData);
        if (this.pipData.status == "Approved" || this.pipData.status == "SendBack") {
            this.isDisabled = true;
        }
        else {
            this.isDisabled = false;
        }
    }


}