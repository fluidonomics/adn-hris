import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from "@angular/core";
import { PapService } from "../../../../services/pap.service";

import swal from 'sweetalert2';
import { UtilityService } from "../../../../../../../base/_services/utilityService.service";
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { HrService } from "../../../hr.service";
import { environment } from '../../../../../../../../environments/environment'


@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper.papinit',
    templateUrl: 'feedback-initiate.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [PapService]
})

export class FeedbackInitiateComponent implements OnInit {

    filterBy: any = {};
    batchData: any = {
        "emp_id_array": []
    };
    employees = [];
    selectedEmployees = [];
    employeeFilterData=[];
    itemPerPage: number = 20;
    search: any;
    reverse: any;
    currentDate = new Date();
    _currentEmpId: number;
    imageBase: any;

    constructor(
        private papService: PapService,
        private utilityService: UtilityService,
        public _authService: AuthService,
        private hrService:HrService
    ) {
    }

    ngOnInit() {
        this._authService.validateToken().subscribe(res => {
            this._currentEmpId = this._authService.currentUserData._id; 
            this.getAllEmployee();           
        });
        this.imageBase = environment.content_api_base.imgBase;
    }
    getAllEmployee(){
        this.hrService.getAllEmployee().subscribe(res=>{            
            if(res.ok){
                let data=res.json();
                this.employees=data.data;               
            }
        })
    }
    

    onFilterSelected(filterBy) {
        debugger;
        this.filterBy = {};
        Object.assign(this.filterBy, filterBy);
        this.filterEmployee();
        
    } 
    filterEmployee() {
        if (this.filterBy && (this.filterBy.grades || this.filterBy.departments)) {
            if (this.filterBy.departments && this.filterBy.departments.length > 0) {
                this.employeeFilterData = this.employees.filter(obj => this.filterBy.departments.includes(obj.emp_department_id) && obj.emp_grade_id < 13);
                //data=data.filter(obj=>obj.department_id.some(e=>this.filterBy.departments.some(ele=>ele==e)))
            }
            if (this.filterBy.grades && this.filterBy.grades.length > 0) {
                this.employeeFilterData = this.employees.filter(obj => this.filterBy.grades.includes(obj.emp_grade_id));
                //data=data.filter(obj=>obj.grade_id.some(e=>this.filterBy.grades.some(ele=>ele==e)))
            }
            if (this.filterBy.grades.length == 0 && this.filterBy.departments.length == 0) {
                this.employeeFilterData = this.employees;
            }
        }
        else {
            this.employeeFilterData = this.employees;
        }
    }  
    initFeedback(){
        let selectedData=this.employeeFilterData.filter(obj=> obj.checked==true);
        let selectedIds=selectedData.map(item=>{
            return item._id
        })
        this.papService.papSubmit(selectedIds).subscribe(res=>{

        });       
    } 

   

    initiateBatch(form) {
        if (form.valid) {
            let data: any = {
                batchName: this.batchData.batchName,
                batchEndDate: this.batchData.batchEndDate
            };
            data.emp_id_array = this.selectedEmployees.map(item => {
                return {
                    emp_id: item.emp_id,
                    mtr_master_id: item.mtr_master_id,
                    supervisor_id: item.supervisor_id,
                    officeEmail: item.emp_emailId,

                }
            });

            if (data.emp_id_array.length > 0) {
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
                        data.createdBy = this._currentEmpId;
                        this.utilityService.showLoader('#initiate-loader');
                        this.papService.initiatePapProcess(data).subscribe(res => {
                            if (res.ok) {
                                this.utilityService.hideLoader('#initiate-loader');
                                swal("Success", "Batch Initiated Successfully", "success");
                                form.resetForm();
                            }                           
                        }, error => {
                            this.utilityService.hideLoader('#initiate-loader');
                        });
                    }
                })
            }
            else {
                swal('Oops!', 'No employee selected', 'warning')
            }
        }
    }
}