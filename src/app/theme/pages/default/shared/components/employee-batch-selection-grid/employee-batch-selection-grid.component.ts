import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

import { HrService } from '../../../hr/hr.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { AuthService } from '../../../../../../base/_services/authService.service';
import { environment } from '../../../../../../../environments/environment'
import { thresholdFreedmanDiaconis } from 'd3';



@Component({
    selector: 'employee-batch-selection-grid',
    templateUrl: 'employee-batch-selection-grid.component.html'
})

export class EmployeeBatchSelectionGridComponent implements OnInit {

    @Input() filterBy: any = null;
    @Input() employeeData: any = [];

    @Output() employeeChecked = new EventEmitter();

    _currentEmpId: number;
    employeeFilterData: any = [];
    itemPerPage: number = 20;
    imageBase: any;
    search: any;
    reverse: any;
    currentDate = new Date();
    isCheckAll: any;
    checkedEmployees: any = []

    constructor(
        private _hrService: HrService,
        private _commonService: CommonService,
        private utilityService: UtilityService,
        public _authService: AuthService
    ) { }

    ngOnChanges(changes: SimpleChange) {
        console.log(this.filterBy);
        this.loadAllEmployee();
    }

    ngOnInit() {
        this._authService.validateToken().subscribe(res => {
            this._currentEmpId = this._authService.currentUserData._id;
            // this.getAllEmployee();
        });
        this.imageBase = environment.content_api_base.imgBase;
    }


    // getAllEmployee() {
    //     this.employeeData = [];
    //     this.utilityService.showLoader('#initiate-loader');
    //     this._hrService.getAllEmployeeForMTR().subscribe(res => {
    //         let data = res.json();
    //         if (data.result.length > 0) {
    //             data = data.result.filter(obj => obj.emp_HRSpoc_id == this._currentEmpId);
    //             // data= data.filter((obj, pos, arr) => { return arr.map(mapObj =>mapObj['_id']).indexOf(obj['_id']) === pos;});
    //             data.forEach(element => {
    //                 if (this.employeeData.filter(obj => obj.emp_id == element.emp_id).length == 0) {
    //                     this.employeeData.push(element);
    //                 }
    //             });
    //             // this.employeeData = data || [];              
    //             this.utilityService.hideLoader('#initiate-loader');
    //         }
    //         else {
    //             this.employeeData = data.json().result || [];
    //             this.utilityService.hideLoader('#initiate-loader');
    //         }
    //         this.loadAllEmployee();
    //     }, error => {
    //         this.utilityService.hideLoader('#initiate-loader');
    //     });

    // }

    loadAllEmployee() {
        if (this.filterBy && (this.filterBy.grades || this.filterBy.departments)) {
            if (this.filterBy.departments && this.filterBy.departments.length > 0) {
                this.employeeFilterData = this.employeeData.filter(obj => this.filterBy.departments.includes(obj.emp_department_id) && obj.emp_grade_id < 13);
                //data=data.filter(obj=>obj.department_id.some(e=>this.filterBy.departments.some(ele=>ele==e)))
            }
            if (this.filterBy.grades && this.filterBy.grades.length > 0) {
                this.employeeFilterData = this.employeeData.filter(obj => this.filterBy.grades.includes(obj.emp_grade_id));
                //data=data.filter(obj=>obj.grade_id.some(e=>this.filterBy.grades.some(ele=>ele==e)))
            }
            if (this.filterBy.grades.length == 0 && this.filterBy.departments.length == 0) {
                this.employeeFilterData = this.employeeData;
            }
        }
        else {
            this.employeeFilterData = this.employeeData;
        }
    }
    onChecked(employee, checkbox: HTMLInputElement) {
        if (checkbox.checked) {
            this.checkedEmployees.push(employee);
        } else {
            this.checkedEmployees.splice(this.checkedEmployees.indexOf(employee), 1)
        }
        this.employeeChecked.emit(this.checkedEmployees);
    }
}