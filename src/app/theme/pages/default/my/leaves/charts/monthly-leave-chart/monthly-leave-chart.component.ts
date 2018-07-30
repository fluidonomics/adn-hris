// import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
// import { ViewEncapsulation, Component } from "@angular/core";

// @Component({
//     selector: "app-my-leaves-chart-monthly-leave",
//     templateUrl: "./monthly-leave.component.html",
//     encapsulation: ViewEncapsulation.None
// })
// export class MonthlyLeaveChartComponent {
//     private chart: AmChart;

//     constructor(private AmCharts: AmChartsService) { }

//     ngAfterViewInit() {
//         this.chart = this.AmCharts.makeChart("chartdiv", {
//             "type": "serial",
//             "theme": "light",
//             "dataProvider": []
//         });
//     }

//     ngOnDestroy() {
//         if (this.chart) {
//             this.AmCharts.destroyChart(this.chart);
//         }
//     }
// }