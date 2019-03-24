import { Component, ViewEncapsulation, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CommonService } from '../../../../../../../../base/_services/common.service';
import { BatchService } from "../../../batch/batchService.service";
import { UtilityService } from "../../../../../../../../base/_services/utilityService.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { MtrService } from "../../../../../services/mtr.service";
import { PapService } from "../../../../../services/pap.service";

import swal from 'sweetalert2';
declare var moment;
@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper.papBatchView',
    templateUrl: 'pap-batch-view.component.html',
    styleUrls: ['pap-batch-view.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [BatchService, PapService]
})

export class PapBatchViewComponent implements OnInit {


    batchTypes: any = [
        { _id: "KRA", batchTypeName: "KRA", },
        { _id: "Learning", batchTypeName: "Learning", disabled: true },
        { _id: "PIP", batchTypeName: "PIP", disabled: true },
    ]

    statusTypes: any = [
        { _id: "Active", name: "Active", },
        { _id: "Terminated", name: "Terminated" },
    ]
    batchData: any = [];
    activeRowNumber: number = -1;

    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    itemPerPage: number = 10;

    editBatch: any = {};
    modalRef: BsModalRef;
    currentDate: Date = new Date();
    _currentEmpId: number;

    constructor(
        private modalService: BsModalService,
        private _commonService: CommonService,
        private _batchService: BatchService,
        public utilityService: UtilityService,
        public _authService: AuthService,
        public _papService: PapService) {
    }
    loadBatchFilter: any = {
        date: this.loadBatch(),
        status: 'All',
        page: 1
    };
    batchdatafilter: any = {
        status: 'All',
        page: 1
    };

    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.initData();
            });
    }
    initData() {
        this.loadBatch();
    }
    loadBatch() {
        this.utilityService.showLoader('#batch-loader');
        this._papService.getPAPBatches(this._currentEmpId)
            .subscribe(
                res => {
                    this.utilityService.hideLoader('#batch-loader');
                    this.batchData = res;
                    this.batchData = this.batchData.filter(obj => obj.createdBy == this._currentEmpId);
                    this.batchData = this.batchData.sort((a, b) => {
                        if (moment(a.updatedAt).isBefore(b.updatedAt)) return -1;
                        else if (!moment(a.updatedAt).isBefore(b.updatedAt)) return 1;
                        else return 0;
                    });
                },
                error => {
                    this.utilityService.hideLoader('#batch-loader');
                });
    }
    loadkraWorkFlowDetails(batch_id: number) {
        //    this._commonService.getKraWorkFlowInfoByBatch(batch_id)
        //    .subscribe(
        //     res => {
        //         this.batchData[this.batchData.findIndex(x => x._id==batch_id)].kraWorkFlowData = res.json().data;
        //     },
        //     error => {
        //     });       

    }

    saveKraWorkFlow(batch_id, kraWorkFlowIndex, status) {
        swal({
            title: 'Are you sure?',
            text: "Terminate workflow? It can't be undone!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Terminate'
        }).then((result) => {
            if (result.value) {
                this.batchData[this.batchData.findIndex(x => x._id == batch_id)].kraWorkFlowData[kraWorkFlowIndex].status = status;
                this._batchService.saveKraWorkFlow(this.batchData[this.batchData.findIndex(x => x._id == batch_id)].kraWorkFlowData[kraWorkFlowIndex])
                    .subscribe(
                        res => {
                            swal('Success', 'Employee Workflow Terminated Successfully', 'success')
                        },
                        error => {
                        });
            }
        })
    }

    openEditModal(template: TemplateRef<any>, batch, index) {
        this.modalRef = this.modalService.show(template);
        this.editBatch = Object.assign({}, batch);
        if (this.editBatch && this.editBatch.batchEndDate) {
            this.editBatch.batchEndDate = new Date(this.editBatch.batchEndDate);
        }
    }

    saveBatch() {
        this._batchService.saveBatch(this.editBatch)
            .subscribe(
                res => {
                    this.activeRowNumber = -1;
                    this.loadBatch();
                    this.modalRef.hide();
                    if (this.editBatch.status == 'Terminated') {
                        swal('Success', 'Batch Terminated Successfully', 'success')
                    }
                    else {
                        swal('Success', 'Batch Saved Successfully', 'success')
                    }
                },
                error => {
                });
    }


    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
}