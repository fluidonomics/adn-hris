import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from "../../../../auth/_guards/auth.guard";

import { HrComponent } from './hr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BulkEmailComponent } from './email/bulkemail/bulkemail.component'
import { BroadCastComponent } from './email/broadcast/broadcast.component'
import { AllEmployeeComponent } from './employee/allEmployee/allEmployee.component';
import { AddEmployeeComponent } from './employee/addEmployee/addEmployee.component';
import { HrLearningComponent } from './workFlows/learning/learning.component';
import { HrInitiateComponent } from './workFlows/initiate/initiate.component';
import { HrBatchComponent } from './workFlows/batch/batch.component';
import { HrPipComponent } from './workFlows/pip/pip.component';
import { DirectoryComponent } from './directory/directory.component';
import { EditEmployeeComponent } from './employee/editEmployee/editEmployee.component';
import { TransferResponsibilityComponent } from './transferRespnsibility/transferResponsibility.component';
//import { DocumentsViewComponent } from './employee/documents-view/documents-view.component';

import { HrGuard } from '../../../../base/_guard/hr.guard'
import { PostComponent } from './leaves/post/post.component';
import { MtrBatchInitComponent } from './workFlows/mid-term-review/batch/initiate/mtr-batch-init.component';
import { MTRBatchComponent } from './workFlows/mid-term-review/batch/batch.component';
import { PapBatchInitComponent } from './workFlows/pap/batch/initiate/pap-batch-init.component';
import { PapBatchViewComponent } from './workFlows/pap/batch/view/pap-batch-view.component';
import { FeedbackInitiateComponent } from './workFlows/pap/feedback-initiate/feedback-initiate.component';
import { GrievanceAllEmployeeComponent } from './workFlows/grievance/all-employee/grievance-all-employee.component';
import { GrievanceDetailComponent } from './workFlows/grievance/grievance-details/grievance-detail.component';

import { LearningBatchComponent } from './workFlows/learning/batch/batch.component';
import { PipViewComponent } from './workFlows/pip/view/pip-view.component';
import { PipDetailView } from './workFlows/pip/detailed-view/pip-detailed-view.component';
import { PipBatchComponent } from './workFlows/pip/batch/batch.component';
import { QuotaProviderComponent } from './quotaProvider/quotaProvider.component';
import { HrHeads } from './quotaProvider/hrHeads/hrHeads.component';
const routes: Routes = [{
    path: '', component: HrComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'email/bulk', component: BulkEmailComponent },
        { path: 'email/broadcast', component: BroadCastComponent },
        { path: 'employee/add', component: AddEmployeeComponent },
        { path: 'employee', component: AllEmployeeComponent },
        { path: 'employee/:id', component: AllEmployeeComponent },
        { path: 'employee/edit', component: EditEmployeeComponent },
        { path: 'workflows/initiate', component: HrInitiateComponent },
        { path: 'workflows/learning', component: HrLearningComponent },
        { path: 'workflows/learn/batch', component: LearningBatchComponent },
        { path: 'workflows/batch', component: HrBatchComponent },
        { path: 'workflows/pip', component: HrPipComponent },
        { path: 'workflows/pip/batch', component: PipBatchComponent },
        { path: 'workflows/view', component: PipViewComponent },
        { path: 'workflows/view/detailview/:id/:emp_id', component: PipDetailView },
        { path: 'workflows/mtr/batch-init', component: MtrBatchInitComponent },
        { path: 'workflows/mtr/batch', component: MTRBatchComponent },
        { path: 'workflows/pap/batch-init', component: PapBatchInitComponent },
        { path: 'workflows/pap/batch', component: PapBatchViewComponent },
        { path: 'workflows/pap/feedback-init', component: FeedbackInitiateComponent },
        { path: 'workflows/grievance/all-employee', component: GrievanceAllEmployeeComponent },
        { path: 'workflows/grievance/detail/:id/:emp_id', component: GrievanceDetailComponent },

        { path: 'directory', component: DirectoryComponent },
        { path: 'post/leave', component: PostComponent },
        { path: 'transferresponsiblity', component: TransferResponsibilityComponent },
        { path: 'quotaProvider', component: QuotaProviderComponent },
        { path: 'hrHeads', component: HrHeads }
        //{ path: 'documents-view/:id', component: DocumentsViewComponent },
    ], canActivate: [HrGuard]
}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HrRoutingModule { }