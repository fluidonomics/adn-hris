import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from "./_pipes/search.pipes";
import { OrderPipe } from "./_pipes/order.pipes";
import { KeysPipe } from "./_pipes/key.pipes";
import { RoundPipe } from "./_pipes/round.pipes";
import { CeilPipe } from "./_pipes/ceil.pipes";
import { EqualValidator } from './_directive/equalValidator.directive';
import { OnlyNumberDirective } from './_directive/only-number.directive';
import { OnlyPercentageDirective } from './_directive/only-percentage.directive';
import { OnlyMobileNumberDirective } from './_directive/only-mobile-number.directive';
import { LowerCaseDirective } from './_directive/lowerCase.directive';
//import { EmailUniqueValidatorDirective } from './_directive/unique-email.directive';
import { OnlyOneRequired } from './_directive/only-one-required';
import { SummernoteComponent } from './_components/summernote.component';
import { CalendarComponent } from './_components/calendar.component';

@NgModule({
    imports: [
        CommonModule,
    ], declarations: [
        SearchPipe,
        OrderPipe,
        KeysPipe,
        CeilPipe,
        RoundPipe,
        SummernoteComponent,
        OnlyNumberDirective,
        OnlyPercentageDirective,
        LowerCaseDirective,
        OnlyMobileNumberDirective,
        //EmailUniqueValidatorDirective,
        EqualValidator,
        OnlyOneRequired,
        CalendarComponent
    ],
    exports: [
        SearchPipe,
        OrderPipe,
        KeysPipe,
        CeilPipe,
        RoundPipe,
        SummernoteComponent,
        LowerCaseDirective,
        OnlyNumberDirective,
        OnlyPercentageDirective,
        OnlyOneRequired,
        OnlyMobileNumberDirective,
        //EmailUniqueValidatorDirective,
        EqualValidator,
        CalendarComponent
    ],
})
export class BaseModule {
}