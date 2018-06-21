import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";

const now = new Date();

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.admin-dashboard",
    templateUrl: "./dashboard.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AdminDashboardComponent {

    constructor(

    ) {
    }
    // constructor(private formBuilder: FormBuilder,
    //     private modalService: NgbModal) {
    // }

    ngOnInit() {

    }
}

