import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveComponent } from './leave.component';
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
import { EmployeeGuard } from '../../../../../base/_guard/employee.guard';
import { SupervisorGuard } from '../../../../../base/_guard/supervisor.guard';
import { HrGuard } from '../../../../../base/_guard/hr.guard';
import { DashboardEmployeeComponent } from './dashboard/dashboard-employee/dashboard-employee.component';
import { DashboardSupervisorComponent } from './dashboard/dashboard-supervisor/dashboard-supervisor.component';
import { DashboardHrComponent } from './dashboard/dashboard-hr/dashboard-hr.component';

const routes: Routes = [{
    path: '', component: LeaveComponent,
    children: [
        { path: 'dashboard/employee', component: DashboardEmployeeComponent, canActivate: [EmployeeGuard] },
        { path: 'dashboard/employee/:leave_id', component: DashboardEmployeeComponent, canActivate: [EmployeeGuard] },
        { path: 'dashboard/supervisor/:leave_id',  component: DashboardSupervisorComponent, canActivate: [SupervisorGuard], },
        { path: 'dashboard/supervisor',  component: DashboardSupervisorComponent, canActivate: [SupervisorGuard], },
        { path: 'dashboard/hr', component: DashboardHrComponent, canActivate: [HrGuard] },
        { path: 'apply', component: ApplyComponent, canActivate: [EmployeeGuard] },
        { path: 'cancel', component: CancelComponent, canActivate: [EmployeeGuard] },
        { path: 'list', component: TrackLeaveComponent, canActivate: [EmployeeGuard] },
        { path: 'list/details/:id', component: TrackLeaveDetailsComponent, canActivate: [EmployeeGuard] },
        { path: 'holidays', component: HolidaysComponent, canActivate: [HrGuard] },
        { path: 'calender', component: CalenderComponent, canActivate: [HrGuard] },
        { path: 'reports', component: ReportsComponent, canActivate: [HrGuard] },
        { path: 'post-leave-transaction', component: PostLeaveTransactionComponent, canActivate: [HrGuard] },
        { path: 'employee-leaves', component: EmployeeLeavesComponent, canActivate: [HrGuard, SupervisorGuard] },
        { path: 'grant-leave', component: GrantLeaveComponent, canActivate: [HrGuard] }
    ]

}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeaveRoutingModule { }
