import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTeamReviewerComponent } from './team-workflows/team-reveiwer/team-reviewer.component';
import { MyTeamSupervisorComponent } from './team-workflows/team-supervisor/team-supervisor.component';
import { MyTeamKraComponent } from './team-workflows/team-supervisor/kra-view/kra-view.component';


const routes: Routes = [
    { path: 'workflows/reveiwer', component: MyTeamReviewerComponent },
    { path: 'workflows/supervisor', component: MyTeamSupervisorComponent },
    { path: 'workflows/kra-view/:id', component: MyTeamKraComponent }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyTeamRoutingModule { }