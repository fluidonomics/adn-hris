import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from "../../../../../../../base/_services/common.service";
import { MyService } from "../../../my.service";
import { environment } from "../../../../../../../../environments/environment";
import { tree } from 'd3';
import { KraService } from '../../../workflows/kra/kra.service';
import { LearningService } from '../../../../services/learning.service';
declare var moment;
@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./team-reviewer.component.html",
    encapsulation: ViewEncapsulation.None,
    providers:[LearningService]
})
export class MyTeamReviewerComponent implements OnInit {

    constructor(
        public authService: AuthService,
        private utilityService: UtilityService,
        private route: ActivatedRoute,
        private myService: MyService,
        private router: Router,
        private kraService: KraService,
        private learningService: LearningService
    ) {
    }
    employees: any = [];
    mtrEmployees: any = [];
    imageBase: any;
    employeeReverse: boolean = true;
    employeeSearch: any;
    employeesFilter: any = {
        date: this.myService.getAllEmployeeByReviewerId(this.authService.currentUserData._id),
        status: 'All',
        page: 1
    };
    mTRemployeeReverse: boolean = true;
    mTRemployeeSearch: any;
    mTRemployeesFilter: any = {
        date: this.myService.getAllEmployeeByReviewerId(this.authService.currentUserData._id),
        status: 'All',
        page: 1
    };
    learningData: any = [];
    learningSearch: any;
    learningReverse: boolean = true;

    goToAllEmployee() {
        this.router.navigate(['/my/team/workflows/reveiwer/employee/list']);
    }
    ngOnInit() {
        this.getallemployees();
        this.loadMTRInfo();
        this.getEmployeesLearning();
        this.imageBase = environment.content_api_base.apiBase;
    }
    loadMTRInfo() {
        this.myService.getMTRByReviewer(this.authService.currentUserData._id).subscribe(res => {
            if (res.ok) {
                let data = res.json();
                this.mtrEmployees = data.result.message;
                console.log(data);
            }

        })
    }

    getallemployees() {
        this.utilityService.showLoader("#employeeList");
        this.myService.getAllEmployeeByReviewerId(this.authService.currentUserData._id).subscribe(res => {
            if (res.ok) {
                this.utilityService.hideLoader("#employeeList");
                this.employees = res.json() || [];
                this.employees = this.employees.data.sort((a, b) => {
                    if (moment(a.kra.updatedAt).isBefore(b.kra.updatedAt)) return 1;
                    else if (!moment(a.kra.updatedAt).isBefore(b.kra.updatedAt)) return -1;
                    else return 0;
                });
                this.employees = this.employees.filter(a => a.kra.status == 'Submitted' || a.kra.status == 'Approved')

            }
        })
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

    goToKraReview(kra) {
        this.router.navigateByUrl('my/team/workflows/kra-review/' + kra._id + '/' + kra.emp_id);
    }
    goToMtrReview(employee) {
        this.router.navigateByUrl('my/team/workflows/mtr-review/' + employee.mtr_master_details._id + '/' + employee.emp_details._id);
    }
    goToLearningReview(learning) {
        this.router.navigateByUrl('my/team/workflows/learning-review/' + learning.learning_master_details._id + "/" + learning.emp_details._id);
    }
}

