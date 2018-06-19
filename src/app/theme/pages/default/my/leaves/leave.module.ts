//--------- Modules -------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../../../../layouts/layout.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { LeaveRoutingModule } from './leave-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { BaseModule } from '../../../../../base/base.module';


//--------- Component -------------
import { LeaveComponent } from './leave.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveForwardComponent } from './dashboard/leave-forward/leave-forward.component';
import { DashboardDetailsComponent } from './dashboard/dashboard-details/dashboard-details.component';
import { ApplyComponent } from './apply/apply.component';
import { CancelComponent } from './cancel/cancel.component';
import { TrackLeaveComponent } from './track-leave/track-leave.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { CalenderComponent } from './calender/calender.component';
import { LeaveListComponent } from './leave-list/leavelist.component';
import { ReportsComponent } from './reports/reports.component';
import { TrackLeaveDetailsComponent } from './track-leave/track-leave-details/track-leave-details.component';
import { PostLeaveTransactionComponent } from './post-leave-transaction/post-leave-transaction.component';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';
import { GrantLeaveComponent } from './grant-leave/grant-leave.component';

//--------- Services -------------
import { LeaveService } from './leave.service';
import { CommonService } from '../../../../../base/_services/common.service';
import { EmployeeGuard } from '../../../../../base/_guard/employee.guard';
import { HrGuard } from '../../../../../base/_guard/hr.guard';
import { SupervisorGuard } from '../../../../../base/_guard/supervisor.guard';


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule,
        LeaveRoutingModule,
        NgSelectModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        BaseModule
    ], declarations: [
        LeaveComponent,
        DashboardComponent,
        LeaveForwardComponent,
        DashboardDetailsComponent,
        ApplyComponent,
        CancelComponent,
        TrackLeaveComponent,
        HolidaysComponent,
        CalenderComponent,
        LeaveListComponent,
        ReportsComponent,
        TrackLeaveDetailsComponent,
        PostLeaveTransactionComponent,
        EmployeeLeavesComponent,
        GrantLeaveComponent
    ],
    providers: [LeaveService, CommonService, EmployeeGuard, HrGuard, SupervisorGuard]
})
export class LeaveModule {
}
