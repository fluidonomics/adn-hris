import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MyService } from "../../my.service";
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from '../../../../../../base/_services/authService.service';
declare var mApp;


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./apply.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ApplyComponent implements OnInit {

    leaveapplication: any = {};

    fromsessiondropdownitems = ['text'];
    tosessiondropdownitems = ['text'];
    supervisorDetails: any;
    leaveTypesDetails: any;
    emailDetails: any;
    currentEmpId: any;
    constructor(
        private _myService: MyService,
        private _commonService: CommonService,
        private _authService: AuthService
    ) {
        this._commonService.getSupervisor()
    }
    ngOnInit(): void {
        this.InitValues();
        this.getLeaveTypes();
        this.getAllSupervisorDetails();
        this.getAllEmailListOfEmployee();
    }
    InitValues() {
        this.leaveapplication.days = 0;
        this.leaveapplication.balance = 0;
        this._authService.validateToken().subscribe(
            res => {
                this.currentEmpId = this._authService.currentUserData._id;
            });
    }
    getLeaveTypes() {
        this._myService.getLeaveType().subscribe(
            res => {
                if (res.ok) {
                    this.leaveTypesDetails = res.json();
                }
            },
            error => {
                console.error(error);
            });
    }
    getAllSupervisorDetails() {
        this._commonService.getSupervisor()
            .subscribe(
                res => {
                    if (res.ok) {
                        this.supervisorDetails = res.json();
                    }
                },
                error => {
                    console.log(error);
                });
    }
    getAllEmailListOfEmployee() {
        this._myService.getEmaiDetailsOfEmployee().subscribe(
            res => {
                if (res.ok) {
                    this.emailDetails = res.json();
                }
            },
            error => {
                console.log(error);
            });
    }
    postEmployeeLeaveDetails(data: any) {
        let _postData: any = {};
        _postData.applyTo = data.applyToId;
        _postData.fromDate = data.fromDate;
        _postData.toDate = data.toDate;
        _postData.leave_type = data._id;
        _postData.reason = data.reason;
        _postData.contactDetails = data.contactDetail;
        _postData.ccTo = data.ccTo;
        _postData.emp_id = this.currentEmpId;
        _postData.createdBy = this.currentEmpId;
        this._myService.postEmployeeLeaveDetails(_postData).subscribe(
            res => {
                console.log(res);
            },
            error => {
                console.log(error);
            });
    }
    onLeaveAppSubmit(data) {
        //console.log(data);
        this.postEmployeeLeaveDetails(this.leaveapplication);
    }
    calculateDays(e: any, type: string) {
        let diff: number;
        if (type === 'fromDate') {
            diff = Math.ceil((Date.parse(this.leaveapplication.toDate) - Date.parse(e)) / (1000 * 3600 * 24));
        }
        else {
            diff = Math.ceil((Date.parse(e) - Date.parse(this.leaveapplication.fromDate)) / (1000 * 3600 * 24));
        }
        if (diff < 0) {
            if (type === 'fromDate') {
                this.leaveapplication.fromDate = this.leaveapplication.fromDate;
                return;
            }
            else {
                this.leaveapplication.toDate = this.leaveapplication.toDate;
                return;
            }
        }
        if (diff !== NaN)
            this.leaveapplication.days = diff + 1;
        else
            this.leaveapplication.days = 0;

    }
}