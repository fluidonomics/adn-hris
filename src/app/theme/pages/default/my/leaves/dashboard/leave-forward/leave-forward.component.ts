import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthService } from "../../../../../../../base/_services/authService.service";
import { LeaveService } from '../../leave.service';
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import swal from 'sweetalert2';
import { UserData } from '../../../../../../../base/_interface/auth.model';


@Component({
  selector: "app-leave-forward",
  templateUrl: "./leave-forward.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class LeaveForwardComponent implements OnInit {

  @Input() leave: any;
  employee: UserData;
  remark: any;

  constructor(
    public authService: AuthService,
    private router: Router,
    private leaveService: LeaveService,
    private utilityService: UtilityService
  ) {
  }

  ngOnInit() {
    this.employee = this.authService.currentUserData;
  }

  navigateToDetails(event) {
    this.router.navigate(['my/leaves/dashboard/details/' + this.leave._id]);
  }

  saveAcceptRejectLeave(flag: boolean) {
    let data = {
      _id: this.leave._id,
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
      }
    }, err => {
      console.log(err);
      this.utilityService.hideLoader('#frmLeave');
    })
  }
}
