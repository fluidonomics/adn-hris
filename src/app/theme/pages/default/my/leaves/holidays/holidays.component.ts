import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";

const now = new Date();

@Component({
    selector: "app-my-leaves-holidays",
    templateUrl: "./holidays.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HolidaysComponent implements OnInit {


    key: string = '';

    constructor() {

    }

    ngOnInit(): void {

    }

    sort(key: string) {

    }
}


