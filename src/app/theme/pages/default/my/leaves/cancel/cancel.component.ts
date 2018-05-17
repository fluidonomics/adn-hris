import { Component, Input, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from "@angular/forms";
import { AuthService } from '../../../../../../base/_services/authService.service';
import { EmployeeInfo } from '../../../../../../base/_interface/user.model';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { MyService } from '../../my.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { leaveView } from '@angular/core/src/render3/instructions';
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import swal from 'sweetalert2';
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
        public authService: AuthService,
        public myApiService: MyService,
        public commonService: CommonService
    ) {
    }

    ngOnInit(): void {
        this.employee = this.authService.currentUserData;
        this.loadEmployeeLeaves();
        this.getEmployeeSupervisor();
        this.getEmployeeEmails();
    }

    loadEmployeeLeaves() {
        this.myApiService.getCancelEmployeeLeaveDetails(this.employee._id).subscribe(data => {
            let body = data.json();
            if (body.data) {
                this.leaveData = body.data.map(leave => {
                    // Disable cancelling of leave if pending with supervisor
                    leave.cannotCancel = false;
                    if (!leave.isCancelled && leave.isApproved == true && leave.isForwarded == null) {
                        leave.cannotCancel = true;
                    }
                    return leave;
                })
            }
        });
    }

    getEmployeeSupervisor() {
        this.commonService.getSupervisor().subscribe(data => {
            this.supervisorList = data.json() || [];;
        })
    }

    getEmployeeEmails() {
        this.myApiService.getEmployeeEmailDetails().subscribe(data => {
            this.employeeEmailList = data.json() || [];
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
        }
        else {

            this.selectedLeave = null;
            this.fleavecancel.resetForm();
        }
    }

    onLeavecancelSubmit(data) {
        if (data.valid) {
            let ccToMail = [];
            data.value.ccTo.forEach(cc => {
                let mail = this.employeeEmailList.find(email => {
                    return email._id == cc;
                });
                if (mail)
                    ccToMail.push(mail.personalEmail);
            });
            let leave: any = {
                id: this.selectedLeave._id,
                reason: this.leaveCancel.reason,
                ccTo: ccToMail,
                emp_id: this.selectedLeave.emp_id,
                updatedBy: this.employee._id
            }
            mApp.block('.cancel-portlet', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                // message: 'Please wait...'
            });
            this.myApiService.saveCancelLeave(leave).subscribe(res => {
                if (res.ok) {
                    mApp.unblock('.cancel-portlet');
                    swal("Leave Cancelled", "", "success");
                    data.resetForm();
                    this.loadEmployeeLeaves();
                }
            },
                error => {
                    mApp.unblock('.cancel-portlet');
                });
        }
    }

    sort(key: string) {
        this.key = key;
        this.reverse = !this.reverse;
    }

}