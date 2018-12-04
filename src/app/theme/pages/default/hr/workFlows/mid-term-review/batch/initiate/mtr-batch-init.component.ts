import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { UtilityService } from "../../../../../../../../base/_services/utilityService.service";
import { HrService } from '../../../../hr.service';
import {environment} from '../../../../../../../../../environments/environment'
import swal from 'sweetalert2';

@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper--mtrinitiate',
    templateUrl: 'mtr-batch-init.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class MtrBatchInitComponent implements OnInit {

    employeeData: any = [];

    filterBy: any = {};
    divisionData: any = [];
    deparmentData: any = [];
    gradeData: any = [];
    _currentEmpId: number;
    itemPerPage: number = 20;

    imageBase:any;


    batchData: any = {
        "emp_id": []
    };

    constructor( private _hrService: HrService,
        private _commonService: CommonService,
        private utilityService: UtilityService,
        public _authService: AuthService) { }

    ngOnInit() { 

        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.initDropdown();
            });
        this.imageBase=environment.content_api_base.imgBase;

    }
    initDropdown() {
       
        this.loadDepartment();
        this.loadGrade();
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
                    else{
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

}