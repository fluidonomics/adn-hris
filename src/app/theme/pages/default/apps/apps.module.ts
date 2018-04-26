import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './apps.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';

const routes: Routes = [
    {
        path: "",
        component: DefaultComponent,
        children: [
            {
                path: "",
                component: AppsComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes),
        LayoutModule,
        //NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ], declarations: [
        AppsComponent
    ]
})
export class AppsModule {
}