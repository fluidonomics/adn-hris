import { Component, Input, OnInit, ViewEncapsulation,TemplateRef } from '@angular/core';
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../base/_services/authService.service";
import { BatchService } from "./batchService.service";
import {environment} from '../../../../../../../environments/environment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import swal from 'sweetalert2';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./batch.component.html",
    encapsulation: ViewEncapsulation.None,
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

    constructor(
        private modalService: BsModalService,
        private _commonService: CommonService,
        private _batchService: BatchService,
        public _authService: AuthService) {
    }

    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this.initData();
            });
    }

    initData() {
        this.loadBatch();
    }

    loadBatch()
    {
        this._commonService.getBatchInfo()
            .subscribe(
            res => {
                this.batchData=res.json().data;
            },
            error => {
            });
    }

    loadkraWorkFlowDetails(index:number,batch_id:number)
    {
       this._commonService.getKraWorkFlowInfoByBatch(batch_id)
       .subscribe(
        res => {
            this.batchData[index].kraWorkFlowData = res.json().data;
        },
        error => {
        });  
    }

    saveKraWorkFlow(batchIndex,kraWorkFlowIndex,status)
    {
       this.batchData[batchIndex].kraWorkFlowData[kraWorkFlowIndex].status=status;
       this._batchService.saveKraWorkFlow(this.batchData[batchIndex].kraWorkFlowData[kraWorkFlowIndex])
        .subscribe(
         res => {   
             
         },
         error => {
         }); 
    }

    openEditModal(template: TemplateRef<any>, batch,index) {
        this.modalRef = this.modalService.show(template);
        this.editBatch = Object.assign({}, batch);
        if (this.editBatch && this.editBatch.batchEndDate) {
            this.editBatch.batchEndDate = new Date(this.editBatch.batchEndDate);
        }
    }

    saveBatch()
    {
        this._batchService.saveBatch(this.editBatch)
        .subscribe(
         res => {   
            this.activeRowNumber=-1;
            this.loadBatch();
            this.modalRef.hide();
         },
         error => {
         }); 
    }

}
