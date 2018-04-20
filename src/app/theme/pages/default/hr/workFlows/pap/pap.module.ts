import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PapComponent } from './pap.component';
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
                component: PapComponent
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
        PapComponent
    ]
})
export class PapModule {
}