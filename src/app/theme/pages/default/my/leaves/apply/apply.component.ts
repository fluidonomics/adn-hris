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
    leaveTypesDetails: Observable<Array<any>>;
    emailDetails: any;
    areDaysValid: boolean = true;
    isBalanceValid: boolean = true;
    isAttachmentRequired: boolean = false;
    isAttachmentAdded: boolean = false;
    currentUser: UserData;
    fromDateValidation: any = {};
    inProbation: boolean = false;
    isMaternity: boolean = false;
    fiscalYearId: number = 1;
    leaveBalance: any = [];
    employeeDetails: any = {};
    primarySupervisor: any = {};

    getLeaveTypeByEmpIdSubs: Subscription;
    constructor(
        private leaveService: LeaveService,
        private _commonService: CommonService,
        private _authService: AuthService,
        private utilityService: UtilityService
    ) {

    }
    ngOnInit(): void {
        this._authService.validateToken().subscribe(res => {
            this.currentUser = this._authService.currentUserData;
            this.InitValues();
            this.getLeaveTypes();
            this.getEmployeeDetails();
            // this.getAllEmailListOfEmployee();
            this.getEmployeeProbationDetails();
            this.fleaveapplication.valueChanges.subscribe(val => {
                this.areDaysValid = true;
                this.isBalanceValid = true;
                this.isAttachmentAdded = false;
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
        this.fiscalYearId = 1;
    }

    getLeaveTypes() {
        this.getLeaveTypeByEmpIdSubs = this.leaveService.getLeaveTypes().subscribe(res => {
            if (res.ok) {
                this.leaveTypesDetails = res.json() || [];
            }
        });
    }

    getLeaveBalance() {
        this.leaveService.getEmployeeLeaveBalance(this.currentUser._id, this.fiscalYearId).subscribe(res => {
            if (res.ok) {
                this.leaveBalance = res.json() || [];
                this.leaveBalance.sort((a, b) => a.leaveTypeId > b.leaveTypeId);
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
        // this.leaveService.getEmployeeProbationDetails(this.currentUser._id).subscribe(res => {
        //     if (res.ok) {
        //         let data = res.json();
        //         if (data) {
        //             this.inProbation = data.result || false;
        //         }
        //     }
        // });
    }

    onChangeLeaveType() {
        if (this.leaveapplication.leaveType === 3) {
            this.leaveService.getMaternityLeaveDetails(this.currentUser._id).subscribe(res => {
                if (res.ok) {
                    let startDate = new Date(res.json().result[0].startDate);
                    let endDate = new Date(res.json().result[0].endDate);
                    this.leaveapplication.fromDate = startDate;
                    this.leaveapplication.toDate = endDate;
                    this.leaveapplication.days = Number(res.json().result[0].balance);
                }
            })
        }
        else {
            this.leaveapplication.days = 0;
        }

        let empBal = this.leaveBalance.find(bal => {
            if (bal) {
                return bal.leaveTypeId == this.leaveapplication.leaveType;
            }
        });
        this.leaveapplication.balance = empBal ? empBal.leaveBalance : 0;

        // Maternity Leave
        if (this.leaveapplication.leaveType == 3) {
            this.isMaternity = true;
            this.leaveapplication.fromDate = "";
            this.leaveapplication.toDate = "";
        } else {
            this.isMaternity = false;
            this.leaveapplication.fromDate = null;
            this.leaveapplication.toDate = null;
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
        this.areDaysValid = data.days > 0;
        this.isBalanceValid = !(data.balance <= 0 || data.balance < data.days);
        if ((data.days >= 3 && data.leaveType == 2) || data.leaveType == 3) {
            this.isAttachmentRequired = true;
            if (!this.uploadEvent || !this.uploadEvent.data) {
                this.isAttachmentAdded = true;
            } else {
                this.isAttachmentAdded = false;
            }
        } else {
            this.isAttachmentRequired = false;
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

        if (form.valid && this.areDaysValid && this.isBalanceValid && !this.isAttachmentAdded) {
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
            if (this.primarySupervisor) {
                _postData.supervisor_id = this.primarySupervisor._id;
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

    uploadInput: EventEmitter<UploadInput> = new EventEmitter<UploadInput>();
    uploadEvent: UploadInput;
    document: any = {}
    options: UploaderOptions;
    uploadOutput: UploadOutput;
    onUploadOutput(output: UploadOutput, fileName: string): void {
        if (output.file) {
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
        debugger;
        this.leaveForm = form;
        mApp.block('#applyLeavePanel', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
            // message: 'Please wait...'
        });
        this.leaveService.saveEmployeeLeaveDetails(_postData).subscribe(
            res => {
                if (this.isAttachmentRequired) {
                    let leave = res.json();
                    this.uploadEvent.data._id = leave._id
                    this.uploadInput.emit(this.uploadEvent);
                } else {
                    swal("Leave Applied", "", "success");
                    mApp.unblock('#applyLeavePanel');
                    this.resetForm(form);
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
        this.areDaysValid = true;
        this.isBalanceValid = true;
        this.isAttachmentAdded = false;
        this.clearAttachment();
        this.getLeaveBalance();
    }

    calculateDays(e: any, type: string) {
        if (type === 'fromDate') {
            this.leaveapplication.toDate = null;
            this.leaveapplication.days = this.utilityService.subtractDates(e, this.leaveapplication.toDate);
        }
        else {
            this.leaveapplication.days = this.utilityService.subtractDates(this.leaveapplication.fromDate, e);
        }
        this.resetFromDateValidation();
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

    ngOnDestroy(): void {
        this.getLeaveTypeByEmpIdSubs.unsubscribe();
    }
}