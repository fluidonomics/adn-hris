import { FormBuilder, NgForm } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { MtrService } from "../../../services/mtr.service"
import { CommonService } from "../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { forEach } from "@angular/router/src/utils/collection";
import { NgSelectComponent } from '@ng-select/ng-select';
import * as _ from 'lodash';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./mtr.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./mtr.component.css'],
    providers: [MtrService],
})
export class MyMtrComponent {

    @ViewChild('mtrDetailModal') kraDetailModal: TemplateRef<any>;
    @ViewChild('MTRDataForm') fleaveapplication: NgForm;
    supervisorData: any = [];
    weightageData:any=[];

    param_id: number;
    _currentEmpId: number;

    isMtrAvaliable: boolean = false;


    mtrWorkFlowData: any = [];

    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    itemPerPage: number = 10;

    mtrCategoryData: any[];

    isDisabled: boolean = false;
    isChangable: boolean = false;
    employee: any = {};

    mtrInfoData: any = [];

    modalRef: BsModalRef;
    mtrData: any = {};

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

}

    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this._route.queryParams.subscribe(params => {
                    if (params['id']) {
                        this.param_id = params['id']; 
                                 this.loadData();              
                    }
                    else {
                        this.param_id = null; 
                        this.loadMTRWorkFlowDetails();                       
                    }
                });
            });
    }
    loadData(){
      this.loadMTRCategoryData()
      this.loadSupervisorData();
      this.loadMTRInfo();
    }
    loadMTRCategoryData() {
        this._commonService.getKraCategory()
            .subscribe(
                data => {
                    this.mtrCategoryData = data.json();
                },
                error => {
                });
    }
    loadSupervisorData() {
        this._commonService.getKraSupervisor(this._currentEmpId)
            .subscribe(
                data => {
                    this.supervisorData = data.json();
                },
                error => {
                });
    }
    showMTRDetails(index: number) {           
        this.modalRef = this.modalService.show(this.kraDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.mtrData = JSON.parse(JSON.stringify(this.mtrInfoData[index]));
        this.mtrData.no = index + 1;
        if(this.mtrData.supervisorStatus)
        this.isDisabled = this.mtrData.supervisorStatus == "Initiated" ||this.mtrData.supervisorStatus == "SendBack" ? false : true;

        //this.mtrData.weightage = this.weightageData.find(f => f._id == this.mtrData.weightage_id);
        //this.mtrData.category = this.kraCategoryData.find(f => f._id == this.kraData.category_id);
    }

    loadMTRWorkFlowDetails() {
        this._mtrService.getEmployeeMtrWorkFlowInfo(this._currentEmpId).subscribe(
            res => {               
                let data=res.json();
                this.mtrWorkFlowData = data.result.message;               
              this.mtrWorkFlowData=  _.chain(this.mtrWorkFlowData).groupBy('mtr_batch._id').map(function(v, i){                                    
                    return v[0];
                }).value();               
            },
            error => {
            });;
    }
    loadMTRInfo() {
        this._mtrService.getEmployeeMtrWorkFlowInfo(this._currentEmpId).subscribe(
            res => {               
                let data=res.json();
                this.mtrInfoData = data.result.message;
            },
            error => {
            });;
    }

}