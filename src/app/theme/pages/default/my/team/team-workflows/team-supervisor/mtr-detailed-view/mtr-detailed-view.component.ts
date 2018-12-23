import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { CommonService } from "../../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { MtrService } from "../../../../../services/mtr.service";
import { UtilityService } from "../../../../../../../../base/_services/utilityService.service";

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.mtr-detailed-view",
    templateUrl: "./mtr-detailed-view.component.html",
    styleUrls: ['mtr-detailed-view.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MtrDetailedViewComponent {

    @ViewChild('mtrDetailModal') mtrDetailModal: TemplateRef<any>;

    window: any = window;
    kraCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];
    mtrInfoData: any = [];
    isSubmitted: boolean = false;
    isMtrAvaliable: boolean = false;
    param_emp_id: number;
    param_id: number;
    mtrWorkFlowData: any = [];
    status: any;
    isDisabled: boolean = true;
    user: any;
    modalRef: BsModalRef;
    mtrData: any = {};
    _currentEmpId: number;

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private modalService: BsModalService,
        private mtrService: MtrService,
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
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this._route.params.subscribe(params => {
                    if (params['id'] && params['emp_id']) {
                        this.param_id = params['id'];
                        this.param_emp_id = parseInt(params['emp_id']);
                        this.initData();
                    }
                });
            }
        );
    }

    initData() {
        this.loadMtrCategoryData();
        this.loadWeightAgeData();
        this.loadSupervisorData();
        this.getEmployee();
        this.loadMtrInfoData();
    }

    loadMtrCategoryData() {
        this._commonService.getKraCategory().subscribe(data => {
            this.kraCategoryData = data.json();
        }, error => {
        });
    }

    loadWeightAgeData() {
        this._commonService.getKraWeightage().subscribe(data => {
            this.weightageData = data.json();
        }, error => {
        });
    }

    loadSupervisorData() {
        this._commonService.getKraSupervisor(this.param_emp_id).subscribe(data => {
            this.supervisorData = data.json();
        }, error => {
        });
    }

    getEmployee() {
        this._commonService.getEmployee(this.param_emp_id).subscribe(res => {
            if (res.ok) {
                this.user = res.json() || {};
            }
        })
    }

    loadMtrInfoData() {
        this.utilityService.showLoader('m-content');
        this.mtrService.getMtrDetails(this.param_id).subscribe(res => {
            this.utilityService.hideLoader('m-content');
            let data = res.json().result.message;
            if (data.length > 0) {
                this.mtrInfoData = data[0];
            }
        }, err => {
            this.utilityService.hideLoader('m-content');
        })
    }


    showMtrDetail(index, event) {
        this.modalRef = this.modalService.show(this.mtrDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.mtrData = this.mtrInfoData.mtr_details[index] || {};
        this.mtrData.no = index + 1;
        this.mtrData.weightage = this.weightageData.find(f => f._id == this.mtrData.weightage_id);
        this.mtrData.category = this.kraCategoryData.find(f => f._id == this.mtrData.category_id);
    }
    saveMtr(mtrData: any, Remarks: String) {
        if (!mtrData.supervisorComment) {
            swal({
                title: 'Please fill remarks!',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
        }
        else {
            // let text = "Do you want to approve kra ?";
            // let confirmButtonText = "Approve";
            // let confirmButtonColor = "#66BB6A";
            // if (Remarks == 'SendBack') {
            //     text = "Do you want to send back kra ?";
            //     confirmButtonText = "Send Back";
            //     confirmButtonColor = "#f22d4e";
            // }
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
                        mtrMasterId: mtrData.mtr_master_id,
                        mtrDetailId: mtrData._id,
                        empId: this.user._id,
                        supervisorId: this._currentEmpId,
                        supervisor_name: this.user.supervisorDetails.fullName,
                        action_link: window.location.origin + '/my/workflows/mtr',
                        isApproved: isApproved,
                        supervisorComment: mtrData.supervisorComment,
                    }
                    this.utilityService.showLoader('.mtrDetailsPortlet');
                    this.mtrService.mtrApproval(request).subscribe(res => {
                        this.utilityService.hideLoader('.mtrDetailsPortlet');
                        if (res.ok) {
                            this.loadMtrInfoData();
                            this.modalRef.hide();
                        }
                    }, err => {
                        this.utilityService.hideLoader('.mtrDetailsPortlet');
                    })
                }
            });
        }

    }
}