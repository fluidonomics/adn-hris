import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from "./_pipes/search.pipes";
import { OrderPipe } from "./_pipes/order.pipes";
import { KeysPipe } from "./_pipes/key.pipes";
import { CeilPipe } from "./_pipes/ceil.pipes";
import { EqualValidator } from './_directive/equalValidator.directive';
import { OnlyNumberDirective } from './_directive/only-number.directive';
import {SummernoteComponent } from './_components/summernote.component';



@NgModule({
    imports: [
        CommonModule,
    ], declarations: [
        SearchPipe,
        OrderPipe,
        KeysPipe,
        CeilPipe,
        SummernoteComponent,
        OnlyNumberDirective,
        EqualValidator
    ],
    exports: [
        SearchPipe,
        OrderPipe,
        KeysPipe,
        CeilPipe,
        SummernoteComponent,
        OnlyNumberDirective,
        EqualValidator
    ],
})
export class BaseModule {
}