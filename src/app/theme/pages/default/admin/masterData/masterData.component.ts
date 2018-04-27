import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";

const now = new Date();

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./masterData.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class MasterDataComponent {

    constructor(private formBuilder: FormBuilder,
    ) {
    }
    // constructor(private formBuilder: FormBuilder,
    //     private modalService: NgbModal) {
    // }

    ngOnInit() {

    }
}

