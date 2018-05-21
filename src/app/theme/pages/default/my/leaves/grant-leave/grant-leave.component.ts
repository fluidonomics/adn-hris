import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from '../../../../../../base/_services/authService.service';
import { MyService } from '../../my.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import swal from 'sweetalert2';

@Component({
    selector: "app-my-leaves-grant-leave",
    templateUrl: "./grant-leave.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class GrantLeaveComponent implements OnInit {

    grantLeave: any = {};
    currentCategory: string;
    leaveTypesList: any = [];
    employeeList: any = [];
    employee: UserData;
    departmentList: any = [];

    constructor(
        private authService: AuthService,
        private myApiService: MyService,
        private commonService: CommonService,
        private utilityService: UtilityService
    ) {

    }

    ngOnInit(): void {
        this.employee = this.authService.currentUserData;
        this.initValues();
        this.getLeaveTypes();
        this.getEmployeeList();
        this.getDepartments();
    }

    initValues() {
        this.grantLeave.days = 1;
        this.currentCategory = 'all';
    }

    getLeaveTypes() {
        this.myApiService.getLeaveType().subscribe(
            res => {
                if (res.ok) {
                    this.leaveTypesList = res.json();
                }
            },
            error => {
                console.error(error);
            });
    }

    getEmployeeList() {
        this.myApiService.getAllEmployee().subscribe(
            res => {
                //debugger;
                if (res.ok) {
                    let body = res.json();
                    this.employeeList = body.data || [];
                    console.log(this.employeeList);
                }
            },
            error => {
                console.error(error);
            });
    }

    getDepartments() {
        this.commonService.getDepartment().subscribe(
            res => {
                //debugger;
                if (res.ok) {
                    let body = res.json();
                    this.departmentList = body || [];
                    console.log(this.departmentList);
                }
            },
            error => {
                console.error(error);
            });
    }

    onCategoryChange(event, form) {
        this.grantLeave.days = 1;
        this.grantLeave.department = null;
        this.grantLeave.employee = null;
        this.grantLeave.leaveType = null;
    }

    onGrantLeaveSubmit(form) {
        if (this.grantLeave.days <= 0)
            return;

        if (form.valid) {
            debugger;
            switch (this.currentCategory) {
                case 'all': {
                    this.utilityService.showLoader('#fGrantLeave');
                    let body = {
                        "leave_type": this.grantLeave.leaveType,
                        "balance": this.grantLeave.days,
                        "updatedBy": this.employee._id,
                        "createdBy": this.employee._id
                    }
                    this.myApiService.grantLeaveAllEmployee(body).subscribe(res => {
                        if (res.ok) {
                            this.utilityService.hideLoader('#fGrantLeave');
                            swal("Leaves Granted", "", "success");
                            this.resetForm(form);
                        }
                    },
                        error => {
                            this.utilityService.hideLoader('#fGrantLeave');
                        });
                    break;
                }

                case 'department': {
                    this.utilityService.showLoader('#fGrantLeave');
                    let body = {
                        "department_id": this.grantLeave.department,
                        "leave_type": this.grantLeave.leaveType,
                        "balance": this.grantLeave.days,
                        "updatedBy": this.employee._id,
                        "createdBy": this.employee._id
                    }
                    this.myApiService.grantLeaveByDepartment(body).subscribe(res => {
                        if (res.ok) {
                            this.utilityService.hideLoader('#fGrantLeave');
                            swal("Leaves Granted", "", "success");
                            this.resetForm(form);
                        }
                    },
                        error => {
                            this.utilityService.hideLoader('#fGrantLeave');
                        });
                    break;
                }

                case 'single': {
                    this.utilityService.showLoader('#fGrantLeave');
                    let body = {
                        "emp_id": this.grantLeave.employee,
                        "leave_type": this.grantLeave.leaveType,
                        "lapseDate": new Date(),
                        "balance": this.grantLeave.days,
                        "updatedBy": this.employee._id,
                        "createdBy": this.employee._id,
                        "createdDate": new Date(),
                        "updatedDate": new Date()
                    }
                    this.myApiService.grantLeaveByEmployee(body).subscribe(res => {
                        if (res.ok) {
                            this.utilityService.hideLoader('#fGrantLeave');
                            swal("Leaves Granted", "", "success");
                            this.resetForm(form);
                        }
                    },
                        error => {
                            this.utilityService.hideLoader('#fGrantLeave');
                        });
                    break;
                }
            }
        }
    }

    resetForm(form) {
        form.resetForm();
        this.initValues();
    }
}
