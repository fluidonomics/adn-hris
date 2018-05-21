import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../base/_services/authService.service";
import { HrService } from '../../hr.service';
declare var $;
import swal from 'sweetalert2';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--krainitiate",
    templateUrl: "./initiate.component.html",
    styleUrls: ['./initiate.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class HrInitiateComponent implements OnInit, AfterViewInit {

    employeeData: any = [];

    filterSearch: any = {};

    divisionData: any = [];
    deparmentData: any = [];
    gradeData: any = [];


    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    _currentEmpId: number;
    itemPerPage: number=30;


    constructor(
        private _hrService: HrService,
        private _commonService: CommonService,
        public _authService: AuthService) {

    }

    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.initDropdown();
            });

    }

    initDropdown() {
        //this.loadDivision();
        this.loadDepartment();
        this.loadGrade();
    }


    ngAfterViewInit() {
    }

    // loadDivision() {
    //     this._commonService.getDivision()
    //         .subscribe(
    //         res => {
    //             if (res.ok) {
    //                 this.employeeData = [];
    //                 this.divisionData = res.json();
    //             }
    //         },
    //         error => {
    //         });
    // }

    loadDepartment(division_id?: number) {
        this._commonService.getDepartment()
            .subscribe(
            res => {
                if (res.ok) {
                    this.employeeData = [];
                    this.deparmentData = res.json();
                }
            },
            error => {
            });
    }
    //load Grade Dropdown By managementType_id  && employmentType_id
    loadGrade() {
        this._commonService.getGrade()
            .subscribe(
            res => {
                if (res.ok) {
                    this.employeeData = [];
                    this.gradeData = res.json();
                }
            },
            error => {
            });
    }

    loadAllEmployee() {
        if(this.filterSearch.grades && this.filterSearch.departments)
        {
        this._hrService.getAllEmployee()
            .subscribe(
            res => {
                let data = res.json().data || [];
                if (data.length > 0) {
                    if(this.filterSearch.departments &&  this.filterSearch.departments.length>0)
                    {
                      data = data.filter(obj => obj.department_id == this.filterSearch.departments.includes(obj.department_id));
                    }
                    if(this.filterSearch.grades && this.filterSearch.grades.length>0)
                    {
                        data = data.filter(obj =>this.filterSearch.grades.includes(obj.grade_id));
                    }
                    this.employeeData = data || [];
                }
                else
                    this.employeeData = data.json().data || [];
            },
            error => {
            });
        }
        else{
            this.employeeData = [];
        }
    }

    savekraWorkFlowDetails(emp_id: number) {
        this._hrService.savekraWorkFlowDetails({ emp_id: emp_id, status: 'initiated' })
            .subscribe(
            res => {
                if (res.ok) {
                    swal("KRA Workflow", "Initiated", "success");
                }
            },
            error => {
            });
    }

    getColumnName(column) {
        return column.replace(/([A-Z][a-z])/g, " $1").replace("_", " ").toUpperCase();
    }

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    clearFormData() {
        this.deparmentData = [];
        this.gradeData = [];
        this.divisionData = [];
    }

    getStart()
    {
       return Math.max(this.itemPerPage * (this.p2 - 1) + 1, 1)
    }

    getEnd(filterCount)
    {
       let start = Math.max(this.itemPerPage * (this.p2 - 1) + 1, 1);
       return  Math.min(start + this.itemPerPage  - 1, filterCount);
    }

    selectAllEmployee($event)
    {
        this.employeeData.forEach(element => {
            element.checked=$event.target.checked;
        });
    }

}

