import { Component, OnInit, ViewEncapsulation, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CommonService } from "../../../../../../base/_services/common.service";
import { HrService } from "../../hr.service";
declare var $
declare var mApp;
import swal from 'sweetalert2';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--addemployee",
    templateUrl: "./addEmployee.component.html",
    styleUrls: ["./addEmployee.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class AddEmployeeComponent implements OnInit {
    addemp: any = {};

    //local dropdown data variable
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
        private _commonService: CommonService,
        private _hrService: HrService

    ) {
        title.setTitle('ADN HRIS | Add New Employee');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);
    }

    ngOnInit() {
        this.initDropdown();
    }

    //Filled Init Dropdown 
    initDropdown() {
        this.loadCompanies();
        this.loadDivision();
        this.loadManagementType();
        this.loadEmploymentStatus();
        this.loadRoles();
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
                    this.addemp.employmentStatus_id = null;
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

    //load Department Dropdown By divisonId 
    loadDepartment(division_id?: number) {
        this._commonService.getDepartment(division_id)
            .subscribe(
            res => {
                if (res.ok) {
                    this.addemp.department_id = null;
                    this.addemp.vertical_id = null;
                    this.addemp.subVertical_id = null;

                    this.verticalData = [];
                    this.subverticalData = [];
                    this.deparmentData = res.json();
                }
            },
            error => {
            });
    }

    //load Vertical Dropdown By department_id 
    loadVertical(department_id?: number) {
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
    loadSubVertical(vertical_id?: number) {
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

                    this.addemp.managementType_id = null
                    this.addemp.employmentType_id = null;
                    this.addemp.grade_id = null;
                    this.addemp.primarySupervisorEmp_id = null;
                    this.addemp.designation_id = null;


                    this.managementTypeData = res.json()
                }
            },
            error => {
            });
    }

    //load Employment Type By managementType_id 
    loadEmploymentType(managementType_id?: number) {
        this._commonService.getEmploymentType(managementType_id)
            .subscribe(
            res => {
                if (res.ok) {
                    this.gradeData = [];
                    this.supervisorData = [];
                    this.designationData = [];

                    this.addemp.employmentType_id = null;
                    this.addemp.grade_id = null;
                    this.addemp.primarySupervisorEmp_id = null;
                    this.addemp.designation_id = null;


                    this.employmentTypeData = res.json()
                }
            },
            error => {
            });
    }

    //load Grade Dropdown By managementType_id  && employmentType_id
    loadGrade(managementType_id?: number, employmentType_id?: number) {
        this._commonService.getGrade(managementType_id, employmentType_id)
            .subscribe(
            res => {
                if (res.ok) {

                    this.supervisorData = [];
                    this.designationData = [];

                    this.addemp.grade_id = null;
                    this.addemp.primarySupervisorEmp_id = null;
                    this.addemp.designation_id = null;

                    this.gradeData = res.json();
                }
            },
            error => {
            });
    }

    //load Supervisor By grade_id
    loadSupervisor(grade_id?: number) {
        this._commonService.getSupervisor(grade_id)
            .subscribe(
            res => {
                if (res.ok) {
                    this.addemp.primarySupervisorEmp_id = null;
                    this.supervisorData = res.json()
                }
            },
            error => {
            });
    }

    //load Designation By grade_id
    loadDesignation(grade_id?: number) {
        this._commonService.getDesignation(grade_id).subscribe(
            res => {
                if (res.ok) {
                    this.addemp.designation_id = null;
                    this.designationData = res.json()
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

                    this.addemp.company_id = null;
                    this.addemp.hrspoc_id = null;
                    this.addemp.businessHrHead_id = null;
                    this.addemp.groupHrHead_id = null;

                    this.companiesData = res.json();
                }
            },
            error => {
            });
    }

    //load HR Spoce By company_id
    loadHRSpoce(company_id?: number) {
        this._commonService.getHrSpoce(company_id)
            .subscribe(
            res => {
                if (res.ok) {
                    this.buisnessHrHeadData = [];
                    this.groupHrHeadData = [];

                    this.addemp.hrspoc_id = null;
                    this.addemp.businessHrHead_id = null;
                    this.addemp.groupHrHead_id = null;

                    this.hrspocData = res.json()
                }
            },
            error => {
            });
    }

    //load Buisness Hr Head By hrspoc_id
    loadBuisnessHrHead(hrspoc_id?: number) {
        this._commonService.getHrSpoce(this.addemp.company_id, hrspoc_id).subscribe(
            res => {
                if (res.ok) {
                    this.groupHrHeadData = [];

                    this.addemp.businessHrHead_id = null;
                    this.addemp.groupHrHead_id = null;

                    this.buisnessHrHeadData = res.json()
                }
            },
            error => {
            });
    }

    //load Group Hr Head By hrspoc_id
    loadGroupHrHead(businessHrHead_id?: number) {
        this._commonService.getHrSpoce(this.addemp.company_id, businessHrHead_id).subscribe(
            res => {
                if (res.ok) {

                    this.addemp.groupHrHead_id = null;
                    this.groupHrHeadData = res.json()
                }
            },
            error => {
            });
    }

    //Submit Add Employee Form
    onAddEmpSubmit(form) {
        if (form.valid) {
            mApp.block('#m_tabs_9_1', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                // message: 'Please wait...'
            });
            this._hrService.addEmployee(this.addemp).subscribe(
                data => {
                    if (data.ok) {
                        mApp.unblock('#m_tabs_9_1');
                        swal("New Employee Created.", "Username:" + data.json().userName + " Welcome Email Sent!", "success");
                        //this.userName=data.json().userName;
                        form.resetForm();
                        this.clearFormData();
                    }
                },
                error => {
                    mApp.unblock('#m_tabs_9_1');
                });
        }
    }

    //Clear All Form Data 
    clearFormData() {
        this.addemp = {}
        this.deparmentData = [];
        this.verticalData = [];
        this.subverticalData = [];
        this.gradeData = [];
        this.employmentTypeData = [];
        this.supervisorData = [];
        this.hrspocData = [];
        this.buisnessHrHeadData = [];
        this.groupHrHeadData = [];
        this.designationData = [];
    }
}

