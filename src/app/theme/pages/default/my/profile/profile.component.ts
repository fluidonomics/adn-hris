import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { CommonService } from "../../../../../base/_services/common.service";
import { AuthService } from "../../../../../base/_services/authService.service";
import { MyService } from "../my.service";
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { BankInfo, AcademicInfo,CarInfo,CertificationInfo,PreviousEmploymentInfo,FamilyInfo } from "../../../../../base/_interface/user.model"
import { environment } from "../../../../../../environments/environment.prod";
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

    currentDate:any;

    //Local Variable for Profile 
    personalInfo: any = {}
    address: any = {}
    documents: any = {}
    academicInfo= [];
    joiningDetails: any = {}
    certificationsandTrainingInfo=[];
    previousEmploymentDetails=[];
    familyInfo: any = []
    officeInfo: any = {}
    positionDetails: any = {}
    performanceDiary: any = {}
    bankDetails:any ={} 
    salaryDetails: any = {}
    carDetails:any={};

    exampleData: any = [];
    tabName = "personal";
    params = "";

    _currentEmpId: number;
    param_emp_id: number;

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
    resultsData =[];
    levelOfEducationData=[];
    examDegreeTitleData=[];

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
    rolesData: any = [];
    managementTypeData: any = [];

    //Bank Details Tab Dropdown Variable
    currencyArrData = [];

    //Salary Details Tab Dropdown Variable
    providentFundMemberShipData = [];
    groupLifeInsuranceData = [];
    festivalAllowanceData = [];
    hospitalizationSchemeData = [];

    relationData=[];

    countryData=[];

    

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
        this.currentDate=new Date();
    }

    onUploadOutput(output: UploadOutput): void {
        if (output.type === 'allAddedToQueue') { // when all files added in queue
          // uncomment this if you want to auto upload files when added
          const event: UploadInput = {
            type: 'uploadAll',
            url: environment.api_base.apiBase + '/'+environment.api_base.apiPath +'/image',
            fieldName:"",
            headers:{},
            method: 'POST',
         
          };
          this.uploadInput.emit(event);
        } else if (output.type === 'done') {
          //this.dragOver = false;
          //output.file.response
        }
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
    saveAcademicInfo(objAcademicInfo:any,index:number) {
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
            this.academicInfo[index]=data.json();
        },
        error => {
            mApp.unblock('#m_accordion_5_item_10_body');
        });
    }
     //save CertificationAndTraningInfo Info
    saveCertificationAndTraningInfo(objCertification:any,index:number) {
        objCertification.emp_id = objCertification.emp_id != null ? objCertification.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveCertificationInfo(objCertification)
        .subscribe(
        data => {
             this.certificationsandTrainingInfo[index]=data.json();
        },
        error => {
        });
    }
    //save EmploymentDetils Info
    savePerviousEmploymentDetails(objPerviousEmployment:any,index:number) {
        objPerviousEmployment.emp_id = objPerviousEmployment.emp_id != null ? objPerviousEmployment.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.savePreviousEmploymentInfo(objPerviousEmployment)
        .subscribe(
        data => {
             this.previousEmploymentDetails[index]=data.json();
        },
        error => {
        });

    }
    //save Family Info
    saveFamilyInfo(objFamily:any,index:number) {
         objFamily.emp_id = objFamily.emp_id != null ? objFamily.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveFamilyInfo(objFamily)
        .subscribe(
        data => {
            this.familyInfo[index]=data.json();
        },
        error => {
        });
    }
    //save Office Info
    saveOfficeInfo() {
        // this._authService.saveOfficeInfo(this.empProfile.address)
        // .subscribe(
        // data => {
        //     this.empProfile.address=data.json();
        // },
        // error => {
        // });
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
    //save Salary Info
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
    //save Car Details
    saveCarDetails() {
        this.carDetails.emp_id = this.carDetails.emp_id != null ? this.carDetails.emp_id : (this._currentEmpId || this.param_emp_id)
        this._myService.saveCarDetails(this.carDetails)
            .subscribe(
            data => {
                //mApp.unblock('#m_accordion_5_item_1_body');
                this.carDetails = data.json();
            },
            error => {
                 this.carDetails = {};;
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
    deleteAcademicInfo(academicInfo_id:number)
    {
        this._myService.deleteAcademicInfo(academicInfo_id)
        .subscribe(
        data => {
             if(data.ok)
             {
                this.removeHtmlContain("academicInfo",academicInfo_id);
             }
        },
        error => {
            //mApp.unblock('#m_accordion_5_item_1_body');
        });
    }
    //delete Previous Employment
    deletePreviousEmployment(previousEmployment_id:number)
    {
        this._myService.deletePreviousEmploymentInfo(previousEmployment_id)
        .subscribe(
        data => {
             if(data.ok)
             {
                this.removeHtmlContain("employment",previousEmployment_id);
             }
        },
        error => {
            //mApp.unblock('#m_accordion_5_item_1_body');
        });
    }
    //delete Family Info
    deleteFamilyInfo(family_id:number)
    {
        this._myService.deleteFamilyInfo(family_id)
        .subscribe(
        data => {
             if(data.ok)
             {
                this.removeHtmlContain("family",family_id);
             }
        },
        error => {
            //mApp.unblock('#m_accordion_5_item_1_body');
        });
    }
    // addNewAcademicInfoHtml()
    // {
    //   this.academicInfo.push(new AcademicInfo());
    // }
    
    // removeAcademicInfo(academicInfo_id)
    // {
    //   this.academicInfo=this.academicInfo.filter(x=>x._id!=academicInfo_id);
    //   if(this.academicInfo.length==0)
    //   {
    //      this.addNewAcademicInfoHtml();
    //   }
    // }

    // isAddAcademicInfo()
    // {
    //     if(this.academicInfo.filter(x=>x._id==null || x._id==undefined).length == 0)
    //     {
    //       return false;
    //     }
    //     return true ;
    // }
  
    //Add New Html on Click of Add Button 
    addNewHtmlContain(subTabName:string)
    {
        switch (subTabName) {
            case "academicInfo":
              this.academicInfo.push(new AcademicInfo());
            break;
            case "certificationAndTrainingInfo":
            this.academicInfo.push(new CertificationInfo());
            break;
            case "employment":
            this.previousEmploymentDetails.push(new PreviousEmploymentInfo());
            break;
            case "family":
            this.officeInfo.push(new FamilyInfo());
            break;
            
        }
    }
    //Remove Html on After Delete 
    removeHtmlContain(subTabName:string,_id:number)
    { 
        switch (subTabName) {
            case "academicInfo":
            this.academicInfo=this.academicInfo.filter(x=>x._id!=_id);
            if(this.academicInfo.length==0)
            {
                 this.addNewHtmlContain(subTabName);
            }
            break;
            case "certificationAndTrainingInfo":
            this.certificationsandTrainingInfo=this.certificationsandTrainingInfo.filter(x=>x._id!=_id);
            if(this.certificationsandTrainingInfo.length==0)
            {
                this.addNewHtmlContain(subTabName);
            }
            break;
            case "employment":
            this.previousEmploymentDetails=this.previousEmploymentDetails.filter(x=>x._id!=_id);
            if(this.previousEmploymentDetails.length==0)
            {
                this.addNewHtmlContain(subTabName);
            }
            break;
            case "family":
            this.familyInfo=this.familyInfo.filter(x=>x._id!=_id);
            if(this.familyInfo.length==0)
            {
                this.addNewHtmlContain(subTabName);
            }
            break;
        }
    }
    //Check wheather HTML is Added or Not
    isAdded(subTabName:string)
    {
        switch (subTabName) {
            case "academicInfo":
              if(this.academicInfo.filter(x=>x._id==null || x._id==undefined).length == 0)
              {
                return false;
              }
              return true;
            case "certificationAndTrainingInfo":
                if(this.certificationsandTrainingInfo.filter(x=>x._id==null || x._id==undefined).length == 0)
                {
                  return false;
                }
                return true;
            case "employment":
                if(this.previousEmploymentDetails.filter(x=>x._id==null || x._id==undefined).length == 0)
                {
                  return false;
                }
                return true;
            case "family":
                if(this.familyInfo.filter(x=>x._id==null || x._id==undefined).length == 0)
                {
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
        this.nationalityData = this._commonService.getNationality()

        this._myService.getPersonalInfo(this._currentEmpId)
            .subscribe(
            data => {
                this.personalInfo = data.json() || {};
            },
            error => {
            });
    }
    //Load Address Tab Data.
    loadAddressTabData() {
        this._myService.getAddressInfo(1)
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
    //Load Person Page Data 
    loadPersonal() {
        this.loadPersonalInfoTabData();
        this.loadAddressTabData();
    }
    //Load Documents Page Data 
    loadDocuments() {
        this._myService.getDocumentsInfo(this._currentEmpId)
            .subscribe(
            data => {
                this.documents = data.json() || {};
            },
            error => {
            });
    }

    loadlevelOfEducation()
    {
        this._commonService.getEducation().subscribe(
            res => {
                if (res.ok) {
                    this.levelOfEducationData = res.json();
                }
            },
            error => {
            });
    }

    loadExamDegreeTitle(parent_id:number,index:number,onLoad?:string)
    {
        this._commonService.getEducation(parent_id).subscribe(
            res => {
                if (res.ok) {
                    this.academicInfo[index].examDegreeTitleData = res.json();
                    if(!onLoad)
                    {
                        this.academicInfo[index].examDegreeTitle_id=null;
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
        this._myService.getAcademicInfo(this._currentEmpId)
            .subscribe(
            res => {
                this.academicInfo = res.json().data;
                if(this.academicInfo.length==0)
                {
                  this.academicInfo.push(new AcademicInfo());
                }
                else
                {
                  for(let i=0;i < this.academicInfo.length;i++)
                  {
                     this.loadExamDegreeTitle(this.academicInfo[i].levelOfEducation_id,i,"init");
                  }
                }
            },
            error => {
                this.academicInfo = [];
            });
    }

    //Load Certification & Traning Tab Data
    loadCertificateAndTraningInfoTabData() {
        this._myService.getCertificationInfo(this._currentEmpId)
        .subscribe(
        res => {
            this.certificationsandTrainingInfo = res.json().data;
            if(this.certificationsandTrainingInfo.length==0)
            {
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
        this._myService.getPreviousEmploymentInfo(this._currentEmpId)
        .subscribe(
        res => {
            this.previousEmploymentDetails=res.json().data;
            if(this.previousEmploymentDetails.length==0)
            {
              this.previousEmploymentDetails.push(new PreviousEmploymentInfo());
            }
        },
        error => {
        });
    }

    loadRelation()
    {
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
        this._myService.getFamilyInfo(this._currentEmpId)
        .subscribe(
        res => {
            this.familyInfo=res.json().data;
            if(this.familyInfo.length==0)
            {
              this.familyInfo.push(new FamilyInfo());
            }
        },
        error => {
        });
    }

    loadFamilyInfoTabData()
    {
        this.loadRelation();
        this.loadFamilyInfo();
    }

    loadOfficeInfoTabData() {
        this.countryData=this._commonService.getCountry();
        this._myService.getOfficeDetails(this._currentEmpId)
        .subscribe(
        data => {
            this.officeInfo=data.json() || {};
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
    loadManagementType(onLoad?:string) {
        this._commonService.getManagementType()
            .subscribe(
            res => {
                if (res.ok) {
                   if(!onLoad)
                   {
                        this.employmentTypeData = [];
                        this.gradeData = [];
                        this.supervisorData = [];
                        this.designationData = [];

                        this.positionDetails.managementType_id=null
                        this.positionDetails.employmentType_id=null;
                        this.positionDetails.grade_id=null;
                        this.positionDetails.primarySupervisorEmp_id=null;
                        this.positionDetails.designation_id=null;
                   }
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
                        this.positionDetails.hrspoc_id = null;
                        this.positionDetails.businessHrHead_id = null;
                        this.positionDetails.groupHrHead_id = null;
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
    loadVertical(department_id?: number,onLoad?: string) {
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
    loadSubVertical(vertical_id?: number,onLoad?: string) {
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
    loadEmploymentType(managementType_id?: number,onLoad?: string) {
        this._commonService.getEmploymentType(managementType_id)
            .subscribe(
            res => {
                if (res.ok) {
                    if(!onLoad)
                    {
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
    loadGrade(managementType_id?: number, employmentType_id?: number,onLoad?: string) {
        this._commonService.getGrade(managementType_id, employmentType_id)
            .subscribe(
            res => {
                if (res.ok) {
                   if(!onLoad)
                   {
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
    loadSupervisor(grade_id?: number,onLoad?: string) {
        this._commonService.getSupervisor(grade_id)
            .subscribe(
            res => {
                if (res.ok) {
                    if(!onLoad)
                    {
                      this.positionDetails.primarySupervisorEmp_id = null;
                    }
                    this.supervisorData = res.json()
                }
            },
            error => {
            });
    }
     //load Group Hr Head By hrspoc_id
    loadGroupHrHead(businessHrHead_id?: number,onLoad?: string) {
        this._commonService.getHrSpoce(this.positionDetails.company_id, businessHrHead_id).subscribe(
            res => {
                if (res.ok) {
                    if(!onLoad)
                    {
                      this.positionDetails.groupHrHead_id = null;
                    }
                    this.groupHrHeadData = res.json()
                }
            },
            error => {
            });
    }

    //load Designation By grade_id
    loadDesignation(grade_id?: number,onLoad?:string) {
        this._commonService.getDesignation(grade_id).subscribe(
            res => {
                if (res.ok) {
                    if(!onLoad)
                    {
                      this.positionDetails.designation_id = null;
                    }
                    this.designationData = res.json()
                }
            },
            error => {
            });
    }
    //load Department Dropdown By divisonId 
    loadDepartment(division_id?:number,onLoad?:string) {
        this._commonService.getDepartment(division_id)
            .subscribe(
            res => {
                if (res.ok) {
                    if(!onLoad)
                    {
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
        this.loadRoles();

        //    this._myService.getPositionDetails(this._currentEmpId)
        //    .subscribe(
        //    data => {
        //        this.positionDetails=data.json()|| {};
        //        if(data.json())
        //        {
        //           this.loadHRSpoce(this.positionDetails.company_id,"init");
        //           this.loadBuisnessHrHead(this.positionDetails.hrspoc_id,"init")
        //           this.loadGroupHrHead(this.positionDetails.businessHrHead_id,"init") 
        //           this.loadVertical(this.positionDetails.department_id,"init")
        //           this.loadSubVertical(this.positionDetails.vertical_id,"init")
        //           this.loadEmploymentType(this.positionDetails.managementType_id,"init")
        //           this.loadGrade(this.positionDetails.managementType_id, this.positionDetails.employmentType_id,"init")
        //           this.loadSupervisor(this.positionDetails.grade_id,"init")
        //           this.loadDesignation(this.positionDetails.grade_id,"init")
        //           this.loadDepartment(this.positionDetails.division_id,"init")
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
        //this.loadJoiningDetailsTabData();
        this.loadPositionDetailsTabData();
        this.loadPerformanceDairyTabData();
    }

    loadBankDetails() {
        this.currencyArrData = this._commonService.getCurrency();
        this._myService.getBankInfo(this._currentEmpId)
            .subscribe(
            data => {
                this.bankDetails = data.json() || {};
            },
            error => {
                this.bankDetails ={};
            });
    }

    loadSalaryInfoDropdownData()
    {
        this.providentFundMemberShipData = this._commonService.getProvidentFundMemberShip();
        this.groupLifeInsuranceData = this._commonService.getGroupLifeInsurance();
        this.festivalAllowanceData = this._commonService.getFestivalAllowance();
        this.hospitalizationSchemeData = this._commonService.getHospitalizationScheme();
    }

    loadSalaryInfo() {
        this._myService.getSalaryInfo(this._currentEmpId)
            .subscribe(
            data => {
                this.salaryDetails = data.json() || {};
            },
            error => {
                this.salaryDetails = {};
            });
    }

    loadSalaryInfoTabData()
    {
        this.loadSalaryInfoDropdownData();
        this.loadSalaryInfo();
    }

    loadCarDetails() {
        this._myService.getCarInfo(this._currentEmpId)
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