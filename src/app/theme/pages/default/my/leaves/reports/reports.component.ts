import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";

const now = new Date();

@Component({
    selector: "app-my-leaves-reports",
    templateUrl: "./reports.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ReportsComponent implements OnInit {

    leaveDate: any = [];
    yearList: any = [
        {
            year: 2017,
        },
        {
            year: 2018,
        }
    ];
    currentYear: number = 2018;


    key: string = '';
    reverse: boolean = false;
    search: string = '';


    constructor() {

    }

    ngOnInit(): void {
    }

    sort(key: string) {
        this.key = key;
        this.reverse = !this.reverse;
    }
}
