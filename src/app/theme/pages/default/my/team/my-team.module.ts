import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../.././../../layouts/layout.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgUploaderModule } from 'ngx-uploader';
import { MyTeamRoutingModule } from './my-team-routing.model';
import { MyTeamService } from "./my-team.service"
import { BaseModule } from '../../../../../base/base.module';
import { MyTeamReviewerComponent } from './team-workflows/team-reveiwer/team-reviewer.component';
import { MyTeamSupervisorComponent } from './team-workflows/team-supervisor/team-supervisor.component';



@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MyTeamRoutingModule,
        NgSelectModule,
        NgUploaderModule,
        BsDatepickerModule.forRoot(),
        BaseModule
    ], declarations: [
          MyTeamReviewerComponent,
          MyTeamSupervisorComponent
    ],
    providers: [MyTeamService]
})
export class MyTeamModule {
}