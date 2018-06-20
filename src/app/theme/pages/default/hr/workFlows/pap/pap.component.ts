import { Component, Input, OnInit, ViewEncapsulation,TemplateRef } from '@angular/core';
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../base/_services/authService.service";
import {environment} from '../../../../../../../environments/environment';
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import swal from 'sweetalert2';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./pap.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HrPapComponent implements OnInit {
    batchData: any = [];
    activeRowNumber:number=-1;

    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    itemPerPage: number = 10;

    // editBatch: any = {};
    // modalRef: BsModalRef;
    // currentDate: Date = new Date();

    constructor(
        //private modalService: BsModalService,
        private _commonService: CommonService,
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

    saveBatchStatus(index,status)
    {
        this.batchData[index].status=status;
        this._commonService.saveBatchStatus(this.batchData[index])
        .subscribe(
         res => {
            
         },
         error => {
         }); 
    }

    // openEditModal(template: TemplateRef<any>, batch) {
    //     this.modalRef = this.modalService.show(template);
    //     this.editBatch = Object.assign({}, batch);
    //     if (this.editBatch && this.editBatch.batchEndDate) {
    //         this.editBatch.batchEndDate = new Date(this.editBatch.batchEndDate);
    //     }
    // }

}
