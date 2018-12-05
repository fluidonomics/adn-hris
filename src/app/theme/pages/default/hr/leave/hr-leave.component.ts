import { Component, OnInit, ViewEncapsulation, Inject, PLATFORM_ID, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from "@angular/platform-browser";
import { FormBuilder, NgForm } from "@angular/forms";
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { UtilityService } from '../../../../../base/_services/utilityService.service';
import { AuthService } from "../../../../../base/_services/authService.service";
import { CommonService } from "../../../../../base/_services/common.service";
import { LeaveService } from "../../my/leaves/leave.service";
import { HrService } from '../hr.service';
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { environment } from "../../../../../../environments/environment";
import * as _ from 'lodash';
import {} from '../../../../../../../..'
@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./hr-leave.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./hr-leave.component.css'],
})
export class HrLeaveComponent implements OnInit {

    @ViewChild('leaveQuota') leaveQuota: NgForm;

    employees = [];
    employeesListToShow = [];
    employeeGridData = [];
    departmentData = [];
    selectionType = [];
    leaveTypes = [];
    leaveBalance = [];
    selectedEmployee = {};
    annualLeaveBalance = 0;
    sickLeaveBalance = 0;
    specialLeaveBalance = 0;
    maternityLeaveBalance = 0;
    request = {
        is_paid: false,
        leave_type: null,
        balance: null,
        emp_id: null,
        _id: null
    }
    isMaternity: boolean;
    isSpecial: boolean;
    //grid variables
    key: string = ''; //set default
    reverse: boolean = false;
    imageBase:any;
    itemPerPage: number = 10;
    p2: number = 1;
    search: any;
    displaySelection: string;
    departmentId: number;
    // data for grid
    employeeEligibleForSpecialLeave: any[];
    employeeNotEligibleForSpecialLeave: any[];
    employeeEligibleForSpecialUnpaidLeave: any[];
    employeeNotEligibleForSpecialUnpaidLeave: any[];
    // data for grid
   

    constructor( private _router: Router, public _authService: AuthService, private _commonService: CommonService, 
    private _hrService: HrService, private modalService: BsModalService, private _leaveService: LeaveService) {

    }
    ngOnInit() {
        this.isMaternity = false;
        this.isSpecial = false;
        this.selectionType = [
            "All",
            "Department",
            "Single"
        ];
        this._leaveService.getAllEmployeeManagementType().subscribe(res => {
            if (res.ok) {
                this.employees = res.json() || {};
                this.employeeEligibleForSpecialLeave = _.filter(this.employees, (emp) => emp.leave_type !== 4 );
                this.employeeEligibleForSpecialLeave = this.getDistinctSelectedData(this.employeeEligibleForSpecialLeave);
                this.employeeNotEligibleForSpecialLeave = _.filter(this.employees, (emp) => emp.leave_type === 4);
                this.employeeNotEligibleForSpecialLeave = this.getDistinctSelectedData(this.employeeNotEligibleForSpecialLeave);
                this.employeeEligibleForSpecialUnpaidLeave = _.filter(this.employees, (emp) => emp.leave_type !== 5 );
                this.employeeEligibleForSpecialUnpaidLeave = this.getDistinctSelectedData(this.employeeEligibleForSpecialUnpaidLeave);
                this.employeeNotEligibleForSpecialUnpaidLeave = _.filter(this.employees, (emp) => emp.leave_type === 5);
                this.employeeNotEligibleForSpecialUnpaidLeave = this.getDistinctSelectedData(this.employeeNotEligibleForSpecialUnpaidLeave);
            }
        }, err => {
            console.log(err);
        })
        this._leaveService.getLeaveTypes().subscribe(res => {
            if (res.ok) {
                this.leaveTypes = res.json() || {};
                this.leaveTypes = this.leaveTypes.filter(f => f._id > 2);
            }
        }, err => {
            console.log(err);
        })
        this._commonService.getDepartment().subscribe(res => {
            this.departmentData = res.json() || {};
            console.log(this.departmentData);
        }, err => {
            console.log(err);
        })
        //grid initialisation
        this.imageBase= environment.content_api_base.imgBase;
    }

    getDistinctSelectedData(data: any) : any {
        var selectedColumn = ['_id', 'fullName', 'profileImage', 'officeEmail', 'designation', 'supervisorName', 'supervisorId', 'departmentId', 'supervisorEmail', 'leavebalance' ];
        return _.uniqBy(_.map(data, _.partialRight(_.pick, selectedColumn)), '_id');
    }
    
