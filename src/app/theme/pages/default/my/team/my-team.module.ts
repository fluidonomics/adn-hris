import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../../../../layouts/layout.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgUploaderModule } from 'ngx-uploader';
import { MyTeamRoutingModule } from './my-team-routing.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyTeamService } from "./my-team.service"
import { BaseModule } from '../../../../../base/base.module';
import { MyTeamReviewerComponent } from './team-workflows/team-reveiwer/team-reviewer.component';
import { MyTeamSupervisorComponent } from './team-workflows/team-supervisor/team-supervisor.component';
import { MyTeamKraComponent } from './team-workflows/team-supervisor/kra-view/kra-view.component';
import { KraReview } from './team-workflows/team-reveiwer/kra-view/kra-review.component';
import { AllEmployeeComponent } from './team-workflows/team-supervisor/allEmployee/allEmployee.component';
import { AllEmployeeReviewer } from './team-workflows/team-reveiwer/allEmployee/allEmployeeReviewer.component';
import { MtrDetailedViewComponent } from './team-workflows/team-supervisor/mtr-detailed-view/mtr-detailed-view.component';


import { ReviewerGuard } from '../../../../../base/_guard/reviewer.guard';
import { SupervisorGuard } from '../../../../../base/_guard/supervisor.guard';
import { ModalModule } from 'ngx-bootstrap';
import { MtrApprovalsComponent } from './team-workflows/team-supervisor/mtr-approvals/mtr-approvals.component';
import { MtrViewComponent } from './team-workflows/team-supervisor/mtr-view/mtr-view.component';
import { MtrService } from '../../services/mtr.service';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MyTeamRoutingModule,
        NgSelectModule,
        NgUploaderModule,
        NgxPaginationModule,
        BsDatepickerModule.forRoot(),
        BaseModule,
        ModalModule.forRoot(),
    ], declarations: [
        MyTeamReviewerComponent,
        MyTeamSupervisorComponent,
        MyTeamKraComponent,
        KraReview,
        AllEmployeeComponent,
        AllEmployeeReviewer,
        MtrApprovalsComponent,
        MtrViewComponent,
        MtrDetailedViewComponent
    ],
    providers: [MyTeamService, ReviewerGuard, SupervisorGuard, MtrService]
})
export class MyTeamModule {
}