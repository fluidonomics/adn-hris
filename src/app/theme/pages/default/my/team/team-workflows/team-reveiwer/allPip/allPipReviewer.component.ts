import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonService } from '../../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../../base/_services/utilityService.service';
import { MyTeamService } from '../../../my-team.service';
import { environment } from "../../../../../../../../../environments/environment";
import swal from 'sweetalert2';
import { MyService } from "../../../../my.service";
import { PipService } from '../../../../../services/pip.service';


@Component({
   selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
   templateUrl: "./allPipReviewer.component.html",
   encapsulation: ViewEncapsulation.None,
   providers: [PipService]
})
export class AllPipReviewer implements OnInit {
   constructor(
      public authService: AuthService,
      private utilityService: UtilityService,
      private route: ActivatedRoute,
      private myService: MyService,
      private router: Router,
      private pipService: PipService
   ) {
   }
   pipData: any = [];
   imageBase: any;
   employeesFilter: any = {
      date: this.myService.getAllEmployeeByReviewerId(this.authService.currentUserData._id),
      status: 'All',
      page: 1
   };
   ngOnInit() {
      this.getEmployeesPip();
      this.imageBase = environment.content_api_base.apiBase;
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
      this.router.navigateByUrl('my/team/workflows/pip-review/' + pip.pip_master_details._id + "/" + pip.emp_details._id);
   }
}