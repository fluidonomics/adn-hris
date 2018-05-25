import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '../../../layouts/layout.module';
import { MyComponent } from './my.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { MyLearningComponent } from './workflows/learning/learning.component'
import { MyPapComponent } from './workflows/pap/pap.component'
import { MyPipComponent } from './workflows/pip/pip.component'
import { NgxPaginationModule } from 'ngx-pagination';
//import { ReviewerComponent } from './team/workflows/reveiwer/reviewer.component';
//import { SupervisorComponent } from './team/workflows/supervisor/supervisor.component';


import { MyRoutingModule } from './my-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgUploaderModule } from 'ngx-uploader';
import { MyService } from "./my.service"
import { BaseModule } from '../../../../base/base.module';
import { LeaveModule } from './leaves/leave.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        //NgbModule.forRoot(),
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
        MyLearningComponent,
        MyPapComponent,
        MyPipComponent,
        ProfileEditComponent,
        //ReviewerComponent,
        //SupervisorComponent
    ],
    providers: [MyService]
})
export class MyModule {
}
