import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '../../../layouts/layout.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyRoutingModule } from './my-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgUploaderModule } from 'ngx-uploader';
import { BaseModule } from '../../../../base/base.module';
import { LeaveModule } from './leaves/leave.module';

import { MyComponent } from './my.component';

import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

// import { MyLearningComponent } from './workflows/learning/learning.component';
// import { MyPapComponent } from './workflows/pap/pap.component';
// import { MyPipComponent } from './workflows/pip/pip.component';

import { DocumentsComponent } from './documents/documents.component';

import { MyService } from "./my.service"


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule,
        MyRoutingModule,
        NgSelectModule,
        NgUploaderModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        BaseModule,
        LeaveModule
    ], declarations: [
        MyComponent,
        ProfileComponent,
        ProfileEditComponent,
        ProfileViewComponent,

        // MyLearningComponent,
        // MyPapComponent,
        // MyPipComponent,
       
        DocumentsComponent
    ],
    providers: [MyService]
})
export class MyModule {
}
