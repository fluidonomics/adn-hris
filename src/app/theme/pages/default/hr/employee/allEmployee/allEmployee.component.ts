import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { HrService } from '../../hr.service';
import swal from 'sweetalert2';
declare var $;


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
    templateUrl: "./allEmployee.component.html",
    styleUrls: ['./allEmployee.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AllEmployeeComponent implements OnInit, AfterViewInit {
    employeesData: any = [];
    employee:any={};
    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    _currentEmpId: number;
    itemPerPage: number = 10;

    param_emp_id:number;
    rolesData:any[];
    documentData:any[];

    profileProcess = {
        isEmployeeSubmitted: false,
        isHrSubmitted: false,
        isHrSendBack: false,
        isSupervisorApproved: false,
        isSupervisorSendBack: false
    }


    constructor(private _script: ScriptLoaderService,
        private _hrService: HrService,
        private _commonService:CommonService,
        public _authService: AuthService,
        private _route: ActivatedRoute,
        private utilityService: UtilityService,
    ) {

    }
    ngOnInit() {
        // this._authService.validateToken().subscribe(
        //     res => {
        //         this._currentEmpId = this._authService.currentUserData._id;
        //         this.loadAllEmployee();
        // });
        this._route.params.subscribe(params => {
            if (params['id']) {
                this.param_emp_id = params['id'];
            }
            this._authService.validateToken().subscribe(
                res => {
                    this._currentEmpId = this._authService.currentUserData._id;
                    if(!params['id'])
                    {
                        this.loadAllEmployee();
                    }
                    else{
                        this.loadEmployeeData();
                    }
            });
        });
    }

    ngAfterViewInit() {
    }

    loadAllEmployee() {
        this._hrService.getAllEmployee()
            .subscribe(
            res => {
                let data = res.json().data || [];
                if (data.length > 0) {
                    data = data.filter(obj => obj.hrScope_id == this._currentEmpId);
                    this.employeesData = data || [];
                }
                else
                    this.employeesData = data.json().data || [];
            },
            error => {
            });
    }

    getColumnName(column) {
        return column.replace(/([A-Z][a-z])/g, " $1").replace("_", " ").toUpperCase();
    }


    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

    getStart() {
        return Math.max(this.itemPerPage * (this.p2 - 1) + 1, 1)
    }

    getEnd(filterCount) {
        let start = Math.max(this.itemPerPage * (this.p2 - 1) + 1, 1);
        return Math.min(start + this.itemPerPage - 1, filterCount);
    }

    loadEmployeeData()
    {
        this.loadRole();
        this.loadDocumentData();
        this.loadEmployee();
    }

    loadEmployee()
    {

    }

    setRole()
    {
       this.utilityService.showLoader('#configurationPortlet');
    }
    
    loadRole()
    {
        this.utilityService.showLoader('#configurationPortlet');
        this.rolesData=[
            {
            _id: null,
            roleName: "HR",
            checked: false
            },
            {
            _id: null,
            roleName: "Reviewer",
            checked: true
            },
            {
            _id: null,
            roleName: "Supervisor",
            checked: true
            },
            {
            _id: null,
            roleName: "Employee",
            checked: true
            }
            ]
         this.utilityService.hideLoader('#configurationPortlet');
    }
    
    loadSupervisorTabData()
    {
        this.utilityService.showLoader('#configurationPortlet');
        this.loadSuperviorDropdownData();
        this.utilityService.hideLoader('#configurationPortlet');
    }
    
    loadSuperviorDropdownData()
    {
      
    }
    
    loadDocumentData()
    {
       this.documentData= [
            {
            _id: null,
            documentName: "Checklist - Joining Formalities",
            externalDocumentUrl:null,
            checked: false
            },
            {
            _id: null,
            documentName: "Employee Induction Program",
            externalDocumentUrl:"/document/employeeInductionProgram",
            checked: true
            },
            {
            _id: null,
            documentName: "Employee Joining Report",
            externalDocumentUrl:null,
            checked: false
            },
            {
            _id: null,
            documentName: "Employee Personal History",
            externalDocumentUrl:null,
            checked: false
            },
            {
            _id: null,
            documentName: "Information for Shared Services",
            externalDocumentUrl:null,
            checked: false
            },
            {
            _id: null,
            documentName: "PF Form-1",
            externalDocumentUrl:null,
            checked: false
            },
            {
            _id: null,
            documentName: "PF Form-2",
            externalDocumentUrl:null,
            checked: false
            },
            {
            _id: null,
            documentName: "PF Form-3",
            externalDocumentUrl:null,
            checked: false
            },
            {
            _id: null,
            documentName: "Exit Interview Form",
            externalDocumentUrl:null,
            checked: false
            }
            ]
    }


    resetPassword(emp_id:number)
    {
        this._commonService.resetPasswordByHr(emp_id)
        .subscribe(
        res => {
            swal({
                type: 'success',
                title: 'Reset Password!',
                titleText: "Email send successfully to employee.",
                showConfirmButton: false,
                timer: 1000
            })
        },
        error => {
        });
    }
}