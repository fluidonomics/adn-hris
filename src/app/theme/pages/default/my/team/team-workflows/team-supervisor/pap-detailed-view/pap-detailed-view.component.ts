import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { CommonService } from "../../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PapService } from '../../../../../services/pap.service';
import * as _ from 'lodash';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.pap-detailed-view",
    templateUrl: "./pap-detailed-view.component.html",
    styleUrls: ['pap-detailed-view.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [PapService]
})

export class PapDetailedViewComponent implements OnInit {

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
    user: any;
    papChanges: Subject<any> = new Subject<any>();
    papEmployeeId;
    papMasterId;

    constructor(
        public _authService: AuthService,
        private _commonService: CommonService,
        private modalService: BsModalService,
        private _route: ActivatedRoute,
        private papService: PapService
    ) { }
    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this._route.params.subscribe(params => {
                    if (params['id'] && params['emp_id']) {
                        this.papEmployeeId = parseInt(params['emp_id']);
                        this.papMasterId = parseInt(params['id']);
                        this.loadData();
                    }
                });
            }
        );
    }
    getEmployee() {
        this._commonService.getEmployee(this.papEmployeeId).subscribe(res => {
            if (res.ok) {
                this.user = res.json() || {};
            }
        })
    }

    loadData() {
        this.getEmployee();
        this.loadPapDetails();
        this.loadSupervisorData();
        this.loadWeightAgeData();
        this.loadPAPCategoryData();
        this.loadRatingScaleData();
    }
    loadPapDetails() {
        return new Promise((resolve, reject) => {
            this.papService.getPapDetailsSingleEmployee(this.papEmployeeId).subscribe(res => {
                let papDetails = res || [];
                if (papDetails.length > 0) {
                    this.papWorkFlowData = _.chain(papDetails).groupBy('pap_master_id').map(function (v, i) {
                        return v[0];
                    }).value();
                    this.papInfoData = this.papWorkFlowData[0].papdetails;
                    if (this.papInfoData.filter(obj => obj.status == "Submitted").length > 0 || this.papInfoData.filter(obj => obj.status == "SendBack").length > 0) {
                        this.isChangable = true;
                    } else if (this.papWorkFlowData[0].grievanceStatus == 'Initiated' && this.papWorkFlowData[0].reviewerStatus != 'Approved' && this.papWorkFlowData[0].reviewerStatus != 'Pending') {
                        this.isChangable = true;
                    } else {
                        this.isChangable = false;
                    }
                    console.log(this.papWorkFlowData);
                    resolve(this.papInfoData);
                }
            });
        });
    }
    loadSupervisorData() {
        this._commonService.getKraSupervisor(this.papEmployeeId).subscribe(data => {
            this.supervisorData = data.json();
        }, error => {
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
                    element.displayName = element.ratingScale + "-" + element.nomenclature;
                });
                console.log(this.papRatingScaleData);
            }, error => {
            });
    }
    loadPAPCategoryData() {
        this._commonService.getKraCategory().subscribe(data => {
            this.papCategoryData = data.json();
        }, error => {
        });
    }
    showPAPDetails(index) {
        this.modalRef = this.modalService.show(this.papDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.papData = JSON.parse(JSON.stringify(this.papInfoData[index]));
        this.papData.no = index + 1;

        console.log(this.papData);
        if (this.papData.status == "Submitted" || this.papData.status == "SendBack") {
            this.isDisabled = false;
        }
        else if (this.papData.status == "Pending Reviewer") {
            this.isDisabled = true;
        }
    }
    saveKRADetails(form, id: number) {
        if (form.valid) {
            this.modalRef.hide();
            let request = {
                "papDetailsId": this.papData._id,
                "updatedBy": this._currentEmpId,
                "supRemark": this.papData.supRemark,
                "sup_ratingScaleId": this.papData.sup_ratingScaleId,
                "grievance_ratingScaleId": this.papData.grievance_ratingScaleId,
                "grievanceSupRemark": this.papData.grievanceSupRemark,
                "grievanceStatus": this.papWorkFlowData[0].grievanceStatus
            }
            console.log(request);
            this.papService.papUpdateSupervisor(request).subscribe(res => {
                if (res.ok) {
                    // this.papGridInput = {};
                    // let gridInput = {
                    //     empId: this._currentEmpId,
                    //     param_id: this.param_id
                    // }
                    // Object.assign(this.papGridInput, gridInput)
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
    submitPapWorkFlow() {
        let dataWithoutPendingStatus = [];
        if (this.papWorkFlowData[0].grievanceStatus == 'Initiated') {
            dataWithoutPendingStatus = this.papInfoData.filter(obj => obj.grievance_ratingScaleId == null || obj.grievanceSupRemark == null);
        } else {
            dataWithoutPendingStatus = this.papInfoData.filter(obj => obj.sup_ratingScaleId == null || obj.supRemark == null);
        }

        if (dataWithoutPendingStatus.length == 0) {
            let request = {
                papMasterId: this.papMasterId,
                updatedBy: this._currentEmpId,
                grievanceStatus: this.papWorkFlowData[0].grievanceStatus,
                action_link: window.location.origin + '/my/team/workflows/pap-detailed-view/' + this.papWorkFlowData[0]._id + '/' + this.papEmployeeId
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
                    this.papService.papSubmitToReviewer(request).subscribe(
                        res => {
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

                        });
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