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

import { ReportGenerationComponent } from './reportGeneration/reportGeneration.component';
//import { DocumentsViewComponent } from './employee/documents-view/documents-view.component';

import { HrGuard } from '../../../../base/_guard/hr.guard'

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
        { path: 'workflows/batch', component: HrBatchComponent },
        { path: 'workflows/pip', component: HrPipComponent },
        { path: 'directory', component: DirectoryComponent },
        { path: 'reports', component: ReportGenerationComponent },
        //{ path: 'documents-view/:id', component: DocumentsViewComponent },
    ], canActivate: [HrGuard]
}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HrRoutingModule { }