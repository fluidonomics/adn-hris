import { Component, OnInit, ViewEncapsulation, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from "@angular/platform-browser";
import { FormBuilder } from "@angular/forms";
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { UtilityService } from '../../../../../base/_services/utilityService.service';
import { AuthService } from "../../../../../base/_services/authService.service";
import { HrService } from '../hr.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./dashboard.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {

    rolesData:any[];
    documentData:any[];
    employeesData:any[];
    _currentEmpId: number;
    profileStatusPercentage:any={

    }
    //hrEmpdata: any[];
    empCount: number;
    hrCount: number;
    supCount: number;
    hrToEmpratio: number;
    percentageOfSupervisor: number;
    managementEmpCount: number;
    managementEmpRatio: number;
    approved_count: number;
    init_count: number;
    sendback_count: number;
    submit_count: number;
    terminate_count: number;

    leaveStatuses: any = [];
    dashboardType: any = [];

    transactionFilter: any = {
        status: 'HR-Emp Ratio'
    };
    dashboardFilter: any = {
        dashboard: 'KRA',
        date: this._hrService.getCurrentMonthDates()
    };

    constructor( @Inject(PLATFORM_ID) private platformId: Object,
    meta: Meta, title: Title,
    private _script: ScriptLoaderService,
    private utilityService: UtilityService,
    private _hrService: HrService,
    private router: Router,
    public _authService: AuthService,
    
) {
    title.setTitle('ADN Dashbord | Dashboard');
    meta.addTags([
        { name: 'author', content: '' },
        { name: 'keywords', content: 'Dashboard' },
        { name: 'description', content: 'Dashboard.' }
    ]);
}

ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.initData();
        });
}

ngAfterViewInit() {
    this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
        'assets/app/js/dashboard.js');
}

initData()
{
    this.loadAllEmployee();
    this.getLeaveStatuses();
    this.getTransactions();
    this.getDashboard();
}

loadAllEmployee()
{
    this.utilityService.showLoader('#stats-loader');
    this._hrService.getAllEmployee()
    .subscribe(
    res => {
        let data = res.json().data || [];
        if (data.length > 0) {
            data = data.filter(obj => obj.hrScope_id == this._currentEmpId);
            this.employeesData = data || [];
        }
        this.utilityService.hideLoader('#stats-loader');
       
    },
    error => {
        this.utilityService.hideLoader('#stats-loader');
    });
}

calculatePercentage(status:any,filedName?:string)
{
  let profileSubmitted;
  if(filedName)
  {
    profileSubmitted =this.employeesData.filter(item=> item['profileProcessDetails'][filedName] == status).length;
  }
  else{
    profileSubmitted=this.employeesData.filter(item=> item['isAccountActive'] == status).length;
    filedName='isAccount';
    status='Active';
  }
  let objName= filedName+status;
  let percentage= ((profileSubmitted / this.employeesData.length) * 100).toFixed(2) + '%';
  this.profileStatusPercentage[objName] = percentage ;
  return percentage
}

downloadProfileCsv() {
    let csvHeader=['Emp Name (id)',"Supervisor Name(id)","Batch_name","KRA_Status"];
    let filedList=['userName',"fullName","isAccountActive","profileProcessDetails.employeeStatus","profileProcessDetails.hrStatus","profileProcessDetails.supervisorStatus"];
    let csv=[];
    let row = [];
    csv.push(csvHeader.join(","));
     for (var i = 0; i < this.employeesData.length; i++) {
        let row = [];
         for (var index in filedList) {//array[i]
            let head = filedList[index];
            if(head.indexOf('.') > -1)
            {
              let columnArr= head.split('.')
              row.push(this.employeesData[i][columnArr[0]][columnArr[1]])  
            }
            else{
               row.push(this.employeesData[i][head]);
            }
         }
         csv.push(row.join(","));
     }
     this.utilityService.saveAsCSV(csv.join("\n"),"Profile_Report")
    
}

getLeaveStatuses() {
    this.leaveStatuses = ['HR-Emp Ratio', 'Supervisor Role %', 'Span Of Control'];
}

getDashboardType() {
    this.dashboardType = ['KRA', 'Leave'];
}

getTransactions() {
    if (this.transactionFilter.status && (this.transactionFilter.status == "HR-Emp Ratio" || this.transactionFilter.status == "Supervisor Role %")) {
        this._hrService.getHrEmpRatio().subscribe(res => {
            if (res.ok) {
                let hrEmpdata = res.json() || [];
                this.empCount = hrEmpdata.result.message[0].emp_count;
                this.supCount = hrEmpdata.result.message[0].sup_count;
                this.hrCount = hrEmpdata.result.message[0].hr_count;
                this.hrToEmpratio = (this.hrCount/this.empCount)*100;
                this.hrToEmpratio = parseFloat(this.hrToEmpratio.toFixed(3));
                this.percentageOfSupervisor = this.supCount/this.empCount;
                this.percentageOfSupervisor = parseFloat(this.percentageOfSupervisor.toFixed(3));
            }
        })
    } else if(this.transactionFilter.status && this.transactionFilter.status == "Span Of Control") {
        this._hrService.getEmpTypeRatio().subscribe(res => {
            if(res.ok) {

                let data = res.json() || [];
                this.empCount = data.result.message[0].emp_count;
                this.managementEmpCount = data.result.message[0].mgmt_emp_count;
                this.managementEmpRatio = parseFloat((this.empCount/this.managementEmpCount).toFixed(3));
            }
        })
    }
}


getDashboard() {
    if (this.dashboardFilter.dashboard && this.dashboardFilter.dashboard == "KRA") {
        this._hrService.getKraDetails(this.dashboardFilter.date[0], this.dashboardFilter.date[1]).subscribe(res => {
            if (res.ok) {
                let hrKradata = res.json() || [];
                this.approved_count = hrKradata.result.message[0].approved_count;
                this.init_count = hrKradata.result.message[0].init_count;
                this.sendback_count = hrKradata.result.message[0].sendback_count;
                this.submit_count = hrKradata.result.message[0].submit_count;
                this.terminate_count = hrKradata.result.message[0].terminate_count;
            }
        })
     } //else if(this.dashboardFilter.dashboard && this.dashboardFilter.dashboard == "Span Of Control") {
    //     this._hrService.getEmpTypeRatio().subscribe(res => {
    //         if(res.ok) {

    //             let data = res.json() || [];
    //             this.empCount = data.result.message[0].emp_count;
    //             this.managementEmpCount = data.result.message[0].mgmt_emp_count;
    //             this.managementEmpRatio = parseFloat((this.empCount/this.managementEmpCount).toFixed(3));
    //         }
    //     })
    // }
}

}
