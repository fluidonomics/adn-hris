import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, Validators, ValidatorFn } from '@angular/forms';

function fnOnlyOneRequired(): ValidatorFn {
    return (group) => {
        let isValid = false;
        if (group) {
            for (let ctrl in group['controls']) {
                if (group['controls'][ctrl].value != null && group['controls'][ctrl].value != undefined && group['controls'][ctrl].value != "") {
                    isValid = true;
                }
            }
        }

        if (isValid) {
            return null;
        } else {
            return { onlyOneRequired: true };
        }
    }
}

@Directive({
    selector: '[onlyOneRequired]',
    providers: [{ provide: NG_VALIDATORS, useExisting: OnlyOneRequired, multi: true }]
})
export class OnlyOneRequired implements Validator {
    private valFn = Validators.nullValidator;

    constructor() {
        this.valFn = fnOnlyOneRequired();
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }
}