import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from '../../../../../../base/_services/authService.service';
import { MyService } from '../../my.service';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { Router } from '@angular/router';
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";


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

    constructor(
        private authService: AuthService,
        private myApiService: MyService,
        private utilityService: UtilityService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.employee = this.authService.currentUserData;
        this.loadLeaveTransactions();
    }

    loadLeaveTransactions() {
        this.myApiService.getEmployeeLeaveDetails(this.employee._id).subscribe(data => {
            let body = data.json();
            if (body.data) {
                this.leaveData = body.data.map(leave => {
                    leave.days = this.utilityService.subtractDates(leave.toDate, leave.fromDate);
                    return leave;
                });
                this.activeLeaveData = this.leaveData.filter(leave => leave.isCancelled != true && leave.isApproved == null);
                this.completedLeaveData = this.leaveData.filter(leave => leave.isCancelled == true || leave.isApproved == true);
            }
            console.log(this.leaveData);
        });
    }

    navigateToDetails(event, leave) {
        this.router.navigate(['my/leaves/list/details/' + leave._id]);
    }
}