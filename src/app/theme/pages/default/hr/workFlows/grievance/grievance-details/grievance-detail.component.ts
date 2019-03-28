import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';
import swal from 'sweetalert2';
import { ignoreElements } from 'rxjs/operator/ignoreElements';
import { Subject } from 'rxjs';
import { AuthService } from '../../../../../../../base/_services/authService.service';
import { CommonService } from '../../../../../../../base/_services/common.service';
import { PapService } from '../../../../services/pap.service';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.mypap",
    templateUrl: "./grievance-detail.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [PapService]
})
export class GrievanceDetailComponent {

    @ViewChild('papDetailModal') papDetailModal: TemplateRef<any>;

    papWorkFlowData: any = [];
    isPapAvaliable: boolean = false;
    isChangable: boolean = true;

    supervisorData: any = [];
    weightageData: any = [];
    papCategoryData: any = [];
    papRatingScaleData: any = [];

    papData: any = {};
    papGridInput: any = {};
    isDisabled: boolean = true;
    raiseGrievance = false;

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
    papInfoData: any = [];
    papChanges: Subject<any> = new Subject<any>();

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
            this._route.params.subscribe(params => {
                this.param_id = params['id'];
                this.papGridInput.empId = params['emp_id'];
                this.papGridInput.param_id = this.param_id;
                this.loadData();

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

    loadRatingScaleData() {
        this._commonService.getPapRatingScale().subscribe(
            data => {
                this.papRatingScaleData = data.json().result;
                this.papRatingScaleData.forEach(element => {
                    element.displayName = element.ratingScale + "-" + element.nomenclature
                });
                console.log(this.papRatingScaleData);
            }, error => {
            });
    }

    loadSupervisorData() {
        this._commonService.getKraSupervisor(this.papGridInput.empId).subscribe(data => {
            this.supervisorData = data.json();
        }, error => {
        });
    }

    loadData() {
        this.loadpapInfoData();
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
        return new Promise((resolve, reject) => {
            this.papService.getPapDetailsSingleEmployee(this.papGridInput.param_id).subscribe(res => {
                let papDetails = res || [];
                if (papDetails.length > 0) {
                    this.papWorkFlowData = _.chain(papDetails).groupBy('pap_master_id').map(function (v, i) {
                        return v[0];
                    }).value();
                    this.papInfoData = this.papWorkFlowData[0].papdetails;
                    this.isChangable = this.papInfoData.filter(obj => obj.status == "Submitted").length != 0 ? false : true;
                    this.raiseGrievance = this.papWorkFlowData[0].isRatingCommunicated;
                    resolve(this.papInfoData);
                }
            });
        })
    }
    loadpapInfoData() {
        this.papService.getPapDetailsSingleEmployee(this.papGridInput.empId).subscribe(res => {
            let papDetails = res || [];
            if (papDetails.length > 0) {
                this.papWorkFlowData = _.chain(papDetails).groupBy('pap_master_id').map(function (v, i) {
                    return v[0];
                }).value();
                this.papInfoData = this.papWorkFlowData[0].papdetails;
                this.isChangable = this.papInfoData.filter(obj => obj.status == "Submitted").length != 0 ? false : true;
                this.raiseGrievance = this.papWorkFlowData[0].isRatingCommunicated;
            }
        });
    }

    showPAPDetails(index) {
        this.modalRef = this.modalService.show(this.papDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.papData = JSON.parse(JSON.stringify(this.papInfoData[index]));
        this.papData.no = index + 1;
        console.log(this.papData);

        if (this.papData.status == "Submitted") {
            this.isDisabled = true;
        } else if (this.papData.status == "Initiated" || this.papData.status == "Pending") {
            this.isDisabled = false;
        } else {
            this.isDisabled = false;
        }
    }
}
