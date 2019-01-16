import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from "../../../../../../../base/_services/utilityService.service";
import { environment } from '../../../../../../../../environments/environment'
import { Router } from '@angular/router';
import { MyTeamService } from '../../my-team.service';

@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper--mtrinitiate',
    templateUrl: 'employee-search.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class EmployeeSearchComponent implements OnInit {

    employeeData: any = [];
    employeeFilterData: any = [];

    filterBy: any = {};
    divisionData: any = [];
    deparmentData: any = [];
    gradeData: any = [];
    _currentEmpId: number;
    itemPerPage: number = 20;

    imageBase: any;


    batchData: any = {
        "emp_id_array": []
    };
    key: any;
    p2: any;
    search: any;
    reverse: any;
    currentDate = new Date();
    isCheckAll: any;

    constructor(
        private _hrService: MyTeamService,
        private router: Router,
        private utilityService: UtilityService,
        public _authService: AuthService
    ) { }

    ngOnInit() {

        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.initDropdown();
            });
        this.imageBase = environment.content_api_base.imgBase;

    }
    initDropdown() {
        this.getAllEmployee();
    }


    getAllEmployee() {
        this.employeeData = [];
        this.utilityService.showLoader('#initiate-loader');
        this._hrService.getAllEmployee().subscribe(res => {
            let data = res.json();
            if (data.data.length > 0) {
                this.employeeData = data.data.filter(obj => obj.supervisor_id == this._currentEmpId) || [];
                this.utilityService.hideLoader('#initiate-loader');
            }
            else {
                this.employeeData = data.json().result || [];
                this.utilityService.hideLoader('#initiate-loader');
            }
        }, error => {
            this.utilityService.hideLoader('#initiate-loader');
        });

    }
    showDetail(employee: any, event: any) {
        this.router.navigateByUrl("/my/team/subordinate/transaction-history/" + employee._id);
    }

}