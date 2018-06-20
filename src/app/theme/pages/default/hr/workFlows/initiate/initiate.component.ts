import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../base/_services/authService.service";
import { HrService } from '../../hr.service';
import {environment} from '../../../../../../../environments/environment'
import swal from 'sweetalert2';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--krainitiate",
    templateUrl: "./initiate.component.html",
    styleUrls: ['./initiate.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class HrInitiateComponent implements OnInit, AfterViewInit {

    employeeData: any = [];

    filterBy: any = {};

    checkAll: any = {};
    currentDate = new Date();

    divisionData: any = [];
    deparmentData: any = [];
    gradeData: any = [];

    batchData: any = {
        "emp_id": []
    };


    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;

    _currentEmpId: number;
    itemPerPage: number = 20;

    search: any;
    isCheckAll: boolean = false;

    imageBase:any;

    batchTypes:any=[
       {_id:"KRA" ,batchTypeName:"KRA", },
       {_id:"Learning" ,batchTypeName:"Learning",disabled: true},
       {_id:"PIP" ,batchTypeName:"PIP",disabled: true},
    ]

    constructor(
        private _hrService: HrService,
        private _commonService: CommonService,
        public _authService: AuthService) {
        //this.batchData.emp_id=[];
    }

    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.initDropdown();
            });
        this.imageBase=environment.content_api_base.imgBase;
    }

    initDropdown() {
        //this.loadDivision();
        this.loadDepartment();
        this.loadGrade();
    }


    ngAfterViewInit() {
    }

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

    loadGrade() {
        this._commonService.getGrade()
            .subscribe(
            res => {
                if (res.ok) {
                    this.employeeData = [];
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
        if (this.filterBy.grades || this.filterBy.departments) {
            this._hrService.getAllEmployee()
                .subscribe(
                res => {
                    let data = res.json().data || [];
                    if (data.length > 0) {
                        if (this.filterBy.departments && this.filterBy.departments.length > 0) {
                            data = data.filter(obj => this.filterBy.departments.includes(obj.department_id) && obj.grade_id < 13);
                            //data=data.filter(obj=>obj.department_id.some(e=>this.filterBy.departments.some(ele=>ele==e)))
                        }
                        if (this.filterBy.grades && this.filterBy.grades.length > 0) {
                            data = data.filter(obj => this.filterBy.grades.includes(obj.grade_id));
                            //data=data.filter(obj=>obj.grade_id.some(e=>this.filterBy.grades.some(ele=>ele==e)))
                        }
                        this.employeeData = data || [];
                    }
                    else
                        this.employeeData = data.json().data || [];
                },
                error => {
                });
        }
        else {
            this.employeeData = [];
        }
    }

    saveBulkKra(form) {


        this.batchData.emp_id = this.employeeData.filter(function(employee, index, array) {
            return employee.checked;
        }).map(item => {
            return item._id
        });

        if(this.batchData.emp_id.length > 0)
        {
            this._hrService.saveBulkKra(this.batchData)
                .subscribe(
                res => {
                    if (res.ok) {
                        swal("KRA Workflow", "Initiated", "success");
                        form.resetForm();
                        this.clearForm();
                    }
                },
                error => {
            });
        }
        else{
            swal('Warning','Please Select at least one employee','warning')
        }
    }

    // getColumnName(column) {
    //     return column.replace(/([A-Z][a-z])/g, " $1").replace("_", " ").toUpperCase();
    // }

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

    selectAllEmployee($event) {
        this.employeeData.forEach(element => {
            element.checked = $event.target.checked;
        });
    }


    clearForm() {
        this.key = ''; //set default
        this.reverse = false;
        this.p2 = 1;
        this.isCheckAll = false;
        this.search = null
        this.filterBy = {}
        this.batchData = {
            emp_id: []
        };
        this.loadAllEmployee();
    }
}

