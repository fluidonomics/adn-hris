import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from "../../../../../../../base/_services/common.service";
import { MyService } from "../../../my.service";
import { environment } from "../../../../../../../../environments/environment";
@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./team-reviewer.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class MyTeamReviewerComponent implements OnInit {

    constructor(       
        public authService: AuthService,
        private utilityService: UtilityService,
        private route: ActivatedRoute,
        private myService: MyService,
        private router: Router,     
    ) {       
    }
    employees:any=[];
    imageBase:any;
    employeesFilter: any = {
        date: this.myService.getAllEmployeeByReviewerId(this.authService.currentUserData._id),
        status: 'All',
        page: 1
    };
    ngOnInit() {        
        this.getallemployees();
        this.imageBase=environment.content_api_base.apiBase;
    }
    getallemployees(){        
        this.myService.getAllEmployeeByReviewerId(this.authService.currentUserData._id).subscribe(res => {
            if(res.ok){              
             this.employees = res.json() || [];
             this.employees = this.employees.data.sort((a, b) => b._id - a._id);
             this.employees=this.employees.filter(a=>a.kra.status=='Submitted')
             console.log(this.employees);
            }
        })

    }
}

