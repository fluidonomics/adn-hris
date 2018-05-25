import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../.././../../layouts/layout.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgUploaderModule } from 'ngx-uploader';

import { MyWorkFlowsRoutingModule } from './my-workflows.routing.model';

import { MyService } from "../my.service"
import { BaseModule } from '../../../../../base/base.module';

import { MyLearningComponent } from './learning/learning.component';
import { MyPapComponent } from './pap/pap.component';
import { MyPipComponent } from './pip/pip.component';
import { MyKraComponent } from './kra/kra.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        NgUploaderModule,
        BsDatepickerModule.forRoot(),
        BaseModule,
        MyWorkFlowsRoutingModule,
    ], declarations: [
        MyLearningComponent,
        MyPapComponent,
        MyPipComponent,
        MyKraComponent
    ],
    providers: [MyService]
})
export class MyWorkFlowsModule {
}