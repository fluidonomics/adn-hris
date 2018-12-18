import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { MtrService } from '../../../../../services/mtr.service';
import { Router } from '@angular/router';

@Component({
    selector: 'mtr-approvals',
    templateUrl: 'mtr-approvals.component.html'
})

export class MtrApprovalsComponent implements OnInit {

    mtrData: any = [];
    mtrDataSearch: any;
    mtrDataReverse: boolean = true;

    constructor(private _mtrService: MtrService,
        public _authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this._authService.validateToken().subscribe(res => {
            let _currentEmpId = this._authService.currentUserData._id;
            this.loadMtrBySupervisor(_currentEmpId);
        });
    }

    loadMtrBySupervisor(emp_Id: number) {
        this._mtrService.getMtrBySupervisor(emp_Id, 'Submitted').subscribe(res => {
            debugger;
            this.mtrData = res.json().data || [];
        }, error => {
            console.log(error);
        });
    }

    gotomtrData(mtr) {
        this.router.navigateByUrl("/my/team/workflows/mtr-detailed-view/" + mtr._id + "/" + mtr.emp_id); 
    }
}