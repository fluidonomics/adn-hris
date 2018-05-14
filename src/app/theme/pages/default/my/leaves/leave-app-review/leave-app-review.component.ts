import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./leave-app-review.component.html",
    encapsulation: ViewEncapsulation.None,
   
})

export class LeaveAppReivewComponent {
    leaveData: any = [];
    p2: number = 1;
    applytoitems = ['leave supervisor'];
    leavecancel: any = {};
 constructor() {
    }
    onLeavecancelSubmit(data)
 {
    console.log(data);
    console.log(this.leavecancel);
 }

}