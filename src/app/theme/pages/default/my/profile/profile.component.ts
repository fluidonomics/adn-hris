import { FormBuilder } from "@angular/forms";
import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { CommonService } from "../../../../../base/_services/common.service";
import { AuthService } from "../../../../../base/_services/authService.service";
import { MyService } from "../my.service";
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { BankInfo, AcademicInfo } from "../../../../../base/_interface/user.model"
declare var mApp;
declare var $;

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--profile",
    templateUrl: "./profile.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ["./profile.component.css"]
})

export class ProfileComponent implements OnInit {

    uploadInput: EventEmitter<UploadInput>;
    humanizeBytes: Function;

    empProfile = {
        personalInfo: {},
        address: {},
        documents: {},
        academicInfo: {},
        joiningDetails: {},
        certificationsandTrainingInfo: {},
        previousEmploymentDetails: {},
        familyInfo: {},
        officeInfo: {},
        positionDetails: {},
        performanceDiary: {},
        bankDetails: {},
        salaryDetails: {},
        otherBenefitDetails: {},
        companyCarDetails: {},
        personalCarDetails: {}
    }

    personalInfo: any = {}
    address: any = {}
    documents: any = {}
    academicInfo: Array<AcademicInfo> = [];
    joiningDetails: any = {}
    certificationsandTrainingInfo: any = {}
    previousEmploymentDetails: any = {}
    familyInfo: any = {}
    officeInfo: any = {}
    positionDetails: any = {}
    performanceDiary: any = {}
    bankDetails = <BankInfo>{}
    salaryDetails: any = {}

    // otherBenefitDetails: any= {}
    // companyCarDetails: any ={}
    // personalCarDetails: any = {}
    carDetails: any = {}

    exampleData: any = [];


    providentFundMemberShipData = [];
    groupLifeInsuranceData = [];
    festivalAllowanceData = [];
    hospitalizationSchemeData = [];


    currencyArrData = [];

    // Dropdown Variable
    currentAddressDistrictData = [];
    currentAddressThanaData = [];
    currentAddressDivisionData = [];

    permanentAddressDistrictData = [];
    permanentAddressThanaData = [];
    permanentAddressDivisionData = [];


    tabName = "personal";
    params = "";
    _currentEmpId: number;
    param_emp_id: number;

    //Personal Info
    bloodGropData: any = [];
    religionData: any = [];
    maritialStatusData: any = [];
    nationalityData: any = [];

