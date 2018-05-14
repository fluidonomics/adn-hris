import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { MyTeamService } from '../../my-team.service';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./team-supervisor.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class MyTeamSupervisorComponent implements AfterViewInit {

    employeeData: any = [];
    _currentEmpId:number;

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
    }

    loadAllEmployee() {
        this._myteamService.getAllEmployee()
            .subscribe(
            res => {
                let data= res.json().data || [];
                if(data.length >0)
                {
                    data = data.filter(obj => obj.profileProcessDetails.hrStatus=="Submitted" && obj.supervisor_id ==this._currentEmpId);
                    this.employeeData = data || [];
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

