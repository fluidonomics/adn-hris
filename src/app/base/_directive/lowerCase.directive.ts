import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';
@Directive({
    selector: '[lowerCase]'
})
export class LowerCaseDirective {

    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ) { }

    @HostListener('keyup') onKeyUp() {
        this.el.nativeElement.value = this.el.nativeElement.value.toLowerCase();
    }
}