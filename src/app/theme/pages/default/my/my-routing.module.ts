import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from "../../../../auth/_guards/auth.guard";

import { MyComponent } from './my.component';
import { ProfileComponent } from './profile/profile.component';
import { MyLearningComponent } from './workflows/learning/learning.component'
import { MyPapComponent } from './workflows/pap/pap.component'
import { MyPipComponent } from './workflows/pip/pip.component'
import { ApplyComponent } from './leaves/apply/apply.component';
import { HolidaysComponent } from './leaves/holidays/holidays.component';
import { CalenderComponent } from './leaves/calender/calender.component';
import { LeaveListComponent } from './leaves/leave-list/leavelist.component';
import { ReportsComponent } from './leaves/reports/reports.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

// import { ReviewerComponent } from './team/workflows/reveiwer/reviewer.component';
// import { SupervisorComponent } from './team/workflows/supervisor/supervisor.component';

const routes: Routes = [{
    path: '', component: MyComponent,
    children: [
        { path: 'profile', component: ProfileComponent },
        { path: 'profile-edit', component: ProfileEditComponent },
        { path: 'workflows/learning', component: MyLearningComponent },
        { path: 'workflows/pap', component: MyPapComponent },
        { path: 'workflows/pip', component: MyPipComponent },
        { path: 'leaves/apply', component: ApplyComponent },
        { path: 'leaves/holidays', component: HolidaysComponent },
        { path: 'leaves/calender', component: CalenderComponent },
        { path: 'leaves/list', component: LeaveListComponent },
        { path: 'leaves/reports', component: ReportsComponent },
      
        
        //{path:'team/workflows/reveiwer',component:ReviewerComponent},
        //{path:'team/workflows/supervisor',component:SupervisorComponent},
        //{path:"team",loadChildren:".\/team\/team.module#TeamModule"}
    ]

}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyRoutingModule { }