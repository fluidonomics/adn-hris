import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../../../base/_services/authService.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { PapService } from '../../../services/pap.service';
import * as _ from 'lodash';
import swal from 'sweetalert2';
import { ignoreElements } from 'rxjs/operator/ignoreElements';
import { Subject } from 'rxjs';

declare var moment;

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
    isChangable: boolean = false;

    supervisorData: any = [];
    weightageData: any = [];
    papCategoryData: any = [];
    papRatingScaleData: any = [];

    papData: any = {};
    papGridInput: any = {};
    isDisabled: boolean = true;
    showGreivanceActions = false;

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
    fiscalYearId: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private papService: PapService,
        private modalService: BsModalService,
    ) { }

    ngOnInit() {
        this.fiscalYearId = this._commonService.getFiscalYearIdLocal();
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
            this.papService.getPapDetailsSingleEmployee(this._currentEmpId, this.fiscalYearId).subscribe(res => {
                let papDetails = res || [];
                if (papDetails.length > 0) {
                    this.papWorkFlowData = _.chain(papDetails).groupBy('_id').map(function (v, i) {
                        return v[0];
                    }).value();
                    this.papInfoData = this.papWorkFlowData[0].papdetails;
                    if (this.papInfoData.filter(obj => obj.status == "Pending").length == this.papInfoData.length) {
                        this.isChangable = true;
                    } else {
                        this.isChangable = false;
                    }
                    if (moment(new Date()).isBefore(this.papWorkFlowData[0].grievanceRaiseEndDate) && !(this.papWorkFlowData[0].grievanceStatus == 'Satisfied' || this.papWorkFlowData[0].grievanceStatus == 'Initiated')) {
                        this.showGreivanceActions = true;
                    } else {
                        this.showGreivanceActions = false;
                    }
                    // if (this.papWorkFlowData[0].status == 'Approved' && this.papWorkFlowData[0].isRatingCommunicated == true) {
                    //     this.showGreivanceActions = true;
                    // }
                    // if (this.papWorkFlowData[0].grievanceStatus == 'Satisfied' || this.papWorkFlowData[0].grievanceStatus == 'Initiated') {
                    //     this.showGreivanceActions = false;
                    // }
                    console.log(this.papWorkFlowData);
                    resolve(this.papInfoData);
                }
            });
        })
    }
    raiseGreivance(flag) {
        let request = {
            updatedBy: this._currentEmpId,
            empId: this._currentEmpId,
            papMasterId: this.papWorkFlowData[0]._id,
            raiseGreivance: flag
        }
        swal({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                this.papService.raiseGreivance(request).subscribe((res => {
                    console.log(res);
                    if (res.ok) {
                        this.loadPapDetails();
                        swal({
                            title: 'Success',
                            text: flag ? "Greivance has been raised" : "Saved",
                            type: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#66BB6A',
                            confirmButtonText: 'OK'
                        });
                    }
                }))
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
                updatedBy: this._currentEmpId,
                action_link: window.location.origin + '/my/team/workflows/pap-``detailed``-view/' + this.papWorkFlowData[0]._id + '/' + this.papGridInput.empId + '&fiscalYearId=' + this.fiscalYearId
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
