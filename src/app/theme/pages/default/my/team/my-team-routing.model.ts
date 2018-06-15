import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTeamReviewerComponent } from './team-workflows/team-reveiwer/team-reviewer.component';
import { MyTeamSupervisorComponent } from './team-workflows/team-supervisor/team-supervisor.component';
import { MyTeamKraComponent } from './team-workflows/team-supervisor/kra-view/kra-view.component';

import { ReviewerGuard } from '../../../../../base/_guard/reviewer.guard';
import { SupervisorGuard } from '../../../../../base/_guard/supervisor.guard';

const routes: Routes = [
    { path: 'workflows/reveiwer', component: MyTeamReviewerComponent,canActivate: [ReviewerGuard] },
    { path: 'workflows/supervisor', component: MyTeamSupervisorComponent,canActivate: [SupervisorGuard] },
    { path: 'workflows/kra-view/:id', component: MyTeamKraComponent }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyTeamRoutingModule { }