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
    pipSearch: any;
    pipReverse: boolean = true;
    imageBase: any;
    fiscalYearId: string;
    constructor(
        private _myteamService: MyTeamService,
        public _authService: AuthService,
        private _utilityService: UtilityService,
        private router: Router,
        private _pipService: PipService,
        private _commonService: CommonService
    ) { }

    ngOnInit() {
        this.imageBase = environment.content_api_base.apiBase;
        this._authService.validateToken().subscribe(res => {
            this._currentEmpId = this._authService.currentUserData._id;
            this.fiscalYearId = this._commonService.getFiscalYearIdLocal();
            this.loadPipBySupervisor(this._currentEmpId,"Approved");
        });
    }

    loadPipBySupervisor(sup_Id: number,status:string) {
      
        this._pipService.getPipBySupervisor(sup_Id,status, this.fiscalYearId).subscribe(res => {
            this.pipData = res.json().result.message || [];
        }, error => {
            console.log(error);
        });
    } 

    gotoPipData(pip) {
        console.log("pip : ", pip);
        this.router.navigateByUrl("/my/team/workflows/pip-detailed-view/" + "view/" + pip.pip_master_details._id + "/" + pip.emp_details._id);
        
    }
}