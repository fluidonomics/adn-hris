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
import { environment } from "../../../../../../../../../environments/environment.prod";

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.kra-view",
    templateUrl: "./mtr-review.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [MtrService]
})
export class MtrReview {

    @ViewChild('kraDetailModal') kraDetailModal: TemplateRef<any>;

    window: any = window;
    kraCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];
    _currentEmpId: number;
    kraInfoData: any = [];

    isSubmitted: boolean = false;


    isKraAvaliable: boolean = false;

    param_emp_id: number;
    param_id: number;
    kraWorkFlowData: any = [];

    status: any;
    isDisabled: boolean = true;
    user: any;
    progressStatuses = [];
    colorStatuses = [];
    imageBase = "";

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _mtrService: MtrService,
        private modalService: BsModalService
    ) {
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);
        this.progressStatuses = this._mtrService.progressStatuses;
        this.colorStatuses = this._mtrService.colorStatuses;
        this.imageBase = environment.content_api_base.imgBase;
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
            });


    }

    initData() {
        this.loadKraCategoryData();
        this.loadWeightAgeData();
        this.loadSupervisorData();
        this.loadKraInfo();
        this.getEmployee();
        this.loadMtrInfoData();
    }

    loadKraInfo() {
    }
    loadMtrInfoData() {
        this._mtrService.getMtrDetails(this.param_id).subscribe(res => {
            let data = res.json().result.message;
            if (data.length > 0) {
                let mtrDetails = data[0].mtr_details;
                this.kraInfoData = mtrDetails.filter(mtr => mtr.progressStatus != "Dropped");
            }
        })
    }

    loadKraCategoryData() {
        this._commonService.getKraCategory()
            .subscribe(
                data => {
                    this.kraCategoryData = data.json();
                },
                error => {
                });
    }

    loadWeightAgeData() {
        this._commonService.getKraWeightage()
            .subscribe(
                data => {
                    this.weightageData = data.json();
                },
                error => {
                });
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
    kraData: any = {};
    showKraDetail(index, event) {
        this.modalRef = this.modalService.show(this.kraDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.kraData = this.kraInfoData[index];
        this.kraData.no = index + 1;
        this.kraData.weightage = this.weightageData.find(f => f._id == this.kraData.weightage_id);
        this.kraData.category = this.kraCategoryData.find(f => f._id == this.kraData.category_id);
    }


}
