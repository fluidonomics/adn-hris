import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTeamReviewerComponent } from './team-workflows/team-reveiwer/team-reviewer.component';
import { KraReview } from './team-workflows/team-reveiwer/kra-view/kra-review.component';
import { MyTeamSupervisorComponent } from './team-workflows/team-supervisor/team-supervisor.component';
import { MyTeamKraComponent } from './team-workflows/team-supervisor/kra-view/kra-view.component';
import { AllEmployeeComponent } from './team-workflows/team-supervisor/allEmployee/allEmployee.component';
import { AllEmployeeReviewer } from './team-workflows/team-reveiwer/allEmployee/allEmployeeReviewer.component';
import { MtrDetailedViewComponent } from './team-workflows/team-supervisor/mtr-detailed-view/mtr-detailed-view.component';
import { EmployeeSearchComponent } from './subordinate-transaction-history/employee-search/employee-search.component'
import { LearningDetailedViewComponent } from './team-workflows/team-supervisor/learning-detailed-view/learning-detailed-view.component';
import { AllLearningReviewer } from './team-workflows/team-reveiwer/allLearning/allLearningReviewer.component';



import { ReviewerGuard } from '../../../../../base/_guard/reviewer.guard';
import { SupervisorGuard } from '../../../../../base/_guard/supervisor.guard';
import { MtrReview } from './team-workflows/team-reveiwer/mid-term/mtr-review.component';
import { PapDetailedViewComponent } from './team-workflows/team-supervisor/pap-detailed-view/pap-detailed-view.component';
import { PapReviewComponent } from './team-workflows/team-reveiwer/pap-review/pap-review.component';
import { TransactionHistoryComponent } from './subordinate-transaction-history/transaction-history/transaction-history.component';
import { LearningReview } from './team-workflows/team-reveiwer/learning-view/learning-review.component';

const routes: Routes = [
    { path: 'workflows/reveiwer', component: MyTeamReviewerComponent, canActivate: [SupervisorGuard] },
    { path: 'workflows/reveiwer/employee/list', component: AllEmployeeReviewer, canActivate: [SupervisorGuard] },
    { path: 'workflows/kra-review/:id/:emp_id', component: KraReview },
    { path: 'workflows/learning-review/:id/:emp_id', component: LearningReview },
    { path: 'workflows/mtr-review/:id/:emp_id', component: MtrReview },
    { path: 'workflows/supervisor', component: MyTeamSupervisorComponent, canActivate: [SupervisorGuard] },
    { path: 'workflows/:supervisor/employee/list', component: AllEmployeeComponent, canActivate: [SupervisorGuard] },
    //{ path: 'workflows/:reveiwer/allEmployee', component: AllEmployeeComponent,canActivate: [ReviewerGuard] },
    { path: 'workflows/kra-view/:id/:emp_id', component: MyTeamKraComponent },
    { path: 'workflows/mtr-detailed-view/:id/:emp_id', component: MtrDetailedViewComponent },
    { path: 'workflows/pap-detailed-view/:id/:emp_id', component: PapDetailedViewComponent },
    { path: 'workflows/pap-review/:id/:emp_id', component: PapReviewComponent },
    { path: 'subordinate/employee/list', component: EmployeeSearchComponent },
    { path: 'subordinate/transaction-history/:emp_id', component: TransactionHistoryComponent },
    { path: 'workflows/learning-detailed-view/:id/:emp_id', component: LearningDetailedViewComponent },
    {  path: 'workflows/:supervisor/learning/list', component: AllLearningReviewer }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyTeamRoutingModule { }