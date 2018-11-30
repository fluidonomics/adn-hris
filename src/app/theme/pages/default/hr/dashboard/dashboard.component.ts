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
    let csvHeader=['Employee ID',"Name","Active","Personal Profile","Office Profile","Profile"];
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

gotoPostLeave(){
    this.router.navigate(["./hr/post/leave"]);
}

}
