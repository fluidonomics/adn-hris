import { Component, Input, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from "@angular/forms";
import { AuthService } from '../../../../../../base/_services/authService.service';
import { EmployeeInfo } from '../../../../../../base/_interface/user.model';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { CommonService } from '../../../../../../base/_services/common.service';
import { leaveView } from '@angular/core/src/render3/instructions';
import swal from 'sweetalert2';
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { LeaveService } from '../leave.service';
declare var mApp;

@Component({
    selector: "app-my-leaves-cancel",
    templateUrl: "./cancel.component.html",
    encapsulation: ViewEncapsulation.None
})

export class CancelComponent implements OnInit {

    @ViewChild('fleavecancel') fleavecancel: NgForm;

    leaveCancel: any = {};
    employee: UserData;
    leaveData: any = [];
    p2: number = 1;
    supervisorList = [];
    key: string = '';
    reverse: boolean = false;
    search: string = '';
    employeeEmailList: any[] = [];
    selectedLeave: any;

    constructor(
        private authService: AuthService,
        private leaveService: LeaveService,
        private commonService: CommonService,
        private utilityService: UtilityService
    ) {
    }

    ngOnInit(): void {
        this.authService.validateToken().subscribe(res => {
            this.employee = this.authService.currentUserData;
            this.loadEmployeeLeaves();
            this.getEmployeeSupervisor();
            this.getEmployeeEmails();
        });
    }

    loadEmployeeLeaves() {
        this.leaveService.getCancelEmployeeLeaveDetails(this.employee._id).subscribe(data => {
            let body = data.json();
            if (body.data) {
                this.leaveData = body.data.map(leave => {
                    // Disable cancelling of leave if pending with supervisor
                    leave.cannotCancel = false;
                    if (leave.isCancelled || leave.status == 'Cancel Pending') {
                        leave.cannotCancel = true;
                    }
                    leave.days = this.utilityService.subtractDates(leave.fromDate, leave.toDate);
                    return leave;
                })
            }
        });
    }

    getEmployeeSupervisor() {
        this.commonService.getKraSupervisor(this.employee._id).subscribe(data => {
            this.supervisorList = data.json() || [];;
        })
    }

    getEmployeeEmails() {
        this.leaveService.getEmployeeEmailDetails().subscribe(data => {
            let body = data.json();
            this.employeeEmailList = body.data || [];
        })
    }

    selectLeave(event, leave) {
        if (leave.checked) {
            this.leaveData
                .filter(lv => lv.checked && lv._id !== leave._id)
                .forEach(lv => {
                    lv.checked = false;
                });
            this.selectedLeave = leave;
            setTimeout(() => {
                let offset = ($('#fleavecancel') as any)["0"].offsetHeight;
                if (offset) {
                    $('html, body').animate({
                        scrollTop: offset
                    });
                }
            }, 200);
        }
        else {
            this.selectedLeave = null;
            this.fleavecancel.resetForm();
        }
    }

    finalCancelMessage: string;
    onLeavecancelSubmit(data) {
        debugger;
        if (data.valid) {
            let ccToMail = [];
            if (data.value.ccTo != undefined) {
                data.value.ccTo.forEach(cc => {
                    let mail = this.employeeEmailList.find(email => {
                        return email._id == cc;
                    });
                    if (mail)
                        ccToMail.push(mail.personalEmail + '~' + mail.emp_name);
                });
            }
            let leave: any = {
                id: this.selectedLeave._id,
                cancelReason: this.leaveCancel.reason,
                reason: this.leaveCancel.reason,
                ccTo: ccToMail,
                emp_id: this.selectedLeave.emp_id,
                updatedBy: this.selectedLeave.emp_id,
                cancelLeaveApplyTo: this.employee._id
            }
            if (this.selectedLeave.status == 'Applied (pending)') {
                leave.status = "Cancelled";
                this.finalCancelMessage = "Leave Cancelled";
                leave.isCancelled = true;
            } else if (this.selectedLeave.status == 'Approved') {
                leave.status = "Cancel Pending";
                leave.isCancelled = false;
                this.finalCancelMessage = "Leave Cancellation Sent for approval";
            } else if (this.selectedLeave.status == 'Cancel Rejected') {
                leave.status = "Cancel Pending";
                leave.isCancelled = false;
                this.finalCancelMessage = "Leave Cancellation Sent for approval";
            }
            this.utilityService.showLoader('.cancel-portlet');
            this.leaveService.saveCancelLeave(leave).subscribe(res => {
                if (res.ok) {
                    this.utilityService.hideLoader('.cancel-portlet');
                    swal(this.finalCancelMessage, "", "success");
                    data.resetForm();
                    this.loadEmployeeLeaves();
                }
            },
                error => {
                    this.utilityService.hideLoader('.cancel-portlet');
                });
        }
    }

    sort(key: string) {
        this.key = key;
        this.reverse = !this.reverse;
    }
}