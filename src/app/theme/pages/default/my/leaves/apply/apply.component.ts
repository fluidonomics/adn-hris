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
            this.getFinancialYear().then(res => {

                this.InitValues();
                this.getEmployeeDetails();
                // this.getAllEmailListOfEmployee();
                this.getEmployeeProbationDetails();
                // this.fleaveapplication.valueChanges.subscribe(val => {
                //     this.areDaysValid = true;
                //     this.isBalanceValid = true;
                //     this.isAttachmentAdded = false;
                // });
                this.getHolidays();
            });
        });
    }

    InitValues() {
        this.leaveapplication.days = null;
        this.leaveapplication.balance = null;
        this.getLeaveBalance();
        this.fromDateValidation = {
            isValid: true,
            msg: ''
        }
        this.additionalLeaves = [];
        this.clearAttachment();
        this.getEmployeeLeaves();
    }

    getLeaveTypes() {
        this.getLeaveTypeByEmpIdSubs = this.leaveService.getLeaveTypes().subscribe(res => {
            if (res.ok) {
                let data = res.json() || [];
                this.leaveTypesDetails = [];
                data.forEach(leaveType => {
                    let bal = this.leaveBalance.find(bal => bal.leaveTypeId == leaveType._id);
                    if (bal.allotedLeave > 0) {
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
        })
    }

    getEmployeeDetails() {
        this.leaveService.getEmployeeDetails(this.currentUser._id)
            .subscribe(
            res => {
                if (res.ok) {
                    this.employeeDetails = res.json().data[0] || {};
                    if (this.employeeDetails.supervisorDetails.primarySupervisorDetails) {
                        this.primarySupervisor = this.employeeDetails.supervisorDetails.primarySupervisorDetails;
                        this.primarySupervisor.email = this.employeeDetails.supervisorDetails.leaveSupervisorEmailDetails.personalEmail;
                        if (this.employeeDetails.supervisorDetails.primarySupervisorDetails._id) {
                            this.supervisorPresent = true;
                        }
                    }
                }
            },
            error => {
                console.log(error);
            });
    }

    getAllEmailListOfEmployee() {
        this.leaveService.getEmployeeEmailDetails().subscribe(
            res => {
                if (res.ok) {
                    let body = res.json();
                    this.emailDetails = body.data || [];
                }
            },
            error => {
                console.log(error);
            });
    }

    getEmployeeProbationDetails() {
        this.leaveService.getEmployeeProbationDetails(this.currentUser._id).subscribe(res => {
            if (res.ok) {
                let data = res.json();
                if (data) {
                    this.inProbation = data.result || false;
                }
            }
        });
    }

    getEmployeeLeaves() {
        this.leaveService.getLeaveTransactionDetails(this.currentUser._id).subscribe(res => {
            if (res.ok) {
                this.leavesList = res.json() || [];
            }
        });
    }

    getHolidays() {
        this.leaveService.getLeaveHolidays(null, null, true).subscribe(res => {
            if (res.ok) {
                this.holidayList = res.json() || [];
            }
        });
    }

    getFinancialYear() {
        return new Promise((resolve, reject) => {
            this._commonService.getFinancialYear().subscribe(res => {
                if (res.ok) {
                    let data = res.json() || [];
                    if (data && data.length > 0) {
                        let fYear = data.filter(d => d.isYearActive);
                        if (fYear["0"]) {
                            this.leaveapplication.fYear = {
                                startDate: new Date(fYear["0"].starDate),
                                endDate: new Date(fYear["0"].endDate)
                            };
                            this.fiscalYearId = fYear["0"]._id;
                            resolve(true);
                        }
                    }
                }
            })
        });
    }

    onChangeLeaveType(e, leave) {
        leave.days = 0;
        let empBal = this.leaveBalance.find(bal => {
            if (bal) {
                return bal.leaveTypeId == leave.leaveType;
            }
        });
        leave.balance = empBal ? empBal.leaveBalance : 0;
        leave.fromDate = null;
        leave.toDate = null;
    }

    onFilePick(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.leaveapplication.attachment = {
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result.split(',')[1]
                }
            };
        }
    }

    postEmployeeLeaveDetails(form, data: any) {
        debugger;
        this.validate().then((res) => {
            if (res == true) {
                if ((data.days >= 3 && data.leaveType == 2) || data.leaveType == 3) {
                    this.isAttachmentRequired = true;
                } else {
                    this.isAttachmentRequired = false;
                }
                if (this.uploadEvent && this.uploadEvent.data) {
                    this.isAttachmentAdded = true;
                } else {
                    this.isAttachmentAdded = false;
                }

                // If Annual Leave more than 3 days then restrict user to select date range after 7 days from now
                if (data.leaveType == 1 && data.days >= 3) {
                    var new_date = moment(new Date()).add(7, 'days');
                    if (data.fromDate < new_date._d) {
                        this.fromDateValidation = {
                            isValid: false,
                            msg: 'Annual leave for more than 3 days should be applied before 7 days.\r\nTo Add Post leave Transaction, Contact Your HR'
                        }
                        return;
                    } else {
                        this.resetFromDateValidation();
                    }
                }

                if (form.valid) {
                    if (this.isAttachmentRequired && !this.isAttachmentAdded) {
                        swal("Attachement Required", "", "error");
                        return;
                    }
                    // let ccToMail = [];
                    // if (data.ccTo) {
                    //     data.ccTo.forEach(cc => {
                    //         let mail = this.emailDetails.find(email => {
                    //             return email._id == cc;
                    //         });
                    //         if (mail)
                    //             ccToMail.push(mail.personalEmail + '~' + mail.emp_name);
                    //     });
                    // }
                    let _postData: any = {};
                    if (this.primarySupervisor && this.primarySupervisor._id) {
                        _postData.supervisor_id = this.primarySupervisor._id;
                        this.supervisorPresent = true;
                    } else {
                        this.supervisorPresent = false;
                        return;
                    }
                    _postData.fromDate = moment(data.fromDate).format('L');
                    _postData.toDate = moment(data.toDate).format('L');
                    _postData.leave_type = data.leaveType;
                    _postData.reason = data.reason;
                    // _postData.contactDetails = data.contactDetail;
                    // _postData.ccTo = ccToMail;
                    _postData.emp_id = this.currentUser._id;
                    _postData.apply_by_id = this.currentUser._id;
                    _postData.updatedBy = this.currentUser._id;
                    _postData.session_id = '1';
                    _postData.status = 'Applied';
                    _postData.days = this.leaveapplication.days;

                    // Data for Email purpose
                    _postData.supervisorEmail = this.primarySupervisor.email;
                    _postData.empName = this.currentUser.fullName;
                    let leaveType = this.leaveTypesDetails.find(leave => leave._id == data.leaveType);
                    _postData.leaveTypeName = leaveType.type;
                    _postData.fiscalYearId = this.fiscalYearId;
                    _postData.link = window.location.origin + '/my/leaves/dashboard/supervisor';
                    this.additionalLeaves.forEach(leave => {
                        leave.fromDate = moment(leave.fromDate).format('L');
                        leave.toDate = moment(leave.toDate).format('L');
                    });
                    _postData.additionalLeaves = this.additionalLeaves;

                    let text = '';
                    if (this.inProbation) {
                        text = 'Leave during probabtion are not encouraged until unless its an emergency case';
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
                            this.postApply(_postData, form);
                        }
                    });
                }
            }
        });
    }

    validate() {
        return new Promise((resolve, reject) => {
            if (this.leaveapplication.days <= 0) {
                this.leaveapplication.areDaysValid = false;
                resolve(false);
            } else {
                this.leaveapplication.areDaysValid = true;
            }

            if (this.leaveapplication.balance <= 0 || this.leaveapplication.balance < this.leaveapplication.days) {
                this.leaveapplication.isBalanceValid = false;
            } else {
                this.leaveapplication.isBalanceValid = true;
            }



            if (this.leaveapplication.leaveType == 3 || this.leaveapplication.leaveType == 4 && this.additionalLeaves.length > 0) {
                this.additionalLeaves.forEach(leave => {
                    if (leave.days <= 0) {
                        leave.areDaysValid = false;
                        resolve(false);
                    } else {
                        leave.areDaysValid = true;
                    }

                    if (this.leaveapplication.balance <= 0 || leave.balance < leave.days) {
                        leave.isBalanceValid = false;
                        resolve(false);
                    } else {
                        leave.isBalanceValid = true;
                    }

                    // Check if no two leaves of same leaveType exist
                    if (this.leaveapplication.leaveType == leave.leaveType) {
                        swal('Error', 'Cannot add two leaves of same leave type', 'error');
                        resolve(false);
                    }
                    let count = this.additionalLeaves.filter(addLeave => addLeave.leaveType == leave.leaveType).length;
                    if (count > 1) {
                        swal('Error', 'Cannot add two leaves of same leave type', 'error');
                        resolve(false);
                    }

                    //Check if maternity and special are not applied together
                    if (this.leaveapplication.leaveType == 3) {
                        let count = this.additionalLeaves.filter(addLeave => addLeave.leaveType == 4).length;
                        if (count > 0) {
                            swal('Error', 'Cannot add two leaves of same leave type', 'error');
                            resolve(false);
                        }
                    } else if (this.leaveapplication.leaveType == 4) {
                        let count = this.additionalLeaves.filter(addLeave => addLeave.leaveType == 3).length;
                        if (count > 0) {
                            swal('Error', 'Cannot add two leaves of same leave type', 'error');
                            resolve(false);
                        }
                    }
                });
            }
            resolve(true);
        });
    }

    uploadInput: EventEmitter<UploadInput> = new EventEmitter<UploadInput>();
    uploadEvent: UploadInput;
    document: any = {}
    options: UploaderOptions;
    uploadOutput: UploadOutput;
    onUploadOutput(output: UploadOutput, fileName: string): void {
        if (output.file) {
            if (output.file.size > 300000) {
                swal("Error!", "File Size cannot be more than 300 KB", "error");
                return;
            }
            this.leaveapplication.attachmentName = output.file.name
        }
        let atCurrentAuthData = this._authService.currentAuthData;
        this.uploadOutput = output;
        if (output.type === 'allAddedToQueue') { // when all files added in queue
            this.uploadEvent = {
                fieldName: 'seakleavedocument',
                type: 'uploadAll',
                url: environment.api_base.apiBase + '/' + environment.api_base.apiPath + '/leave/uploadSickLeaveDocument',
                headers: {
                    'access-token': atCurrentAuthData.accessToken,
                    'client': atCurrentAuthData.client,
                    'expiry': atCurrentAuthData.expiry,
                    'token-type': atCurrentAuthData.tokenType,
                    'uid': atCurrentAuthData.uid
                },
                data: { seakleavedocument: this.document, _id: "1" },
                method: 'POST',
            };
        } else if (output.type === 'done') {
            mApp.unblock('#applyLeavePanel');
            if (output.file.responseStatus == 200) {
                swal("Leave Applied", "", "success");
                this.resetForm(this.leaveForm);
            }
            else {
                swal("Error!", "Error on Upload " + fileName, "error");
            }
        }
    }

    clearAttachment() {
        this.uploadEvent = null;
        this.document = {}
        this.uploadOutput = null;
        this.leaveapplication.attachmentName = null;
    }

    leaveForm: any = {};
    postApply(_postData, form) {
        this.leaveForm = form;
        mApp.block('#applyLeavePanel', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
            // message: 'Please wait...'
        });
        this.leaveService.saveEmployeeLeaveDetails(_postData).subscribe(
            res => {
                if (this.isAttachmentAdded) {
                    let leave = res.json();
                    this.uploadEvent.data._id = leave._id
                    this.uploadInput.emit(this.uploadEvent);
                } else {
                    swal("Leave Applied", "", "success");
                    mApp.unblock('#applyLeavePanel');
                    this.resetForm(form);
                    this.getEmployeeLeaves();
                }
            },
            error => {
                this.handleError(this, error);
            });
    }

    resetFromDateValidation() {
        this.fromDateValidation = {
            isValid: true,
            msg: ''
        }
    }

    onLeaveAppSubmit(form) {
        this.postEmployeeLeaveDetails(form, this.leaveapplication);
    }

    resetForm(form) {
        form.resetForm();
        form.submitted = false;
        this.leaveapplication.isBalanceValid = true;
        this.isAttachmentAdded = false;
        this.additionalLeaves = [];
        this.clearAttachment();
        this.getLeaveBalance();
    }

    calculateDays(e: any, type: string, leave) {
        leave.isSandwichValid = false;
        leave.days = 0;
        this.sandwichDates = [];
        if (leave.leaveType == 3) {
            if (type === 'fromDate') {
                leave.toDate = moment(e).add(leave.balance - 1, 'days').toDate();
            } else {
                leave.fromDate = moment(e).add((leave.balance - 1) * -1, 'days').toDate();
            }
        } else {
            if (type === 'fromDate') {
                leave.toDate = null;
            }
        }
        this.resetFromDateValidation();
    }

    sandwichDates: any = []; // L - Leave, W - Weekend, H - Holiday, N - No Leave
    processSandwich(leave) {
        leave.isSandwichValid = false;
        leave.days = 0;
        this.sandwichDates = [];
        if (leave.fromDate && leave.toDate) {
            let originalDays = moment(moment(leave.toDate).format('L')).diff(moment(leave.fromDate).format('L'), 'days') + 1;
            let isAlreadyAppleid = this.leavesList.filter(f => {
                let lFromDate = moment(f.fromDate).format('L');
                let lToDate = moment(f.toDate).format('L');
                let fromDate = moment(leave.fromDate).format('L');
                let toDate = moment(leave.toDate).format('L');

                let isBetween = f.status == 'Applied'
                    && (moment(lFromDate).isBetween(fromDate, toDate, null, '[]')
                        || moment(lToDate).isBetween(fromDate, toDate, null, '[]'));

                return isBetween;
            });

            if (isAlreadyAppleid.length > 0) {
                leave.areDaysValid = false;
                leave.daysValidationMsg = "Leave Already applied for these dates";
                return;
            } else {
                leave.areDaysValid = true;
            }

            let isBetweenHolidays = this.holidayList.filter(f => {
                let holiday = moment(f.date).format('L');
                let fromDate = moment(leave.fromDate).format('L');
                let toDate = moment(leave.toDate).format('L');

                let isBetween = moment(holiday).isBetween(fromDate, toDate, null, '[]');
                return isBetween;
            });

            if (isBetweenHolidays.length > 0) {
                leave.areDaysValid = false;
                leave.daysValidationMsg = "Cannot Apply leave on holidays";
                return;
            } else {
                leave.areDaysValid = true;
            }

            leave.isSandwichValid = true;
            for (let i = leave.fromDate; i <= leave.toDate;) {
                this.addSandwichDates(i, 'L', 1)
                i = moment(i).add(1, 'd')._d;
            }
            this.sandwichDates
            let fromDate = this.getSandwichDate(leave.fromDate, -1);
            let toDate = this.getSandwichDate(leave.toDate, +1);

            let startDate, endDate;
            let leaveDates = this.sandwichDates.filter(sd => sd.type == 'L');

            let sdIndex = this.sandwichDates.findIndex(s => moment(s.date).format('L') == moment(leave.fromDate).format('L'));
            let edIndex = this.sandwichDates.findIndex(s => moment(s.date).format('L') == moment(leave.toDate).format('L'));
            startDate = this.getSandwichFinalDates(sdIndex, -1, leave.fromDate);
            endDate = this.getSandwichFinalDates(edIndex, +1, leave.toDate);

            let days = moment(endDate).diff(startDate, 'days') + 1;
            leave.days = days;

        }
    }

    getSandwichFinalDates(index, iterator, originalDate) {
        let date = this.sandwichDates[index + iterator];
        if (date.type == 'L') {
            return this.sandwichDates[index].date;
        } else if (date.type == 'N') {
            return originalDate;
        } else {
            return this.getSandwichFinalDates(index + iterator, iterator, originalDate);
        }
    }

    getSandwichDate(date, iterator) {
        let checkDate = moment(date).add(iterator, 'd')._d;
        let isHoliday = false;
        let isLeave = false;
        let isWeekend = false;

        let dayOfWeek = moment(checkDate).day();
        if (dayOfWeek == 5 || dayOfWeek == 6) {
            isWeekend = true;
            date = checkDate;
            this.addSandwichDates(date, 'W', iterator);
        }

        if (!isWeekend) {
            this.holidayList.forEach(holiday => {
                let holidayDate = moment(holiday.date)._d;
                if (!isHoliday && moment(holidayDate).format('L') == moment(checkDate).format('L')) {
                    isHoliday = true;
                    date = holidayDate;
                    this.addSandwichDates(date, 'H', iterator);
                }
            });
        }

        if (!isHoliday) {
            this.leavesList.forEach(leave => {
                let fromDate = moment(leave.fromDate)._d;
                let toDate = moment(leave.toDate)._d;
                if (leave.status != 'Cancelled' && leave.status != 'Withdrawn' && leave.status != 'Rejected') {
                    if (!isLeave && (moment(checkDate).format('L') <= moment(toDate).format('L') && moment(checkDate).format('L') >= moment(fromDate).format('L'))) {
                        isLeave = true;
                        if (iterator > 0) {
                            date = toDate;
                        } else {
                            date = fromDate;
                        }
                        for (let i = fromDate; i <= toDate;) {
                            this.addSandwichDates(i, 'L', iterator)
                            i = moment(i).add(1, 'd')._d;
                        }
                    }
                }
            });
        }

        if (isHoliday || isLeave || isWeekend) {
            return this.getSandwichDate(date, iterator);
        } else {
            this.addSandwichDates(checkDate, 'N', iterator)
            return date;
        }
    }

    addSandwichDates(date, type, iterator) {
        let data = {
            date: date,
            type: type
        }
        if (iterator > 0) {
            this.sandwichDates.push(data);
        } else {
            this.sandwichDates.unshift(data);
        }
    }

    handleError(that, err) {
        mApp.unblock('#applyLeavePanel');
        let msg = "";
        if (err.error.message) {
            msg = err.error.message;
        } else if (err.body.error.message) {
            msg = err.body.error.message;
        }
        swal("An Error Occured", msg, "error");
    }

    goToDashboard() {
        this.router.navigate(['my/leaves/dashboard/employee']);
    }

    addMore() {
        this.additionalLeaves.push({});
    }

    ngOnDestroy(): void {
        this.getLeaveTypeByEmpIdSubs.unsubscribe();
    }
}