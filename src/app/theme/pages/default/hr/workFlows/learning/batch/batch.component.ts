import { Component, Input, OnInit, ViewEncapsulation, TemplateRef } from '@angular/core';
import { CommonService } from '../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from "../../../../../../../base/_services/utilityService.service";
import { BatchService } from "../../batch/batchService.service";
import { environment } from '../../../../../../../../environments/environment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import swal from 'sweetalert2';


@Component({
   selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
   templateUrl: "./batch.component.html",
   encapsulation: ViewEncapsulation.None,
   styleUrls: ['./batch.component.css'],
   //providers: []
})

export class LearningBatchComponent implements OnInit {

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

     loadBatchFilter: any = {
      //date:  this.loadBatch(),
      status: 'All',
      page: 1
  };
  batchdatafilter: any = {       
      status: 'All',
      page: 1
  };
   
    constructor() {

    }

    ngOnInit() {

    }

}
