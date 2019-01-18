import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from '../../../../../../base/_services/authService.service';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { Router } from '@angular/router';
import { LeaveService } from '../leave.service';
import { CommonService } from '../../../../../../base/_services/common.service';


@Component({
    selector: "app-my-leaves-track-leave",
    templateUrl: "./track-leave.component.html",
    encapsulation: ViewEncapsulation.None,
})

export class TrackLeaveComponent implements OnInit {

    leaveData: any = [];
    employee: UserData;
    activeLeaveData: any = [];
    completedLeaveData: any = [];
    fiscalYearId: string;
    constructor(
        private authService: AuthService,
        private leaveService: LeaveService,
        private utilityService: UtilityService,
        private router: Router,
        private commonService: CommonService,
    ) {
    }
    
    getfiscalYearId(){
        this.commonService.getFinancialYear().subscribe(
            res => {
                if (res.ok) {
                    debugger;
                    let financialYearList = res.json() || [];                    
                    this.fiscalYearId = financialYearList.filter(f => f.isYearActive === true)[0]._id;                                    
                }
            },
            error => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void {
        this.authService.validateToken().subscribe(res => {
            this.employee = this.authService.currentUserData;
            this.getfiscalYearId();
            this.loadLeaveTransactions();
        });
    }

    loadLeaveTransactions() {
        this.leaveService.getEmployeeLeaveDetails(this.employee._id, this.fiscalYearId).subscribe(data => {
            let body = data.json();
            if (body.data) {
                this.leaveData = body.data.map(leave => {
                    leave.days = this.utilityService.subtractDates(leave.fromDate, leave.toDate);
                    return leave;
                });
                this.activeLeaveData = this.leaveData.filter(leave => leave.isCancelled != true && leave.isApproved == null);
                // isApproved =false --leave rejeceted
                // isApproved =false --leave approved
                this.completedLeaveData = this.leaveData.filter(leave => leave.isCancelled == true || leave.isApproved != null);
            }
        });
    }

    navigateToDetails(event, leave) {
        this.router.navigate(['my/leaves/list/details/' + leave._id]);
    }
}