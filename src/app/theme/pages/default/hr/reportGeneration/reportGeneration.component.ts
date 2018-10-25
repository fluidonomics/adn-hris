import { Component, OnInit } from '@angular/core';
import { CommonService } from "../../../../../base/_services/common.service";
import { HrService } from '../hr.service';


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

    constructor(private _commonService: CommonService, 
                private _hrService: HrService) { }

    ngOnInit() {
        this.initDropdown();
    }

    initDropdown() {
        this.loadCompanies();
        this.loadDivision();
        this.loadAllEmployee();
        this.loadGrade();
        /* this.loadManagementType();
        this.loadEmploymentStatus();
        this.loadDocuments(); */
        //this.loadRoles();
    }

    reportsData: any = [
        { _id: '1', reportName: 'KRA' },
        { _id: '2', reportName: 'Leaves' },
        { _id: '3', reportName: 'Profile' }
    ];

    loadStatus(reportId: number) {
        if(reportId == 1){
            this.getKRAList();
        }
        else if(reportId == 2){
            this.getLeaveTypes();
        }
        else if(reportId == 3){
            this.getProfileList();
        }
    }

    getLeaveTypes() {
        /*this._hrService.getLeaveTypes().subscribe(res => {
            if (res.ok) {
                this.statusData = res.json();
            }
        });*/

        this.statusData = [
            { _id: '1', statusName: 'Leave Status 1' },
            { _id: '2', statusName: 'Leave Status 2' },
            { _id: '3', statusName: 'Leave Status 3' }
        ];
    }

    getKRAList(){
        this.statusData = [
            { _id: '1', statusName: 'KRA_1' },
            { _id: '2', statusName: 'KRA_2' },
            { _id: '3', statusName: 'KRA_3' }
        ];
    }

    getProfileList(){
        this.statusData = [
            { _id: '1', statusName: 'Profile_1' },
            { _id: '2', statusName: 'Profile_2' },
            { _id: '3', statusName: 'Profile_3' }
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

    loadAllEmployee() {
        this._hrService.getAllEmployee()
            .subscribe(
            res => {
                this.addreport.employee_Id = null;
                this.employeesData = res.json().data;
            },
            error => {
            });
    }
}