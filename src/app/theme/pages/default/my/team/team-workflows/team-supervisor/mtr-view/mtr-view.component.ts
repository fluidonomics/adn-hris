import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { MtrService } from '../../../../../services/mtr.service';
import { Router } from '@angular/router';
import { environment } from '../../../../../../../../../environments/environment';

@Component({
    selector: 'mtr-view',
    templateUrl: 'mtr-view.component.html'
})

export class MtrViewComponent implements OnInit {

    mtrViewData: any = [];
    mtrViewSearch: any;
    mtrViewReverse: boolean = true;
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
        this._mtrService.getMtrBySupervisor(emp_Id, 'Approved').subscribe(res => {
            this.mtrViewData = res.json().result.message || [];
        }, error => {
        });
    }

    gotomtrView(mtrView) {
        /* this.router.navigateByUrl("/my/team/workflows/kra-view/" + mtr._id + "/" + mtr.emp_id); */
    }


}