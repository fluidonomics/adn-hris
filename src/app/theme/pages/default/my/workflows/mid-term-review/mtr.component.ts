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
import { NgSelectComponent } from '@ng-select/ng-select'


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

    isDisabled: boolean = true;
    isChangable: boolean = true;
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
                    }
                    else {
                        this.param_id = null; 
                        this.loadKraWorkFlowDetails();                       
                    }
                });
            });
    }

    loadKraWorkFlowDetails() {
        this._mtrService.getEmployeeMtrWorkFlowInfo(this._currentEmpId).subscribe(
            res => {
                debugger;
                let data=res.json();
                this.mtrWorkFlowData = data.result.message;
            },
            error => {
            });;
    }

}