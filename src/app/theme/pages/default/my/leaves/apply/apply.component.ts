import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./apply.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ApplyComponent {
    leaveapplication: any = {};

    leavetype = ['Annual leave', 'Slick leave', 'Maternity leave'];
    applyto = ['leave supervisor'];
    fromsessiondropdown = [];
    tosessiondropdown = [];
    currentDate = new Date();

    constructor() {
    }

    onLeaveAppSubmit(data) {
        console.log(data);
        console.log(this.leaveapplication);
    }
    clearFormData() {
    }

}