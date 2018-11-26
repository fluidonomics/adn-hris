import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonService } from '../../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../../base/_services/utilityService.service';
import { MyTeamService } from '../../../my-team.service';
import { environment } from "../../../../../../../../../environments/environment";
import swal from 'sweetalert2';
import { MyService } from "../../../../my.service";
import { KraService } from '../../../../workflows/kra/kra.service';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
    templateUrl: "./allEmployeeReviewer.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AllEmployeeReviewer implements OnInit {
    constructor(
        public authService: AuthService,
        private utilityService: UtilityService,
        private route: ActivatedRoute,
        private myService: MyService,
        private router: Router,
        private kraService: KraService
    ) {
    }
    employees: any = [];
    imageBase: any;
    employeesFilter: any = {
        date: this.myService.getAllEmployeeByReviewerId(this.authService.currentUserData._id),
        status: 'All',
        page: 1
    };
    ngOnInit() {
        this.getKraForReviewer();
        this.imageBase = environment.content_api_base.apiBase;
    }
    goToKRAView(id: any, empid: any) {
        this.router.navigate(['/my/team/workflows/kra-review/' + id + '/' + empid]);
    }

    getKraForReviewer() {
        this.kraService.getKraForReviewer(this.authService.currentUserData._id).subscribe(res => {
            if (res.ok) {
                this.employees = res.json() || [];
                this.employees = this.employees.data.sort((a, b) => b._id - a._id);
                this.employees = this.employees.filter(a => a.status == 'Submitted' || a.status == 'Approved')
                console.log(this.employees);
            }
        })

    }
}