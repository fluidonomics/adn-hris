import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[OnlyPercentage]'
})
export class OnlyPercentageDirective {

    constructor(private el: ElementRef) { }

    @Input() OnlyPercentage: boolean;

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        let e = <KeyboardEvent>event;
        if (this.OnlyPercentage) {
            if(this.el.nativeElement.value.length==2 && e.keyCode===46)
            {
              return;
            }
            else{
                var value = this.el.nativeElement.value + "" + e.key;
                var regEx = new RegExp('^([0-9]{1,2}){1}(\.[0-9]{1,2})?$');
                if (!regEx.test(value)) {
                    event.preventDefault();
                }
             }
        }
    }
}