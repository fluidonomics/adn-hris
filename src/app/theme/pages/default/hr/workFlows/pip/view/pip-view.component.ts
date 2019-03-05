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
   pipSearch: any;
   pipReverse: boolean = true;

   constructor(
      public authService: AuthService,
      private utilityService: UtilityService,
      private route: ActivatedRoute,
      private myService: MyService,
      private router: Router,
      private pipService: PipService
   ) {

   }
   //pipData: any = [];
   imageBase: any;
   employeesFilter: any = {
      date: this.myService.getAllEmployeeByReviewerId(this.authService.currentUserData._id),
      status: 'All',
      page: 1
   };
   ngOnInit() {
      this.getEmployeesPip();
      this.imageBase = environment.content_api_base.apiBase;
      // debugger;
   }
   getEmployeesPip() {
      this.pipService.getPipByReviewer(this.authService.currentUserData._id).subscribe(res => {
         this.pipData = res.json().result.message || [];
         //debugger;
      }, error => {
         console.log(error);
      });
   }

   goToPipReview(pip) {
      this.router.navigateByUrl('hr/workflows/view/detailview/' + pip.pip_master_details._id + "/" + pip.emp_details._id);
   }

}
