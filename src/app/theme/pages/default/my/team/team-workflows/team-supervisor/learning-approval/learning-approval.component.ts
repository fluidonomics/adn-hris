import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { MyTeamService } from '../../../my-team.service';
import { environment } from "../../../../../../../../../environments/environment";
import { UtilityService } from '../../../../../../../../base/_services/utilityService.service';
import { Router } from '@angular/router';
import { LearningService } from '../../../../../services/learning.service';

@Component({
    selector: 'learning-approval',
    templateUrl: 'learning-approval.component.html',
    providers: [LearningService]
})

export class LearningApprovalComponent implements OnInit {

    _currentEmpId: number;
    learningData: any = [];
    learningSearch: any;
    learningReverse: boolean = true;
    imageBase: any;
    fiscalYearId: string;
    companyId: number;
    constructor(
        private _myteamService: MyTeamService,
        public _authService: AuthService,
        private _utilityService: UtilityService,
        private router: Router,
        private _learningService: LearningService,
        private _commonService: CommonService
    ) { }

    ngOnInit() {
        this.fiscalYearId = this._commonService.getFiscalYearIdLocal();
        this.companyId = Number(this._commonService.getCompanyIdLocal());
        this.imageBase = environment.content_api_base.apiBase;
        this._authService.validateToken().subscribe(res => {
            this._currentEmpId = this._authService.currentUserData._id;
            this.loadLearningBySupervisor(this._currentEmpId,"Submitted");
        });
    }

    loadLearningBySupervisor(sup_Id: number,status:string) {

        this._learningService.getLearningBySupervisor(sup_Id,status, this.fiscalYearId).subscribe(res => {
            let finalData = res.json().result.message || [];
            this.learningData = finalData.filter(f => f.companyId == this.companyId);
        }, error => {
            console.log(error);
        });
    } 

    gotoLearningData(Learning) {
        console.log("learn : ", Learning);
        this.router.navigateByUrl("/my/team/workflows/learning-detailed-view/" + "approval/" + Learning.learning_master_details._id + "/" + Learning.emp_details._id);
    }

    goToAllLearning() {
        this.router.navigate(['/my/team/workflows/supervisor/approve/learning/list']);
    }
}