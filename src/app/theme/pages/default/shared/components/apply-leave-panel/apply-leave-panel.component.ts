import { Component, Input, OnInit, ViewEncapsulation, OnDestroy, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, NgForm } from "@angular/forms";
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from '../../../../../../base/_services/authService.service';
import swal from 'sweetalert2';
import { UserData } from '../../../../../../base/_interface/auth.model';
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { Subscription } from 'rxjs';
import { NgSelectComponent } from '@ng-select/ng-select';
import { Observable } from 'rxjs/Observable';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { environment } from '../../../../../../../environments/environment';
import { Router } from '../../../../../../../../node_modules/@angular/router';
import { HrService } from "../../../hr/hr.service";
import { LeaveService } from "../../../my/leaves/leave.service";


declare var mApp;
declare var moment;

@Component({
    selector: 'apply-leave-panel',
    templateUrl: 'apply-leave-panel.component.html',
    styleUrls: ['apply-leave-panel.component.scss']
})
export class ApplyLeavePanelComponent {

    @Input('userType') userType: 'hr' | 'employee' = 'employee';

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

    employeesData: any = [];
    employee: any = {};

    constructor(
        private leaveService: LeaveService,
        private _commonService: CommonService,
        private _authService: AuthService,
        private utilityService: UtilityService,
        private router: Router,
        private _hrService: HrService
    ) {

    }

    ngOnInit(): void {
        this._authService.validateToken().subscribe(res => {
            this.currentUser = this._authService.currentUserData;
            if (this.userType == 'employee') {
                this.employee = Object.create(this.currentUser);
            }
            this.fiscalYearId = parseInt(this._commonService.getFiscalYearIdLocal());
            this.getFiscalYear();
            this.InitValues();
            this.getEmployeeDetails();
            this.getEmployeeProbationDetails();
            this.getHolidays();
        });
    }

    InitValues() {
        this.leaveapplication.days = null;
        this.leaveapplication.balance = null;
        this.fromDateValidation = {
            isValid: true,
            msg: ''
        }
        this.additionalLeaves = [];
        if (this.userType == 'hr') {
            this.loadAllEmployee();
        } else {
            this.getLeaveBalance();
            this.getEmployeeLeaves();
        }
        this.clearAttachment();
    }

    loadAllEmployee() {
        this._hrService.getAllEmployee()
            .subscribe(
            res => {
                let data = res.json().data || [];
                if (data.length > 0) {
                    data = data.filter(obj => obj.hrScope_id == this.currentUser._id);
                    this.employeesData = data || [];
                }
                else {
                    this.employeesData = data.json().data || [];
                }
                this.employeesData.forEach(emp => {
                    emp.ddLabel = emp.fullName + emp.userName;
                });
            },
            error => {
            });
    }

    onChangedEmployee() {
        this.employee = this.employeesData.filter(obj => obj._id == this.leaveapplication.emp_id)[0];
        if (this.employee) {
            this.getEmployeeDetails();
            this.getLeaveBalance();
            this.getEmployeeLeaves();
        }
    }

