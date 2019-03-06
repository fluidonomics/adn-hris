import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../base/_services/authService.service";
import { UtilityService } from "../../../../../../base/_services/utilityService.service";
import { HrService } from '../../hr.service';
import { environment } from '../../../../../../../environments/environment'
import swal from 'sweetalert2';
import { LearningService } from '../../../services/learning.service';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./learning.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HrLearningComponent {
    employeeData: any = [];

    filterBy: any = {};

    checkAll: any = {};
    currentDate = new Date();

    divisionData: any = [];
    deparmentData: any = [];
    gradeData: any = [];

    batchData: any = {
        "emp_id" : []
    };


    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;

    _currentEmpId: number;
    itemPerPage: number = 20;

    search: any;
    isCheckAll: boolean = false;

    imageBase: any;

    batchTypes: any = [
        { _id: "KRA", batchTypeName: "KRA", },
        { _id: "Learning", batchTypeName: "Learning", disabled: true },
        { _id: "PIP", batchTypeName: "PIP", disabled: true },
    ]

    constructor(
        private _hrService: HrService,
        private _commonService: CommonService,
        private utilityService: UtilityService,
        public _authService: AuthService,
        private learningService: LearningService
    ) {
        //this.batchData.emp_id=[];
    }

    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.initDropdown();
            });
        this.imageBase = environment.content_api_base.imgBase;
        //debugger;
    }

    initDropdown() {
        //this.loadDivision();
        this.loadDepartment();
        this.loadGrade();
        this.getAllEmployee();
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
                        this.gradeData = this.gradeData.filter(item =>
                            item._id < 13
                        );
                    }
                },
                error => {
                });
    }

    getAllEmployee() {
        
        this.employeeData = [];
        this.utilityService.showLoader('#initiate-loader');
        this._hrService.getAllEmployee().subscribe(res => {
            let data = res.json().data || [];
            if (data.length > 0) {
                data = data.filter(obj => obj.hrScope_id == this._currentEmpId);
                this.employeeData = data;
                debugger;
                this.utilityService.hideLoader('#initiate-loader');
            }
        }, error => {
            this.utilityService.hideLoader('#initiate-loader');
        });

    }

    onSelectAll($event) {
        this.employeeData.forEach(emp => {
            emp.checked = $event.target.checked;
        });
    }

    loadAllEmployee() {
        if (this.filterBy.grades || this.filterBy.departments) {
            this.utilityService.showLoader('#initiate-loader');
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
                            data = data.filter(obj => obj.hrScope_id == this._currentEmpId);
                            // data= data.filter((obj, pos, arr) => { return arr.map(mapObj =>mapObj['_id']).indexOf(obj['_id']) === pos;});
                            this.employeeData = data || [];
                            this.utilityService.hideLoader('#initiate-loader');
                        }
                        else {
                            this.employeeData = data.json().data || [];
                            this.utilityService.hideLoader('#initiate-loader');
                        }

                    },
                    error => {
                        this.utilityService.hideLoader('#initiate-loader');
                    });
        }
        else {
            this.employeeData = [];
        }
    }

    initBatch(form) {
        //debugger;
        this.batchData.emp_id_array = this.employeeData.filter(function (employee, index, array) {
            return employee.checked;
        }).map(item => {
            return {
                emp_id : item._id
            }
        });

        swal({
            title: 'Are you sure?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (this.batchData.emp_id_array.length > 0) {
                this.batchData.createdBy = this._currentEmpId;
    
                this.utilityService.showLoader('#initiate-loader');
                this.learningService.initBatch(this.batchData)
                    .subscribe(res => {
                        if (res.ok) {
                            this.utilityService.hideLoader('#initiate-loader');
                            swal("Success", "Batch Initiated Successfully", "success");
                            form.resetForm();
                            this.clearForm();
                        }
                    }, error => {
                        this.utilityService.hideLoader('#initiate-loader');
                    });
            }
            else {
                swal('Oops!', 'No employee selected', 'warning')
            }
        });


        
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
        this.getAllEmployee();
    }

}

