import { NgModule } from '@angular/core';
import { PapDetailsGridComponent } from './components/pap-details-grid/pap-details-grid.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgUploaderModule } from 'ngx-uploader';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { FiscalYearDropdownComponent } from "./components/fiscal-year-dropdown/fiscal-year-dropdown.component";
import { ApplyLeavePanelComponent } from "./components/apply-leave-panel/apply-leave-panel.component";
import { HrService } from "../hr/hr.service";
import { CompanyDropdownComponent } from "./components/company-dropdown/company-dropdown.component";



@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgSelectModule,
        NgUploaderModule,
        NgxPaginationModule,
        BsDatepickerModule.forRoot(),
    ],
    exports: [
        PapDetailsGridComponent,
        FiscalYearDropdownComponent,
        ApplyLeavePanelComponent,
        CompanyDropdownComponent
    ],
    declarations: [
        PapDetailsGridComponent,
        FiscalYearDropdownComponent,
        ApplyLeavePanelComponent,
        CompanyDropdownComponent
    ],
    providers: [
        SharedService,
        HrService
    ],
})
export class SharedModule { }
