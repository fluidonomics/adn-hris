import { AmChart, AmChartsService } from "@amcharts/amcharts3-angular";
import { ViewEncapsulation, Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ScriptLoaderService } from "../../../../../_services/script-loader.service";

@Component({
    selector: "app-my-grades-chart-monthly",
    // templateUrl: "./monthly-grade-chart.component.html",
    template: `<div id="chartdiv"></div>`,
    encapsulation: ViewEncapsulation.None
})
export class MonthlyGradeChartComponent implements OnChanges {

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
            changes.chartData.currentValue.forEach((grade, i) => {
                grade.color = this.colors[i];
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
        "#FF0F00", "#FF6600", "#FF9E01", "#825b32", "#a83005", "#ce06a9", "#9e17d3", "#4517d2",
        "#4dc9e2", "#04f729", "#f70450", "#7504f7", "#877d85", "#a994e0", "#856ec1", "#04bcef"
    ]

    createChart() {
        let chartOptions = {
            "type": "serial",
            "theme": "light",
            "marginRight": 10,
            "dataProvider": this.chartData,
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Count",
                "precision": 0
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
            "categoryField": "gradeName",
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