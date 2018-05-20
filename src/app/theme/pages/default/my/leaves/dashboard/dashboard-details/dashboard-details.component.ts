import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { UserData } from '../../../../../../../base/_interface/auth.model';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { MyService } from '../../../my.service';
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import { Router, ActivatedRoute } from '@angular/router';
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";

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
      private myApiService: MyService,
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
      this.myApiService.getEmployeeLeaveDetails(this.employee._id).subscribe(data => {
          let body = data.json();
          if (body.data) {
              this.leave = body.data.find(leave => leave._id == this.leaveId);
              if (this.leave) {
                  this.leave.days = this.utilityService.subtractDates(this.leave.toDate, this.leave.fromDate);
              }
          }
          console.log(this.leave);
      });
  }

  getWorkflowHistory() {
      this.myApiService.getWorkflowHistory(this.leaveId).subscribe(data => {
          let body = data.json();
          if (body.data) {
              this.workFlowHistory = body.data;
          }
          console.log(this.workFlowHistory);
      });
  }

  sortWorkflowHistory(key: string) {
      this.wfhSort = key;
      this.wfhReverse = !this.wfhReverse;
  }

    goBack() {
        this.router.navigate(['my/leaves/dashboard']);
    }
}
