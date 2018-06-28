import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { MyTeamService } from '../../my-team.service';
import { environment } from "../../../../../../../../environments/environment";
import { UtilityService } from '../../../../../../../base/_services/utilityService.service';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./team-supervisor.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class MyTeamSupervisorComponent implements AfterViewInit {

    employeeSearch: any;
    kraSearch: any;
    employeeData: any = [];
    _currentEmpId: number;
    kraData:any=[];
    imageBase:any;
    kraReverse:boolean=true;
    employeeReverse:boolean=true;

    constructor(
        private _myteamService: MyTeamService,
        public _authService: AuthService,
        private _utilityService: UtilityService,
        
    ) {

    }
    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.loadAllEmployee();
            });
            this.imageBase=environment.content_api_base.apiBase;
    }

    loadAllEmployee() {
        this._utilityService.showLoader("#employeeApproval");
        this._utilityService.showLoader("#kraApproval");
        this._myteamService.getAllEmployee()
            .subscribe(
            res => {
                let data = res.json().data || [];
                data=data.filter(obj=>obj.supervisor_id==this._currentEmpId);
                if (data.length > 0) {
                    let profileData = data.filter(obj => obj.profileProcessDetails.hrStatus == "Submitted" && obj.profileProcessDetails.supervisorStatus != "Approved" );
                    this.employeeData = profileData || [];
                    this._utilityService.hideLoader("#employeeApproval");

                    this.loadKraData(res.json().data);
                   
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
                else
                {
                    this.employeeData = [];
                    this._utilityService.hideLoader("#employeeApproval");
                    this._utilityService.hideLoader("#kraApproval");
                }
            },
            error => {
                this._utilityService.hideLoader("#employeeApproval");
                this._utilityService.hideLoader("#kraApproval");
            });
    }

    loadKraData(data:any)
    {
        let __this =this;
        data=data.filter(obj=>obj.supervisor_id==this._currentEmpId || obj.secondarySupervisor_id==this._currentEmpId);
        data.forEach(function(element) {
            if(element.kraWorkflow)
            {
                element.kraWorkflow.filter(obj=>obj.status=="Submitted").map(kra=>
                {
                    kra.fullName= element.fullName;
                    kra.profileImage= element.profileImage;
                    __this.kraData.push(kra);
                })
            }
        });
        this._utilityService.hideLoader("#kraApproval");
    }

    ngAfterViewInit() {
    }


}

