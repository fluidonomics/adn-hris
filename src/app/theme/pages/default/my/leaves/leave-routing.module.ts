import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveComponent } from './leave.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDetailsComponent } from './dashboard/dashboard-details/dashboard-details.component';
import { ApplyComponent } from './apply/apply.component';
import { CancelComponent } from './cancel/cancel.component';
import { TrackLeaveComponent } from './track-leave/track-leave.component';
import { TrackLeaveDetailsComponent } from './track-leave/track-leave-details/track-leave-details.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { CalenderComponent } from './calender/calender.component';
import { ReportsComponent } from './reports/reports.component';
import { PostLeaveTransactionComponent } from './post-leave-transaction/post-leave-transaction.component';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';
import { GrantLeaveComponent } from './grant-leave/grant-leave.component';

const routes: Routes = [{
    path: '', component: LeaveComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'dashboard/details/:id', component: DashboardDetailsComponent },
        { path: 'apply', component: ApplyComponent },
        { path: 'cancel', component: CancelComponent },
        { path: 'list', component: TrackLeaveComponent },
        { path: 'list/details/:id', component: TrackLeaveDetailsComponent },
        { path: 'holidays', component: HolidaysComponent },
        { path: 'calender', component: CalenderComponent },
        { path: 'reports', component: ReportsComponent },
        { path: 'post-leave-transaction', component: PostLeaveTransactionComponent },
        { path: 'employee-leaves', component: EmployeeLeavesComponent },
        { path: 'grant-leave', component: GrantLeaveComponent }
    ]

}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeaveRoutingModule { }
