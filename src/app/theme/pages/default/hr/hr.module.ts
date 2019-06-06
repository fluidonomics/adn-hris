import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../../../layouts/layout.module';
import { BaseModule } from '../../../../base/base.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { TagInputModule } from 'ngx-chips';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HrRoutingModule } from './hr-routing.module';
import { ModalModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';

import { HrComponent } from './hr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BulkEmailComponent } from './email/bulkemail/bulkemail.component'
import { BroadCastComponent } from './email/broadcast/broadcast.component'
import { AllEmployeeComponent } from './employee/allEmployee/allEmployee.component';
import { EditEmployeeComponent } from './employee/editEmployee/editEmployee.component';
import { AddEmployeeComponent } from './employee/addEmployee/addEmployee.component';
import { HrLearningComponent } from './workFlows/learning/learning.component';
import { LearningBatchComponent } from './workFlows/learning/batch/batch.component'
import { HrInitiateComponent } from './workFlows/initiate/initiate.component';
import { HrBatchComponent } from './workFlows/batch/batch.component';
import { HrPipComponent } from './workFlows/pip/pip.component';
import { PipBatchComponent } from './workFlows/pip/batch/batch.component';
import { PipViewComponent } from './workFlows/pip/view/pip-view.component';
import { DirectoryComponent } from './directory/directory.component';
import { TransferResponsibilityComponent } from './transferRespnsibility/transferResponsibility.component';
import { QuotaProviderComponent } from './quotaProvider/quotaProvider.component';
//import { DocumentsViewComponent } from './employee/documents-view/documents-view.component';
import { AmChartsService, AmChartsModule } from '@amcharts/amcharts3-angular';

import { HrService } from './hr.service';

import { HrGuard } from '../../../../base/_guard/hr.guard';
import { LeaveService } from '../my/leaves/leave.service';
import { PostComponent } from './leaves/post/post.component';
import { NgUploaderModule } from 'ngx-uploader';
import { HttpClientModule } from "../../../../../../node_modules/@angular/common/http";
import { MtrBatchInitComponent } from './workFlows/mid-term-review/batch/initiate/mtr-batch-init.component';
import { MTRBatchComponent } from './workFlows/mid-term-review/batch/batch.component';
import { PapBatchInitComponent } from './workFlows/pap/batch/initiate/pap-batch-init.component';
import { DepartmentGradeFilterComponent } from '../shared/components/department-grade-filter/department-grade-filter.component';
import { EmployeeBatchSelectionGridComponent } from '../shared/components/employee-batch-selection-grid/employee-batch-selection-grid.component';
import { PapBatchViewComponent } from './workFlows/pap/batch/view/pap-batch-view.component';
import { FeedbackInitiateComponent } from './workFlows/pap/feedback-initiate/feedback-initiate.component'
import { GrievanceAllEmployeeComponent } from './workFlows/grievance/all-employee/grievance-all-employee.component';
import { GrievanceDetailComponent } from './workFlows/grievance/grievance-details/grievance-detail.component';
import { PapDetailsGridComponent } from '../shared/components/pap-details-grid/pap-details-grid.component';
import { LearningService } from '../services/learning.service';
import { PipService } from '../services/pip.service';
import { PipDetailView } from './workFlows/pip/detailed-view/pip-detailed-view.component';
import { SharedModule } from '../shared/shared.module';
import { MonthlyGradeChartComponent } from './chart/monthly-grade-chart.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        HrRoutingModule,
        NgSelectModule,
        NgxPaginationModule,
        TagInputModule,
        BaseModule,
        NgUploaderModule,
        HttpClientModule,
        AmChartsModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        SharedModule
    ], declarations: [
        HrComponent,
        DashboardComponent,
        BulkEmailComponent,
        BroadCastComponent,
        AllEmployeeComponent,
        AddEmployeeComponent,
        HrLearningComponent,
        LearningBatchComponent,
        HrBatchComponent,
        HrPipComponent,
        PipBatchComponent,
        PipViewComponent,
        PipDetailView,
        DirectoryComponent,
        EditEmployeeComponent,
        HrInitiateComponent,
        PostComponent,
        TransferResponsibilityComponent,
        PostComponent,
        MtrBatchInitComponent,
        MTRBatchComponent,
        PapBatchInitComponent,
        DepartmentGradeFilterComponent,
        EmployeeBatchSelectionGridComponent,
        PapBatchViewComponent,
        FeedbackInitiateComponent,
        GrievanceAllEmployeeComponent,
        GrievanceDetailComponent,
        QuotaProviderComponent
        MonthlyGradeChartComponent
        //DocumentsViewComponent
        
    ],
    providers: [HrService, HrGuard, LeaveService, LearningService, PipService, AmChartsService]
})
export class HrModule {
}