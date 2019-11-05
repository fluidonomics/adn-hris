import { Router } from '@angular/router';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HrService } from "../../hr.service";


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper-pap-eval-report",
    templateUrl: "./pap-eval-report.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./pap-eval-report.component.scss']
})

export class PapEvalReport implements OnInit {

    allEmployees: any = [];


    key: string = ''; //set default
    reverse: boolean = false;
    imageBase: any;
    itemPerPage: number = 10;
    p2: number = 1;
    search: any;

    constructor(
        private _hrService: HrService
    ) {

    }

    ngOnInit() {
        debugger;
        this._hrService.getAllEmployee().subscribe(res => {
            let employees = res.json().data || [];
            this.allEmployees = employees;
        })
    }

    downloadReport(empId){

    }

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
}