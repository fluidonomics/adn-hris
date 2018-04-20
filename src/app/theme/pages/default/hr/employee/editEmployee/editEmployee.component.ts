import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $;

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
    templateUrl: "./editEmployee.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class EditEmployeeComponent implements OnInit, AfterViewInit {
    employeeData: any = [];
    constructor(private _script: ScriptLoaderService,
        private _common: CommonService,
        private activatedRoute: ActivatedRoute, ) {

    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            let emp_id = params['id'];
            if (emp_id) {
                this.loadEmployeeData(emp_id);
            }
        });
    }

    ngAfterViewInit() {

    }

    loadEmployeeData(id?: any) {
        // this._authService.getAllEmployee(id)
        // .subscribe(
        // data => {
        //     this.employeeData=data.json()
        // },
        // error => {
        // });
    }
}