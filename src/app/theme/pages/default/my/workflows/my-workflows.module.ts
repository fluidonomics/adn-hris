import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../../../../layouts/layout.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgUploaderModule } from 'ngx-uploader';
import { NgxPaginationModule } from 'ngx-pagination';

import { MyWorkFlowsRoutingModule } from './my-workflows.routing.model';

import { MyService } from "../my.service"
import { BaseModule } from '../../../../../base/base.module';

import { MyLearningComponent } from './learning/learning.component';
import { MyPapComponent } from './pap/pap.component';
import { MyPipComponent } from './pip/pip.component';
import { MyKraComponent } from './kra/kra.component';
import { MyMtrComponent } from './mid-term-review/mtr.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        NgUploaderModule,
        NgxPaginationModule,
        BsDatepickerModule.forRoot(),
        BaseModule,
        MyWorkFlowsRoutingModule,
    ], declarations: [
        MyLearningComponent,
        MyPapComponent,
        MyPipComponent,
        MyKraComponent,
        MyMtrComponent
    ],
    providers: [MyService]
})
export class MyWorkFlowsModule {
}