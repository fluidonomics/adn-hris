import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../base/_services/authService.service";
import { UtilityService } from "../../../../../../base/_services/utilityService.service";
import { HrService } from '../../hr.service';
import { environment } from '../../../../../../../environments/environment'
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


    key: string = '';
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
        public _authService: AuthService) {
    }

    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.initDropdown();
            });
        this.imageBase = environment.content_api_base.imgBase;
        this.loadAllEmployee();
    }

    initDropdown() {
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
                    this.gradeData = this.gradeData.filter(item =>
                        item._id < 13
                    );
                }
            },
            error => {
            });
    }

    loadAllEmployee() {
        // if (this.filterBy.grades || this.filterBy.departments) {
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
        // }
        // else {
        //     this.employeeData = [];
        // }
    }

    saveBulkKra(form) {
        this.batchData.emp_id = this.employeeData.filter(function (employee, index, array) {
            return employee.checked;
        }).map(item => {
            return item._id
        });

        if (this.batchData.emp_id.length > 0) {
            swal({
                title: 'Are you sure?',
                text: "",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value) {
                    this.utilityService.showLoader('#initiate-loader');
                    this.batchData.fiscalYearId = this._commonService.getFiscalYearIdLocal();
                    this._hrService.saveBulkKra(this.batchData).subscribe(res => {
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
            });
        }
        else {
            swal('Oops!', 'No employee selected', 'warning')
        }
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
        this.key = '';
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

