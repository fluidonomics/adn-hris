import { Component, OnInit, ViewEncapsulation, Inject, PLATFORM_ID, AfterViewInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from "@angular/platform-browser";
import { FormBuilder,NgForm } from "@angular/forms";
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { UtilityService } from '../../../../../base/_services/utilityService.service';
import { AuthService } from "../../../../../base/_services/authService.service";
import { CommonService } from "../../../../../base/_services/common.service";
import { LeaveService } from "../../my/leaves/leave.service";
import { HrService } from '../hr.service';
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./hr-leave.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./hr-leave.component.css'],
})
export class HrLeaveComponent implements OnInit {

    @ViewChild('leaveQuota') leaveQuota: NgForm;

    employees=[];
    leaveTypes=[];
    leaveBalance=[];
    selectedEmployee={};
    annualLeaveBalance=0;
    sickLeaveBalance=0;
    specialLeaveBalance=0;
    maternityLeaveBalance=0;
    request={
        is_paid:false
    }
    
    ngOnInit() {
        this._commonService.getEmployee().subscribe(res => {
            if (res.ok) {                
                this.employees = res.json() || {};
                this.employees=this.employees['data'];
               
            }
        });
        this._hrService.getLeaveTypes().subscribe(res=>{
            if(res.ok){               
                this.leaveTypes = res.json() || {};                               
            }          
        })
    }

    constructor(              
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _hrService: HrService,       
        private modalService: BsModalService       
    ) {
       
    }
    provideLeave(form){  
        if(form.valid){          
        this._hrService.updateLeaveQuota(this.request).subscribe(res=>{
           if(res.ok){
            swal("Leave quota updated", "", "success");
            form.resetForm();
            form.submitted = false;
            this.request={
                is_paid:false
            }
            this.annualLeaveBalance=0;
            this.sickLeaveBalance=0;
            this.specialLeaveBalance=0;
            this.maternityLeaveBalance=0;
           }
        })
     }
    }
    onEmployeeSelect($event){
     this._hrService.getEmployeeLeaveBalance($event._id).subscribe(res=>{
        if(res.ok){
            this.leaveBalance = res.json() || {};
            this.request["emp_id"]=$event._id;           
            this.annualLeaveBalance=(this.leaveBalance.filter(a=>a.leaveType=="Annual Leave")[0]).leaveBalance;
            this.sickLeaveBalance=(this.leaveBalance.filter(a=>a.leaveType=="Sick Leave")[0]).leaveBalance;

            this.maternityLeaveBalance=(this.leaveBalance.filter(a=>a.leaveType=="Maternity Leave")[0]).leaveBalance;

            this.specialLeaveBalance=(this.leaveBalance.filter(a=>a.leaveType=="Special Leave")[0]).leaveBalance;
            
        }
     })
    }
    clear(){      
        this.leaveQuota.resetForm();        
            this.request={
                is_paid:false
            }
            this.annualLeaveBalance=0;
            this.sickLeaveBalance=0;
            this.specialLeaveBalance=0;
            this.maternityLeaveBalance=0;
    }
}
