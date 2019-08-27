import { Component, Input, OnInit, ViewEncapsulation, TemplateRef } from '@angular/core';
import { CommonService } from '../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from "../../../../../../../base/_services/utilityService.service";
import { BatchService } from "../../batch/batchService.service";
import { environment } from '../../../../../../../../environments/environment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyService } from "../../../../my/my.service";

import swal from 'sweetalert2';
import { PipService } from '../../../../services/pip.service';


@Component({
   selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
   templateUrl: "./pip-view.component.html",
   encapsulation: ViewEncapsulation.None,
   styleUrls: ['./pip-view.component.scss'],
   providers: [BatchService, PipService, MyService]
})

export class PipViewComponent implements OnInit {


   _currentEmpId: any;
   pipData: any = [];
   pipCommData : any = [];
   pipViewData: any =[];
   pipSearch: any;
   pipReverse: boolean = true;
   fiscalYearId: string;
   constructor(
      public authService: AuthService,
      private utilityService: UtilityService,
      private route: ActivatedRoute,
      private myService: MyService,
      private router: Router,
      private pipService: PipService,
      private _commonService: CommonService
   ) {
     
   }
   //pipData: any = [];
   imageBase: any;
   employeesFilter: any;
   ngOnInit() {
      this.fiscalYearId = this._commonService.getFiscalYearIdLocal();
      this.employeesFilter = {
         date: this.myService.getAllEmployeeByReviewerId(this.authService.currentUserData._id, this.fiscalYearId),
         status: 'All',
         page: 1
      };
      this.getEmployeesPip();
      this.imageBase = environment.content_api_base.apiBase;
   }
   getEmployeesPip() {
      this.pipService.getPipByHr(this.authService.currentUserData._id, this.fiscalYearId).subscribe(res => {
         this.pipData = res.json().result.message || [];
         this.pipData = this.pipData.filter(pip => pip.pip_master.status==="Completed");
         this.pipCommData =  this.pipData.filter(pip => pip.pip_master.hr_final_com =="" || pip.pip_master.hr_final_com === null);
         this.pipViewData =  this.pipData.filter(pip => pip.pip_master.hr_final_com !="" && pip.pip_master.hr_final_com !== null);
      }, error => {
         console.log(error);
      });
   }

   goToPipDetailView(pip) {
      this.router.navigateByUrl('hr/workflows/view/detailview/' + pip.pip_master._id + "/" + pip.emp_details._id);
   }

}