    leaveTypeSelect(data: any) {
        if (data.type === "Maternity Leave") {
            this.employeesListToShow =   this.getDistinctSelectedData(this.employees.filter(f => f.gender === "Female"));
            this.isMaternity = true;
            this.isSpecial = false;
        } else {
            if(data.type === "Special Leave")
                this.employeesListToShow = this.employeeEligibleForSpecialLeave;
            else if(data.type === "Special Leave (unpaid)")
                this.employeesListToShow = this.employeeEligibleForSpecialUnpaidLeave;
            this.isMaternity = false; 
            this.isSpecial = true;
        }
    }
    //show leave balance for single employee 
    onEmployeeSelect($event) {
        var empData = this.employees.filter(f => f._id === $event._id);
        this.annualLeaveBalance = _.find(empData, (e) => e.leave_type === 1) ? _.find(empData, (e) => e.leave_type === 1).remaining_balance : 0;
        this.sickLeaveBalance = _.find(empData, (e) => e.leave_type === 2) ? _.find(empData, (e) => e.leave_type === 2).remaining_balance : 0;
        this.maternityLeaveBalance = _.find(empData, (e) => e.leave_type === 3) ? _.find(empData, (e) => e.leave_type === 3).remaining_balance : 0;
        this.specialLeaveBalance = _.find(empData, (e) => e.leave_type === 4) ? _.find(empData, (e) => e.leave_type === 4).remaining_balance : 0;
    }
    onDepartmentSelect(data) {
        this.departmentId = data._id;
        this.filterData();
    }
    onSelectionTypeChange(data: any) {
        this.displaySelection = data;
        this.filterData();
    }
    filterData() {
        switch(this.displaySelection) {
            case "All":
                this.employeeGridData = this.employeeEligibleForSpecialLeave;
            break;
            case "Department":
                this.employeeGridData = this.employeeEligibleForSpecialLeave.filter(f => f.departmentId === this.departmentId) 
            break;
            case "Single":
                this.employeeGridData = [];
            break;
        }
    }
    clear() {
        this.leaveQuota.resetForm();
        this.request = {
            is_paid: false,
            leave_type: null,
            balance: null,
            emp_id: null,
            _id: null
        }
        this.annualLeaveBalance = 0;
        this.sickLeaveBalance = 0;
        this.specialLeaveBalance = 0;
        this.maternityLeaveBalance = 0;
        this.isMaternity  =false;
        this.isSpecial = false;
        this.employeeGridData = [];
        this.displaySelection = "";
        
    }
    // on submit
    provideLeave(form) {
        if (form.valid) {
          if(this.request.leave_type === 3){
              this.provideMaternityQuota(form);
          }
          else if(this.request.leave_type === 4 || this.request.leave_type === 5) {
            this.provideSpecialLeave(form);
        }
        } 
            
    }
    provideMaternityQuota(form) {
        let currentEmpDetails = this.employees.filter(f => f._id == this.request._id);
            let data = {
                fullName: currentEmpDetails[0].fullName,
                officeEmail: currentEmpDetails[0].officeEmail,
                supervisor: currentEmpDetails[0].supervisorName,
                supervisor_id: currentEmpDetails[0].supervisorId,
                supervisor_email: currentEmpDetails[0].supervisorEmail,
                emp_id: this.request._id,
                leave_type: this.request.leave_type,
                balance: this.request.balance,
                fiscalYearId: 2, //need to replace with fiscalYear id
                createdBy: 2 //need to replace with HR id
            }

            this._leaveService.addMaternityLeaveQuota(data).subscribe(res => {
                if (res.ok) {
                    swal("Leave quota provided", res.json().title, "success");
                    form.resetForm();
                    form.submitted = false;
                    this.clear();
                }
            }, err => {
                console.log(err);
            })
    }
    provideSpecialLeave(form) {
        
        if(this.displaySelection === "All" || this.displaySelection === "Department") {
            var selectedColumn = ['_id', 'fullName',  'officeEmail' ];
            var emp_array =_.map(this.employeeGridData, _.partialRight(_.pick, selectedColumn));
            let data = {
                emp_id_array: emp_array,
                leave_type: this.request.leave_type,
                balance: this.request.balance,
                fiscalYearId: 2, //need to replace with fiscalYear id
                createdBy: 2 //need to replace with HR id
            }
            this._leaveService.addSpecialLeaveBulkQuota(data).subscribe(res => {
                if (res.ok) {
                    swal("Leave quota provided", res.json().title, "success");
                    form.resetForm();
                    form.submitted = false;
                    this.clear();
                }
            }, err => {
                console.log(err);
            })
        } else {
            let currentEmpDetails = this.employees.filter(f => f._id == this.request._id);
            let data = {
                fullName: currentEmpDetails[0].fullName,
                officeEmail: currentEmpDetails[0].officeEmail,
                supervisor: currentEmpDetails[0].supervisorName,
                supervisor_id: currentEmpDetails[0].supervisorId,
                supervisor_email: currentEmpDetails[0].supervisorEmail,
                emp_id: this.request._id,
                leave_type: this.request.leave_type,
                balance: this.request.balance,
                fiscalYearId: 2, //need to replace with fiscalYear id
                createdBy: 2 //need to replace with HR id
            }
            this._leaveService.addSpecialLeaveQuota(data).subscribe(res => {
                if (res.ok) {
                    swal("Leave quota provided", res.json().title, "success");
                    form.resetForm();
                    form.submitted = false;
                    this.clear();
                }
            }, err => {
                console.log(err);
            })
        }
            
            
            
    }
    // on submit
    // grid functions
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    getStart() {
        return Math.max(this.itemPerPage * (this.p2 - 1) + 1, 1)
    }
    getEnd(filterCount) {
        let start = Math.max(this.itemPerPage * (this.p2 - 1) + 1, 1);
        return Math.min(start + this.itemPerPage - 1, filterCount);
    }
    // grid functions
 }
