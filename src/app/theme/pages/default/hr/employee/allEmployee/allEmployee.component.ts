import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { HrService } from '../../hr.service';
declare var $;

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
    templateUrl: "./allEmployee.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AllEmployeeComponent implements OnInit, AfterViewInit {
    employeeData: any = [];
    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
   


    constructor(private _script: ScriptLoaderService,
        private _hrService: HrService) {

    }
    ngOnInit() {
        this.loadAllEmployee();
    }

    ngAfterViewInit() {
    }

    loadAllEmployee() {
        this._hrService.getAllEmployee()
            .subscribe(
            data => {
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