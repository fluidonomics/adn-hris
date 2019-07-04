import { AmChart, AmChartsService } from "@amcharts/amcharts3-angular";
import { ViewEncapsulation, Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ScriptLoaderService } from "../../../../../../../_services/script-loader.service";

@Component({
    selector: "app-my-leaves-chart-monthly-leave",
    // templateUrl: "./monthly-leave-chart.component.html",
    template: `<div id="chartdiv"></div>`,
    encapsulation: ViewEncapsulation.None
})
export class MonthlyLeaveChartComponent implements OnChanges {

    @Input() chartData: any = [];
    @Input() options: AmChartOptions = {};

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
        this.clearJsTag();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.chartData.currentValue.length > 0) {
            changes.chartData.currentValue.forEach((leave, i) => {
                leave.color = this.colors[i];
            });
            this.createChart();
        }
    }

    clearJsTag() {
        setInterval(() => {
            $('.amcharts-chart-div a').remove();
        }, 1000);
    }

    colors = [
        "#FF0F00", "#FF6600", "#FF9E01"
    ]

    createChart() {

        console.log("chart data : ", this.chartData);
        let chartOptions = {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": this.chartData,
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Leaves Taken",
                "precision": 0
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
        };

        if (this.options.valueAxes && this.options.valueAxes.precision) {
            chartOptions.valueAxes[0].precision = this.options.valueAxes.precision;
        }

        this.chart = this.AmCharts.makeChart("chartdiv", chartOptions);
    }

    ngOnDestroy() {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    }
}

export interface AmChartOptions {
    valueAxes?: valueAxes
}

export interface valueAxes {
    axisAlpha?: number;
    position?: string;
    title?: string;
    precision?: number;
}