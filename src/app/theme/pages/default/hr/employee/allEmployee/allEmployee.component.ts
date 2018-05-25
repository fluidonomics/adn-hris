import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../base/_services/authService.service";
import { HrService } from '../../hr.service';
declare var $;

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
    templateUrl: "./allEmployee.component.html",
    styleUrls: ['./allEmployee.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AllEmployeeComponent implements OnInit, AfterViewInit {
    employeeData: any = [];
    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    _currentEmpId: number;
    itemPerPage: number=10;
    
    profileProcess = {
        isEmployeeSubmitted: false,
        isHrSubmitted: false,
        isHrSendBack: false,
        isSupervisorApproved: false,
        isSupervisorSendBack: false
    }


    constructor(private _script: ScriptLoaderService,
        private _hrService: HrService,
        public _authService: AuthService) {

    }
    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.loadAllEmployee();
            });
    }

    ngAfterViewInit() {
    }

    loadAllEmployee() {
        this._hrService.getAllEmployee()
            .subscribe(
            res => {
                let data = res.json().data || [];
                if (data.length > 0) {
                    data = data.filter(obj => obj.hrScope_id == this._currentEmpId);
                    this.employeeData = data || [];
                }
                else
                    this.employeeData = data.json().data || [];
            },
            error => {
            });
    }

    getColumnName(column) {
        return column.replace(/([A-Z][a-z])/g, " $1").replace("_", " ").toUpperCase();
    }


    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    
    getStart()
    {
       return Math.max(this.itemPerPage * (this.p2 - 1) + 1, 1)
    }

    getEnd(filterCount)
    {
       let start = Math.max(this.itemPerPage * (this.p2 - 1) + 1, 1);
       return  Math.min(start + this.itemPerPage  - 1, filterCount);
    }
}