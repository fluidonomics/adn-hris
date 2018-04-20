import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LearningComponent } from './learning.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from '../../../default.component';
import { LayoutModule } from '../../../../../layouts/layout.module';

const routes: Routes = [
    {
        path: "",
        component: DefaultComponent,
        children: [
            {
                path: "",
                component: LearningComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes),
        LayoutModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ], declarations: [
        LearningComponent
    ]
})
export class LearningModule {
}