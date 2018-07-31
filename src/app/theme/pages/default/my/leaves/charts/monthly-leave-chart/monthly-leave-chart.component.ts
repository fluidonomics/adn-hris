import { AmChart, AmChartsService } from "@amcharts/amcharts3-angular";
import { ViewEncapsulation, Component } from "@angular/core";
import { ScriptLoaderService } from "../../../../../../../_services/script-loader.service";

@Component({
    selector: "app-my-leaves-chart-monthly-leave",
    // templateUrl: "./monthly-leave-chart.component.html",
    template: `<div id="chartdiv"></div>`,
    encapsulation: ViewEncapsulation.None
})
export class MonthlyLeaveChartComponent {
    private chart: AmChart;

    constructor(
        private AmCharts: AmChartsService,
        private scriptLoader: ScriptLoaderService
    ) {
        let amChartScripts = [
            'assets/amcharts/amcharts.js',
            'assets/amcharts/serial.js',
            'assets/amcharts/theme/light.js'
        ];
        this.scriptLoader.loadScripts('head', amChartScripts, true);
    }

    ngAfterViewInit() {
        this.createChart();
    }


    createChart() {
        let data = [{
            "leaveType": "Annual",
            "leaveCount": 6,
            "color": "#FF0F00"
        }, {
            "leaveType": "Sick",
            "leaveCount": 3,
            "color": "#FF6600"
        }, {
            "leaveType": "Special",
            "leaveCount": 2,
            "color": "#FF9E01"
        }];

        this.chart = this.AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": data,
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Leaves Taken"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>[[category]]: [[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "leaveCount"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "leaveType",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 45
            },
            "export": {
                "enabled": true
            }
        });
    }

    ngOnDestroy() {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    }
}