import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { MyTeamService } from '../../my-team.service';
import { environment } from "../../../../../../../../environments/environment";
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';
import { Router } from '@angular/router';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.team-supervisor",
    templateUrl: "./team-supervisor.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class MyTeamSupervisorComponent implements AfterViewInit {

    employeeSearch: any;
    kraSearch: any;
    kraSearchView: any;
    employeeData: any = [];
    _currentEmpId: number;
    kraData: any = [];
    kraDataView: any = [];
    imageBase: any;
    kraReverse: boolean = true;
    employeeReverse: boolean = true;
    fiscalYearId: Number;
    comapnyId: Number;
    constructor(
        private _myteamService: MyTeamService,
        public _authService: AuthService,
        private _utilityService: UtilityService,
        private router: Router,
        private commonService: CommonService
    ) {
        this.fiscalYearId = parseInt(this.commonService.getFiscalYearIdLocal());
        this.comapnyId = parseInt(this.commonService.getCompanyIdLocal());
    }
    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.loadAllEmployee();
            });
        this.imageBase = environment.content_api_base.apiBase;
    }

    loadAllEmployee() {
        this._utilityService.showLoader("#employeeApproval");
        this._utilityService.showLoader("#kraApproval");
        this._utilityService.showLoader("#kraApprovalView");
        this._myteamService.getAllEmployee()
            .subscribe(
            res => {
                let data = res.json().data || [];
                data = data.filter(obj => obj.supervisor_id == this._currentEmpId);
                if (data.length > 0) {
                    let profileData = data.filter(obj => obj.profileProcessDetails.hrStatus == "Submitted" && obj.profileProcessDetails.supervisorStatus != "Approved");
                    this.employeeData = profileData || [];
                    this._utilityService.hideLoader("#employeeApproval");
                    this._myteamService.getKraForApproval(this._currentEmpId, this.fiscalYearId).subscribe(
                        resApproval => {
                            let finalData = resApproval.json().data;
                            this.loadKraData(finalData.filter(f => f.companyId == this.comapnyId));
                        },
                        error => {

                        }
                    )
                    //this.loadKraData(res.json().data);

                    //    for (var i = 0; i < data.length; i++) { 
                    //             if(data[i].kraWorkflow)
                    //             {
                    //               let objkraSubmitted= data[i].kraWorkflow.filter(obj=>obj.status=="Submitted");
                    //               if(objkraSubmitted.length >0)
                    //               {
                    //                 for (var j = 0; j < objkraSubmitted.length; j++)
                    //                 {
                    //                     objkraSubmitted[j].fullName= data[i].fullName;
                    //                     objkraSubmitted[j].profileImage= data[i].profileImage;
                    //                     this.kraData.push(objkraSubmitted[j]);
                    //                 }
                    //               }
                    //               //data[i].kraWorkflow=kraWorkFlowData;
                    //             //   else
                    //             //   data[i].kraWorkflow=null;
                    //             }
                    //     }

                    // let kraData = data.filter(obj =>  obj.kraWorkflow && obj.kraWorkflow.filter(d=>d.kraWorkflow=='Submitted'));

                }
                else {
                    this.employeeData = [];
                    this._utilityService.hideLoader("#employeeApproval");
                    this._utilityService.hideLoader("#kraApproval");
                    this._utilityService.hideLoader("#kraApprovalView");

                }
            },
            error => {
                this._utilityService.hideLoader("#employeeApproval");
                this._utilityService.hideLoader("#kraApproval");
                this._utilityService.hideLoader("#kraApprovalView");

            });
    }


    loadKraData(data: any) {
        let __this = this;
        //data = data.filter(obj => obj.supervisor_id == this._currentEmpId || obj.secondarySupervisor_id == this._currentEmpId);
        data.forEach(function (element) {
            if (element) {
                if (element.status == "Submitted") {
                    element.fullName = element.emp_name;
                    __this.kraData.push(element);
                }
                else if (element.status == "Approved") {
                    element.fullName = element.emp_name;
                    // for (var i = 0; i < 3; i++) {

                    __this.kraDataView.push(element);
                    // }
                }
            }
        });
        this._utilityService.hideLoader("#kraApproval");
        this._utilityService.hideLoader("#kraApprovalView");

    }

    ngAfterViewInit() {
    }


    gotoKraView(kra) {
        this.router.navigateByUrl("/my/team/workflows/kra-view/" + kra._id + "/" + kra.emp_id);
    }

}

