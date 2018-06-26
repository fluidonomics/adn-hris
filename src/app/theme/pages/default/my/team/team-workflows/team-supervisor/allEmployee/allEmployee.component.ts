import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonService } from '../../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../../base/_services/utilityService.service';
import { MyTeamService } from '../../../my-team.service';
import { environment } from "../../../../../../../../../environments/environment";
import swal from 'sweetalert2';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
    templateUrl: "./allEmployee.component.html",
    styleUrls: ['./allEmployee.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AllEmployeeComponent implements OnInit, AfterViewInit {
    employeesData: any = [];
    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    _currentEmpId: number;
    itemPerPage: number = 10;

    profileProcess = {
        isEmployeeSubmitted: false,
        isHrSubmitted: false,
        isHrSendBack: false,
        isSupervisorApproved: false,
        isSupervisorSendBack: false
    }

    imageBase:any;
    contentBase:any;

    constructor(
        private _myTeamService:MyTeamService,
        private _commonService:CommonService,
        public _authService: AuthService,
        private _route: ActivatedRoute,
        private utilityService: UtilityService,
    ) {

    }
    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.loadAllEmployee();
        });
        this.imageBase= environment.content_api_base.imgBase;
        this.contentBase = environment.content_api_base.apiBase;
    }

    ngAfterViewInit() {
    }

    loadAllEmployee() {
        this.utilityService.showLoader('#allEmployee-loader');
        this._myTeamService.getAllEmployee()
            .subscribe(
            res => {
                let data = res.json().data || [];
                if (data.length > 0) {
                    data=data.filter(obj=>obj.supervisor_id==this._currentEmpId || obj.secondarySupervisor_id==this._currentEmpId || obj.groupHrHead_id==this._currentEmpId || obj.businessHrHead_id==this._currentEmpId);
                    this.employeesData = data || [];
                }
                this.utilityService.hideLoader('#allEmployee-loader');
            },
            error => {
                this.utilityService.hideLoader('#allEmployee-loader');
            });
    }

    getColumnName(column) {
        return column.replace(/([A-Z][a-z])/g, " $1").replace("_", " ").toUpperCase();
    }
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

    getStart() {
        return Math.max(this.itemPerPage * (this.p2 - 1) + 1, 1)
    }

    getEnd(filterCount) {
        let start = Math.max(this.itemPerPage * (this.p2 - 1) + 1, 1);
        return Math.min(start + this.itemPerPage - 1, filterCount);
    }
}