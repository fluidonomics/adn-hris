import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from "@angular/core";
import { PapService } from "../../../../services/pap.service";

import swal from 'sweetalert2';
import { UtilityService } from "../../../../../../../base/_services/utilityService.service";
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { HrService } from "../../../hr.service";
import { environment } from '../../../../../../../../environments/environment';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';
import { CommonService } from "../../../../../../../base/_services/common.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper.papinit',
    templateUrl: 'grievance-all-employee.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [PapService]
})

export class GrievanceAllEmployeeComponent implements OnInit {
    employeesData: any = [];
    employee:any={};
    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    _currentEmpId: number;
    itemPerPage: number = 10;

    
 

    constructor(private _script: ScriptLoaderService,
        private _hrService: HrService,
        private _commonService:CommonService,
        public _authService: AuthService,
        private _route: ActivatedRoute,
        public utilityService: UtilityService,
    ) {

    }
    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.loadAllEmployee();
               
        });
        
       
    }

    ngAfterViewInit() {
    }

    loadAllEmployee() {
        this.utilityService.showLoader('#allEmployee-loader');
        this._hrService.getAllEmployee()
            .subscribe(
            res => {
                let data = res.json().data || [];
                if (data.length > 0) {
                    data = data.filter(obj => obj.hrScope_id == this._currentEmpId);
                    this.employeesData = data || [];
                    this.utilityService.hideLoader('#allEmployee-loader');
                }
                else
                {
                    this.employeesData = data.json().data || [];
                    this.utilityService.hideLoader('#allEmployee-loader');
                }
            },
            error => {
                this.utilityService.hideLoader('#allEmployee-loader');
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

   
}