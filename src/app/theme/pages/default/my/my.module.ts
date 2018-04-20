import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '../../../layouts/layout.module';
import { MyComponent } from './my.component';
import { ProfileComponent } from './profile/profile.component';
import { LearningComponent } from './workflows/learning/learning.component'
import { PapComponent } from './workflows/pap/pap.component'
import { PipComponent } from './workflows/pip/pip.component'
import { ApplyComponent } from './leaves/apply/apply.component';
import { HolidaysComponent } from './leaves/holidays/holidays.component';
import { CalenderComponent } from './leaves/calender/calender.component';
import { LeaveListComponent } from './leaves/leave-list/leavelist.component';
import { ReportsComponent } from './leaves/reports/reports.component';
//import { ReviewerComponent } from './team/workflows/reveiwer/reviewer.component';
//import { SupervisorComponent } from './team/workflows/supervisor/supervisor.component';

import { MyRoutingModule } from './my-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgUploaderModule } from 'ngx-uploader';
import { MyService } from "./my.service"


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        MyRoutingModule,
        NgSelectModule,
        NgUploaderModule
    ], declarations: [
        MyComponent,
        ProfileComponent,
        LearningComponent,
        PapComponent,
        PipComponent,
        ApplyComponent,
        HolidaysComponent,
        CalenderComponent,
        LeaveListComponent,
        ReportsComponent,
        //ReviewerComponent,
        //SupervisorComponent
    ],
    providers: [MyService]
})
export class MyModule {
}