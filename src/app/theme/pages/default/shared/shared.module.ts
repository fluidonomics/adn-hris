import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgUploaderModule } from 'ngx-uploader';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';



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
    ],
    declarations: [
    ],
    providers: [
        SharedService
    ],
})
export class SharedModule { }
