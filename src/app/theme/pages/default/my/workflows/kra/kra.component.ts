import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { KraService } from "./kra.service"
import { CommonService } from "../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./kra.component.html",
    encapsulation: ViewEncapsulation.None,
    providers:[KraService]
})
export class MyKraComponent {

    kraCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];

    kraInfos: any = [
    ];

    isSubmitted: boolean = false;
    _currentEmpId: number;
    kraArrLength: number = 7

    isKraAvaliable: boolean = false;
    isDisabled: boolean = false;

    param_id:number;
    kraWorkFlowData:any=[];
    


    constructor( @Inject(PLATFORM_ID) private platformId: Object,
    meta: Meta, title: Title,
    private _route: ActivatedRoute,
    private _router: Router,
    public _authService: AuthService,
    private _commonService: CommonService,
    private _kraService: KraService
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
                        this.initData();
                    }
                    else
                    {
                        this.loadKraWorkFlowDetails();
                    }
                });
            });

           
    }

    loadKraWorkFlowDetails()
    {
        this._kraService.getEmployeeKraWorkFlowInfo(this._currentEmpId).subscribe(
            res => {
                this.kraWorkFlowData=res.json();
            },
            error => {
        });;
    }

    initData()
    {
       this.loadKraCategoryData();
       this.loadWeightAgeData();
       this.loadSupervisorData();
    }
       
    loadKraCategoryData()
    {
        this._commonService.getKraCategory()
                .subscribe(
                data => {
                    this.kraCategoryData=data.json();
                },
                error => {
        });
    }

    loadWeightAgeData ()
    {
        this._commonService.getKraWeightage()
                .subscribe(
                data => {
                   this.weightageData=data.json();
                },
                error => {
        });
    }
    
    loadSupervisorData()
    {
      
    }

    onKraSubmit(isSaveDraft?: boolean) {
     
    }


    addDummyRow(_id) {
        for (let j = 0; j < 7; j++) {
            let data = {
                _id: "",
                kra: "",
                category_id: "",
                weightage_id: "",
                unitOfSuccess: "",
                measureOfSuccess: "",
                supervisor_id: "",
                kraWorkflow_id: _id
            };
            this.kraInfos.push(data);
        }
    }
}
