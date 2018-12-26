import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../../../base/_services/authService.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { PapService } from '../../../services/pap.service';
import * as _ from 'lodash';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.mypap",
    templateUrl: "./pap.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [PapService]
})
export class MyPapComponent {

    @ViewChild('papDetailModal') papDetailModal: TemplateRef<any>;

    papWorkFlowData: any = [];
    isPapAvaliable: boolean = false;

    supervisorData: any = [];
    weightageData: any = [];
    papCategoryData:any=[];
    papRatingScaleData:any=[];

    papData: any = {};

    progressStatuses = [
        {
            id: "InProgress",
            label: "In progress"
        },
        {
            id: "Completed",
            label: "Completed"
        },
        {
            id: "Dropped",
            label: "Dropped"
        }
    ];
   

    modalRef: BsModalRef;
    param_id: number;
    _currentEmpId: number;

    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    itemPerPage: number = 10;

    papMasterData = [];

    papInfoData:any=[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private papService: PapService,
        private modalService: BsModalService,
    ) { }

    ngOnInit() {
        this._authService.validateToken().subscribe(res => {
            this._currentEmpId = this._authService.currentUserData._id;
            this._route.queryParams.subscribe(params => {
                if (params['id']) {
                    this.param_id = params['id'];
                    this.loadData();
                }
                else {
                    this.param_id = null;
                    this.loadPapDetails();
                }
            });
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
    loadRatingScaleData(){
        this._commonService.getPapRatingScale().subscribe(
            data => {
                this.papRatingScaleData = data.json().result;
                this.papRatingScaleData.forEach(element => {
                    element.displayName=element.ratingScale+"-"+element.nomenclature
                });
                console.log(this.papRatingScaleData);
            }, error => {
            });
    }
    loadSupervisorData() {
        this._commonService.getKraSupervisor(this._currentEmpId).subscribe(data => {
            this.supervisorData = data.json();
        }, error => {
        });
    }

    loadData() {
        this.loadPapDetails();
        this.loadSupervisorData();
        this.loadWeightAgeData();
        this.loadPAPCategoryData();
        this.loadRatingScaleData();
    }
    loadPAPCategoryData() {
        this._commonService.getKraCategory().subscribe(data => {
            this.papCategoryData = data.json();
        }, error => {
        });
    }
    loadPapDetails() {
        this.papService.getPapDetailsSingleEmployee(this._currentEmpId).subscribe(res => {            
            let papDetails = res || [];
            if (papDetails.length > 0) {
                this.papWorkFlowData = _.chain(papDetails).groupBy('pap_master_id').map(function (v, i) {
                    return v[0];
                }).value();
                this.papInfoData=this.papWorkFlowData[0].papdetails;
                console.log(this.papWorkFlowData);
            }
        });
    }
    showPAPDetails(index: number) {
        this.modalRef = this.modalService.show(this.papDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.papData = JSON.parse(JSON.stringify(this.papInfoData[index]));
        this.papData.no = index + 1;
        // if (this.papData.kra_details && this.papData.kra_details._id) {
        //     this.isPreviousKRA = true;
        // }
        // else {
        //     this.isPreviousKRA = false;
        // }
        // if (this.papData.progressStatus == "Dropped") {
        //     this.isDisabled = true;
        // } else {
        //     if (this.mtrData.status) {
        //         this.isDisabled = this.mtrData.status == "SendBack" || this.mtrData.status == "Pending" ? false : true;
        //     }
        // }


        //this.mtrData.weightage = this.weightageData.find(f => f._id == this.mtrData.weightage_id);
        //this.mtrData.category = this.kraCategoryData.find(f => f._id == this.kraData.category_id);
    }


}
