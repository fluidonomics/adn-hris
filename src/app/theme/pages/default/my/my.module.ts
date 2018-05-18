import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '../../../layouts/layout.module';
import { MyComponent } from './my.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { MyLearningComponent } from './workflows/learning/learning.component'
import { MyPapComponent } from './workflows/pap/pap.component'
import { MyPipComponent } from './workflows/pip/pip.component'
import { ApplyComponent } from './leaves/apply/apply.component';
import { HolidaysComponent } from './leaves/holidays/holidays.component';
import { CalenderComponent } from './leaves/calender/calender.component';
import { TrackLeaveComponent } from './leaves/track-leave/track-leave.component';
import { LeaveListComponent } from './leaves/leave-list/leavelist.component';
import { ReportsComponent } from './leaves/reports/reports.component';
import { CancelComponent } from './leaves/cancel/cancel.component';
import { NgxPaginationModule } from 'ngx-pagination';
//import { ReviewerComponent } from './team/workflows/reveiwer/reviewer.component';
//import { SupervisorComponent } from './team/workflows/supervisor/supervisor.component';


import { MyRoutingModule } from './my-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgUploaderModule } from 'ngx-uploader';
import { MyService } from "./my.service"
import { BaseModule } from '../../../../base/base.module';
import { DashboardComponent } from './leaves/dashboard/dashboard.component';
import { TrackLeaveDetailsComponent } from './leaves/track-leave/track-leave-details/track-leave-details.component';
import { UtilityService } from '../../../../base/_services/utilityService.service';
import { PostLeaveTransactionComponent } from './leaves/post-leave-transaction/post-leave-transaction.component';
import { EmployeeLeavesComponent } from './leaves/employee-leaves/employee-leaves.component';
import { GrantLeaveComponent } from './leaves/grant-leave/grant-leave.component';



@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        //NgbModule.forRoot(),
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule,
        MyRoutingModule,
        NgSelectModule,
        NgUploaderModule,
        BsDatepickerModule.forRoot(),
        BaseModule
    ], declarations: [
        MyComponent,
        ProfileComponent,
        MyLearningComponent,
        MyPapComponent,
        MyPipComponent,
        DashboardComponent,
        ApplyComponent,
        CancelComponent,
        TrackLeaveComponent,
        HolidaysComponent,
        CalenderComponent,
        LeaveListComponent,
        ReportsComponent,
        ProfileEditComponent,
        TrackLeaveDetailsComponent,
        PostLeaveTransactionComponent,
        EmployeeLeavesComponent,
        GrantLeaveComponent
        //ReviewerComponent,
        //SupervisorComponent
    ],
    providers: [MyService, UtilityService]
})
export class MyModule {
}