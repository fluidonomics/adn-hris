import { NgModule } from '@angular/core';
import { PapDetailsGridComponent } from './components/pap-details-grid/pap-details-grid.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgUploaderModule } from 'ngx-uploader';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';



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
        PapDetailsGridComponent
    ],
    declarations: [
        PapDetailsGridComponent
    ],
    providers: [],
})
export class SharedModule { }