    //Postion Details
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
    rolesData: any = [];
    managementTypeData: any = [];



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
    }

    ngOnInit() {
        this.exampleData = [
            {
                id: 'basic1',
                text: 'Basic 1'
            },
            {
                id: 'basic2',
                text: 'Basic 2'
            },
            {
                id: 'basic3',
                text: 'Basic 3'
            },
            {
                id: 'basic4',
                text: 'Basic 4'
            },
        ];
        this._route.queryParams.subscribe(params => {
            if (params['tabName']) {
                this.tabName = params['tabName'];
            }
            this._authService.validateToken().subscribe(
                res => {
                    this._currentEmpId = this._authService.currentUserData._id;
                    this.initData();
                });
        });
    }

    initData() {
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
                this.loadEmployementDetails();
                break;
            case "family":
                this.loadFamilyInfo();
                break;
            case "office":
                this.loadOfficeDetails();
                break;
            case "payroll":
                this.loadPayrollDetails();
                break;

            default:
                this.loadPersonal();
        }
    }

    setPermentAddress(sameAddress) {
        if (sameAddress) {
            this.address.permanentAddressLine1 = this.address.currentAddressPostCode;
            this.address.permanentAddressLine2 = this.address.currentAddressLine2;
            this.address.permanentAddressThana = this.address.currentAddressThana;
            this.address.permanentAddressDistrict = this.address.currentAddressDistrict;
            this.address.permanentAddressDivision = this.address.currentAddressDivision;
            this.address.permanentAddressPostCode = this.address.currentAddressPostCode;
        }
        else {
            this.resetPermentAddress();
        }
    }

    resetPermentAddress() {
        this.address.permanentAddressLine1 = null;
        this.address.permanentAddressLine2 = null;
        this.address.permanentAddressThana = null;
        this.address.permanentAddressDistrict = null;
        this.address.permanentAddressDivision = null;
        this.address.permanentAddressPostCode = null;
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
                this.personalInfo = data.json() || {};
            },
            error => {
                mApp.unblock('#m_accordion_5_item_1_body');
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
                this.bankDetails = data.json();
            },
            error => {
                mApp.unblock('#m_accordion_5_item_16_body');
            });
    }

    //save Bank Info
    saveSalaryDetails() {
        this.salaryDetails.emp_id = this.salaryDetails.emp_id != null ? this.salaryDetails.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveSalaryDetails(this.salaryDetails)
            .subscribe(
            data => {
                // mApp.unblock('#m_accordion_5_item_1_body');
                this.salaryDetails = data.json();
            },
            error => {
                //mApp.unblock('#m_accordion_5_item_1_body');
            });
    }

    saveCarDetails() {
        this.carDetails.emp_id = this.carDetails.emp_id != null ? this.carDetails.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveCarDetails(this.carDetails)
            .subscribe(
            data => {
                //mApp.unblock('#m_accordion_5_item_1_body');
                this.carDetails = data.json();
            },
            error => {
                this.carDetails = {};
                //mApp.unblock('#m_accordion_5_item_1_body');
            });
    }

    //save Address Info
    saveAddress() {
        //this.address.emp_id=this.address.emp_id !=null?this.address.emp_id:(this._currentEmpId || this.param_emp_id)
        // this._myService.saveAddressInfo(this.address)
        // .subscribe(
        // data => {
        //     this.address=data.json();
        // },
        // error => {
        // });
    }

    //save Address Info
    saveAcademicInfo() {
        // this._authService.saveAcademicInfo(this.empProfile.address)
        // .subscribe(
        // data => {
        //     this.empProfile.address=data.json();
        // },
        // error => {
        // });
    }

    //save CertificationAndTraningInfo Info
    saveCertificationAndTraningInfo() {
        // this._authService.saveCertificationAndTraningInfo(this.empProfile.address)
        // .subscribe(
        // data => {
        //     this.empProfile.address=data.json();
        // },
        // error => {
        // });

    }

    //save Address Info
    savePerviousEmployementDetails() {
        // this._authService.savePerviousEmployementDetails(this.empProfile.address)
        // .subscribe(
        // data => {
        //     this.empProfile.address=data.json();
        // },
        // error => {
        // });

    }

    //save Address Info
    saveFamilyInfo() {
        // this._authService.saveFamilyInfo(this.empProfile.address)
        // .subscribe(
        // data => {
        //     this.empProfile.address=data.json();
        // },
        // error => {
        // });
    }

    //save Address Info
    saveOfficeInfo() {
        // this._authService.saveOfficeInfo(this.empProfile.address)
        // .subscribe(
        // data => {
        //     this.empProfile.address=data.json();
        // },
        // error => {
        // });
    }

    //
    savePayRollInfo() {
        // this._authService.savePayRollInfo(this.empProfile.address)
        // .subscribe(
        // data => {
        //     this.empProfile.address=data.json();
        // },
        // error => {
        // });
    }

    //save Address Info
    saveSeperationInfo() {
        // this._authService.saveSeperationInfo(this.empProfile.address)
        // .subscribe(
        // data => {
        //     this.empProfile.address=data.json();
        // },
        // error => {
        // });
    }

    loadPersonalInfoTabData() {
        //Init Data Personal Info Tab
        this.bloodGropData = this._commonService.getBloodGroup();
        this.religionData = this._commonService.getReligion();
        this.maritialStatusData = this._commonService.getMartialStatus();
        this.nationalityData = this._commonService.getNationality()

        this._myService.getPersonalInfo(this._currentEmpId)
            .subscribe(
            data => {
                this.personalInfo = data.json() || {};
            },
            error => {
            });
    }

    loadAddressTabData() {
        this._myService.getAddressDetails(1)
            .subscribe(
            data => {
                this.address = data.json() || {};

                this.loadcurrentDivison();
                if (data.json()) {
                    this.loadcurrentAddressDistrictData(this.address.currentAddressDivision_id, 'init');
                    this.loadcurrentAddressThanaData(this.address.currentAddressDistrict_id);
                }

                this.loadpermanentDivison();
                if (data.json()) {
                    this.loadpermanentAddressDistrictData(this.address.permanentAddressDivision_id, 'init');
                    this.loadpermanentAddressThanaData(this.address.permanentAddressDistrict_id);
                }

            },
            error => {
            });
    }

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

    loadpermanentAddressThanaData(district_id: number) {
        this._commonService.getlocation(district_id).subscribe(
            res => {
                if (res.ok) {
                    this.permanentAddressThanaData = res.json()
                }
            },
            error => {
            });
    }

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

    loadcurrentAddressThanaData(district_id) {
        this._commonService.getlocation(district_id).subscribe(
            res => {
                if (res.ok) {
                    this.currentAddressThanaData = res.json()
                }
            },
            error => {
            });
    }

    loadPersonal() {
        this.loadPersonalInfoTabData();
        this.loadAddressTabData();
    }

    loadDocuments() {
        this._myService.getDocuments(this._currentEmpId)
            .subscribe(
            data => {
                this.documents = data.json() || {};
            },
            error => {
            });
    }

    loadAcademicInfoTabData() {
        this._myService.getAcademicInfo(this._currentEmpId)
            .subscribe(
            res => {
                this.academicInfo = res.json().data || [];
            },
            error => {
                this.academicInfo = [];
            });
    }

    loadCertificateAndTraningInfoTabData() {
        //this._myService.getEducation(this.empProfile.empId)
        // .subscribe(
        // data => {
        //     this.empProfile.personalInfo=data.json() || {};
        // },
        // error => {
        // });
    }

    loadEducation() {
        this.loadAcademicInfoTabData();
        this.loadCertificateAndTraningInfoTabData();

    }

    loadEmployementDetails() {
        //this._authService.getEmployementDetails(this.empProfile.empId)
        // .subscribe(
        // data => {
        //     this.empProfile.personalInfo=data.json() || {};
        // },
        // error => {
        // });
    }

    loadFamilyInfo() {
        //this._authService.getFamilyDetails(this.empProfile.empId)
        // .subscribe(
        // data => {
        //     this.empProfile.personalInfo=data.json() || {};
        // },
        // error => {
        // });
    }

    loadOfficeInfoTabData() {
        //this._authService.getOfficeDetails(this.empProfile.empId)
        // .subscribe(
        // data => {
        //     this.empProfile.personalInfo=data.json() || {};
        // },
        // error => {
        // });
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

    loadRoles() {
        this._commonService.getRole().subscribe(
            res => {
                if (res.ok) {
                    this.rolesData = res.json() || [];
                }
            },
            error => {
                this.rolesData = [];
            });

    }

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
    loadManagementType() {
        this._commonService.getManagementType()
            .subscribe(
            res => {
                if (res.ok) {

                    this.employmentTypeData = [];
                    this.gradeData = [];
                    this.supervisorData = [];
                    this.designationData = [];

                    //   this.addemp.managementType_id=null
                    //   this.addemp.employmentType_id=null;
                    //   this.addemp.grade_id=null;
                    //   this.addemp.primarySupervisorEmp_id=null;
                    //   this.addemp.designation_id=null;
                    this.managementTypeData = res.json()
                }
            },
            error => {
            });
    }

    //load HR Spoce By company_id
    loadHRSpoce(company_id?: number, onLoad?: string) {
        this._commonService.getHrSpoce(company_id)
            .subscribe(
            res => {
                if (res.ok) {
                    if (!onLoad) {
                        this.buisnessHrHeadData = [];
                        this.groupHrHeadData = [];
                        this.officeInfo.hrspoc_id = null;
                        this.officeInfo.businessHrHead_id = null;
                        this.officeInfo.groupHrHead_id = null;
                    }
                    this.hrspocData = res.json() || [];
                }
            },
            error => {
                this.hrspocData = [];
            });
    }

    //load Buisness Hr Head By hrspoc_id
    loadBuisnessHrHead(hrspoc_id?: number, onLoad?: string) {
        this._commonService.getHrSpoce(this.positionDetails.company_id, hrspoc_id).subscribe(
            res => {
                if (res.ok) {
                    if (!onLoad) {
                        this.groupHrHeadData = [];
                        this.positionDetails.businessHrHead_id = null;
                        this.positionDetails.groupHrHead_id = null;
                    }
                    this.buisnessHrHeadData = res.json()
                }
            },
            error => {
            });
    }


    //load Vertical Dropdown By department_id 
    loadVertical(department_id?: number) {
        // this._commonService.getVertical(department_id)
        //     .subscribe(
        //     res => {
        //         if (res.ok) {
        //             this.verticalData = res.json()
        //         }
        //     },
        //     error => {
        //     });
    }

     //load SubVertical Dropdown By vertical_id 
     loadSubVertical(vertical_id?: number) {
        // this._commonService.getSubVertical(vertical_id)
        //     .subscribe(
        //     res => {
        //         if (res.ok) {
        //             this.subverticalData = res.json()
        //         }
        //     },
        //     error => {
        //     });
    }

   //load Employment Type By managementType_id 
   loadEmploymentType(managementType_id?: number) {
    // this._commonService.getEmploymentType(managementType_id)
    //     .subscribe(
    //     res => {
    //         if (res.ok) {
    //             this.gradeData = [];
    //             this.supervisorData = [];
    //             this.designationData = [];

    //             this.addemp.employmentType_id = null;
    //             this.addemp.grade_id = null;
    //             this.addemp.primarySupervisorEmp_id = null;
    //             this.addemp.designation_id = null;


    //             this.employmentTypeData = res.json()
    //         }
    //     },
    //     error => {
    //     });
   }

    //load Grade Dropdown By managementType_id  && employmentType_id
    loadGrade(managementType_id?: number, employmentType_id?: number) {
        // this._commonService.getGrade(managementType_id, employmentType_id)
        //     .subscribe(
        //     res => {
        //         if (res.ok) {

        //             this.supervisorData = [];
        //             this.designationData = [];

        //             this.addemp.grade_id = null;
        //             this.addemp.primarySupervisorEmp_id = null;
        //             this.addemp.designation_id = null;

        //             this.gradeData = res.json();
        //         }
        //     },
        //     error => {
        //     });
    }

    //load Supervisor By grade_id
    loadSupervisor(grade_id?: number) {
        // this._commonService.getSupervisor(grade_id)
        //     .subscribe(
        //     res => {
        //         if (res.ok) {
        //             this.addemp.primarySupervisorEmp_id = null;
        //             this.supervisorData = res.json()
        //         }
        //     },
        //     error => {
        //     });
    }

     //load Group Hr Head By hrspoc_id
     loadGroupHrHead(businessHrHead_id?: number) {
        // this._commonService.getHrSpoce(this.addemp.company_id, businessHrHead_id).subscribe(
        //     res => {
        //         if (res.ok) {

        //             this.addemp.groupHrHead_id = null;
        //             this.groupHrHeadData = res.json()
        //         }
        //     },
        //     error => {
        //     });
    }

      //load Designation By grade_id
    loadDesignation(grade_id?: number) {
        // this._commonService.getDesignation(grade_id).subscribe(
        //     res => {
        //         if (res.ok) {
        //             this.addemp.designation_id = null;
        //             this.designationData = res.json()
        //         }
        //     },
        //     error => {
        //     });
    }

     //load Department Dropdown By divisonId 
     loadDepartment(division_id?: number) {
        // this._commonService.getDepartment(division_id)
        //     .subscribe(
        //     res => {
        //         if (res.ok) {
        //             this.addemp.department_id = null;
        //             this.addemp.vertical_id = null;
        //             this.addemp.subVertical_id = null;

        //             this.verticalData = [];
        //             this.subverticalData = [];
        //             this.deparmentData = res.json();
        //         }
        //     },
        //     error => {
        //     });
    }


    loadPositionDetailsTabData() {
        this.loadCompanies();
        this.loadDivision();
        this.loadManagementType();
        this.loadEmploymentStatus();
        this.loadRoles();
        //    this._myService.getPositionDetails(this._currentEmpId)
        //    .subscribe(
        //    data => {
        //        this.positionDetails=data.json()|| {};
        //        if(data.json())
        //        {
        //           this.loadHRSpoce(this.positionDetails.company_id,"init");
        //           this.loadBuisnessHrHead(this.positionDetails.hrspoc_id,"init")
        //        }
        //    },
        //    error => {
        //     this.positionDetails={};
        //    });
    }

    loadPerformanceDairyTabData() {
        //this._authService.getOfficeDetails(this.empProfile.empId)
        // .subscribe(
        // data => {
        //     this.empProfile.personalInfo=data.json()|| {};
        // },
        // error => {
        // });
    }

    loadOfficeDetails() {
        this.loadOfficeInfoTabData();
        this.loadJoiningDetailsTabData();
        this.loadPositionDetailsTabData();
        this.loadPerformanceDairyTabData();
    }

    loadBankDetails() {
        this.currencyArrData = this._commonService.getCurrency();
        this._myService.getBankDetails(this._currentEmpId)
            .subscribe(
            data => {
                this.bankDetails = data.json() || {};
            },
            error => {
                this.bankDetails = <BankInfo>{};
            });
    }

    loadSalaryDetails() {

        this.providentFundMemberShipData = this._commonService.getProvidentFundMemberShip();
        this.groupLifeInsuranceData = this._commonService.getGroupLifeInsurance();
        this.festivalAllowanceData = this._commonService.getFestivalAllowance();
        this.hospitalizationSchemeData = this._commonService.getHospitalizationScheme();

        this._myService.getSalaryDetails(this._currentEmpId)
            .subscribe(
            data => {
                this.salaryDetails = data.json() || {};
            },
            error => {
                this.salaryDetails = {};
            });
    }

    loadCarDetails() {
        this._myService.getCarDetails(this._currentEmpId)
            .subscribe(
            data => {
                this.carDetails = data.json() || {};
            },
            error => {
                this.carDetails = {};
            });
    }

    loadPayrollDetails() {
        this.loadBankDetails();
        this.loadSalaryDetails();
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