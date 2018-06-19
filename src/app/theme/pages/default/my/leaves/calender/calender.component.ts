import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
import { AuthService } from '../../../../../../base/_services/authService.service';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { LeaveService } from '../leave.service';
import { CalendarOptions } from '../../../../../../base/_components/calendar.component';
import { UtilityService } from '../../../../../../base/_services/utilityService.service';

declare var $;
declare var moment;
declare var mApp;

@Component({
    selector: "app-my-leaves-calendar",
    templateUrl: "./calender.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class CalenderComponent implements OnInit {

    calendardata: any = [];
    currentUser: UserData;
    leaveDetails: any = [];
    selectedLeaves: any = [];

    reverse: boolean = false;
    calendarOptions: CalendarOptions;

    constructor(
        private authService: AuthService,
        private leaveService: LeaveService,
        private utilityService: UtilityService
    ) {

    }
    ngOnInit() {
        this.authService.validateToken().subscribe(res => {
            this.currentUser = this.authService.currentUserData;
            this.getLeaveDetailsByRole();
        });

        this.calendarOptions = {
            editable: false
        };
    }

    getLeaveDetailsByRole() {
        let role = "";
        if (this.currentUser.roles.indexOf('HR') > -1) {
            role = 'HR';
        } else if (this.currentUser.roles.indexOf('Supervisor') > -1) {
            role = 'Supervisor';
        }
        this.leaveService.getLeaveDetailsByRole(role, this.currentUser._id).subscribe(res => {
            if (res.ok) {
                this.leaveDetails = res.json() || [];
                this.calendardata = this.leaveDetails.map(leave => {
                    let data: any = {};
                    let fromdate, toDate;
                    if (leave.fromDate)
                        fromdate = moment(leave.fromDate).format('YYYY-MM-DD');
                    if (leave.toDate)
                        toDate = moment(leave.toDate).format('YYYY-MM-DD');

                    if (leave.emp_name) {
                        data.title = leave.emp_name + ' - ' + leave.leave_type_name;
                    }
                    else {
                        data.title = leave.leave_type_name;
                    }
                    if (fromdate && toDate) {
                        data.start = fromdate;
                        if (fromdate != toDate) {
                            data.end = toDate;
                        }
                    }

                    let description = '';
                    if (fromdate && toDate) {
                        description = moment(fromdate).format('DD MMM') + " To " + moment(toDate).format('DD MMM');
                    }
                    if (leave.remark) {
                        description += " : " + leave.remark;
                    }
                    data.description = description;
                    data.className = "m-fc-event--light m-fc-event--solid-primary";
                    data.empName = leave.emp_name;
                    data.leaveType = leave.leave_type_name;
                    data.empId = leave.emp_id;
                    return data;
                });
            }
        })
    }

    onDayClick(data: any) {
        debugger;
        this.selectedLeaves = [];
        if (data.date) {
            let date = new Date(data.date);
            this.selectedLeaves = this.leaveDetails.filter(leave => {
                if (this.utilityService.compareDates(data.date, leave.fromDate) == 1 && this.utilityService.compareDates(data.date, leave.toDate) == -1) {
                    return leave;
                }
            });
            console.log(this.selectedLeaves);
        }
    }
}


