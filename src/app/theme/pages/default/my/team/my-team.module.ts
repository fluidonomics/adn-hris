import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../.././../../layouts/layout.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgUploaderModule } from 'ngx-uploader';
import { MyTeamRoutingModule } from './my-team-routing.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyTeamService } from "./my-team.service"
import { BaseModule } from '../../../../../base/base.module';
import { MyTeamReviewerComponent } from './team-workflows/team-reveiwer/team-reviewer.component';
import { MyTeamSupervisorComponent } from './team-workflows/team-supervisor/team-supervisor.component';
import { MyTeamKraComponent } from './team-workflows/team-supervisor/kra-view/kra-view.component';

import { ReviewerGuard } from '../../../../../base/_guard/reviewer.guard';
import { SupervisorGuard } from '../../../../../base/_guard/supervisor.guard';

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
        BaseModule
    ], declarations: [
        MyTeamReviewerComponent,
        MyTeamSupervisorComponent,
        MyTeamKraComponent
    ],
    providers: [MyTeamService,ReviewerGuard,SupervisorGuard]
})
export class MyTeamModule {
}