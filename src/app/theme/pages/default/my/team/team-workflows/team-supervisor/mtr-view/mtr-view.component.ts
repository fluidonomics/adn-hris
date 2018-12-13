import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { MtrService } from '../../../../../services/mtr.service';
import { Router } from '@angular/router';

@Component({
    selector: 'mtr-view',
    templateUrl: 'mtr-view.component.html'
})

export class MtrViewComponent implements OnInit {

    mtrViewData: any = [];
    mtrViewSearch: any;
    mtrViewReverse: boolean = true;

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
        this._mtrService.getMtrBySupervisor(emp_Id, 'Approved').subscribe(res => {
            debugger;
            this.mtrViewData = res.json().data || [];
        }, error => {
        });
    }

    gotomtrView(mtrView) {
        /* this.router.navigateByUrl("/my/team/workflows/kra-view/" + mtr._id + "/" + mtr.emp_id); */
    }

   
}