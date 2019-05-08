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

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./quotaProvider.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./quotaProvider.component.scss'],
})
export class QuotaProviderComponent implements OnInit {

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
    request: any = {
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
    imageBase: any;
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
    currentUser: any = {};
    currentFiscalYear: any;

    constructor(
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _hrService: HrService,
        private modalService: BsModalService,
        private _leaveService: LeaveService,
        private authService: AuthService,
        private utilityService: UtilityService
    ) {
    }
    ngOnInit() {
        this.currentUser = this._authService.currentUserData;
        this._commonService.getCurrentFinancialYear().subscribe(res => {
            this.currentFiscalYear = res;
        });
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
                this.employeeEligibleForSpecialLeave = _.filter(this.employees, (emp) => emp.leave_type !== 4);
                this.employeeEligibleForSpecialLeave = this.getDistinctSelectedData(this.employeeEligibleForSpecialLeave);
                this.employeeNotEligibleForSpecialLeave = _.filter(this.employees, (emp) => emp.leave_type === 4);
                this.employeeNotEligibleForSpecialLeave = this.getDistinctSelectedData(this.employeeNotEligibleForSpecialLeave);
                this.employeeEligibleForSpecialUnpaidLeave = _.filter(this.employees, (emp) => emp.leave_type !== 5);
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
        this.imageBase = environment.content_api_base.imgBase;
    }

    getDistinctSelectedData(data: any): any {
        var selectedColumn = ['_id', 'fullName', 'profileImage', 'officeEmail', 'designation', 'supervisorName', 'supervisorId', 'departmentId', 'supervisorEmail', 'leavebalance'];
        return _.uniqBy(_.map(data, _.partialRight(_.pick, selectedColumn)), '_id');
    }

    leaveTypeSelect(data: any) {
        if (data.type === "Maternity Leave") {
            this._leaveService.getEmployeeForQuotaProvide({ type: "maternity" }).subscribe(res => {
                this.employeesListToShow = res.json() || [];
                if (this.employeesListToShow && this.employeesListToShow.length > 0) {
                    this.employeesListToShow.forEach(emp => {
                        emp.displayName = emp.fullName + '(' + emp.userName + ')';
                    });
                }
            });
            this.isMaternity = true;
            this.isSpecial = false;
        } else {
            if (data.type === "Special Leave")
                this._leaveService.getEmployeeForQuotaProvide({ type: "special" }).subscribe(res => {
                    this.employeesListToShow = res.json() || [];
                });
            else if (data.type === "Special Leave (unpaid)")
                this.employeesListToShow = this.employeeEligibleForSpecialUnpaidLeave;
            this.isMaternity = false;
            this.isSpecial = true;
        }
        this.request._id = null;
    }
    //show leave balance for single employee 
    onEmployeeSelect($event) {
        // var empData = this.employees.filter(f => f._id === $event._id);
        // this.annualLeaveBalance = _.find(empData, (e) => e.leave_type === 1) ? _.find(empData, (e) => e.leave_type === 1).remaining_balance : 0;
        // this.sickLeaveBalance = _.find(empData, (e) => e.leave_type === 2) ? _.find(empData, (e) => e.leave_type === 2).remaining_balance : 0;
        // this.maternityLeaveBalance = _.find(empData, (e) => e.leave_type === 3) ? _.find(empData, (e) => e.leave_type === 3).remaining_balance : 0;
        // this.specialLeaveBalance = _.find(empData, (e) => e.leave_type === 4) ? _.find(empData, (e) => e.leave_type === 4).remaining_balance : 0;
        this._leaveService.getEmployeeLeaveBalance($event._id, this.currentFiscalYear._id).subscribe(res => {
            let balances = res.json() || [];
            if (balances && balances.length > 0) {
                this.annualLeaveBalance = balances.find(b => b.leaveTypeId == 1).leaveBalance;
                this.sickLeaveBalance = balances.find(b => b.leaveTypeId == 2).leaveBalance;
                this.maternityLeaveBalance = balances.find(b => b.leaveTypeId == 3).leaveBalance;
                this.specialLeaveBalance = balances.find(b => b.leaveTypeId == 4).leaveBalance;
            }
        });
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
        switch (this.displaySelection) {
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
        this.isMaternity = false;
        this.isSpecial = false;
        this.employeeGridData = [];
        this.displaySelection = "";

    }
    // on submit
    provideLeave(form) {
        let data: any = {
            leave_type: this.request.leave_type,
            balance: this.request.balance,
            fiscalYearId: this.currentFiscalYear._id,
            createdBy: this.currentUser._id,
            createdAt: new Date()
        };
        if (this.request.leave_type == 3) {
            data.emp_id = this.request._id;

        } else {
            data.emp_id = this.employeesListToShow.filter(x => {
                if (x.checked) {
                    return true;
                }
            }).map(y => {
                return y._id;
            });
            if (data.emp_id == null || data.emp_id.length == 0) {
                swal('Error', 'No Employees Selected', 'error')
                return;
            }
        }
        if (form.valid) {
            swal({
                title: 'Are you sure?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value) {
                    this.utilityService.showLoader('.m-portlet__body');
                    this._leaveService.provideLeaveQuota(data).subscribe(res => {
                        if (res.status == 200) {
                            swal('Success', 'Quota Provided Successfully', 'success');
                            this.utilityService.hideLoader('.m-portlet__body');
                            this.clear();
                        }
                        console.log(res);
                    }, err => {
                        swal('Error', 'Some Error Occurred', 'error');
                    });
                }
            });
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
            fiscalYearId: this.currentFiscalYear._id,
            createdBy: this.currentUser._id
        }

        this._leaveService.addMaternityLeaveQuota(data).subscribe((res) => this.handleSuccess(res), (err) => this.handleError(err));
    }
    provideSpecialLeave(form: NgForm) {
        if (this.displaySelection === "All" || this.displaySelection === "Department") {
            var selectedColumn = ['_id', 'fullName', 'officeEmail'];
            var emp_array = _.map(this.employeeGridData, _.partialRight(_.pick, selectedColumn));
            let data = {
                emp_id_array: emp_array,
                leave_type: this.request.leave_type,
                balance: this.request.balance,
                fiscalYearId: this.currentFiscalYear._id,
                createdBy: this.currentUser._id
            }
            this._leaveService.addSpecialLeaveBulkQuota(data).subscribe((res) => this.handleSuccess(res), (err) => this.handleError(err));
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
                fiscalYearId: this.currentFiscalYear._id,
                createdBy: this.currentUser._id
            }
            this._leaveService.addSpecialLeaveQuota(data).subscribe((res) => this.handleSuccess(res), (err) => this.handleError(err));
        }
    }

    handleSuccess(res) {
        this.utilityService.hideLoader('.m-portlet__body');
        if (res.ok) {
            swal("Leave quota provided", res.json().title, "success");
            this.leaveQuota.resetForm();
            this.clear();
        }
    }
    handleError(err) {
        this.utilityService.hideLoader('.m-portlet__body');
        console.log(err);
        if (err.error) {
            let error = err.error.json() || {};
            swal('Error', error.error.message, "error");
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
    selectAllEmployee($event) {
        this.employeesListToShow.forEach(element => {
            element.checked = $event.target.checked;
            // this.onChecked(element, $event.target);
        });
    }
    onUploadOutput($event, name) {
        console.log($event, name);
    }

    // grid functions
}
