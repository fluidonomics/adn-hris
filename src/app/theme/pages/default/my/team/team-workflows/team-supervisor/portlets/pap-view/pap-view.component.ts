import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../../../../base/_services/authService.service';
import { PapService } from '../../../../../../services/pap.service';
import { Router } from '@angular/router';
import { environment } from '../../../../../../../../../../environments/environment';

@Component({
    selector: 'pap-view',
    templateUrl: 'pap-view.component.html'
})

export class PapViewComponent implements OnInit {

    papData: any = [];
    papViewSearch: any;
    papViewReverse: boolean = true;
    imageBase: any;

    constructor(
        private authService: AuthService,
        private papService: PapService,
        private router: Router
    ) {
        this.imageBase = environment.content_api_base.apiBase;
        this.authService.validateToken().subscribe(res => {
            let _currentEmpId = this.authService.currentUserData._id;
            this.loadPapBySupervisor(_currentEmpId);
        });
    }

    ngOnInit() { }


    loadPapBySupervisor(currentEmpId) {
        this.papService.getPapBySupervisor(currentEmpId).subscribe(res => {
            let papData = res || [];
            if (papData.length > 0) {
                this.papData = papData.filter(p => {
                    return p.papmasters.reviewerStatus == 'Approved' || p.papmasters.reviewerStatus == 'Pending';
                })
            }
        });
    }

    gotopapView(pap) {
        this.router.navigateByUrl("/my/team/workflows/pap-detailed-view/" + pap.papmasters._id + "/" + pap._id);
    }

}