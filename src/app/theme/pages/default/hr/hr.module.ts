import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../../../layouts/layout.module';

import { HrComponent } from './hr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BulkEmailComponent } from './email/bulkemail/bulkemail.component'
import { BroadCastComponent } from './email/broadcast/broadcast.component'
import { AllEmployeeComponent } from './employee/allEmployee/allEmployee.component';
import { EditEmployeeComponent } from './employee/editEmployee/editEmployee.component';
import { AddEmployeeComponent } from './employee/addEmployee/addEmployee.component';
import { LearningComponent } from './workFlows/learning/learning.component';
import { PapComponent } from './workFlows/pap/pap.component';
import { PipComponent } from './workFlows/pip/pip.component';
import { DirectoryComponent } from './directory/directory.component';
import { HrRoutingModule } from './hr-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { OnlyNumberDirective } from "../../../../base/_directive/only-number.directive"
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from "../../../../base/_pipes/search.pipes";
import { OrderPipe } from "../../../../base/_pipes/order.pipes";

import { SummernoteComponent } from "../../../../base/_components/summernote.component"
import { TagInputModule } from 'ngx-chips';

import { HrService } from './hr.service';


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HrRoutingModule,
        NgSelectModule,
        NgxPaginationModule,
        TagInputModule
    ], declarations: [
        HrComponent,
        DashboardComponent,
        BulkEmailComponent,
        BroadCastComponent,
        AllEmployeeComponent,
        AddEmployeeComponent,
        LearningComponent,
        PapComponent,
        PipComponent,
        DirectoryComponent,
        EditEmployeeComponent,
        OnlyNumberDirective,
        SearchPipe,
        OrderPipe,
        SummernoteComponent
    ],
    providers: [HrService]
})
export class HrModule {
}