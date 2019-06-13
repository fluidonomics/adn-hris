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
    showReleaseGrievanceFeedback: boolean = false;

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
        this.showReleaseGrievanceFeedback = false;
        this.papService.getPapBySupervisor(currentEmpId).subscribe(res => {
            let papData = res || [];
            if (papData.length > 0) {
                this.papData = papData.filter(p => {
                    if (p.papmasters.isRatingCommunicated == false && p.papmasters.isSentToSupervisor == true) {
                        this.showReleaseFeedback = true;
                    }
                    if (p.papmasters.isGrievanceFeedbackSentToSupervisor == true && p.papmasters.grievanceStatus == 'Initiated' && p.papmasters.isGrievanceFeedbackReleased != true) {
                        this.showReleaseGrievanceFeedback = true;
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
            action_link: window.location.origin + '/my/workflows/pap'
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

    releaseGrievanceFeedback() {
        let data = {
            empIds: this.papData.filter(pap => {
                return pap.papmasters.isGrievanceFeedbackSentToSupervisor == true && pap.papmasters.grievanceStatus == 'Initiated' && pap.papmasters.isGrievanceFeedbackReleased != true;
            }).map(pap => pap.papmasters.emp_id),
            updatedBy: this.authService.currentUserData._id,
            action_link: window.location.origin + '/my/workflows/pap'
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
                this.papService.releaseGrievanceFeedback(data).subscribe(res => {
                    swal("Grievance Feedback Released", "", "success");
                    this.loadPapBySupervisor(this.authService.currentUserData._id);
                });
            }
        });
    }
}