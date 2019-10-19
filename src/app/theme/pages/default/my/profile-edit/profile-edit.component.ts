import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { CommonService } from "../../../../../base/_services/common.service";
import { AuthService } from "../../../../../base/_services/authService.service";
import { MyService } from "../my.service";
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { BankInfo, AcademicInfo, CarInfo, CertificationInfo, PreviousEmploymentInfo, FamilyInfo } from "../../../../../base/_interface/user.model"
import { environment } from "../../../../../../environments/environment";
import swal from 'sweetalert2';

declare var mApp;
declare var $;

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
    templateUrl: "./profile-edit.component.html",
    encapsulation: ViewEncapsulation.None,
})

export class ProfileEditComponent implements OnInit {

    options: UploaderOptions;
    uploadInput: EventEmitter<UploadInput>;
    humanizeBytes: Function;

    currentDate: any = new Date();

    //Local Variable for Profile 
    personalInfo: any = {}
    address: any = {}
    documents: any = {}
    academicInfo = [];
    joiningDetails: any = {}
    certificationsandTrainingInfo: any = [];
    previousEmploymentDetails: any = [];
    familyInfo: any = []
    officeInfo: any = {}
    positionDetails: any = {}
    performanceDiary: any = []
    bankDetails: any = {}
    separationDetails: any = {};
    stateDetails: any = {};
    salaryDetails: any = {}
    carDetails: any = {};

    exampleData: any = [];
    tabName = "personal";
    params = "";

    _currentEmpId: number;
    param_emp_id: number;
    currentId: number;

    //Personal Info Tav Dropdown Variable
    bloodGropData: any = [];
    religionData: any = [];
    maritialStatusData: any = [];
    nationalityData: any = [];

    // Address Tab Dropdown Variable
    currentAddressDistrictData = [];
    currentAddressThanaData = [];
    currentAddressDivisionData = [];
    permanentAddressDistrictData = [];
    permanentAddressThanaData = [];
    permanentAddressDivisionData = [];

    //Academic Tab Dropdown Variable
    resultsData = [];
    levelOfEducationData = [];
    examDegreeTitleData = [];

    //Postion Details Tab Dropdown Variable 
    companiesData: any = [];
    divisionData: any = [];
    deparmentData: any = [];
    verticalData: any = [];
    subverticalData: any = [];
    gradeData: any = [];
    employmentTypeData: any = [];
    employmentStatusData: any = [];
    supervisorData: any = [];
    hrspocData: any = [];
    buisnessHrHeadData: any = [];
    groupHrHeadData: any = [];
    designationData: any = [];
    //rolesData: any = [];
    managementTypeData: any = [];

    //Bank Details Tab Dropdown Variable
    currencyArrData = [];
    separationTypeArrData = [];

    //Salary Details Tab Dropdown Variable
    providentFundMemberShipData = [];
    groupLifeInsuranceData = [];
    festivalAllowanceData = [];
    hospitalizationSchemeData = [];
    toggleAccess = [];

    relationData = [];
    countryData = [];
    facilityData = [];

    companyBusinessData = [];

    isSpin = false;

    profileProcess = {
        isEmployeeSubmitted: false,
        isHrSubmitted: false,
        isHrSendBack: false,
        isSupervisorApproved: false,
        isSupervisorSendBack: false
    }

