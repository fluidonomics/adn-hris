import { Component, Input, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from "@angular/forms";
import { AuthService } from '../../../../../../base/_services/authService.service';
import { EmployeeInfo } from '../../../../../../base/_interface/user.model';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { MyService } from '../../my.service';
import { CommonService } from '../../../../../../base/_services/common.service';
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: "app-my-leaves-cancel",
    templateUrl: "./cancel.component.html",
    encapsulation: ViewEncapsulation.None
})

export class CancelComponent implements OnInit {

    @ViewChild('fleavecancel') fleavecancel: FormControl;

    leaveCancel: any = {};
    employee: UserData;
    leaveData: any = [];
    p2: number = 1;
    supervisorList = [];
    key: string = '';
    reverse: boolean = false;
    search: string = '';
    employeeEmailList: any[] = [];

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
        this.myApiService.getEmployeeLeaveDetails(this.employee._id).subscribe(data => {
            let body = data.json();
            this.leaveData = body.data || [];
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

    onLeavecancelSubmit(data) {
        console.log(data);
        console.log(this.leaveCancel);
        this.fleavecancel.reset();
    }

    sort(key: string) {
        this.key = key;
        this.reverse = !this.reverse;
    }

}