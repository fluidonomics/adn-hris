import { Component, Input, OnInit, OnChanges, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from "@angular/forms";

import * as d3 from "d3";


@Component({
  selector: "app-my-leaves-reports",
  templateUrl: "./reports.component.html",
  encapsulation: ViewEncapsulation.None,
})

export class ReportsComponent implements OnInit, AfterViewInit, OnChanges {


  leaveData: any = [];
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
  p2: number;

  @ViewChild('chart') private chartContainer: ElementRef;
  @ViewChild('leaveChart') private leaveChartContainer: ElementRef;
  private empChartData: Array<any>;
  private leaveChartData: Array<any>;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20 };
  private chart: any;
  private leaveChart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;


  constructor() {
    this.empChartData = [
      {
        0: "Jan",
        1: 52
      },
      {
        0: "Feb",
        1: 28
      },
      {
        0: "March",
        1: 63
      },
      {
        0: "April",
        1: 10
      },
      {
        0: "May",
        1: 20
      },
      {
        0: "June",
        1: 15
      },
      {
        0: "July",
        1: 18
      },
      {
        0: "Aug",
        1: 25
      },
      {
        0: "Sep",
        1: 45
      },
      {
        0: "Oct",
        1: 30
      },
      {
        0: "Nov",
        1: 35
      },
      {
        0: "Dec",
        1: 10
      }
    ];

    this.leaveChartData = [
      {
        0: "LOP",
        1: 9
      },
      {
        0: "PL",
        1: 15
      },
      {
        0: "COF",
        1: 17
      },
      {
        0: "CH",
        1: 5
      },
      {
        0: "MTL",
        1: 2
      }
    ];
  }

  ngOnInit(): void {
    this.createEmpChart();
    if (this.empChartData) {
      this.updateEmpChart();
    }

    this.createLeaveChart();
    if (this.leaveChartData) {
      this.updateLeaveChart();
    }
  }

  ngOnChanges() {
    if (this.empChartData) {
      this.updateEmpChart();
    }

    if (this.leaveChartData) {
      this.updateLeaveChart();
    }
  }

  ngAfterViewInit(): void {
    //this.loadChartEmployees();
    //this.loadChartLeaves();

  }


  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  createEmpChart() {
    let element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    let svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    // chart plot area
    this.chart = svg.append('g')
      .attr('class', 'bars')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    // define X & Y domains
    let xDomain = this.empChartData.map(d => d[0]);
    let yDomain = [0, d3.max(this.empChartData, d => d[1])];

    // create scales
    this.xScale = d3.scaleBand().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
    this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);

    // bar colors
    this.colors = d3.scaleLinear().domain([0, this.empChartData.length]).range(<any[]>['red', 'blue']);

    // x & y axis
    this.xAxis = svg.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
      .call(d3.axisBottom(this.xScale));
    this.yAxis = svg.append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisLeft(this.yScale));
  }

  createLeaveChart() {
    let element = this.leaveChartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    let svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    // chart plot area
    this.leaveChart = svg.append('g')
      .attr('class', 'bars')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    // define X & Y domains
    let xDomain = this.leaveChartData.map(d => d[0]);
    let yDomain = [0, d3.max(this.leaveChartData, d => d[1])];

    // create scales
    this.xScale = d3.scaleBand().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
    this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);

    // bar colors
    this.colors = d3.scaleLinear().domain([0, this.leaveChartData.length]).range(<any[]>['red', 'blue']);

    // x & y axis
    this.xAxis = svg.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
      .call(d3.axisBottom(this.xScale));
    this.yAxis = svg.append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisLeft(this.yScale));
  }

  updateEmpChart() {
    // update scales & axis
    this.xScale.domain(this.empChartData.map(d => d[0]));
    this.yScale.domain([0, d3.max(this.empChartData, d => d[1])]);
    this.colors.domain([0, this.empChartData.length]);
    this.xAxis.transition().call(d3.axisBottom(this.xScale));
    this.yAxis.transition().call(d3.axisLeft(this.yScale));

    let update = this.chart.selectAll('.bar')
      .data(this.empChartData);

    // remove exiting bars
    update.exit().remove();

    // update existing bars
    this.chart.selectAll('.bar').transition()
      .attr('x', d => this.xScale(d[0]))
      .attr('y', d => this.yScale(d[1]))
      .attr('width', d => this.xScale.bandwidth())
      .attr('height', d => this.height - this.yScale(d[1]))
      .style('fill', (d, i) => this.colors(i));

    // add new bars
    update
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => this.xScale(d[0]))
      .attr('y', d => this.yScale(0))
      .attr('width', this.xScale.bandwidth())
      .attr('height', 0)
      .style('fill', (d, i) => this.colors(i))
      .transition()
      .delay((d, i) => i * 10)
      .attr('y', d => this.yScale(d[1]))
      .attr('height', d => this.height - this.yScale(d[1]));
  }

  updateLeaveChart() {
    // update scales & axis
    this.xScale.domain(this.leaveChartData.map(d => d[0]));
    this.yScale.domain([0, d3.max(this.leaveChartData, d => d[1])]);
    this.colors.domain([0, this.leaveChartData.length]);
    this.xAxis.transition().call(d3.axisBottom(this.xScale));
    this.yAxis.transition().call(d3.axisLeft(this.yScale));

    let update = this.leaveChart.selectAll('.bar')
      .data(this.leaveChartData);

    // remove exiting bars
    update.exit().remove();

    // update existing bars
    this.leaveChart.selectAll('.bar').transition()
      .attr('x', d => this.xScale(d[0]))
      .attr('y', d => this.yScale(d[1]))
      .attr('width', d => this.xScale.bandwidth())
      .attr('height', d => this.height - this.yScale(d[1]))
      .style('fill', (d, i) => this.colors(i));

    // add new bars
    update
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => this.xScale(d[0]))
      .attr('y', d => this.yScale(0))
      .attr('width', this.xScale.bandwidth())
      .attr('height', 0)
      .style('fill', (d, i) => this.colors(i))
      .transition()
      .delay((d, i) => i * 10)
      .attr('y', d => this.yScale(d[1]))
      .attr('height', d => this.height - this.yScale(d[1]));
  }
}
