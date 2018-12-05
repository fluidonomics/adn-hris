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
    employeeFilterData:any=[];

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
        this.getAllEmployee();
    }

    loadDepartment(division_id?: number) {
        this._commonService.getDepartment()
            .subscribe(
            res => {
                if (res.ok) {
                   // this.employeeData = [];
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
    getAllEmployee(){  
        this.employeeData=[];  
        this.utilityService.showLoader('#initiate-loader');
        this._hrService.getAllEmployeeForMTR()
            .subscribe(
            res => {
                let data = res.json();                
                if (data.result.length > 0) {
                    
                    data = data.result.filter(obj => obj.emp_HRSpoc_id == this._currentEmpId);
                   // data= data.filter((obj, pos, arr) => { return arr.map(mapObj =>mapObj['_id']).indexOf(obj['_id']) === pos;});
                    this.employeeData = data || [];
                    this.utilityService.hideLoader('#initiate-loader');
                }
                else{
                    this.employeeData = data.json().result || [];
                    this.utilityService.hideLoader('#initiate-loader');
                }
                this.employeeFilterData= this.employeeData;
                    
            },
            error => {
                this.utilityService.hideLoader('#initiate-loader');
            });    

    }
    loadAllEmployee() {
        if (this.filterBy.grades || this.filterBy.departments) {
            if (this.filterBy.departments && this.filterBy.departments.length > 0) {
                this.employeeFilterData =this.employeeData.filter(obj => this.filterBy.departments.includes(obj.emp_department_id) && obj.emp_grade_id < 13);
                //data=data.filter(obj=>obj.department_id.some(e=>this.filterBy.departments.some(ele=>ele==e)))
            }
            if (this.filterBy.grades && this.filterBy.grades.length > 0) {
                this.employeeFilterData =this.employeeData.filter(obj => this.filterBy.grades.includes(obj.emp_grade_id));
                //data=data.filter(obj=>obj.grade_id.some(e=>this.filterBy.grades.some(ele=>ele==e)))
            }
        }
        else {
            this.employeeFilterData= this.employeeData;
        }
    }
    saveBulkMTR(form) {
        this.batchData.emp_id = this.employeeFilterData.filter(function(employee, index, array) {
            return employee.checked;
        }).map(item => {
            return item.emp_id
        });

        if(this.batchData.emp_id.length > 0)
        {
            console.log(this.batchData);
           // this.utilityService.showLoader('#initiate-loader');
            // this._hrService.saveBulkKra(this.batchData)
            //     .subscribe(
            //     res => {
            //         if (res.ok) {
            //             this.utilityService.hideLoader('#initiate-loader');
            //             swal("Success", "Batch Initiated Successfully", "success");
            //             form.resetForm();                        
            //         }
            //     },
            //     error => {
            //         this.utilityService.hideLoader('#initiate-loader');
            // });
        }
        else{
            swal('Oops!','No employee selected','warning')
        }
    }


}