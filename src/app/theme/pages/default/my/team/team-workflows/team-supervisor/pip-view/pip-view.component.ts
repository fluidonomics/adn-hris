import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { MyTeamService } from '../../../my-team.service';
import { environment } from "../../../../../../../../../environments/environment";
import { UtilityService } from '../../../../../../../../base/_services/utilityService.service';
import { Router } from '@angular/router';
import { PipService } from '../../../../../services/pip.service';

@Component({
    selector: 'pip-view',
    templateUrl: 'pip-view.component.html',
    providers: [PipService]
})

export class PipViewComponent implements OnInit {

    _currentEmpId: number;
    pipData: any = [];
    pipApprovedData: any = [];
    pipExtendedData: any = [];
    pipCompletedData: any = [];
    pipSearch: any;
    pipReverse: boolean = true;
    imageBase: any;

    constructor(
        private _myteamService: MyTeamService,
        public _authService: AuthService,
        private _utilityService: UtilityService,
        private router: Router,
        private _pipService: PipService
    ) { }

    ngOnInit() {
        this.imageBase = environment.content_api_base.apiBase;
        this._authService.validateToken().subscribe(res => {
            this._currentEmpId = this._authService.currentUserData._id;
            this.loadPipBySupervisor(this._currentEmpId,"Approved");
        });
    }

    loadPipBySupervisor(sup_Id: number,status:string) {
      
        this._pipService.getPipBySupervisor(sup_Id,status).subscribe(res => {
            this.pipApprovedData = res.json().result.message || [];
        }, error => {
            console.log(error);
        }, () => this.loadExtendedData(this._currentEmpId,"Extended"));
    } 

    loadExtendedData(sup_Id: number,status:string) {
        this._pipService.getPipBySupervisor(sup_Id,status).subscribe(res => {
            this.pipExtendedData = res.json().result.message || [];
        }, error => {
            console.log(error);
        }, () => this.loadPipCompletedData(this._currentEmpId,"PIP Completed"));
    }

    loadPipCompletedData(sup_Id: number,status:string) {
        this._pipService.getPipBySupervisor(sup_Id,status).subscribe(res => {
            this.pipCompletedData = res.json().result.message || [];
        }, error => {
            console.log(error);
        }, () => this.mergeExtendedAndApprovedData());
    }

    mergeExtendedAndApprovedData() {
        console.log("pip approved data", this.pipApprovedData);
        console.log("pip extended data", this.pipExtendedData);
        this.pipData = [...this.pipApprovedData, ...this.pipExtendedData, ...this.pipCompletedData];
    }

    gotoPipData(pip) {
        console.log("pip : ", pip);
        this.router.navigateByUrl("/my/team/workflows/pip-detailed-view/" + "view/" + pip.pip_master_details._id + "/" + pip.emp_details._id);
        
    }
}