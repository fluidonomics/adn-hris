import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from '../../../../../../base/_services/authService.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import swal from 'sweetalert2';
import { LeaveService } from '../leave.service';

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
    maxDaysValidation: any = {};
    proRatedMultiplier: number = 1;

    constructor(
        private authService: AuthService,
        private leaveService: LeaveService,
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
        this.maxDaysValidation = {
            isValid: false,
            msg: ''
        };
    }

    getLeaveTypes() {
        this.leaveService.getLeaveType().subscribe(
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
        this.leaveService.getAllEmployee().subscribe(
            res => {
                if (res.ok) {
                    let body = res.json();
                    this.employeeList = body.data || [];
                }
            },
            error => {
                console.error(error);
            });
    }

    getDepartments() {
        this.commonService.getDepartment().subscribe(
            res => {
                if (res.ok) {
                    let body = res.json();
                    this.departmentList = body || [];
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

        // Annual Leave
        if (this.grantLeave.leaveType == 1 && this.grantLeave.days > (20 * this.proRatedMultiplier)) {
            this.maxDaysValidation = {
                isValid: true,
                msg: 'Annual Leaves cannot be granted more than ' + (20 * this.proRatedMultiplier) + ' days.'
            }
            return;
        }
        // Sick Leave
        else if (this.grantLeave.leaveType == 2 && this.grantLeave.days > (14 * this.proRatedMultiplier)) {
            this.maxDaysValidation = {
                isValid: true,
                msg: 'Sick Leaves cannot be granted more than ' + (14 * this.proRatedMultiplier) + ' days.'
            }
            return;
        }

        if (form.valid) {
            swal({
                title: 'Are you sure?',
                text: "You want to Grant Leaves",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Grant Leaves'
            }).then((result) => {
                if (result.value) {
                    let body: any = {
                        "leave_type": this.grantLeave.leaveType,
                        "balance": this.grantLeave.days,
                        "updatedBy": this.employee._id,
                        "createdBy": this.employee._id,
                        "lapseDate": new Date(),
                        "createdDate": new Date(),
                        "updatedDate": new Date()
                    };
                    switch (this.currentCategory) {
                        case 'all': {
                            this.utilityService.showLoader('#fGrantLeave');
                            this.leaveService.grantLeaveAllEmployee(body).subscribe(res => {
                                if (res.ok) {
                                    this.utilityService.hideLoader('#fGrantLeave');
                                    swal("Leaves Granted", "", "success");
                                    this.resetForm(form);
                                }
                            },
                                err => this.handleError(this, err)
                            );
                            break;
                        }

                        case 'department': {
                            this.utilityService.showLoader('#fGrantLeave');
                            body.department_id = this.grantLeave.department;

                            this.leaveService.grantLeaveByDepartment(body).subscribe(res => {
                                if (res.ok) {
                                    this.utilityService.hideLoader('#fGrantLeave');
                                    swal("Leaves Granted", "", "success");
                                    this.resetForm(form);
                                }
                            },
                                err => this.handleError(this, err)
                            );
                            break;

                        }

                        case 'single': {
                            this.utilityService.showLoader('#fGrantLeave');
                            body.emp_id = this.grantLeave.employee;
                            this.leaveService.grantLeaveByEmployee(body).subscribe(res => {
                                if (res.ok) {
                                    this.utilityService.hideLoader('#fGrantLeave');
                                    swal("Leaves Granted", "", "success");
                                    this.resetForm(form);
                                }
                            },
                                err => this.handleError(this, err)
                            );
                            break;

                        }
                    }
                }
            })
        }
    }

    handleError(that, err) {
        that.utilityService.hideLoader('#fGrantLeave');
        let msg = "";
        if (err.error.message) {
            msg = err.error.message;
        }
        swal("An Error Occured", msg, "error");
    }

    resetForm(form) {
        form.resetForm();
        setTimeout(() => {
            this.initValues();
        }, 1);
    }
}
