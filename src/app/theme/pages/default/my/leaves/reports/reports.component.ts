import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";

const now = new Date();

@Component({
    selector: "app-my-leaves-reports",
    templateUrl: "./reports.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ReportsComponent implements OnInit, AfterViewInit {


    leaveDate: any = [];
    yearList: any = [
        {
            year: 2017,
        },
        {
            year: 2018,
        }
    ];
    currentYear: number = 2018;

    key: string = '';
    reverse: boolean = false;
    search: string = '';


    constructor() {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.loadChartEmployees();
        this.loadChartLeaves();

    }

    loadChartEmployees() {
        const data = [
            {
                "month": "Jan",
                "count": 52,
                "color": "#5698C6"
            },
            {
                "month": "Feb",
                "count": 28,
                "color": "#C1D4ED"
            },
            {
                "month": "March",
                "count": 63,
                "color": "#FE9E49"
            },
            {
                "month": "Jan",
                "count": 10,
                "color": "#5698C6"
            },
            {
                "month": "Jan",
                "count": 10,
                "color": "#5698C6"
            },
            {
                "month": "Jan",
                "count": 10,
                "color": "#5698C6"
            },
            {
                "month": "Jan",
                "count": 10,
                "color": "#5698C6"
            },
            {
                "month": "Jan",
                "count": 10,
                "color": "#5698C6"
            },
            {
                "month": "Jan",
                "count": 10,
                "color": "#5698C6"
            },
            {
                "month": "Jan",
                "count": 10,
                "color": "#5698C6"
            },
            {
                "month": "Jan",
                "count": 10,
                "color": "#5698C6"
            },
            {
                "month": "Jan",
                "count": 10,
                "color": "#5698C6"
            }
        ];
    }

    loadChartLeaves() {
        const data = [
            {
                "month": "LOP",
                "count": 9,
                "color": "#5698C6"
            },
            {
                "month": "PL",
                "count": 15,
                "color": "#C1D4ED"
            },
            {
                "month": "COF",
                "count": 17,
                "color": "#FE9E49"
            },
            {
                "month": "CH",
                "count": 5,
                "color": "#5698C6"
            },
            {
                "month": "MTL",
                "count": 2,
                "color": "#5698C6"
            }
        ];

    }

    sort(key: string) {
        this.key = key;
        this.reverse = !this.reverse;
    }
}
