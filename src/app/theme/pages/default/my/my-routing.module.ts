import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from "../../../../auth/_guards/auth.guard";

import { MyComponent } from './my.component';

// import { MyLearningComponent } from './workflows/learning/learning.component'
// import { MyPapComponent } from './workflows/pap/pap.component'
// import { MyPipComponent } from './workflows/pip/pip.component'

import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

import { DocumentsComponent } from './documents/documents.component';


const routes: Routes = [{
    path: '', component: MyComponent,
    children: [
        { path: 'profile', component: ProfileComponent },
        { path: 'profile-edit', component: ProfileEditComponent },
        { path: 'profile-view', component: ProfileViewComponent },

        // { path: 'workflows/learning', component: MyLearningComponent },
        // { path: 'workflows/pap', component: MyPapComponent },
        // { path: 'workflows/pip', component: MyPipComponent },


        
        { path: 'documents', component: DocumentsComponent },
        { path: 'workflows',loadChildren: ".\/workflows\/my-workflows.module#MyWorkFlowsModule"},
        { path: 'leaves',loadChildren: ".\/leaves\/leave.module#LeaveModule" },
        { path: 'team', loadChildren: ".\/team\/my-team.module#MyTeamModule" }
     
    ]

}]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyRoutingModule { }
