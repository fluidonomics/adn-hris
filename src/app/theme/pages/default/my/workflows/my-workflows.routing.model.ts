import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLearningComponent } from './learning/learning.component';
import { MyPapComponent } from './pap/pap.component';
import { MyPipComponent } from './pip/pip.component';
import { MyKraComponent } from './kra/kra.component';
import { MyMtrComponent } from './mid-term-review/mtr.component';

const routes: Routes = [
    { path: 'learning', component: MyLearningComponent },
    { path: 'pap', component: MyPapComponent },
    { path: 'pip', component: MyPipComponent },
    { path: 'kra', component: MyKraComponent },
    { path: 'mtr', component: MyMtrComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyWorkFlowsRoutingModule { }