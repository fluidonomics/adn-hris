import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../base/_services/authService.service";
import { HrService } from '../../hr.service';
declare var $;

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--krainitiate",
    templateUrl: "./initiate.component.html",
    styleUrls: ['./initiate.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class HrInitiateComponent implements OnInit, AfterViewInit {
    employeeData: any = [];
    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    _currentEmpId:number;
   


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
                let data= res.json().data || [];
                if(data.length >0)
                {
                    data = data.filter(obj => obj.HrScope_Id== this._currentEmpId);
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

}

