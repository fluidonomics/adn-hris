import { Component, Input, OnInit, ViewEncapsulation, OnDestroy, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, NgForm } from "@angular/forms";
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from '../../../../../../base/_services/authService.service';
import swal from 'sweetalert2';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { LeaveService } from '../leave.service';
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { Subscription } from 'rxjs';
import { NgSelectComponent } from '@ng-select/ng-select';
import { Observable } from 'rxjs/Observable';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { environment } from '../../../../../../../environments/environment';
import { Router } from '../../../../../../../../node_modules/@angular/router';

declare var mApp;
declare var moment;


@Component({
    selector: "app-my-leaves-apply",
    templateUrl: "./apply.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ApplyComponent implements OnInit, OnDestroy {

    @ViewChild('ddLeaveType') ddLeaveType: NgSelectComponent;
    @ViewChild('fleaveapplication') fleaveapplication: NgForm;

    leaveapplication: any = {};
    fromsessiondropdownitems = ['text'];
    tosessiondropdownitems = ['text'];
    supervisorDetails: any;
    leaveTypeList: any = [];
    leaveTypesDetails: any = [];
    emailDetails: any;
    isAttachmentRequired: boolean = false;
    isAttachmentAdded: boolean = false;
    currentUser: UserData;
    fromDateValidation: any = {};
    inProbation: boolean = false;
    fiscalYearId: number;
    leaveBalance: any = [];
    employeeDetails: any = {};
    primarySupervisor: any = {};

    leavesList: any = [];
    holidayList: any = [];
    isSandwichValid: boolean = false;
    supervisorPresent: boolean = false;

    additionalLeaves: any = [];
    specialLeaveBalance: any = {};

    getLeaveTypeByEmpIdSubs: Subscription;
    constructor(
        private leaveService: LeaveService,
        private _commonService: CommonService,
        private _authService: AuthService,
        private utilityService: UtilityService,
        private router: Router
    ) {

    }

    ngOnInit(): void {
        this._authService.validateToken().subscribe(res => {
            this.currentUser = this._authService.currentUserData;
            this.fiscalYearId = parseInt(this._commonService.getFiscalYearIdLocal());
            this.InitValues();
        });
    }

    InitValues() {
        this.leaveapplication.days = null;
        this.leaveapplication.balance = null;
        this.getLeaveBalance();
    }

    getLeaveTypes() {
        this.getLeaveTypeByEmpIdSubs = this.leaveService.getLeaveTypes().subscribe(res => {
            if (res.ok) {
                let data = res.json() || [];
                this.leaveTypesDetails = [];
                data.forEach(leaveType => {
                    let bal = this.leaveBalance.find(bal => bal.leaveTypeId == leaveType._id);
                    if (bal && bal.allotedLeave > 0) {
                        this.leaveTypesDetails.push(leaveType);
                    }
                });
            }
        });
    }

    getLeaveBalance() {
        this.leaveService.getEmployeeLeaveBalance(this.currentUser._id, this.fiscalYearId).subscribe(res => {
            if (res.ok) {
                this.leaveBalance = res.json() || [];
                this.leaveBalance.sort((a, b) => a.leaveTypeId > b.leaveTypeId);
                this.getLeaveTypes();
            }
        });
        this.leaveService.getAllLeaveBalances(this.currentUser._id).subscribe(res => {
            if (res.ok) {
                let balances = res.json() || [];
                balances = balances.filter(b => b.leave_type == 4);
                this.specialLeaveBalance = balances[0];
            }
        });
    }


    ngOnDestroy(): void {
        this.getLeaveTypeByEmpIdSubs.unsubscribe();
    }
}