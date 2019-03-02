import { Component, Input, OnInit, ViewEncapsulation, TemplateRef } from '@angular/core';
import { CommonService } from '../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from "../../../../../../../base/_services/utilityService.service";
import { BatchService } from "../../batch/batchService.service";
import { environment } from '../../../../../../../../environments/environment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import swal from 'sweetalert2';
import { LearningService } from '../../../../services/learning.service';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./batch.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./batch.component.css'],
    providers: [BatchService, LearningService]
})

export class LearningBatchComponent implements OnInit {

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

    batchTypes: any = [
        { _id: "KRA", batchTypeName: "KRA", disabled: true },
        { _id: "Learning", batchTypeName: "Learning" },
        { _id: "PIP", batchTypeName: "PIP", disabled: true },
    ]

    statusTypes: any = [
        { _id: "Active", name: "Active", },
        { _id: "Terminated", name: "Terminated" },
    ]

    _currentEmpId: number;

    loadBatchFilter: any = {
        //date:  this.loadBatch(),
        status: 'All',
        page: 1
    };
    batchdatafilter: any = {
        status: 'All',
        page: 1
    };

    constructor(
        private modalService: BsModalService,
        private _commonService: CommonService,
        private _batchService: BatchService,
        public utilityService: UtilityService,
        public _authService: AuthService,
        public _learningService: LearningService
    ) {

    }

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
        //debugger;
        this.utilityService.showLoader('#batch-loader');
        this._learningService.getLearningBatches(this._currentEmpId)
            .subscribe(
                res => {
                    this.utilityService.hideLoader('#batch-loader');
                    this.batchData = res.json().result.message;
                    this.batchData = this.batchData.filter(obj => obj.createdBy == this._currentEmpId);
                },
                error => {
                    this.utilityService.hideLoader('#batch-loader');
                });
    }


    saveLearning(batch_id, learningIndex, status) {
    //     swal({
    //         title: 'Are you sure?',
    //         text: "Terminate learning Agenda? It can't be undone!",
    //         type: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#d33',
    //         cancelButtonColor: '#9a9caf',
    //         confirmButtonText: 'Terminate'
    //     }).then((result) => {
    //         if (result.value) {
    //             this.batchData[this.batchData.findIndex(x => x._id == batch_id)].batchData[learningIndex].status = status;
    //             this._batchService.saveKraWorkFlow(this.batchData[this.batchData.findIndex(x => x._id == batch_id)].kraWorkFlowData[learningIndex])
    //                 .subscribe(
    //                     res => {
    //                         swal('Success', 'Employee Learning Agenda Terminated Successfully', 'success')
    //                     },
    //                     error => {
    //                     });
    //         }
    //     })
    }

    openEditModal(template: TemplateRef<any>, batch, index) {
        this.modalRef = this.modalService.show(template);
        this.editBatch = Object.assign({}, batch);
        if (this.editBatch && this.editBatch.batchEndDate) {
            this.editBatch.batchEndDate = new Date(this.editBatch.batchEndDate);
        }
    }

    saveBatch() {
        //debugger;
        let data = {
            "batchId": this.editBatch._id,
            "updatedBy": this._currentEmpId,
            "batchEndDate": this.editBatch.batchEndDate
        }
        this._learningService.updateBatch(data).subscribe(res => {
            //debugger;
            this.activeRowNumber = -1;
            //this.loadBatch();
            this.modalRef.hide();
            if (this.editBatch.status == 'Terminated') {
                swal('Success', 'Batch Terminated Successfully', 'success')
            }
            else {
                swal('Success', 'Batch Saved Successfully', 'success')
            }
        }, error => {
        });
    }


    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

}