import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PapService } from '../../../../../../services/pap.service';
import { AuthService } from '../../../../../../../../../base/_services/authService.service';
import { environment } from '../../../../../../../../../../environments/environment';

@Component({
    selector: 'pap-approvals',
    templateUrl: 'pap-approvals.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [PapService]
})

export class PapApprovalsComponent {

    papData: any = [];
    papDataReverse: boolean = true;
    papDataSearch: any;
    imageBase: any;

    constructor(
        private authService: AuthService,
        private papService: PapService
    ) {
        this.imageBase = environment.content_api_base.apiBase;
        this.authService.validateToken().subscribe(res => {
            let _currentEmpId = this.authService.currentUserData._id;
            this.loadPapBySupervisor(_currentEmpId);
        });
    }

    loadPapBySupervisor(currentEmpId) {
        this.papService.getPapBySupervisor(currentEmpId).subscribe(res => {
            this.papData = res || [];
        });
    }

    gotopapData(pap) {

    }
}