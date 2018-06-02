import { Component, Input, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
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
    @Output() refreshLeavesList: EventEmitter<void> = new EventEmitter<void>();
    isRemarkEmpty: boolean = false;
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
        this.authService.validateToken().subscribe(res => {
            this.employee = this.authService.currentUserData;
        });
    }

    navigateToDetails(event) {
        this.router.navigate(['my/leaves/dashboard/details/' + this.leave._id]);
    }

    saveAcceptRejectLeave(flag: boolean) {

        if (this.remark != undefined) {
            if (this.remark.trim().length < 1) {
                this.isRemarkEmpty = true;
                return;
            }
            else {
                this.isRemarkEmpty = false;
            }
        }
        else {
            this.isRemarkEmpty = true;
            return;
        }

        let text = "";
        if (this.leave.employmentStatus == 2 || this.leave.employmentStatus == 3) {
            text = "This employee is under Probation";
        }
        swal({
            title: 'Are you sure?',
            text: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                let data: any = {
                    _id: this.leave._id,
                    emp_id: this.employee._id,
                    isApproved: flag,
                    isCancelled: null,
                    updatedBy: this.employee._id,
                    reason: this.remark,
                    remarks: this.remark,
                    status: flag ? 'Approved' : 'Rejected'
                }
                if (this.leave.status == 'Cancel Pending') {
                    data.isApproved = true;
                    if (flag) {
                        data.isCancelled = true;
                        data.status = 'Cancelled';
                    } else {
                        data.isCancelled = null;
                        data.status = 'Cancel Rejected';
                    }
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
                        promise.then(x => {
                            this.refreshLeavesList.emit();
                        });
                    }
                }, err => {
                    console.log(err);
                    this.utilityService.hideLoader('#frmLeave');
                })
            }
        });
    }
}
