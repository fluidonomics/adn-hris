import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { UserData } from '../../../../../../../base/_interface/auth.model';
import { AuthService } from '../../../../../../../base/_services/authService.service';
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveService } from '../../leave.service';


@Component({
    selector: "app-my-leaves-track-leave-details",
    templateUrl: "./track-leave-details.component.html",
    encapsulation: ViewEncapsulation.None,

})

export class TrackLeaveDetailsComponent implements OnInit {

    leave: any = {};
    employee: UserData;
    leaveId: number;
    workFlowHistory: any;
    wfhFilter: string = '';
    wfhSort: string = '';
    wfhReverse: boolean = false;
    p2: number = 1;

    constructor(
        private authService: AuthService,
        private leaveService: LeaveService,
        private utilityService: UtilityService,
        private router: Router,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        this.employee = this.authService.currentUserData;
        this.route.params.subscribe(param => {
            this.leaveId = param.id;
            this.loadLeaveDetails();
            this.getWorkflowHistory();
        })
    }

    loadLeaveDetails() {
        this.leaveService.getEmployeeLeaveDetails(this.employee._id).subscribe(data => {
            let body = data.json();
            if (body.data) {
                this.leave = body.data.find(leave => leave._id == this.leaveId);
                if (this.leave) {
                    this.leave.days = this.utilityService.subtractDates(this.leave.fromDate, this.leave.toDate);
                    this.leaveService.getEmployeeLeaveBalance(this.employee._id).subscribe(res => {
                        if (res.ok) {
                            let bal = res.json();
                            if (bal.length > 0) {
                                let empBal = bal.find(bl => bl.leaveType == this.leave.leave_type);
                                this.leave.balance = empBal.leaveBalance;
                            }
                        }
                    })
                }
            }
        });
    }

    getWorkflowHistory() {
        this.leaveService.getWorkflowHistory(this.leaveId).subscribe(data => {
            let body = data.json();
            if (body.data) {
                this.workFlowHistory = body.data;
            }
        });
    }
    goBack() {
        this.router.navigate(['my/leaves/list']);
    }

    sortWorkflowHistory(key: string) {
        this.wfhSort = key;
        this.wfhReverse = !this.wfhReverse;
    }
}