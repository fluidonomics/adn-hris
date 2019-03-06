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
    templateUrl: "./allLearningSupervisor.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [LearningService]
})
export class AllLearningSupervisor implements OnInit {
    constructor(
        public authService: AuthService,
        private utilityService: UtilityService,
        private _route: ActivatedRoute,
        private myService: MyService,
        private router: Router,
        private learningService: LearningService
    ) {
    }
    learningData: any = [];
    param_from: string;
    imageBase: any;
    employeesFilter: any = {
        date: this.myService.getAllEmployeeByReviewerId(this.authService.currentUserData._id),
        status: 'All',
        page: 1
    };
    ngOnInit() {
        this._route.params.subscribe(params => {
                this.param_from = params['from'];
        });
        this.getEmployeesLearning();
        this.imageBase = environment.content_api_base.apiBase;
    }
    getEmployeesLearning() {

        if(this.param_from == "approve") {
            this.learningService.getLearningBySupervisor(this.authService.currentUserData._id,"Submitted").subscribe(res => {
                this.learningData = res.json().result.message || [];
                //debugger;
            }, error => {
                console.log(error);
            });
        }
        else {
            this.learningService.getLearningBySupervisor(this.authService.currentUserData._id,"Approved").subscribe(res => {
                this.learningData = res.json().result.message || [];
                //debugger;
            }, error => {
                console.log(error);
            });
        }
        
    }

    goToLearningDetailedView(learning) {
        if(this.param_from == "approve") {
            this.router.navigateByUrl("/my/team/workflows/learning-detailed-view/" + "approval/" + learning.learning_master_details._id + "/" + learning.emp_details._id);
        }
        else {
            this.router.navigateByUrl("/my/team/workflows/learning-detailed-view/" + "view/" + learning.learning_master_details._id + "/" + learning.emp_details._id);
        }
        
    }
}