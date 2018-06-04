import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { MyTeamService } from '../../my-team.service';
import { environment } from "../../../../../../../../environments/environment";

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./team-supervisor.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class MyTeamSupervisorComponent implements AfterViewInit {

    employeeData: any = [];
    _currentEmpId: number;
    kraData:any=[];
    imageBase:any;

    constructor(
        private _myteamService: MyTeamService,
        public _authService: AuthService) {

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
        this._myteamService.getAllEmployee()
            .subscribe(
            res => {
                let data = res.json().data || [];
                if (data.length > 0) {
                    //data = data.filter(obj => obj.profileProcessDetails.hrStatus == "Submitted" && obj.supervisor_id == this._currentEmpId);
                    let profileData = data.filter(obj => obj.profileProcessDetails.hrStatus == "Submitted" && obj.profileProcessDetails.supervisorStatus != "Approved" );
                    let kraData = data.filter(obj =>  obj.kraWorkflow && obj.kraWorkflow.status == "Submitted" );
                    this.employeeData = profileData || [];
                    this.kraData=kraData||[];
                }
                else
                    this.employeeData = data.json().data || [];
            },
            error => {
            });
    }




    ngAfterViewInit() {
    }


}

