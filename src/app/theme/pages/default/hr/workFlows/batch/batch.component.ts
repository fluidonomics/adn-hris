import { Component, Input, OnInit, ViewEncapsulation,TemplateRef } from '@angular/core';
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../base/_services/authService.service";
import { UtilityService } from "../../../../../../base/_services/utilityService.service";
import { BatchService } from "./batchService.service";
import {environment} from '../../../../../../../environments/environment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import swal from 'sweetalert2';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./batch.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./batch.component.css'],
    providers:[BatchService]
})
export class HrBatchComponent implements OnInit {
    batchData: any = [];
    activeRowNumber:number=-1;

    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    itemPerPage: number = 10;

    editBatch: any = {};
    modalRef: BsModalRef;
    currentDate: Date = new Date();

    batchTypes:any=[
        {_id:"KRA" ,batchTypeName:"KRA", },
        {_id:"Learning" ,batchTypeName:"Learning",disabled: true},
        {_id:"PIP" ,batchTypeName:"PIP",disabled: true},
     ]

    statusTypes:any=[
        {_id:"Active" ,name:"Active", },
        {_id:"Terminated" ,name:"Terminated"},
     ]

     _currentEmpId:number;

    constructor(
        private modalService: BsModalService,
        private _commonService: CommonService,
        private _batchService: BatchService,
        public utilityService: UtilityService,
        public _authService: AuthService) {
    }
    loadBatchFilter: any = {
        date:  this.loadBatch(),
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

    loadBatch()
    {
        this.utilityService.showLoader('#batch-loader');
        this._commonService.getBatchInfo()
            .subscribe(
            res => {
                this.utilityService.hideLoader('#batch-loader');
                this.batchData=res.json().data;
                this.batchData = this.batchData.filter(obj => obj.createdBy == this._currentEmpId);
            },
            error => {
                this.utilityService.hideLoader('#batch-loader');
            });
    }

    loadkraWorkFlowDetails(batch_id:number)
    {       
       this._commonService.getKraWorkFlowInfoByBatch(batch_id)
       .subscribe(
        res => {
            this.batchData[this.batchData.findIndex(x => x._id==batch_id)].kraWorkFlowData = res.json().data;
        },
        error => {
        });  
    }

    saveKraWorkFlow(batch_id, kraRow, status) {
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
                let batch = this.batchData.find(batch => batch._id == batch_id);
                let kra = batch.kraWorkFlowData.find(k => k._id == kraRow._id);
                kra.status = status;
                this._batchService.saveKraWorkFlow(kra).subscribe(res => {
                    swal('Success', 'Employee Workflow Terminated Successfully', 'success')
                }, error => {
                });
            }
        })
    }

    openEditModal(template: TemplateRef<any>, batch,index) {
        this.modalRef = this.modalService.show(template);
        this.editBatch = Object.assign({}, batch);
        if (this.editBatch && this.editBatch.batchEndDate) {
            this.editBatch.batchEndDate = new Date(this.editBatch.batchEndDate);
        }
    }

    saveBatch() {
        this.checkIfTerminatingBatch().then(res => {
            if (res) {
                this._batchService.saveBatch(this.editBatch).subscribe(res => {
                    this.activeRowNumber = -1;
                    this.loadBatch();
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
        })

    }

    checkIfTerminatingBatch() {
        return new Promise((resolve, reject) => {
            if (this.editBatch.status == 'Terminated') {
                swal({
                    title: 'Are you sure?',
                    text: "Terminate Batch? It can't be undone!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#9a9caf',
                    confirmButtonText: 'Terminate'
                }).then((result) => {
                    resolve(result.value);
                });
            } else {
                resolve(true);
            }
        });
    }


    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

}
