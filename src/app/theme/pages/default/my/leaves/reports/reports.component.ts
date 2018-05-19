import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
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
    chartEmployee: AmChart;
    chartLeaves: AmChart;

    key: string = '';
    reverse: boolean = false;
    search: string = '';


    constructor(
        private AmCharts: AmChartsService
    ) {

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

        this.chartEmployee = this.AmCharts.makeChart("chartEmployee", {
            "type": "serial",
            "theme": "light",
            "allLabels": [{
                "text": "Leaves Taken By Month (All Employees)",
                "align": "left",
                "bold": true,
                "size": 18,
                "y": 10
            }],
            "marginRight": 70,
            "marginTop": 50,
            "dataProvider": data,
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>[[category]]: [[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "count"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "month",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 45
            }
        });
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

        this.chartLeaves = this.AmCharts.makeChart("chartLeaves", {
            "type": "serial",
            "theme": "light",
            "allLabels": [{
                "text": "Leaves Taken By Leave Type",
                "align": "left",
                "bold": true,
                "size": 18,
                "y": 10
            }],
            "marginRight": 70,
            "marginTop": 50,
            "dataProvider": data,
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>[[category]]: [[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "count"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "month",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 45
            }
        });
    }

    sort(key: string) {
        this.key = key;
        this.reverse = !this.reverse;
    }
}
