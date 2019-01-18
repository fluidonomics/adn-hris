import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from "../../../../../../../base/_services/utilityService.service";
import { environment } from '../../../../../../../../environments/environment'
import { MyTeamService } from '../../my-team.service';
import { ActivatedRoute } from '@angular/router';
import { LeaveService } from '../../../leaves/leave.service';
import { MtrService } from '../../../../services/mtr.service';
import { KraService } from '../../../workflows/kra/kra.service';
import swal from 'sweetalert2';
declare var moment;

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
    kraDetails = [];
    search = "";
    imageBase = "";
    filterDateLeave;
    filterDateMtr;
    filterDateKra;

    filteredLeaves = [];
    filteredMtrDetails = [];
    filteredKraDetails = [];

    years = ['2018', '2019', '2020', '2021', '2022', '2023'];
    leaveBalance: any = [];

    constructor(
        private utilityService: UtilityService,
        public _authService: AuthService,
        private _route: ActivatedRoute,
        private leaveService: LeaveService,
        private commonService: CommonService,
        private mtrService: MtrService,
        private kraService: KraService
    ) {
        this.imageBase = environment.content_api_base.imgBase;
    }
    getEmployee() {
        this.commonService.getEmployee(this.param_emp_id).subscribe(res => {
            if (res.ok) {
                this.user = res.json() || {};
            }
        })
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
        this.getEmployee();
        this.commonService.getFinancialYear().subscribe(resFYear => {
            let fyears = resFYear.json() || [];
            this.fiscalYear = fyears.find(f => f.isYearActive);

            this.getLeaveBalance();
            this.leaveService.getLeaveDetailsByFilter(null, null, null, this.param_emp_id).subscribe(resLeaveDetails => {
                this.leaves = resLeaveDetails.json().data || [];
                this.filteredLeaves = resLeaveDetails.json().data || [];
            });

            this.mtrService.getEmployeeMtrWorkFlowInfo(this.param_emp_id).subscribe(resMtr => {
                let mtrs = resMtr.json().result.message || [];
                if (mtrs && mtrs.length > 0) {
                    this.mtrService.getMtrDetails(mtrs[0].mtr_master_id).subscribe(res => {
                        let data = res.json().result.message;
                        if (data.length > 0) {
                            this.mtrDetails = data[0].mtr_details;
                            this.filteredMtrDetails = data[0].mtr_details;
                        }
                    });
                }
            });
            this.kraService.getEmployeeKraWorkFlowInfo(this.param_emp_id).subscribe(resKra => {
                let kras = resKra.json() || [];
                kras = kras.filter(k => k.status == 'Approved');
                if (kras && kras.length > 0) {
                    this.kraService.getKraInfo(kras[0]._id).subscribe(res => {
                        let data = res.json().data;
                        if (data.length > 0) {
                            this.kraDetails = data;
                            this.filteredKraDetails = data;
                            console.log(this.kraDetails);
                        }
                    });
                }
            })
        })
    }

    getLeaveBalance() {
        this.leaveService.getEmployeeLeaveBalance(this.param_emp_id, this.fiscalYear._id).subscribe(res => {
            if (res.ok) {
                this.leaveBalance = res.json() || [];
                this.leaveBalance.sort((a, b) => a.leaveTypeId > b.leaveTypeId);
            }
        })
    }

    onLeaveFilterChange() {
        let fromDate = moment(this.filterDateLeave[0]);
        let toDate = moment(this.filterDateLeave[1]);

        this.filteredLeaves = this.leaves.filter(leave => {
            return moment(leave.leavedetails.fromDate).isBetween(fromDate, toDate);
        });
    }

    onMtrFilterChange() {
        this.filteredMtrDetails = this.mtrDetails.filter(mtr => {
            if (this.filterDateMtr) {
                return moment(mtr.createdAt).year() == this.filterDateMtr;
            }
            else {
                return true;
            }
        });

    }

    onKraFilterChange() {
        this.filteredKraDetails = this.kraDetails.filter(kra => {
            if (this.filterDateKra) {
                return moment(kra.createdAt).year() == this.filterDateKra;
            }
            else {
                return true;
            }
        });
    }
}