    savedPersonalEmailId: string;
    savedOfficeEmailId: string;
    imageBase: string;



    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _myService: MyService
    ) {
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);

        this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = humanizeBytes;
        this.currentDate = new Date();
        this.imageBase = environment.content_api_base.imgBase;
    }

    ngOnInit() {
        this._route.queryParams.subscribe(params => {
            if (params['tabName']) {
                this.tabName = params['tabName'];
            }
            if (params['id']) {
                this.param_emp_id = params['id'];
            }
            this._authService.validateToken().subscribe(
                res => {
                    //Do not uncomment if profile-edit
                    //this._currentEmpId = this._authService.currentUserData._id;
                    this.currentId = this._authService.currentUserData._id;
                    this.initData();

                });
        });
    }

    initData() {
        this.loadProcessInfoDetails();
        this.loadOfficeDetails();
        switch (this.tabName) {
            case "personal":
                this.loadPersonal();
                break;
            case "documents":
                this.loadDocuments();
                break;
            case "education":
                this.loadEducation();
                break;
            case "employment":
                this.loadEmploymentDetails();
                break;
            case "family":
                this.loadFamilyInfoTabData();
                break;
            case "office":
                this.loadOfficeDetails();
                break;
            case "payroll":
                this.loadPayrollDetails();
                break;
            case "separation":
                this.getSeparationDetails();
                break;

            default:
                this.loadPersonal();
        }
    }

    onUploadOutput(output: UploadOutput, fileName: string): void {
        let atCurrentAuthData = this._authService.currentAuthData;
        if (output.type === 'allAddedToQueue') { // when all files added in queue
            // uncomment this if you want to auto upload files when added
            const event: UploadInput = {
                fieldName: 'profileDocuments',
                type: 'uploadAll',
                url: environment.api_base.apiBase + '/' + environment.api_base.apiPath + '/upload/document',
                headers: {
                    'access-token': atCurrentAuthData.accessToken,
                    'client': atCurrentAuthData.client,
                    'expiry': atCurrentAuthData.expiry,
                    'token-type': atCurrentAuthData.tokenType,
                    'uid': atCurrentAuthData.uid
                },
                method: 'POST',
            };
            this.uploadInput.emit(event);
        } else if (output.type === 'done') {
            if (output.file.responseStatus == 200) {
                switch (fileName) {
                    case 'smartCard':
                        swal({ type: 'success', title: 'Upload successfully', text: 'National Id Smart Card', showConfirmButton: false, timer: 800 })
                        this.documents.nationalIdSmartCardDocURL = output.file.response.key || '';
                        break;
                    case 'smartOldCard':
                        swal({ type: 'success', title: 'Upload successfully', text: 'National Id(Old Format) Smart Card', showConfirmButton: false, timer: 800 })
                        this.documents.nationalIDOldFormatDocURL = output.file.response.key || '';
                        break;
                    case 'birth':
                        swal({ type: 'success', title: 'Upload successfully', text: 'Birth Registration Number', showConfirmButton: false, timer: 800 })
                        this.documents.birthRegistrationNumberDocURL = output.file.response.key || '';
                        break;
                    case 'passport':
                        swal({ type: 'success', title: 'Upload successfully', text: 'Birth Registration Number', showConfirmButton: false, timer: 800 })
                        this.documents.passportNumberDocURL = output.file.response.key || '';
                        break;
                    default:
                        break;
                }
            }
            else {
                swal("Error!", "Error on Upload " + fileName, "error");
            }
        }
    }

    showSpin() {
        var that = this;
        that.isSpin = true;
        setTimeout(function () {
            that.isSpin = false;
        }, 500);
    }

    showDocumentImagePopUp(filedName) {
        switch (filedName) {
            case 'smartCard':
                swal({
                    imageUrl: this.documents.nationalIdSmartCardDocURL ? environment.content_api_base.imgBase + this.documents.nationalIdSmartCardDocURL : environment.content_api_base.imgBase + environment.content_api_base.noImagePath,
                    imageHeight: 700,
                    //imageWidth: 5000,
                    showConfirmButton: false,
                });
                break;
            case 'smartOldCard':
                swal({
                    imageUrl: this.documents.nationalIDOldFormatDocURL ? environment.content_api_base.imgBase + this.documents.nationalIDOldFormatDocURL : environment.content_api_base.imgBase + environment.content_api_base.noImagePath,
                    imageHeight: 700,
                    //imageWidth: 5000,
                    showConfirmButton: false,
                });
                break;
            case 'birth':
                swal({
                    imageUrl: this.documents.birthRegistrationNumberDocURL ? environment.content_api_base.imgBase + this.documents.birthRegistrationNumberDocURL : environment.content_api_base.imgBase + environment.content_api_base.noImagePath,
                    imageHeight: 700,
                    //imageWidth: 5000,
                    showConfirmButton: false,
                });
                break;
            case 'passport':
                swal({
                    imageUrl: this.documents.passportNumberDocURL ? environment.content_api_base.imgBase + this.documents.passportNumberDocURL : environment.content_api_base.imgBase + environment.content_api_base.noImagePath,
                    imageHeight: 700,
                    //imageWidth: 5000,
                    showConfirmButton: false,
                });
                break;
        }
    }

    deleteDocImage(imagePath, imageTypeName) {
        this._myService.deleteImage({ key: imagePath }).subscribe(
            res => {
                if (res.ok) {
                    this.documents[imageTypeName] = null;
                    swal("Deleted", "Successfully", "success");
                }
            },
            error => {
            });;
    }

    showDeleteMessage() {
        swal("Error!", "Image not found", "error");
    }

    deleteDocumentImage(fileName) {
        switch (fileName) {
            case 'smartCard':
                let isdeleted = this.documents.nationalIdSmartCardDocURL ? this.deleteDocImage(this.documents.nationalIdSmartCardDocURL, 'nationalIdSmartCardDocURL') : this.showDeleteMessage();
                break;
            case 'smartOldCard':
                let isdeletedOld = this.documents.nationalIDOldFormatDocURL ? this.deleteDocImage(this.documents.nationalIDOldFormatDocURL, 'nationalIDOldFormatDocURL') : this.showDeleteMessage();
                break;
            case 'birth':
                let isdeletedbirth = this.documents.birthRegistrationNumberDocURL ? this.deleteDocImage(this.documents.birthRegistrationNumberDocURL, 'birthRegistrationNumberDocURL') : this.showDeleteMessage();
                break;
            case 'passport':
                let isdeletedpassport = this.documents.passportNumberDocURL ? this.deleteDocImage(this.documents.passportNumberDocURL, 'passportNumberDocURL') : this.showDeleteMessage();
                break;
            default:
                break;
        }

    }

    setPermentAddress() {
        if (this.address.isSameAsCurrent) {
            this.address.permanentAddressLine1 = this.address.currentAddressLine1;
            this.address.permanentAddressLine2 = this.address.currentAddressLine2;
            this.address.permanentAddressDistrict_id = this.address.currentAddressDistrict_id;
            this.address.permanentAddressDivision_id = this.address.currentAddressDivision_id;
            this.address.permanentAddressThana_id = this.address.currentAddressThana_id;
            this.address.permanentAddressPostCode = this.address.currentAddressPostCode;

            // this.loadpermanentAddressDistrictData(this.address.currentAddressDivision_id,"init");
            // this.loadpermanentAddressThanaData(this.address.currentAddressDistrict_id,"init");
        }
    }

    resetPermentAddress() {
        if (!this.address.isSameAsCurrent) {
            this.address.permanentAddressLine1 = null;
            this.address.permanentAddressLine2 = null;
            this.address.permanentAddressDistrict_id = null;
            this.address.permanentAddressDivision_id = null;
            this.address.permanentAddressThana_id = null;
            this.address.permanentAddressPostCode = null;

            this.permanentAddressDistrictData = [];
            this.permanentAddressThanaData = [];
        }
    }

    loadProcessInfoDetails() {
        this._myService.getProfileProcessInfo(this.param_emp_id)
            .subscribe(
            data => {
                if (data.ok) {
                    this.profileProcess = data.json();
                }
            },
            error => {

            });
    }

    //save Personal Info
    saveProfileStatus(status: string, isSendBack?: boolean) {
        this.profileProcess["hrStatus"] = status;
        this.profileProcess["supervisorStatus"] = null;
        if (isSendBack) {
            this.profileProcess["employeeStatus"] = null;
        }
        this._myService.saveProfileStatus(this.profileProcess)
            .subscribe(
            data => {
                this.profileProcess = data.json() || {}
                if (isSendBack) {
                    swal({
                        type: 'success',
                        title: 'Send Back!',
                        titleText: "Profile sent back successfully to employee.",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        showConfirmButton: false,
                        timer: 1000
                    }).then((result) => {
                        this._router.navigate(['my/profile-edit'], { queryParams: { id: this.param_emp_id, tabName: 'office' } })
                    });
                }
                else {
                    swal({
                        type: 'success',
                        title: 'Submit!',
                        titleText: "Profile submitted successfully to Supervisor.",
                    });
                }
            },
            error => {
            });
    }



    loadTabStatus(status: string, isSendBack?: boolean) {
        this._commonService.getTabStatus(this.param_emp_id)
            .subscribe(
            data => {
                let tabData = data.json();
                if (isSendBack) {
                    this.saveProfileStatus(status, isSendBack);
                }
                else {
                    if (tabData.isPersonalInfo
                        && tabData.isAddress
                        && tabData.isDocuments
                        //&& tabData.isAcademicInfo
                        //&& tabData.isCertificate
                        //&& tabData.isEmployment
                        && tabData.isFamilyInfo
                        && tabData.isOffice
                        //&& tabData.isBankInfo
                        && tabData.isSalaryInfo
                        //&& tabData.isCarInfo
                    ) {
                        swal({
                            title: 'Are you sure?',
                            text: "Do you want to submit profile to Supervisor?",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#66BB6A',
                            cancelButtonColor: '#9a9caf',
                            confirmButtonText: 'Submit'
                        }).then((result) => {
                            if (result.value) {
                                this.saveProfileStatus(status);
                            }
                        });
                    }
                    else
                        swal({ type: 'error', title: 'Oops!', titleText: "It seems you haven't filled mandatory tabs.", });
                }
            },
            error => {
                swal({ type: 'error', title: 'Error!', titleText: error.json().error.message, });
            });
    }

    //save Personal Info
    submitProfile(status) {
        this.loadTabStatus(status);
    }

    submitBackProfileStatus(status) {
        swal({
            title: 'Please specify the reason',
            input: 'textarea',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonColor: '#f22d4e',
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Send Back'
        }).then((result) => {
            if (result.value) {
                this.profileProcess["hrSendbackComment"] = result.value;
                this.loadTabStatus(status, true);
            }
        })
    }

    //save Personal Info
    savePersonalInfo() {
        mApp.block('#m_accordion_5_item_1_body', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
            // message: 'Please wait...'
        });
        this._myService.savePersonalInfo(this.personalInfo)
            .subscribe(
            data => {
                mApp.unblock('#m_accordion_5_item_1_body');
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.personalInfo = data.json() || {};
                this.personalInfo.dob = this.personalInfo.dob ? new Date(this.personalInfo.dob) : this.personalInfo.dob;
                this.savedPersonalEmailId = this.personalInfo.personalEmail;
            },
            error => {
                mApp.unblock('#m_accordion_5_item_1_body');
            });
    }

    checkEmailExists(_element, oldValue) {
        if (_element.valid) {
            if (oldValue && oldValue == _element.value) {
                _element.control.setErrors(null)
            }
            else {
                if (_element.name != "officeEmailId" && this._commonService.checkPersonalEmail(_element)) {
                    this._commonService.checkEmailExists(_element.value, this.param_emp_id)
                        .subscribe(
                        data => {
                            if (data.json())
                                _element.control.setErrors({ "emailExists": true })
                        },
                        error => {
                            _element.control.setErrors(null)
                        });
                }
            }
        }
    }
    checkOfficeEmailExists(_element, oldValue) {
        if (_element.valid) {
            if (oldValue && oldValue == _element.value) {
                _element.control.setErrors(null)
            }
            else {
                this._commonService.checkEmailExists(_element.value, this.param_emp_id)
                    .subscribe(
                    data => {
                        if (data.json())
                            _element.control.setErrors({ "emailExists": true })
                    },
                    error => {
                        _element.control.setErrors(null)
                    });
            }

        }
    }

    //save Address Info
    saveAddressInfo() {
        if (this.address.isSameAsCurrent) {
            this.setPermentAddress();
        }
        this.address.emp_id = this.address.emp_id != null ? this.address.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveAddressInfo(this.address)
            .subscribe(
            data => {
                // swal({type: 'success',title: 'Saved',text:'Successfully',showConfirmButton: false,timer: 800})
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.address = data.json() || {};
            },
            error => {
            });
    }

    saveDocumentsInfo() {
        this.documents.emp_id = this.documents.emp_id != null ? this.documents.emp_id : (this._currentEmpId || this.param_emp_id)
        mApp.block('#m_accordion_5_item_9_body', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
            // message: 'Please wait...'
        });
        this._myService.saveDocumentsInfo(this.documents)
            .subscribe(
            data => {
                mApp.unblock('#m_accordion_5_item_9_body');
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.documents = data.json() || {};
            },
            error => {
                mApp.unblock('#m_accordion_5_item_9_body');
            });

    }

    //save Address Info
    saveAcademicInfo(objAcademicInfo: any, index: number) {
        mApp.block('#m_accordion_5_item_10_body', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
            // message: 'Please wait...'
        });
        objAcademicInfo.emp_id = objAcademicInfo.emp_id != null ? objAcademicInfo.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveAcademicInfo(objAcademicInfo)
            .subscribe(
            data => {
                mApp.unblock('#m_accordion_5_item_10_body');
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.academicInfo[index] = data.json();
                if (this.academicInfo[index].levelOfEducation_id) {
                    this.loadExamDegreeTitle(this.academicInfo[index].levelOfEducation_id, index, "init");
                }
            },
            error => {
                mApp.unblock('#m_accordion_5_item_10_body');
            });
    }
    //save CertificationAndTraningInfo Info
    saveCertificationandTrainingInfo(objCertification: any, index: number) {
        objCertification.emp_id = objCertification.emp_id != null ? objCertification.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveCertificationInfo(objCertification)
            .subscribe(
            data => {
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.certificationsandTrainingInfo[index] = data.json();
            },
            error => {
            });
    }

    //save EmploymentDetils Info
    savePreviousEmploymentDetails(objPerviousEmployment: any, index: number) {
        objPerviousEmployment.emp_id = objPerviousEmployment.emp_id != null ? objPerviousEmployment.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.savePreviousEmploymentInfo(objPerviousEmployment)
            .subscribe(
            data => {
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.previousEmploymentDetails[index] = data.json();
                this.previousEmploymentDetails[index].employmentPeriodFrom = this.previousEmploymentDetails[index].employmentPeriodFrom ? new Date(this.previousEmploymentDetails[index].employmentPeriodFrom) : this.previousEmploymentDetails[index].employmentPeriodFrom;
                this.previousEmploymentDetails[index].employmentPeriodTo = this.previousEmploymentDetails[index].employmentPeriodTo ? new Date(this.previousEmploymentDetails[index].employmentPeriodTo) : this.previousEmploymentDetails[index].employmentPeriodTo;
            },
            error => {
            });

    }
    //save Family Info
    saveFamilyInfo(objFamily: any, index: number, _element) {
        if (objFamily.relation_id == 1 || objFamily.relation_id == 2) {
            if (this.familyInfo.filter(item => item.relation_id == objFamily.relation_id).length > 1) {
                return _element.control.setErrors({ "relationExists": true })
            }
            else {
                _element.control.setErrors(null);
            }
        }
        objFamily.emp_id = objFamily.emp_id != null ? objFamily.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveFamilyInfo(objFamily)
            .subscribe(
            data => {
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.familyInfo[index] = data.json();
                this.familyInfo[index].dateOfBirth = this.familyInfo[index].dateOfBirth ? new Date(this.familyInfo[index].dateOfBirth) : this.familyInfo[index].dateOfBirth;
            },
            error => {
            });
    }
    //save Office Info
    saveOfficeInfo() {
        this.officeInfo.emp_id = this.officeInfo.emp_id != null ? this.officeInfo.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveOfficeInfo(this.officeInfo)
            .subscribe(
            data => {
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.officeInfo = data.json();
                this.officeInfo.dateOfJoining = this.officeInfo.dateOfJoining ? new Date(this.officeInfo.dateOfJoining) : this.officeInfo.dateOfJoining;
                this.officeInfo.dateOfConfirmation = this.officeInfo.dateOfConfirmation ? new Date(this.officeInfo.dateOfConfirmation) : this.officeInfo.dateOfConfirmation;
                this.officeInfo.workPermitEffectiveDate = this.officeInfo.workPermitEffectiveDate ? new Date(this.officeInfo.workPermitEffectiveDate) : this.officeInfo.workPermitEffectiveDate;
                this.officeInfo.workPermitExpiryDate = this.officeInfo.workPermitExpiryDate ? new Date(this.officeInfo.workPermitExpiryDate) : this.officeInfo.workPermitExpiryDate;
            },
            error => {
            });
    }
    //save Office Info
    savePositionInfo() {
        this.officeInfo.emp_id = this.officeInfo.emp_id != null ? this.officeInfo.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.savePositionInfo(this.positionDetails)
            .subscribe(
            data => {
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.positionDetails = data.json();
            },
            error => {
            });
    }
    //save Bank Info
    saveBankDetails() {
        mApp.block('#m_accordion_5_item_16_body', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
            // message: 'Please wait...'
        });
        this.bankDetails.emp_id = this.bankDetails.emp_id != null ? this.bankDetails.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveBankDetails(this.bankDetails)
            .subscribe(
            data => {
                mApp.unblock('#m_accordion_5_item_16_body');
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.bankDetails = data.json();
            },
            error => {
                mApp.unblock('#m_accordion_5_item_16_body');
            });
    }

    //add employee separation
    addSeparation() {

        swal({
            title: 'Are you sure?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {

            if (result.value) {
                this.separationDetails._id = this.separationDetails._id;
                this.separationDetails.emp_id = this.separationDetails.emp_id != null ? this.separationDetails.emp_id : (this._currentEmpId || this.param_emp_id);
                this.separationDetails.separationType = this.separationDetails.separationType;
                this.separationDetails.dateOfResignation = this.separationDetails.dateOfResignation;
                this.separationDetails.effectiveDate = this.separationDetails.effectiveDate;
                this.separationDetails.dateOfSeparation = this.separationDetails.dateOfSeparation;
                this.separationDetails.remarks = this.separationDetails.remarks;
                this.separationDetails.updatedBy = this.currentId;
                this._myService.saveSeparationDetails(this.separationDetails)
                    .subscribe(
                    data => {
                        mApp.unblock('#m_accordion_5_item_16_body');
                        swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                        this.separationDetails = data.json();
                        this.separationDetails.dateOfResignation = this.separationDetails.dateOfResignation ? new Date(this.separationDetails.dateOfResignation) : this.separationDetails.dateOfResignation;
                        this.separationDetails.effectiveDate = this.separationDetails.effectiveDate ? new Date(this.separationDetails.effectiveDate) : this.separationDetails.effectiveDate;
                        this.separationDetails.dateOfSeparation = this.separationDetails.dateOfSeparation ? new Date(this.separationDetails.dateOfSeparation) : this.separationDetails.dateOfSeparation;
                    },
                    error => {
                        mApp.unblock('#m_accordion_5_item_16_body');
                    });
            }
        });

    }
    //save Salary Info
    saveSalaryDetails() {
        this.salaryDetails.emp_id = this.salaryDetails.emp_id != null ? this.salaryDetails.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveSalaryDetails(this.salaryDetails)
            .subscribe(
            data => {
                // mApp.unblock('#m_accordion_5_item_1_body');
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.salaryDetails = data.json();
            },
            error => {
                //mApp.unblock('#m_accordion_5_item_1_body');
            });
    }
    //save Car Details
    saveCarDetails() {
        this.carDetails.emp_id = this.carDetails.emp_id != null ? this.carDetails.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveCarDetails(this.carDetails)
            .subscribe(
            data => {
                //mApp.unblock('#m_accordion_5_item_1_body');
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.carDetails = data.json();
                this.carDetails.companyEffectiveDate = this.carDetails.companyEffectiveDate ? new Date(this.carDetails.companyEffectiveDate) : this.carDetails.companyEffectiveDate;
                this.carDetails.companyExpiryDate = this.carDetails.companyExpiryDate ? new Date(this.carDetails.companyExpiryDate) : this.carDetails.companyExpiryDate;
                this.carDetails.privateEffectiveDate = this.carDetails.privateEffectiveDate ? new Date(this.carDetails.privateEffectiveDate) : this.carDetails.privateEffectiveDate;
                this.carDetails.privateExpiryDate = this.carDetails.privateExpiryDate ? new Date(this.carDetails.privateExpiryDate) : this.carDetails.privateExpiryDate;
            },
            error => {
                this.carDetails = {};;
                //mApp.unblock('#m_accordion_5_item_1_body');
            });
    }

    savePerformanceRatingInfo() {
        this._myService.savePerformanceRatingInfo(this.performanceDiary)
            .subscribe(
            data => {
                //mApp.unblock('#m_accordion_5_item_1_body');
                swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                this.performanceDiary = data.json();
            },
            error => {
                this.performanceDiary = [];
                //mApp.unblock('#m_accordion_5_item_1_body');
            });
    }

    //save Seperation Info
    saveSeperationInfo() {
        // this._authService.saveSeperationInfo(this.empProfile.address)
        // .subscribe(
        // data => {
        //     this.empProfile.address=data.json();
        // },
        // error => {
        // });
    }
    //delete Academic Info
    deleteAcademicInfo(academicInfo_id: number) {
        swal({
            title: 'Are you sure?',
            text: "Do you want to delete it?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.value) {
                this._myService.deleteAcademicInfo(academicInfo_id)
                    .subscribe(
                    data => {
                        if (data.ok) {
                            this.removeHtmlContain("academicInfo", academicInfo_id);
                        }
                    },
                    error => {
                        //mApp.unblock('#m_accordion_5_item_1_body');
                    });
            }
        })

    }
    //delete Previous Employment
    deletePreviousEmployment(previousEmployment_id: number) {
        swal({
            title: 'Are you sure?',
            text: "Do you want to delete it?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.value) {
                this._myService.deletePreviousEmploymentInfo(previousEmployment_id)
                    .subscribe(
                    data => {
                        if (data.ok) {
                            swal("Deleted", "Successfully", "success");
                            this.removeHtmlContain("employment", previousEmployment_id);
                        }
                    },
                    error => {
                        //mApp.unblock('#m_accordion_5_item_1_body');
                    });
            }
        })
    }
    //delete Family Info
    deleteFamilyInfo(family_id: number) {
        swal({
            title: 'Are you sure?',
            text: "Do you want to delete it?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.value) {
                this._myService.deleteFamilyInfo(family_id)
                    .subscribe(
                    data => {
                        if (data.ok) {
                            swal("Deleted", "Successfully", "success");
                            this.removeHtmlContain("family", family_id);
                        }
                    },
                    error => {
                        //mApp.unblock('#m_accordion_5_item_1_body');
                    });
            }
        })
    }

    //delete Family Info
    deleteCertificationInfo(certification_id: number) {
        swal({
            title: 'Are you sure?',
            text: "Do you want to delete it?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.value) {
                this._myService.deleteCertificationInfo(certification_id)
                    .subscribe(
                    data => {
                        if (data.ok) {
                            swal("Deleted", "Successfully", "success");
                            this.removeHtmlContain("certification", certification_id);
                        }
                    },
                    error => {
                        //mApp.unblock('#m_accordion_5_item_1_body');
                    });
            }
        })
    }

    showHideWaitingCircle(_id: string, isHide?: boolean) {
        if (!isHide)
            mApp.block(_id, {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                // message: 'Please wait...'
            });
        else
            mApp.unblock(_id);
    }

    saveSuccessMesssage() {
        swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
    }

    //Add New Html on Click of Add Button 
    addNewHtmlContain(subTabName: string) {
        switch (subTabName) {
            case "academicInfo":
                this.academicInfo.push(new AcademicInfo());
                break;
            case "certification":
                this.certificationsandTrainingInfo.push(new CertificationInfo());
                break;
            case "employment":
                this.previousEmploymentDetails.push(new PreviousEmploymentInfo());
                break;
            case "family":
                this.familyInfo.push(new FamilyInfo());
                break;

        }
    }
    //Remove Html on After Delete 
    removeHtmlContain(subTabName: string, _id: number) {
        switch (subTabName) {
            case "academicInfo":
                this.academicInfo = this.academicInfo.filter(x => x._id != _id);
                if (this.academicInfo.length == 0) {
                    this.addNewHtmlContain(subTabName);
                }
                break;
            case "certification":
                this.certificationsandTrainingInfo = this.certificationsandTrainingInfo.filter(x => x._id != _id);
                if (this.certificationsandTrainingInfo.length == 0) {
                    this.addNewHtmlContain(subTabName);
                }
                break;
            case "employment":
                this.previousEmploymentDetails = this.previousEmploymentDetails.filter(x => x._id != _id);
                if (this.previousEmploymentDetails.length == 0) {
                    this.addNewHtmlContain(subTabName);
                }
                break;
            case "family":
                this.familyInfo = this.familyInfo.filter(x => x._id != _id);
                if (this.familyInfo.length == 0) {
                    this.addNewHtmlContain(subTabName);
                }
                break;
        }
    }

    removeHtmlByView(subTabName: string, _index: number) {
        switch (subTabName) {
            case "academicInfo":
                if (this.academicInfo.length > 1) {
                    this.academicInfo.splice(_index, 1);
                }
                break;
            case "certification":
                if (this.certificationsandTrainingInfo.length > 1) {
                    this.certificationsandTrainingInfo.splice(_index, 1);
                }
                break;
            case "employment":
                if (this.previousEmploymentDetails.length > 1) {
                    this.previousEmploymentDetails.splice(_index, 1);
                }
                break;
            case "family":
                if (this.familyInfo.length > 1) {
                    this.familyInfo.splice(_index, 1);
                }
                break;
        }
    }

    //Check wheather HTML is Added or Not
    isAdded(subTabName: string) {
        switch (subTabName) {
            case "academicInfo":
                if (this.academicInfo.filter(x => x._id == null || x._id == undefined && x.isCompleted == true).length == 0) {
                    return false;
                }
                return true;
            case "certification":
                if (this.certificationsandTrainingInfo.filter(x => x._id == null || x._id == undefined).length == 0) {
                    return false;
                }
                return true;
            case "employment":
                if (this.previousEmploymentDetails.filter(x => x._id == null || x._id == undefined).length == 0) {
                    return false;
                }
                return true;
            case "family":
                if (this.familyInfo.filter(x => x._id == null || x._id == undefined).length == 0) {
                    return false;
                }
                return true;
        }
    }

    //Load Personal Info Tab Data;
    loadPersonalInfoTabData() {
        //Init Data Personal Info Tab
        this.bloodGropData = this._commonService.getBloodGroup();
        this.religionData = this._commonService.getReligion();
        this.maritialStatusData = this._commonService.getMartialStatus();
        this.nationalityData = this._commonService.getNationality();


        this._myService.getPersonalInfo(this.param_emp_id)
            .subscribe(
            data => {
                this.personalInfo = data.json() || {};
                this.personalInfo.dob = this.personalInfo.dob ? new Date(this.personalInfo.dob) : this.personalInfo.dob;
                this.savedPersonalEmailId = this.personalInfo.personalEmail;
            },
            error => {
            });
    }
    //Load Address Tab Data.
    loadAddressTabData() {
        this.loadcurrentDivison();
        this.loadpermanentDivison();
        this._myService.getAddressInfo(this.param_emp_id)
            .subscribe(
            data => {
                this.address = data.json() || {};
                if (data.json()) {
                    this.loadcurrentAddressDistrictData(this.address.currentAddressDivision_id, 'init');
                    this.loadcurrentAddressThanaData(this.address.currentAddressDistrict_id, 'init');

                    this.loadpermanentAddressDistrictData(this.address.permanentAddressDivision_id, 'init');
                    this.loadpermanentAddressThanaData(this.address.permanentAddressDistrict_id, "init");
                }
                else {
                    this.address.isSameAsCurrent = false;
                }
            },
            error => {
            });
    }
    //Load Permanent Division Dropdown Data 
    loadpermanentDivison() {
        this._commonService.getlocation().subscribe(
            res => {
                if (res.ok) {
                    this.permanentAddressDistrictData = [];
                    this.permanentAddressThanaData = [];
                    this.permanentAddressDivisionData = res.json()
                }
            },
            error => {
            });
    }
    //Load Permanent District Dropdown Data 
    loadpermanentAddressDistrictData(division_id: number, onLoad?: string) {
        this._commonService.getlocation(division_id).subscribe(
            res => {
                if (res.ok) {
                    if (!onLoad) {
                        this.address.permanentAddressDistrict_id = null;
                        this.address.permanentAddressThana_id = null;
                        this.permanentAddressThanaData = [];
                    }

                    this.permanentAddressDistrictData = res.json()
                }
            },
            error => {
            });
    }
    //Load Permanent Thana Dropdown Data 
    loadpermanentAddressThanaData(district_id: number, onLoad?: string) {
        this._commonService.getlocation(district_id).subscribe(
            res => {
                if (res.ok) {
                    if (!onLoad) {
                        this.address.permanentAddressThana_id = null;
                    }
                    this.permanentAddressThanaData = res.json()
                }
            },
            error => {
            });
    }
    //Load Current Division Dropdown Data 
    loadcurrentDivison() {
        this._commonService.getlocation().subscribe(
            res => {
                if (res.ok) {
                    this.currentAddressDistrictData = [];
                    this.currentAddressThanaData = [];
                    this.currentAddressDivisionData = res.json()
                }
            },
            error => {
            });
    }
    //Load Current District Dropdown Data 
    loadcurrentAddressDistrictData(division_id: number, onLoad?: string) {
        this._commonService.getlocation(division_id).subscribe(
            res => {
                if (res.ok) {
                    if (!onLoad) {
                        this.address.currentAddressDistrict_id = null;
                        this.address.currentAddressThana_id = null;
                        this.currentAddressThanaData = [];
                    }
                    this.currentAddressDistrictData = res.json()
                }
            },
            error => {
            });
    }
    //Load Current Thana Dropdown Data
    loadcurrentAddressThanaData(district_id: number, onLoad?: string) {
        this._commonService.getlocation(district_id).subscribe(
            res => {
                if (res.ok) {
                    if (!onLoad) {
                        this.address.currentAddressThana_id = null;
                    }
                    this.currentAddressThanaData = res.json()
                }
            },
            error => {
            });
    }
    //Load Person Page Data 
    loadPersonal() {
        this.loadPersonalInfoTabData();
        this.loadAddressTabData();
    }
    //Load Documents Page Data 
    loadDocuments() {
        this._myService.getDocumentsInfo(this.param_emp_id)
            .subscribe(
            data => {
                this.documents = data.json() || {};
            },
            error => {
            });
    }

    loadlevelOfEducation() {
        this._commonService.getEducation().subscribe(
            res => {
                if (res.ok) {
                    this.levelOfEducationData = res.json();
                }
            },
            error => {
            });
    }

    loadExamDegreeTitle(parent_id: number, index: number, onLoad?: string) {
        this._commonService.getEducation(parent_id).subscribe(
            res => {
                if (res.ok) {
                    this.academicInfo[index].examDegreeTitleData = res.json();
                    if (!onLoad) {
                        this.academicInfo[index].examDegreeTitle_id = null;
                    }
                }
            },
            error => {
            });
    }

    //Load Academic Info Tab Data
    loadAcademicInfoTabData() {
        this.resultsData = this._commonService.getResults();
        //  this.levelOfEducationData = this._commonService.getLevelOfEducation();
        //  this.examDegreeTitleData = this._commonService.getExamDegreeTitle();
        this.loadlevelOfEducation();
        this._myService.getAcademicInfo(this.param_emp_id)
            .subscribe(
            res => {
                this.academicInfo = res.json().data;
                if (this.academicInfo.length == 0) {
                    this.academicInfo.push(new AcademicInfo());
                }
                else {
                    for (let i = 0; i < this.academicInfo.length; i++) {
                        this.loadExamDegreeTitle(this.academicInfo[i].levelOfEducation_id, i, "init");
                    }
                }
            },
            error => {
                this.academicInfo = [];
            });
    }

    //Load Certification & Traning Tab Data
    loadCertificateAndTraningInfoTabData() {
        this._myService.getCertificationInfo(this.param_emp_id)
            .subscribe(
            res => {
                this.certificationsandTrainingInfo = res.json().data;
                if (this.certificationsandTrainingInfo.length == 0) {
                    this.certificationsandTrainingInfo.push(new CertificationInfo());
                }
            },
            error => {
            });
    }
    //Load Education Page Data
    loadEducation() {
        this.loadAcademicInfoTabData();
        this.loadCertificateAndTraningInfoTabData();
    }

    loadEmploymentDetails() {
        this.loadCompanyBusiness();
        this._myService.getPreviousEmploymentInfo(this.param_emp_id)
            .subscribe(
            res => {
                this.previousEmploymentDetails = res.json().data;
                if (this.previousEmploymentDetails.length == 0) {
                    this.previousEmploymentDetails.push(new PreviousEmploymentInfo());
                }
                else {
                    for (let index = 0; index < this.previousEmploymentDetails.length; index++) {
                        this.previousEmploymentDetails[index].employmentPeriodFrom = this.previousEmploymentDetails[index].employmentPeriodFrom ? new Date(this.previousEmploymentDetails[index].employmentPeriodFrom) : null;
                        this.previousEmploymentDetails[index].employmentPeriodTo = this.previousEmploymentDetails[index].employmentPeriodTo ? new Date(this.previousEmploymentDetails[index].employmentPeriodTo) : null;
                    }
                }
            },
            error => {
            });
    }

    loadCompanyBusiness() {
        this._commonService.getCompanyBusiness()
            .subscribe(
            res => {
                if (res.ok) {
                    this.companyBusinessData = res.json() || [];
                }
            },
            error => {
            });
    }


    loadRelation() {
        this._commonService.getRelation()
            .subscribe(
            res => {
                if (res.ok) {
                    this.relationData = res.json() || [];
                }
            },
            error => {
            });
    }

    loadFamilyInfo() {
        this._myService.getFamilyInfo(this.param_emp_id)
            .subscribe(
            res => {
                this.familyInfo = res.json().data;
                if (this.familyInfo.length == 0) {
                    this.familyInfo.push(new FamilyInfo());
                }
                else {
                    for (let index = 0; index < this.familyInfo.length; index++) {
                        this.familyInfo[index].dateOfBirth = this.familyInfo[index].dateOfBirth ? new Date(this.familyInfo[index].dateOfBirth) : null;
                    }
                }
            },
            error => {
            });
    }

    loadFamilyInfoTabData() {
        this.loadRelation();
        this.loadFamilyInfo();
    }

    loadOfficeInfoTabData() {
        this.countryData = this._commonService.getCountry();
        this.loadFacility();
        this._myService.getOfficeDetails(this.param_emp_id)
            .subscribe(
            data => {
                this.officeInfo = data.json() || {};
                this.officeInfo.dateOfJoining = this.officeInfo.dateOfJoining ? new Date(this.officeInfo.dateOfJoining) : this.officeInfo.dateOfJoining;
                this.officeInfo.dateOfConfirmation = this.officeInfo.dateOfConfirmation ? new Date(this.officeInfo.dateOfConfirmation) : this.officeInfo.dateOfConfirmation;
                this.officeInfo.workPermitEffectiveDate = this.officeInfo.workPermitEffectiveDate ? new Date(this.officeInfo.workPermitEffectiveDate) : this.officeInfo.workPermitEffectiveDate;
                this.officeInfo.workPermitExpiryDate = this.officeInfo.workPermitExpiryDate ? new Date(this.officeInfo.workPermitExpiryDate) : this.officeInfo.workPermitExpiryDate;
                this.savedOfficeEmailId = this.officeInfo.officeEmail;
            },
            error => {
            });
    }

    loadFacility() {
        this._commonService.getFacility().subscribe(
            res => {
                this.facilityData = res.json() || [];
            },
            error => {
            });
    }

    loadJoiningDetailsTabData() {
        //this._authService.getOfficeDetails(this.empProfile.empId)
        // .subscribe(
        // data => {
        //     this.empProfile.personalInfo=data.json()|| {};
        // },
        // error => {
        // });
    }

    //load Roles Dropdown Data init

    // loadRoles() {
    //     this._commonService.getRole().subscribe(
    //         res => {
    //             if (res.ok) {
    //                 this.rolesData = res.json() || [];
    //             }
    //         },
    //         error => {
    //             this.rolesData = [];
    //         });

    // }

    //load Emoloyement Status Dropdown Data init
    loadEmploymentStatus() {
        this._commonService.getEmploymentStatus()
            .subscribe(
            res => {
                if (res.ok) {
                    this.employmentStatusData = res.json()
                }
            },
            error => {
                this.employmentStatusData = []
            });
    }
    //load Division Dropdown Data init
    loadDivision() {
        this._commonService.getDivision()
            .subscribe(
            res => {
                if (res.ok) {
                    this.divisionData = res.json();
                }
            },
            error => {
            });
    }
    //load Companies Dropdown Data init
    loadCompanies() {
        this._commonService.getComapnies()
            .subscribe(
            res => {
                if (res.ok) {
                    this.hrspocData = [];
                    this.buisnessHrHeadData = [];
                    this.groupHrHeadData = [];
                    this.companiesData = res.json();
                }
            },
            error => {
            });
    }
    //load Grade Dropdown
    loadManagementType(onLoad?: string) {
        this._commonService.getManagementType()
            .subscribe(
            res => {
                if (res.ok) {
                    if (!onLoad) {
                        this.employmentTypeData = [];
                        this.gradeData = [];
                        this.supervisorData = [];
                        this.designationData = [];

                        this.positionDetails.managementType_id = null
                        this.positionDetails.employmentType_id = null;
                        this.positionDetails.grade_id = null;
                        this.positionDetails.primarySupervisorEmp_id = null;
                        this.positionDetails.designation_id = null;
                    }
                    this.managementTypeData = res.json()
                }
            },
            error => {
            });
    }
    //load HR Spoce By company_id
    // loadHRSpoce(company_id?: number, onLoad?: string) {
    //     this._commonService.getHrSpoce(company_id)
    //         .subscribe(
    //         res => {
    //             if (res.ok) {
    //                 if (!onLoad) {
    //                     this.positionDetails.hrspoc_id = null;
    //                     this.positionDetails.businessHrHead_id = null;
    //                     this.positionDetails.groupHrHead_id = null;
    //                 }
    //                 this.hrspocData = res.json() || [];
    //             }
    //         },
    //         error => {
    //             this.hrspocData = [];
    //         });
    // }

    loadHrHeads(companyId?: number, onLoad?: string) {
        debugger;
        if (!onLoad) {
            this.buisnessHrHeadData = [];
            this.groupHrHeadData = [];
            this.positionDetails.businessHrHead_id = null;
            this.positionDetails.groupHrHead_id = null;
        }

        if (!companyId) {
            companyId = this.positionDetails.company_id;
        }

        this._commonService.getHrHeads(companyId).subscribe(
            res => {
                if (res.ok) {
                    let hrHeads = res.json() || [];
                    if (hrHeads && hrHeads.result && hrHeads.result.length > 0) {
                        this.buisnessHrHeadData = hrHeads.result.filter(h => h.type == 1);
                        this.groupHrHeadData = hrHeads.result.filter(h => h.type == 2);
                        this.hrspocData = hrHeads.result.filter(h => h.type == 3);
                    }
                }
            },
            error => {
                console.log(error)
            });
    }


    // //load Buisness Hr Head By hrspoc_id
    // loadBuisnessHrHead(hrspoc_id?: number, onLoad?: string) {
    //     this._commonService.getHrSpoce(this.positionDetails.company_id, hrspoc_id).subscribe(
    //         res => {
    //             if (res.ok) {
    //                 if (!onLoad) {
    //                     this.groupHrHeadData = [];
    //                     this.positionDetails.businessHrHead_id = null;
    //                     this.positionDetails.groupHrHead_id = null;
    //                 }
    //                 this.buisnessHrHeadData = res.json()
    //             }
    //         },
    //         error => {
    //         });
    // }

    //load Vertical Dropdown By department_id 
    loadVertical(department_id?: number, onLoad?: string) {
        this._commonService.getVertical(department_id)
            .subscribe(
            res => {
                if (res.ok) {
                    this.verticalData = res.json()
                }
            },
            error => {
            });
    }
    //load SubVertical Dropdown By vertical_id 
    loadSubVertical(vertical_id?: number, onLoad?: string) {
        this._commonService.getSubVertical(vertical_id)
            .subscribe(
            res => {
                if (res.ok) {
                    this.subverticalData = res.json()
                }
            },
            error => {
            });
    }
    //load Employment Type By managementType_id 
    loadEmploymentType(managementType_id?: number, onLoad?: string) {
        this._commonService.getEmploymentType(managementType_id)
            .subscribe(
            res => {
                if (res.ok) {
                    if (!onLoad) {
                        this.gradeData = [];
                        this.supervisorData = [];
                        this.designationData = [];

                        this.positionDetails.employmentType_id = null;
                        this.positionDetails.grade_id = null;
                        this.positionDetails.primarySupervisorEmp_id = null;
                        this.positionDetails.designation_id = null;
                    }
                    this.employmentTypeData = res.json()
                }
            },
            error => {
            });
    }
    //load Grade Dropdown By managementType_id  && employmentType_id
    loadGrade(managementType_id?: number, employmentType_id?: number, onLoad?: string) {
        this._commonService.getGrade(managementType_id, employmentType_id)
            .subscribe(
            res => {
                if (res.ok) {
                    if (!onLoad) {
                        this.supervisorData = [];
                        this.designationData = [];

                        this.positionDetails.grade_id = null;
                        this.positionDetails.primarySupervisorEmp_id = null;
                        this.positionDetails.designation_id = null;
                    }
                    this.gradeData = res.json();
                }
            },
            error => {
            });
    }
    //load Supervisor By grade_id
    loadSupervisor(grade_id?: number, onLoad?: string) {
        this._commonService.getSupervisor(grade_id)
            .subscribe(
            res => {
                if (res.ok) {
                    if (!onLoad) {
                        this.positionDetails.primarySupervisorEmp_id = null;
                    }
                    this.supervisorData = res.json()
                }
            },
            error => {
            });
    }

    // //load Group Hr Head By hrspoc_id
    // loadGroupHrHead(businessHrHead_id?: number, onLoad?: string) {
    //     this._commonService.getHrSpoce(this.positionDetails.company_id, businessHrHead_id).subscribe(
    //         res => {
    //             if (res.ok) {
    //                 if (!onLoad) {
    //                     this.positionDetails.groupHrHead_id = null;
    //                 }
    //                 this.groupHrHeadData = res.json()
    //             }
    //         },
    //         error => {
    //         });
    // }

    //load Designation By grade_id
    loadDesignation(grade_id?: number, onLoad?: string) {
        this._commonService.getDesignation(grade_id).subscribe(
            res => {
                if (res.ok) {
                    if (!onLoad) {
                        this.positionDetails.designation_id = null;
                    }
                    this.designationData = res.json()
                }
            },
            error => {
            });
    }
    //load Department Dropdown By divisonId 
    loadDepartment(division_id?: number, onLoad?: string) {
        this._commonService.getDepartment(division_id)
            .subscribe(
            res => {
                if (res.ok) {
                    if (!onLoad) {
                        this.positionDetails.department_id = null;
                        this.positionDetails.vertical_id = null;
                        this.positionDetails.subVertical_id = null;

                        this.verticalData = [];
                        this.subverticalData = [];
                    }
                    this.deparmentData = res.json();
                }
            },
            error => {
            });
    }

    loadPositionDetailsTabData() {

        this.loadCompanies();
        this.loadDivision();
        this.loadManagementType('init');
        this.loadEmploymentStatus();
        //this.loadRoles();
        this._myService.getPositionDetails(this.param_emp_id)
            .subscribe(
            data => {
                this.positionDetails = data.json() || {};
                if (data.json()) {
                    this.loadDepartment(this.positionDetails.division_id, "init")
                    this.loadEmploymentType(this.positionDetails.managementType_id, "init")
                    this.loadGrade(this.positionDetails.managementType_id, this.positionDetails.employmentType_id, "init")
                    // this.loadHRSpoce(this.positionDetails.company_id, "init");
                    this.loadHrHeads(this.positionDetails.company_id, "init")
                    // this.loadBuisnessHrHead(this.positionDetails.hrspoc_id, "init")
                    // this.loadGroupHrHead(this.positionDetails.businessHrHead_id, "init")
                    this.loadVertical(this.positionDetails.department_id, "init")
                    this.loadSubVertical(this.positionDetails.vertical_id, "init")
                    this.loadSupervisor(this.positionDetails.grade_id, "init")
                    this.loadDesignation(this.positionDetails.grade_id, "init")
                }
            },
            error => {
                this.positionDetails = {};
            });
    }

    loadPerformanceDairyTabData() {
        this._myService.getPerformanceDairyDeatils(this.param_emp_id)
            .subscribe(
            data => {
                this.performanceDiary = data.json() || []
            },
            error => {
            });

    }

    loadOfficeDetails() {
        this.loadOfficeInfoTabData();
        this.loadPositionDetailsTabData();
        this.loadPerformanceDairyTabData();
    }

    loadBankDetails() {
        this.currencyArrData = this._commonService.getCurrency();
        this._myService.getBankInfo(this.param_emp_id)
            .subscribe(
            data => {
                this.bankDetails = data.json() || {};
            },
            error => {
                this.bankDetails = {};
            });

    }

    getSeparationDetails() {

        this.toggleAccess = this._commonService.getPermissionData();
        this.separationTypeArrData = this._commonService.getSeparationData();
        this._myService.getSeparationInfo(this.param_emp_id)
            .subscribe(
            data => {
                this.separationDetails = data.json() || {};
                this.separationDetails.dateOfResignation = this.separationDetails.dateOfResignation ? new Date(this.separationDetails.dateOfResignation) : this.separationDetails.dateOfResignation;
                this.separationDetails.effectiveDate = this.separationDetails.effectiveDate ? new Date(this.separationDetails.effectiveDate) : this.separationDetails.effectiveDate;
                this.separationDetails.dateOfSeparation = this.separationDetails.dateOfSeparation ? new Date(this.separationDetails.dateOfSeparation) : this.separationDetails.dateOfSeparation;
            },
            error => {
                this.separationDetails = {};
            });

        this.getEmpStates();
    }

    getEmpStates() {

        this._myService.getStatesInfo(this.param_emp_id)
            .subscribe(
            data => {
                this.stateDetails = data.json() || {};
                // this.stateDetails.isActive = "Activate" ? this.stateDetails.isAccountActive : "Deactivate"
                if (this.stateDetails.isAccountActive) {
                    this.stateDetails.isActive = "Activate";
                } else {
                    this.stateDetails.isActive = "Deactivate";
                }

            },
            error => {
                this.stateDetails = {};
            });

    }

    onToggleChanges() {

        this.stateDetails.emp_id = this.stateDetails.emp_id != null ? this.stateDetails.emp_id : (this._currentEmpId || this.param_emp_id);
        this.stateDetails.isActive = this.stateDetails.isActive;
        swal({
            title: 'Are you sure?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {

            if (result.value) {

                this._myService.updateState(this.stateDetails)
                    .subscribe(
                    data => {
                        mApp.unblock('#m_accordion_5_item_16_body');
                        swal({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 })
                        //this.separationDetails.isActive = data.json().isAccountActive;
                    },
                    error => {
                        mApp.unblock('#m_accordion_5_item_16_body');
                    });
            } else {
                if (this.stateDetails.isActive === "Activate") {
                    this.stateDetails.isActive = "Deactivate";
                } else {
                    this.stateDetails.isActive = "Activate";
                }
            }
        });

    }

    loadSalaryInfoDropdownData() {
        this.providentFundMemberShipData = this._commonService.getProvidentFundMemberShip();
        this.groupLifeInsuranceData = this._commonService.getGroupLifeInsurance();
        this.festivalAllowanceData = this._commonService.getFestivalAllowance();
        this.hospitalizationSchemeData = this._commonService.getHospitalizationScheme();
    }

    loadSalaryInfo() {
        this._myService.getSalaryInfo(this.param_emp_id)
            .subscribe(
            data => {
                this.salaryDetails = data.json() || {};
            },
            error => {
                this.salaryDetails = {};
            });
    }

    loadSalaryInfoTabData() {
        this.loadSalaryInfoDropdownData();
        this.loadSalaryInfo();
    }

    isHikeSalary(form) {
        swal({
            title: 'Are you sure?',
            text: "You want add new salary details!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#66BB6A',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Yes',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then((result) => {
            if (result.value) {
                form.resetForm();
            }
        })
    }

    loadCarDetails() {
        this._myService.getCarInfo(this.param_emp_id)
            .subscribe(
            data => {
                this.carDetails = data.json() || {};
                this.carDetails.companyEffectiveDate = this.carDetails.companyEffectiveDate ? new Date(this.carDetails.companyEffectiveDate) : this.carDetails.companyEffectiveDate;
                this.carDetails.companyExpiryDate = this.carDetails.companyExpiryDate ? new Date(this.carDetails.companyExpiryDate) : this.carDetails.companyExpiryDate;
                this.carDetails.privateEffectiveDate = this.carDetails.privateEffectiveDate ? new Date(this.carDetails.privateEffectiveDate) : this.carDetails.privateEffectiveDate;
                this.carDetails.privateExpiryDate = this.carDetails.privateExpiryDate ? new Date(this.carDetails.privateExpiryDate) : this.carDetails.privateExpiryDate;
            },
            error => {
                this.carDetails = {};
            });
    }

    loadPayrollDetails() {
        this.loadBankDetails();
        this.loadSalaryInfoTabData();
        this.loadCarDetails()
    }

    loadSeperation() {
        //this._authService.getSeperationDetails(this.empProfile.empId)
        // .subscribe(
        // data => {
        //     this.empProfile.personalInfo=data.json();
        // },
        // error => {
        // });
    }
}