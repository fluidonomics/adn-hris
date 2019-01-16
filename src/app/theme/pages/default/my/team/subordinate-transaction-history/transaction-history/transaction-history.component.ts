import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from "../../../../../../../base/_services/utilityService.service";
import { environment } from '../../../../../../../../environments/environment'
import swal from 'sweetalert2';
import { MyTeamService } from '../../my-team.service';
import { ActivatedRoute } from '@angular/router';
import { LeaveService } from '../../../leaves/leave.service';
import { MtrService } from '../../../../services/mtr.service';

@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper--mtrinitiate',
    templateUrl: 'transaction-history.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [LeaveService]
})

export class TransactionHistoryComponent implements OnInit {

    _currentEmpId: number;
    param_emp_id: number;
    user: any = {};
    fiscalYear: any = {};
    leaves = [];
    mtrDetails = [];


    constructor(
        private utilityService: UtilityService,
        public _authService: AuthService,
        private _route: ActivatedRoute,
        private leaveService: LeaveService,
        private commonService: CommonService,
        private mtrService: MtrService
    ) {

    }

    ngOnInit() {
        this._authService.validateToken().subscribe(res => {
            this._currentEmpId = this._authService.currentUserData._id;
            this._route.params.subscribe(params => {
                if (params['emp_id']) {
                    this.param_emp_id = parseInt(params['emp_id']);
                    this.initData();
                }
            });
        });
    }

    initData() {
        this.commonService.getFinancialYear().subscribe(resFYear => {
            let fyears = resFYear.json() || [];
            this.fiscalYear = fyears.find(f => f.isYearActive);
            this.leaveService.getLeaveDetailsByFilter(null, null, null, this.param_emp_id).subscribe(resLeaveDetails => {
                this.leaves = resLeaveDetails.json().data || [];
            });

            this.mtrService.getEmployeeMtrWorkFlowInfo(this.param_emp_id).subscribe(resMtr => {
                let mtrs = resMtr.json().result.message || [];
                if (mtrs && mtrs.length > 0) {
                    this.mtrService.getMtrDetails(mtrs[0].mtr_master_id).subscribe(res => {
                        let data = res.json().result.message;
                        if (data.length > 0) {
                            this.mtrDetails = data[0].mtr_details;
                        }
                    });
                }
            });
        })
    }
}