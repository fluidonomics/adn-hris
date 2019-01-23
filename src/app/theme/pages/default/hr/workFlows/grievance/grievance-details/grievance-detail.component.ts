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
    raiseGreivance=false;

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
            this._route.queryParams.subscribe(params => {
                if (params['id']) {
                    this.param_id = params['id'];
                    this.papGridInput.empId = this._currentEmpId;
                    this.papGridInput.param_id = this.param_id;
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
        return new Promise((resolve, reject) => {
            this.papService.getPapDetailsSingleEmployee(this._currentEmpId).subscribe(res => {
                let papDetails = res || [];
                if (papDetails.length > 0) {
                    this.papWorkFlowData = _.chain(papDetails).groupBy('pap_master_id').map(function (v, i) {
                        return v[0];
                    }).value();
                    this.papInfoData = this.papWorkFlowData[0].papdetails;
                    this.isChangable = this.papInfoData.filter(obj => obj.status == "Submitted").length != 0 ? false : true;
                    debugger;
                    this.raiseGreivance =  this.papWorkFlowData[0].isRatingCommunicated;
                    console.log(this.papWorkFlowData);
                    resolve(this.papInfoData);
                }
            });
        })
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

    saveKRADetails(form, id: number) {
        if (form.valid) {
            this.modalRef.hide();
            let request = {
                "papDetailsId": this.papData._id,
                "updatedBy": this._currentEmpId,
                "empRemark": this.papData.empRemark,
                "emp_ratingScaleId": this.papData.emp_ratingScaleId
            }
            console.log(request);
            this.papService.papUpdate(request).subscribe(res => {                
                if (res.ok) {
                    this.papGridInput = {};
                    let gridInput = {
                        empId: this._currentEmpId,
                        param_id: this.param_id
                    }
                    // this.papGridInput.empId=this._currentEmpId;
                    // this.papGridInput.param_id=this.param_id;
                    Object.assign(this.papGridInput, gridInput)

                    this.loadPapDetails().then(res => {
                        this.papChanges.next(res);
                    });

                    swal({
                        title: 'Success',
                        text: "PAP has been Saved.",
                        type: 'success',
                        showCancelButton: false,
                        confirmButtonColor: '#66BB6A',
                        confirmButtonText: 'OK'
                    });
                }
            }, error => {

            })
        }
    }
    submitPapWorkFlow(isdirty) {
        let dataWithoutPendingStatus = this.papInfoData.filter(obj => obj.status != "Pending");
        console.log(dataWithoutPendingStatus);
        if (dataWithoutPendingStatus.length == 0) {
            let request = {
                pap_master_id: this.param_id,
                updatedBy: this._currentEmpId
            }
            swal({
                title: 'Are you sure?',
                text: "You want to submit PAP to supervisor",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value) {
                    this.papService.papSubmit(request).subscribe(res => {
                        if (res.ok) {
                            this.loadPapDetails()
                            swal({
                                title: 'Success',
                                text: "PAP has been submited.",
                                type: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#66BB6A',
                                confirmButtonText: 'OK'
                            });
                        }
                    }, error => {

                    })
                }
            });
        }
        else {
            swal({
                title: 'Oops!',
                text: 'All PAP need to be saved before submitting',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
        }
    }


}
