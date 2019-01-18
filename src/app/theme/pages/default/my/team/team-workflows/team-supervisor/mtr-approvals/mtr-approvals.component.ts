import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { MtrService } from '../../../../../services/mtr.service';
import { Router } from '@angular/router';
import { environment } from '../../../../../../../../../environments/environment';

@Component({
    selector: 'mtr-approvals',
    templateUrl: 'mtr-approvals.component.html'
})

export class MtrApprovalsComponent implements OnInit {

    mtrData: any = [];
    mtrDataSearch: any;
    mtrDataReverse: boolean = true;
    imageBase: any;

    constructor(private _mtrService: MtrService,
        public _authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.imageBase = environment.content_api_base.apiBase;
        this._authService.validateToken().subscribe(res => {
            let _currentEmpId = this._authService.currentUserData._id;
            this.loadMtrBySupervisor(_currentEmpId);
        });
    }

    loadMtrBySupervisor(emp_Id: number) {
        this._mtrService.getMtrBySupervisor(emp_Id, 'Submitted').subscribe(res => {
            this.mtrData = res.json().result.message || [];
        }, error => {
            console.log(error);
        });
    }

    gotomtrData(mtr) {
        this.router.navigateByUrl("/my/team/workflows/mtr-detailed-view/" + mtr.mtr_master_details._id + "/" + mtr.emp_details._id);
    }
}