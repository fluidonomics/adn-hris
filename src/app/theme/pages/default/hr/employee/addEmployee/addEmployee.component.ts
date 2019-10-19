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
    //rolesData: any = [];
    managementTypeData: any = [];
    documentsData: any = [];

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
        this.loadDocuments();
        //this.loadRoles();
    }



    loadDocuments() {
        this._commonService.getDocuments().subscribe(
            res => {
                if (res.ok) {
                    this.documentsData = res.json() || [];
                }
            },
            error => {
                this.documentsData = [];
            });

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
                    this.addemp.vertical_id = null;
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
                    this.addemp.subVertical_id = null;
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

    // //load HR Spoce By company_id
    // loadHRSpoce(company_id?: number) {
    //     this._commonService.getHrSpoce(company_id)
    //         .subscribe(
    //         res => {
    //             if (res.ok) {
    //                 this.addemp.hrspoc_id = null;
    //                 this.hrspocData = res.json()
    //             }
    //         },
    //         error => {
    //         });
    // }

    loadHrHeads(companyId?: number) {
        this.buisnessHrHeadData = [];
        this.groupHrHeadData = [];
        this.addemp.businessHrHead_id = null;
        this.addemp.groupHrHead_id = null;

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

    // //load Group Hr Head By hrspoc_id
    // loadGroupHrHead(businessHrHead_id?: number) {
    //     this._commonService.getHrSpoce(this.addemp.company_id, businessHrHead_id).subscribe(
    //         res => {
    //             if (res.ok) {

    //                 this.addemp.groupHrHead_id = null;
    //                
    //             }
    //         },
    //         error => {
    //         });
    // }

    //Submit Add Employee Form
    onAddEmpSubmit(form) {
        if (form.valid) {
            mApp.block('#m_tabs_9_1', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                // message: 'Please wait...'
            });
            //default roles of employee
            this.addemp.roles = [5];
            this._hrService.addEmployee(this.addemp).subscribe(data => {
                if (data.ok) {
                    mApp.unblock('#m_tabs_9_1');
                    swal("New Employee Created.", "Username:" + data.json().userName + " Welcome Email Sent!", "success");
                    //this.userName=data.json().userName;
                    form.resetForm();
                    this.clearFormData();
                }
            }, error => {
                mApp.unblock('#m_tabs_9_1');
            });
        }
    }

    validateEmail(_element) {
        let regexp = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
        let test = regexp.test(_element.value);
        if (test == false) {
            _element.control.setErrors({ "pattern": true })
            return;
        } else {
            _element.control.setErrors(null);
        }
        this.checkEmailExists(_element);
    }

    checkEmailExists(_element) {
        if (_element.valid) {
            debugger;
            if (this._commonService.checkPersonalEmail(_element)) {
                this._commonService.checkEmailExists(_element.value, -1).subscribe(data => {
                    if (data.json()) {
                        _element.control.setErrors({ "emailExists": true })
                    }
                }, error => {
                    _element.control.setErrors(null)
                });
            }
        }
    }

    checkUserNameExists(_element) {
        if (_element.valid) {
            this._commonService.checkUserNameExists(_element.value).subscribe(data => {
                if (data.json())
                    _element.control.setErrors({ "userNameExists": true })
            }, error => {
                _element.control.setErrors(null)
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

