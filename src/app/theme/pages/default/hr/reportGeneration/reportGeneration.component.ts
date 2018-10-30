import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../../../../base/_services/common.service";
import { HrService } from '../hr.service';
import * as FileSaver from 'file-saver';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--reports",
    templateUrl: "./reportGeneration.component.html",
    styleUrls: ['./reportGeneration.component.css'],
})

export class ReportGenerationComponent implements OnInit {

    addreport: any = {};
    companiesData: any = [];
    divisionData: any = [];
    deparmentData: any = [];
    gradeData: any = [];
    employeesData: any = [];
    statusData: any = [];
    kraReport: any = [];

    isTrue: boolean = false;

    constructor(private _commonService: CommonService, 
                private _hrService: HrService) { }

    ngOnInit() {
        this.initDropdown();
    }

    initDropdown() {
        this.loadCompanies();
        this.loadDivision();
        this.loadGrade();
    }

    reportsData: any = [
        { _id: '1', reportName: 'KRA' },
        { _id: '2', reportName: 'Leaves' },
        { _id: '3', reportName: 'Profile' }
    ];

    loadStatus(reportId: number) {
        if(reportId == 1){
            this.getKRAList();
            this.isTrue = false;
        }
        else if(reportId == 2){
            this.getLeaveTypes();
            this.isTrue = false;
        }
        else if(reportId == 3){
            this.isTrue = true;
        }
    }

    getLeaveTypes() {

        this.statusData = [
            { _id: '1', statusName: 'Applied' },
            { _id: '2', statusName: 'Approved' },
            { _id: '3', statusName: 'Rejected' },
            { _id: '4', statusName: 'PendingWithdrawal' },
            { _id: '5', statusName: 'Withdrawn' },
            { _id: '6', statusName: 'PendingCancellation' },
            { _id: '7', statusName: 'Cancelled' }
        ];
    }

    getKRAList(){
        this.statusData = [
            { _id: '1', statusName: 'Submitted' },
            { _id: '2', statusName: 'Initiated' },
            { _id: '3', statusName: 'Approved' },
            { _id: '4', statusName: 'SendBack' }
        ];
    }

     //load Companies Dropdown Data init
     loadCompanies() {
        this._commonService.getComapnies()
            .subscribe(
            res => {
                if (res.ok) {
                    this.addreport.company_id = null;
                    this.addreport.hrspoc_id = null;
                    this.addreport.businessHrHead_id = null;
                    this.addreport.groupHrHead_id = null;

                    this.companiesData = res.json();
                }
            },
            error => {
            });
    }

    //load Division Dropdown Data init
    loadDivision() {
        this._commonService.getDivision()
            .subscribe(
            res => {
                if (res.ok) {
                    this.divisionData = res.json();
                }
            },
            error => {
            });
    }

    //load Department Dropdown By divisonId 
    loadDepartment(division_id?: number) {
        this._commonService.getDepartment(division_id)
            .subscribe(
            res => {
                if (res.ok) {
                    this.addreport.department_id = null;
                    this.deparmentData = res.json();
                }
            },
            error => {
            });
    }

    loadEmployeeByDepartment(deptId?: number){
        if(deptId == null){
            this.employeesData = [];
        }
        else {
            this._hrService.getAllEmployee()
            .subscribe(
            res => {
                this.employeesData = res.json().data;
                this.employeesData = this.employeesData.filter(item => item.department_id == deptId)
            },
            error => {
            });
        }
    }

    loadGrade() {
        this._commonService.getGrade()
            .subscribe(
            res => {
                if (res.ok) {
                    this.gradeData = res.json();
                    this.gradeData=this.gradeData.filter(item=>
                        item._id < 13
                    );
                }
            },
            error => {
            });
    }

    loadEmployeeByGrade(dept_id?: number, grade_id?: number){

        if(dept_id == null) {
            this._hrService.getAllEmployee()
            .subscribe(
            res => {
                this.employeesData = res.json().data;
                this.employeesData = this.employeesData.filter(item => item.grade_id == grade_id)
            },
            error => {
            });
        }
        else {
            this._hrService.getAllEmployee()
            .subscribe(
            res => {
                this.employeesData = res.json().data;
                this.employeesData = this.employeesData.filter(
                    item => item.department_id == dept_id && 
                    item.grade_id == grade_id
                )
            },
            error => {
            });
        }
    }

    onDownload(){
       
            /* this._hrService.getKRAReport().subscribe(
                res => {
                    this.kraReport = res;
                },
                error => {
                });     */
                
            this._hrService.getKRAReport().subscribe((response) => {

                this.downloadFile(response)

                console.log(response);

                /* var mediaType = 'text/csv';
                var blob = new Blob([response['_body']], { type: mediaType });
                FileSaver.saveAs(blob); */
            }, err => {

            });


    }

    downloadFile(data: Response){
        var blob = new Blob([data['_body']], { type: 'text/csv' });
        var url= window.URL.createObjectURL(blob);
        window.open(url);
        FileSaver.saveAs(blob);
    } 
}