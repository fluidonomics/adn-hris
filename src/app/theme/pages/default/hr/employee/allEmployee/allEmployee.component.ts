import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../base/_services/authService.service";
import { UtilityService } from '../../../../../../base/_services/utilityService.service';
import { HrService } from '../../hr.service';
import { environment } from "../../../../../../../environments/environment";
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

    supervisorData:any[];
    secondarySupervisorData:any[];
    leaveSupervisorData:any[];

    supervisor:any={}

    profileProcess = {
        isEmployeeSubmitted: false,
        isHrSubmitted: false,
        isHrSendBack: false,
        isSupervisorApproved: false,
        isSupervisorSendBack: false
    }

    imageBase:any;
    contentBase:any;

    constructor(private _script: ScriptLoaderService,
        private _hrService: HrService,
        private _commonService:CommonService,
        public _authService: AuthService,
        private _route: ActivatedRoute,
        public utilityService: UtilityService,
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
        this.imageBase= environment.content_api_base.imgBase;
        this.contentBase = environment.content_api_base.apiBase;
    }

    ngAfterViewInit() {
    }

    loadAllEmployee() {
        this.utilityService.showLoader('#employeeTable');
        this._hrService.getAllEmployee()
            .subscribe(
            res => {
                let data = res.json().data || [];
                if (data.length > 0) {
                    data = data.filter(obj => obj.hrScope_id == this._currentEmpId);
                    this.employeesData = data || [];
                    this.utilityService.hideLoader('#employeeTable');
                }
                else
                {
                    this.employeesData = data.json().data || [];
                    this.utilityService.hideLoader('#employeeTable');
                }
            },
            error => {
                this.utilityService.hideLoader('#employeeTable');
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
        this.loadEmployee();
        this.loadRole();
        this.loadDocumentData();
      
    }

    loadEmployee()
    {
        this.utilityService.showLoader('#employeePortlet');
        this._commonService.getEmployee(this.param_emp_id)
        .subscribe(
        res => {
            this.utilityService.hideLoader('#employeePortlet');
            this.employee = res.json() || {};
        },
        error => {
            this.utilityService.hideLoader('#employeePortlet');
        });
    }

    setRole(index)
    {
        this.utilityService.showLoader('#configurationPortlet');
        this._commonService.saveEmployeeRoles(this.rolesData[index])
        .subscribe(
        res => {
            if(res.json().error)
            {
                swal("Error!", res.json().error, "error");
                this.rolesData[index].checked=!this.rolesData[index].checked;
            }
            else{
                this.rolesData[index]._id= res.json().data.data._id;  
            }
            this.utilityService.hideLoader('#configurationPortlet');
        },
        error => {
            this.utilityService.hideLoader('#configurationPortlet');
        });
    }
    
    loadRole()
    {
        this.utilityService.showLoader('#configurationPortlet');
        this._commonService.getEmployeeRoles(this.param_emp_id)
        .subscribe(
        res => {
            this.rolesData = res.json().data || [];
            this.utilityService.hideLoader('#configurationPortlet');
        },
        error => {
            this.utilityService.hideLoader('#configurationPortlet');
        });
    }
    
    loadSupervisorTabData()
    {
        this.utilityService.showLoader('#configurationPortlet');
        this.loadEmployeeSupervisor();
        setTimeout(() => {
          this.utilityService.hideLoader('#configurationPortlet');
        }, 1000);
    }

    loadEmployeeSupervisor()
    {
        this._commonService.getEmployeeSupervisor(this.param_emp_id)
        .subscribe(
        res => {
                this.supervisor=res.json();
                if(res.json())
                this.loadSuperviorDropdownData();
        },
        error => {
        });
    }
    
    loadSuperviorDropdownData()
    {
        this._commonService.getSupervisor(this.employee.grade_id)
        .subscribe(
        res => {
            if (res.ok) {
                this.supervisorData = res.json();
                if(this.supervisor.primarySupervisorEmp_id)
                   this.loadSecondarySupervisor();
            }
        },
        error => {
        });
    }

    loadSecondarySupervisor()
    {
        this.secondarySupervisorData=[];
        this.leaveSupervisorData=[];
        this.secondarySupervisorData  = this.supervisorData.map(x => Object.assign({}, x));
        let index=this.supervisorData.findIndex(x => x._id==this.supervisor.primarySupervisorEmp_id);
        this.secondarySupervisorData[index]['disabled']=true;
        
        if(this.supervisor.secondarySupervisorEmp_id)
        this.loadLeaveSupervisor();
    }

    loadLeaveSupervisor()
    {
        let data=[];
        data.push(this.supervisorData[this.supervisorData.findIndex(x => x._id==this.supervisor.primarySupervisorEmp_id)]);
        data.push(this.supervisorData[this.supervisorData.findIndex(x => x._id==this.supervisor.secondarySupervisorEmp_id)]);
        this.leaveSupervisorData=data;
    }

    saveSupervisor()
    {
        this._commonService.saveSupervisor(this.supervisor)
        .subscribe(
        res => {
           this.supervisor=res.json();
        },
        error => {
        });
    }
    
    loadDocumentData()
    {
        this.utilityService.showLoader('#documentsPortlet');
        this._commonService.getEmployeeDocument(this.param_emp_id)
        .subscribe(
        res => {
            this.documentData = res.json().data || [];
            this.utilityService.hideLoader('#documentsPortlet');
        },
        error => {
            this.utilityService.hideLoader('#documentsPortlet');
        });
    }

    setDocument(index)
    { 
        this.utilityService.showLoader('#documentsPortlet');
        this._commonService.saveEmployeeDocuments(this.documentData[index])
        .subscribe(
        res => {
            let data=res.json();
            this.documentData[index]._id= (data=='Removed' ? null:data._id);
            this.utilityService.hideLoader('#documentsPortlet');
        },
        error => {
            this.utilityService.hideLoader('#documentsPortlet');
        });
    }

    viewDocument(url)
    {
      window.open(this.contentBase + url);
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

    getAge(birthdate)
    {
        var today = new Date();
        var birth= new Date(birthdate);
        var birthday = new Date(birth.getFullYear(),birth.getMonth(),birth.getDate());
        var differenceInMilisecond = today.valueOf() - birthday.valueOf();
        var year_age = Math.floor(differenceInMilisecond / 31536000000);
        var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        var month_age = Math.floor(day_age/30);
        day_age = day_age % 30;
        return {
                "year":year_age,
                "month":month_age,
                "days": day_age,
                "brithday":(today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate()) ? 'Happy BirthDay':null
               }
    }
   
   
}