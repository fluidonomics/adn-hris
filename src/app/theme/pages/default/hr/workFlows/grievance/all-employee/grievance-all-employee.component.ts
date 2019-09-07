import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from "@angular/core";
import { PapService } from "../../../../services/pap.service";

import swal from 'sweetalert2';
import { UtilityService } from "../../../../../../../base/_services/utilityService.service";
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { HrService } from "../../../hr.service";
import { environment } from '../../../../../../../../environments/environment';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
import { CommonService } from "../../../../../../../base/_services/common.service";
import { Router } from "@angular/router";

import { EmployeeInfo } from "../../../../../../../base/_interface/user.model";


@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper.papinit',
    templateUrl: 'grievance-all-employee.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [PapService]
})

export class GrievanceAllEmployeeComponent implements OnInit {
    employeesData: any = [];
    employee: any = {};
    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    _currentEmpId: number;
    itemPerPage: number = 10;
    param_emp_id;
    showGrievancePhase: boolean = false;
    grievanceEndDate;
    currentDate = new Date();
    allPapData = [];
    showGrievanceInitForm: boolean = false;
    fiscalYearId: string;
    constructor(private _script: ScriptLoaderService,
        private _papService: PapService,
        private _commonService: CommonService,
        public _authService: AuthService,
        private _router: Router,
        public utilityService: UtilityService,
    ) {

    }
    ngOnInit() {
        this.fiscalYearId = this._commonService.getFiscalYearIdLocal();
        this._authService.validateToken().subscribe(res => {
            this._currentEmpId = this._authService.currentUserData._id;
            this.loadAllEmployee();
            this.getAllPap();
        });
    }

    ngAfterViewInit() {
    }

    loadAllEmployee() {
        this.showGrievancePhase = false;
        this.utilityService.showLoader('#allEmployee-loader');
        this._papService.getEmployeesForGrievance(this.fiscalYearId).subscribe(res => {
            let data = res.json().result.message || [];
            //data = data.filter(obj => obj.hrScope_id == this._currentEmpId);
            this.employeesData = data || [];
            // this.employeesData.forEach(emp => {
            //     debugger;
            // });
            this.utilityService.hideLoader('#allEmployee-loader');
        }, error => {
            this.utilityService.hideLoader('#allEmployee-loader');
        });
    }

    getAllPap() {
        this._papService.getAllPap(this.fiscalYearId).subscribe(res => {
            this.allPapData = res || [];
            let grievancePap = this.allPapData.filter(pap => {
                if (pap.reviewerStatus == 'Approved' && pap.grievanceStatus == null && pap.grievanceRaiseEndDate == null && pap.isDeleted == false && pap.isSentToSupervisor == true && pap.isRatingCommunicated == true && pap.status == 'Approved') {
                    return true;
                } else {
                    return false;
                }
            });
            this.showGrievanceInitForm = grievancePap.length > 0;
        });
    }

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

    getStart() {
        return Math.max(this.itemPerPage * (this.p2 - 1) + 1, 1)
    }

    getEnd(filterCount) {
        let start = Math.max(this.itemPerPage * (this.p2 - 1) + 1, 1);
        return Math.min(start + this.itemPerPage - 1, filterCount);
    }

    grievanceEmployeeDetail(employee: any) {
        let papMasterId = employee._id;
        this._router.navigate(['/my/team/workflows/pap-review/'+ papMasterId + '/' + employee.emp_id+'/true']);
    }
}