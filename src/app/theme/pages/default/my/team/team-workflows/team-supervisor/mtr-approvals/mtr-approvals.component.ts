import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MtrService } from '../../../../../services/mtr.service';

@Component({
    selector: 'mtr-approvals',
    templateUrl: 'mtr-approvals.component.html'
})

export class MtrApprovalsComponent implements OnInit {

    mtrData: any = [];

    constructor(private _mtrService: MtrService,
        public _authService: AuthService,
        private _route: ActivatedRoute,
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
}