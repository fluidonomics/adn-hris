import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { UserData } from '../../../../../../../base/_interface/auth.model';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveService } from '../../leave.service';
import swal from 'sweetalert2';

@Component({
    selector: "app-dashboard-details",
    templateUrl: "./dashboard-details.component.html",
    styleUrls: ["./dashboard-details.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class DashboardDetailsComponent implements OnInit {

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
                    this.leave.days = this.utilityService.subtractDates(this.leave.toDate, this.leave.fromDate);
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

    sortWorkflowHistory(key: string) {
        this.wfhSort = key;
        this.wfhReverse = !this.wfhReverse;
    }

    goBack() {
        this.router.navigate(['my/leaves/dashboard']);
    }

    saveAcceptRejectLeave(flag: boolean) {
        let data = {
            _id: this.leaveId,
            emp_id: this.employee._id,
            isApproved: flag,
            updatedBy: this.employee._id,
        }
        this.utilityService.showLoader('#frmLeave');
        this.leaveService.saveAcceptRejectLeave(data).subscribe(res => {
            if (res.ok) {
                this.utilityService.hideLoader('#frmLeave');
                let promise;
                if (flag) {
                    promise = swal("Leave Approved", "", "success");
                }
                else {
                    promise = swal("Leave Rejected", "", "success");
                }
                promise.then(success => {
                    this.goBack();
                });
            }
        }, err => {
            console.log(err);
            this.utilityService.hideLoader('#frmLeave');
        })
    }
}