    getLeaveBalance() {
        if (this.employee) {
            this.leaveService.getEmployeeLeaveBalance(this.employee._id, this.fiscalYearId).subscribe(res => {
                if (res.ok) {
                    this.leaveBalance = res.json() || [];
                    this.leaveBalance.sort((a, b) => a.leaveTypeId > b.leaveTypeId);
                    this.getLeaveTypes();
                }
            });
        }
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

    getEmployeeDetails() {
        if (this.employee) {
            this.leaveService.getEmployeeDetails(this.employee._id).subscribe(res => {
                if (res.ok) {
                    this.employeeDetails = res.json().data[0] || {};
                    if (this.employeeDetails.supervisorDetails && this.employeeDetails.supervisorDetails.primarySupervisorDetails) {
                        this.primarySupervisor = this.employeeDetails.supervisorDetails.primarySupervisorDetails;
                        this.primarySupervisor.email = this.employeeDetails.supervisorDetails.leaveSupervisorEmailDetails.personalEmail;
                        if (this.employeeDetails.supervisorDetails.primarySupervisorDetails._id) {
                            this.supervisorPresent = true;
                        }
                    }
                }
            }, error => {
                console.log(error);
            });
        }
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
        this.leaveService.getEmployeeProbationDetails(this.employee._id).subscribe(res => {
            if (res.ok) {
                let data = res.json();
                if (data) {
                    this.inProbation = data.result || false;
                }
            }
        });
    }

    getEmployeeLeaves() {
        this.leaveService.getLeaveTransactionDetails(this.employee._id).subscribe(res => {
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

    onChangeLeaveType(e, leave, isMain) {
        leave.days = 0;
        let empBal = this.leaveBalance.find(bal => {
            if (bal) {
                return bal.leaveTypeId == leave.leaveType;
            }
        });
        leave.balance = empBal ? empBal.leaveBalance : 0;
        leave.fromDate = null;
        leave.toDate = null;
        if (isMain) {
            this.additionalLeaves = [];
            this.leaveService.getAllLeaveBalances(this.employee._id).subscribe(res => {
                if (res.ok) {
                    let balances = res.json() || [];
                    balances = balances.filter(b => b.leave_type == leave.leaveType);
                    this.specialLeaveBalance = balances[0];
                }
            });
        } else {
            if (leave.balance <= 0 || leave.balance < leave.days) {
                leave.isBalanceValid = false;
            } else {
                leave.isBalanceValid = true;
            }
        }
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
                if ((data.days >= 3 && data.leaveType == 2) || data.leaveType == 3 || data.leaveType == 4) {
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
                if (data.leaveType == 1 && data.days >= 3 && this.userType == 'employee') {
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
                    _postData.emp_id = this.employee._id;
                    if (this.userType == 'employee') {
                        _postData.apply_by_id = this.employee._id;
                    } else {
                        _postData.apply_by_id = this.currentUser._id;
                    }
                    _postData.updatedBy = this.employee._id;
                    _postData.session_id = '1';
                    _postData.status = 'Applied';
                    _postData.days = this.leaveapplication.days;

                    // Data for Email purpose
                    _postData.supervisorEmail = this.primarySupervisor.email;
                    _postData.empName = this.employee.fullName;
                    let leaveType = this.leaveTypesDetails.find(leave => leave._id == data.leaveType);
                    _postData.leaveTypeName = leaveType.type;
                    _postData.fiscalYearId = this.fiscalYearId;
                    _postData.link = window.location.origin + '/my/leaves/dashboard/supervisor';
                    this.additionalLeaves.forEach(leave => {
                        leave.fromDate = moment(leave.fromDate).format('L');
                        leave.toDate = moment(leave.toDate).format('L');
                    });
                    _postData.additionalLeaves = this.additionalLeaves;

                    if (data.leaveType == 4) {
                        _postData.leaveBalanceId = this.specialLeaveBalance._id;
                        _postData.paid = this.specialLeaveBalance.paid;
                        _postData.unpaid = this.specialLeaveBalance.unpaid;
                    }
                    _postData.userType = this.userType;

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


            // Validations for maternity and special leaves, if it is accompanied by annual or sick leave
            if (this.leaveapplication.leaveType == 3 || this.leaveapplication.leaveType == 4 && this.additionalLeaves.length > 0) {
                let dates = [this.leaveapplication];
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
                    // --------------------------------------------------------------------------------------------------------

                    //Check if maternity and special are not applied together
                    // if (this.leaveapplication.leaveType == 3) {
                    //     let count = this.additionalLeaves.filter(addLeave => addLeave.leaveType == 4).length;
                    //     if (count > 0) {
                    //         swal('Error', 'Cannot add two leaves of same leave type', 'error');
                    //         resolve(false);
                    //     }
                    // } else if (this.leaveapplication.leaveType == 4) {
                    //     let count = this.additionalLeaves.filter(addLeave => addLeave.leaveType == 3).length;
                    //     if (count > 0) {
                    //         swal('Error', 'Cannot add two leaves of same leave type', 'error');
                    //         resolve(false);
                    //     }
                    // }
                    // --------------------------------------------------------------------------------------------------------

                    //Check if no two leaves overlap each other
                    if (this.checkLeaveOverlap(this.leaveapplication, leave)) {
                        swal('Error', 'Dates are overlapping', 'error');
                        resolve(false);
                    }

                    dates.forEach(checkLeave => {
                        if (checkLeave.leaveType != leave.leaveType) {
                            if (this.checkLeaveOverlap(checkLeave, leave)) {
                                swal('Error', 'Dates are overlapping', 'error');
                                resolve(false);
                            }
                        }
                    });
                    // --------------------------------------------------------------------------------------------------------

                    dates.push(leave);
                });

                // Sorting the dates in ascending order to further apply validations
                for (let i = 0; i < dates.length - 1; i++) {
                    for (let j = 0; j < dates.length - i - 1; j++) {
                        const pivotLeave = dates[j];
                        const leave = dates[j + 1];
                        if (moment(leave.fromDate).isBefore(moment(pivotLeave.fromDate))) {
                            this.swapLeaves(dates[j], dates[j + 1]);
                        }
                    }
                }
                // --------------------------------------------------------------------------------------------------------

                // Check that there should be no gap between dates
                for (let i = 0; i < dates.length - 1; i++) {
                    const leave1 = dates[i];
                    const leave2 = dates[i + 1];
                    let diff = Math.abs(moment(leave2.fromDate).diff(moment(leave1.toDate), 'days'));
                    if (diff > 1) {
                        swal('Gaps between dates are not allowed', moment(leave1.toDate).format("DD-MM-YYYY") + ' and ' + moment(leave2.fromDate).format("DD-MM-YYYY") + ' has a gap of ' + diff + ' days', 'error');
                        resolve(false);
                    }
                }
                // --------------------------------------------------------------------------------------------------------

                // Check that fromDate and endate should not  be on weekends
                if (moment(dates[0].fromDate).day() == 5 || moment(dates[dates.length - 1].toDate).day() == 5 ||
                    moment(dates[0].fromDate).day() == 6 || moment(dates[dates.length - 1].toDate).day() == 6) {
                    swal('Error', 'Start Date & End Date cannot be on weekends', 'error');
                    resolve(false);
                }
                // --------------------------------------------------------------------------------------------------------

            }
            resolve(true);
        });
    }

    swapLeaves(leave1, leave2) {
        let a = JSON.parse(JSON.stringify(leave1));
        leave1 = JSON.parse(JSON.stringify(leave2));
        leave2 = JSON.parse(JSON.stringify(a));
    }

    checkLeaveOverlap(leave1, leave2) {
        let isleave1FromDateBetween = moment(leave1.fromDate).isBetween(moment(leave2.fromDate), moment(leave2.toDate), null, '[]');
        let isleave1ToDateBetween = moment(leave1.toDate).isBetween(moment(leave2.fromDate), moment(leave2.toDate), null, '[]');

        let isleave2FromDateBetween = moment(leave2.fromDate).isBetween(moment(leave1.fromDate), moment(leave1.toDate), null, '[]');
        let isleave2ToDateBetween = moment(leave2.toDate).isBetween(moment(leave1.fromDate), moment(leave1.toDate), null, '[]');

        return isleave1FromDateBetween || isleave1ToDateBetween || isleave2FromDateBetween || isleave2ToDateBetween;
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
        if (leave.leaveType == 3 || leave.leaveType == 4) {
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
            let isAlreadyApplied = this.leavesList.filter(f => {
                let lFromDate = moment(f.fromDate).format('L');
                let lToDate = moment(f.toDate).format('L');
                let fromDate = moment(leave.fromDate).format('L');
                let toDate = moment(leave.toDate).format('L');

                let isBetween = f.status == 'Applied'
                    && (moment(lFromDate).isBetween(fromDate, toDate, null, '[]')
                        || moment(lToDate).isBetween(fromDate, toDate, null, '[]'));

                return isBetween;
            });

            if (isAlreadyApplied.length > 0) {
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

            if (leave.leaveType != 3 && leave.leaveType != 4) {
                leave.isSandwichValid = true;
                for (let i = leave.fromDate; i <= leave.toDate;) {
                    this.addSandwichDates(i, 'L', 1)
                    i = moment(i).add(1, 'd')._d;
                }
                // this.sandwichDates
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
            } else {
                leave.days = originalDays;
            }
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

    getFiscalYear() {
        this._commonService.getFinancialYear().subscribe(res => {
            let fiscalYears = res.json() || [];
            let fYear = fiscalYears.find(f => f._id == this.fiscalYearId);
            if (fYear) {
                this.leaveapplication.fYear = {
                    startDate: new Date(fYear.starDate),
                    endDate: new Date(fYear.endDate)
                };
            }
        });
    }

    ngOnDestroy(): void {
        this.getLeaveTypeByEmpIdSubs.unsubscribe();
    }
}
