import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";

const now = new Date();

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./employee-leaves.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class EmployeeLeavesComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {

    }
}


