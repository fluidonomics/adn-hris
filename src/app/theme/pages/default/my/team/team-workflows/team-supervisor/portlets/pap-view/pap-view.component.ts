import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../../../../base/_services/authService.service';
import { PapService } from '../../../../../../services/pap.service';
import { Router } from '@angular/router';
import { environment } from '../../../../../../../../../../environments/environment';

import swal from 'sweetalert2';

@Component({
    selector: 'pap-view',
    templateUrl: 'pap-view.component.html'
})

export class PapViewComponent implements OnInit {

    papData: any = [];
    papViewSearch: any;
    papViewReverse: boolean = true;
    imageBase: any;
    showReleaseFeedback: boolean = false;

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
        this.showReleaseFeedback = false;
        this.papService.getPapBySupervisor(currentEmpId).subscribe(res => {
            let papData = res || [];
            if (papData.length > 0) {
                this.papData = papData.filter(p => {
                    if (p.papmasters.isRatingCommunicated == false) {
                        this.showReleaseFeedback = true;
                    }
                    return p.papmasters.reviewerStatus == 'Approved' || p.papmasters.reviewerStatus == 'Pending';
                });
            }
        });
    }

    gotopapView(pap) {
        this.router.navigateByUrl("/my/team/workflows/pap-detailed-view/" + pap.papmasters._id + "/" + pap._id);
    }

    releaseFeedback() {
        let data = {
            empIds: this.papData.filter(pap => {
                return !pap.papmasters.isRatingCommunicated;
            }).map(pap => pap.papmasters.emp_id),
            updatedBy: this.authService.currentUserData._id,
            action_link: window.location.origin + '/my/team/workflows/supervisor'
        }
        swal({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                this.papService.releaseFeedback(data).subscribe(res => {
                    swal("Feedback Released", "", "success");
                    this.loadPapBySupervisor(this.authService.currentUserData._id);
                });
            }
        });
    }
}