// import { Directive } from '@angular/core';
// import { AsyncValidatorFn, AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
// import { Observable } from "rxjs/Observable";
// import 'rxjs/add/operator/map';
// import {CommonService} from "../_services/common.service"

// export function isEmailUnique(_common: CommonService): AsyncValidatorFn {
//   return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
//     return this._common.isEmailUnique(control.value).map(
//       users => {
//         return (users && users.length > 0) ? {"isUnique": true} : null;
//       }
//     );
//   };
// }

// @Directive({
//   selector: '[isEmailUnique][formControlName],[isEmailUnique][isEmailUnique],[isEmailUnique][ngModel]',
//   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: EmailUniqueValidatorDirective, multi: true}]
// })
// export class EmailUniqueValidatorDirective implements AsyncValidator {
//   constructor(private _common: CommonService) {  }

//   validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
//      return isEmailUnique(this._common)(control);
//   }
// } 