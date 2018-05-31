import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { KraViewService } from "./kra-view.service"
import { CommonService } from "../../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./kra-view.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [KraViewService]
})
export class MyTeamKraComponent {

    kraCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];

    kraInfoData: any = [];

    isSubmitted: boolean = false;
    

    isKraAvaliable: boolean = false;
 
   // param_emp_id: number;
    param_id: number;
    kraWorkFlowData: any = [];

    status:any;
    isDisabled:boolean=true;


    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _kraService: KraViewService
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
                    if (params['id']) {
                        this.param_id = params['id'];
                        this.initData();
                    }
                    // if (params['emp_id']) {
                    //     this.param_emp_id = params['emp_id'];
                    //     this.initData();
                    // }
                });
            });


    }

    initData() {
        this.loadKraCategoryData();
        this.loadWeightAgeData();
        this.loadSupervisorData();
        this.loadKraInfo();
    }

    loadKraInfo() {
        this._kraService.getKraInfo(this.param_id).subscribe(
            res => {
                this.kraInfoData = res.json().data;
                this.status= res.json().status;
            },
            error => {
            });;
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
        // this._commonService.getKraSupervisor(this._currentEmpId)
        //     .subscribe(
        //     data => {
        //         this.supervisorData = data.json();
        //     },
        //     error => {
        //     });
    }
}
