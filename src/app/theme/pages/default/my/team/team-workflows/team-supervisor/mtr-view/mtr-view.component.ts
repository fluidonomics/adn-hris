import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { MtrService } from '../../../../../services/mtr.service';
import { Router } from '@angular/router';
import { environment } from '../../../../../../../../../environments/environment';
import { CommonService } from '../../../../../../../../base/_services/common.service';

@Component({
    selector: 'mtr-view',
    templateUrl: 'mtr-view.component.html'
})

export class MtrViewComponent implements OnInit {

    mtrViewData: any = [];
    mtrViewSearch: any;
    mtrViewReverse: boolean = true;
    imageBase: any;
    fiscalYearId: number;
    companyId: number;

    constructor(private _mtrService: MtrService,
        public _authService: AuthService,
        private router: Router,
        private commonService: CommonService
    ) { 
        this.fiscalYearId = parseInt(commonService.getFiscalYearIdLocal());
        this.companyId = parseInt(commonService.getCompanyIdLocal());
    }

    ngOnInit() {
        this.imageBase = environment.content_api_base.apiBase;
        this._authService.validateToken().subscribe(res => {
            let _currentEmpId = this._authService.currentUserData._id;
            this.loadMtrBySupervisor(_currentEmpId);
        });
    }

    loadMtrBySupervisor(emp_Id: number) {
        this._mtrService.getMtrBySupervisor(emp_Id, 'Approved', this.fiscalYearId).subscribe(res => {
            let data = res.json().result.message || [];
            this.mtrViewData = data.filter(f => f.companyId == this.companyId);
        }, error => {
        });
    }

    gotomtrView(mtr) {
        this.router.navigateByUrl("/my/team/workflows/mtr-detailed-view/" + mtr.mtr_master_details._id + "/" + mtr.emp_details._id);
    }


}