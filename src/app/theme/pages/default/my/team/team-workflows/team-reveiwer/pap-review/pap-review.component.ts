import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { PapService } from '../../../../../services/pap.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subject } from 'rxjs';
import { AuthService } from '../../../../../../../../base/_services/authService.service';
import { CommonService } from '../../../../../../../../base/_services/common.service';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';
import swal from 'sweetalert2';

@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper.pap-review',
    templateUrl: 'pap-review.component.html'
})

export class PapReviewComponent implements OnInit {

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
        private papService: PapService,
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

    loadData() {
        this.getEmployee();
        this.loadPapDetails();
        this.loadSupervisorData();
        this.loadWeightAgeData();
        this.loadPAPCategoryData();
        this.loadRatingScaleData();
    }

    getEmployee() {
        this._commonService.getEmployee(this.papEmployeeId).subscribe(res => {
            if (res.ok) {
                this.user = res.json() || {};
            }
        })
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
        this.isDisabled = this.papData.status == "SendBack" || this.papData.status == "Approved" ? true : false;
    }
    saveKRADetails(form, id: number, isApproved: boolean) {
        if (form.valid) {
            this.modalRef.hide();
            let request = {
                "papDetailsId": this.papData._id,
                "updatedBy": this._currentEmpId,
                "isApproved": isApproved,
                "reviewerRemark": this.papData.reviewerRemark,
                "grievanceRevRemark": this.papData.grievanceRevRemark,
                "grievanceStatus": this.papWorkFlowData[0].grievanceStatus
            }
            this.papService.papUpdateReviewer(request).subscribe(res => {
                debugger;
                if (res.ok) {
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

            });
        }
    }
}