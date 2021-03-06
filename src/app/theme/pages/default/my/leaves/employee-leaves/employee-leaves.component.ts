import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { LeaveService } from '../leave.service';

const now = new Date();

@Component({
    selector: "app-my-leaves-employee-leaves",
    templateUrl: "./employee-leaves.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class EmployeeLeavesComponent implements OnInit {


    leaveTypesDetails: any;
    selectedLeaveType: any;
    sessions: any = [2016, 2017, 2018];
    currentSession: any;
    employeeList: any;
    selectedEmployee: any;
    leaveDetails: any = [];
    fiscalYearId: string;
    p2: number = 1;
    key: string = '';
    reverse: boolean = false;
    search: string = '';

    constructor(
        private leaveService: LeaveService,
        private utilityService: UtilityService
    ) {

    }

    ngOnInit(): void {
        this.getLeaveTypes();
        this.getEmployeeList();
        this.currentSession = 2017;
    }

    getLeaveTypes() {
        this.leaveService.getLeaveTypes().subscribe(
            res => {
                if (res.ok) {
                    this.leaveTypesDetails = res.json();
                    this.selectedLeaveType = this.leaveTypesDetails[0];
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

    changeLeaveType(event, leaveType) {
        this.selectedLeaveType = leaveType;
    }

    changeSession(session) {
        this.currentSession = session;
    }

    changeEmployee() {
        this.leaveDetails = [];
        this.getEmployeeLeaves();
    }

    getEmployeeLeaves() {
        this.leaveService.getEmployeeLeaveDetails(this.selectedEmployee, this.fiscalYearId).subscribe(
            res => {
                if (res.ok) {
                    let body = res.json();
                    this.leaveDetails = body.data || [];
                    if (this.leaveDetails) {
                        this.leaveDetails.forEach(leave => {
                            leave.days = this.utilityService.subtractDates(leave.fromDate, leave.toDate);
                        });
                    }
                }
            },
            error => {
                console.error(error);
            });
    }

    sort(key: string) {
        this.key = key;
        this.reverse = !this.reverse;
    }
}


