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
    _currentEmpId:number;
   


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
        this.loadDivision();
        this.loadDepartment();
        this.loadGrade();
    }


    ngAfterViewInit() { 
    }

    loadDivision() {
        this._commonService.getDivision()
            .subscribe(
            res => {
                if (res.ok) {
                    this.employeeData = [];
                    this.divisionData = res.json();
                }
            },
            error => {
            });
    }

    loadDepartment(division_id?: number) {
        this._commonService.getDepartment(division_id)
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
        this._hrService.getAllEmployee()
            .subscribe(
            res => {
                let data= res.json().data || [];
                if(data.length >0)
                {
                    data = data.filter(obj => obj.HrScope_Id== this._currentEmpId);
                    this.employeeData = data || [];
                }
                else
                this.employeeData = data.json().data || [];
            },
            error => {
            });
    }

    savekraWorkFlowDetails(emp_id:number)
    {
        this._hrService.savekraWorkFlowDetails({emp_id:emp_id,status:'initiated'})
            .subscribe(
            res => {
                if(res.ok)
                {
                    swal("Initiate KRA", "Successfully", "success");
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

}

