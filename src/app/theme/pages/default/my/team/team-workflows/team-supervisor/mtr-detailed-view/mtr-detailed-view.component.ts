import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { CommonService } from "../../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.kra-view",
    templateUrl: "./mtr-detailed-view.component.html",
    encapsulation: ViewEncapsulation.None
})

export class MtrDetailedViewComponent {

    @ViewChild('mtrDetailModal') mtrDetailModal: TemplateRef<any>;

    window: any = window;
    mtrCategoryData: any[];
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

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
    meta: Meta, title: Title,
    private _route: ActivatedRoute,
    private _router: Router,
    public _authService: AuthService,
    private _commonService: CommonService,
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
        this._authService.validateToken().subscribe(
            res => {    
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
    }

    loadMtrCategoryData() {
        /* this._commonService.getMtrCategory()
            .subscribe(
                data => {
                    this.mtrCategoryData = data.json();
                },
                error => {
                }); */
    }

    loadWeightAgeData() {
        /* this._commonService.getMtrWeightage()
            .subscribe(
                data => {
                    this.weightageData = data.json();
                },
                error => {
                }); */
    }

    loadSupervisorData() {
       /*  this._commonService.getMtrSupervisor(this.param_emp_id)
            .subscribe(
                data => {
                    this.supervisorData = data.json();
                },
                error => {
                }); */
    }

    getEmployee() {
        this._commonService.getEmployee(this.param_emp_id).subscribe(res => {
            if (res.ok) {
                this.user = res.json() || {};
            }
        })
    }

    modalRef: BsModalRef;
    mtrData: any = {};
    showMtrDetail(index, event) {
        this.modalRef = this.modalService.show(this.mtrDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.mtrData = this.mtrInfoData[index];
        this.mtrData.no = index + 1;
        this.mtrData.weightage = this.weightageData.find(f => f._id == this.mtrData.weightage_id);
        this.mtrData.category = this.mtrCategoryData.find(f => f._id == this.mtrData.category_id);
    }

}