import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from "../../../../auth/_guards/auth.guard";

import { HrComponent } from './hr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BulkEmailComponent } from './email/bulkemail/bulkemail.component'
import { BroadCastComponent } from './email/broadcast/broadcast.component'
import { AllEmployeeComponent } from './employee/allEmployee/allEmployee.component';
import { AddEmployeeComponent } from './employee/addEmployee/addEmployee.component';
import { LearningComponent } from './workFlows/learning/learning.component';
import { PapComponent } from './workFlows/pap/pap.component';
import { PipComponent } from './workFlows/pip/pip.component';
import { DirectoryComponent } from './directory/directory.component';
import { EditEmployeeComponent } from './employee/editEmployee/editEmployee.component';

const routes: Routes = [{
    path: '', component: HrComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'email/bulk', component: BulkEmailComponent },
        { path: 'email/broadcast', component: BroadCastComponent },
        { path: 'employee/add', component: AddEmployeeComponent },
        { path: 'employee/all', component: AllEmployeeComponent },
        { path: 'employee/edit', component: EditEmployeeComponent },
        { path: 'workflows/learning', component: LearningComponent },
        { path: 'workflows/pap', component: PapComponent },
        { path: 'workflows/pip', component: PipComponent },
        { path: 'directory', component: DirectoryComponent },
    ]

}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HrRoutingModule { }