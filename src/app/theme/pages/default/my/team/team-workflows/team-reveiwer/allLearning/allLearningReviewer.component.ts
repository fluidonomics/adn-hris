import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonService } from '../../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../../base/_services/utilityService.service';
import { MyTeamService } from '../../../my-team.service';
import { environment } from "../../../../../../../../../environments/environment";
import swal from 'sweetalert2';
import { MyService } from "../../../../my.service";
import { LearningService } from '../../../../../services/learning.service';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
    templateUrl: "./allLearningReviewer.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [LearningService]
})
export class AllLearningReviewer implements OnInit {
    constructor(
        public authService: AuthService,
        private utilityService: UtilityService,
        private route: ActivatedRoute,
        private myService: MyService,
        private router: Router,
        private learningService: LearningService
    ) {
    }
    learningData: any = [];
    imageBase: any;
    employeesFilter: any = {
        date: this.myService.getAllEmployeeByReviewerId(this.authService.currentUserData._id),
        status: 'All',
        page: 1
    };
    ngOnInit() {
        this.getEmployeesLearning();
        this.imageBase = environment.content_api_base.apiBase;
    }
    getEmployeesLearning() {
      this.learningService.getLearningByReviewer(this.authService.currentUserData._id).subscribe(res => {
          this.learningData = res.json().result.message || [];
          //debugger;
          // this.learningData = this.learningData.filter(a => a.learning_master_details.status == 'Approved');
      }, error => {
          console.log(error);
      });
  } 

  goToLearningReview(learning) {
   this.router.navigateByUrl('my/team/workflows/learning-review/' + learning.learning_master_details._id + "/" + learning.emp_details._id);
}
}