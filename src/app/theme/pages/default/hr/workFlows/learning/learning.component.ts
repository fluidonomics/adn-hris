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
        "emp_id": []
    };

    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;

    _currentEmpId: number;
    currentEmpname: string;
    itemPerPage: number = 20;
    search: any;
    isCheckAll: boolean = false;
    imageBase: any;
    batchTypes: any = [
        { _id: "KRA", batchTypeName: "KRA", },
        { _id: "Learning", batchTypeName: "Learning", disabled: true },
        { _id: "PIP", batchTypeName: "PIP", disabled: true },
    ]
    fiscalYearId: string;

    constructor(
        private _hrService: HrService,
        private _commonService: CommonService,
        private utilityService: UtilityService,
        public _authService: AuthService,
        private learningService: LearningService
    ) {
    }

    ngOnInit() {
        this.fiscalYearId = this._commonService.getFiscalYearIdLocal();
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.currentEmpname = this._authService.currentUserData.fullName;
                this.initDropdown();
            });
        this.imageBase = environment.content_api_base.imgBase;
    }

    initDropdown() {
        this.loadDepartment();
        this.loadGrade();
        this.getAllEmployee();
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
                    console.log(error);
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
                    console.log(error);
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
                this.showdetail();
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
        this.showdetail();
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
                            }
                            if (this.filterBy.grades && this.filterBy.grades.length > 0) {
                                data = data.filter(obj => this.filterBy.grades.includes(obj.grade_id));
                            }
                            data = data.filter(obj => obj.hrScope_id == this._currentEmpId);
                            this.employeeData = data || [];
                            this.showdetail();
                            this.utilityService.hideLoader('#initiate-loader');
                        }
                        else {
                            this.employeeData = data.json().data || [];
                            this.showdetail();
                            this.utilityService.hideLoader('#initiate-loader');
                        }

                    },
                    error => {
                        this.utilityService.hideLoader('#initiate-loader');
                    });
        }
    }

    initBatch(form: any) {
        this.batchData.emp_id_array = this.employeeData.filter(function (employee, index, array) {
            return employee.checked;
        }).map(item => {
            return {
                emp_id: item._id
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
                if (result.value) {
                    this.batchData.createdBy = this._currentEmpId;
                    this.batchData.createdByName = this.currentEmpname;
                    this.batchData.fiscalYearId = this.fiscalYearId;
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
            }
            else {
                swal('Oops!', 'No employee selected', 'warning')
            }
        });
    }

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

    showdetail() {
        let i, j;
        for (i = 0; i < this.employeeData.length; i++) {
            for (j = 0; j < this.deparmentData.length; j++) {
                if (this.employeeData[i].department_id == this.deparmentData[j]._id) {
                    this.employeeData[i].departmentName = this.deparmentData[j].departmentName;
                }
            }
        }
        for (i = 0; i < this.employeeData.length; i++) {
            for (j = 0; j < this.gradeData.length; j++) {
                if (this.employeeData[i].grade_id == this.gradeData[j]._id) {
                    this.employeeData[i].gradeName = this.gradeData[j].gradeName;
                }
            }
        }
    }
}
