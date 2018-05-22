import { Component, Input, Output, OnInit, ViewEncapsulation, TemplateRef, EventEmitter } from '@angular/core';
import { FormBuilder } from "@angular/forms";

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MyService } from '../../my.service';

const now = new Date();

@Component({
  selector: "app-my-leaves-holidays",
  templateUrl: "./holidays.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class HolidaysComponent implements OnInit {

  addholiday: any = {};
  editholiday: any = {};
  modalRef: BsModalRef;

  key: string = '';


  @Output() action = new EventEmitter();

  constructor(
    private modalService: BsModalService,
    private myService: MyService
  ) {

  }

  ngOnInit(): void {

  }

  sort(key: string) {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    /*this.modalRef.content.action.subscribe((value) => {
        console.log(value) // here you will get the value
    });*/
    //this.modalRef.onHide()
  }

  openEditModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    /*this.modalRef.content.action.subscribe((value) => {
        console.log(value) // here you will get the value
    });*/
    //this.modalRef.onHide()
  }

  public onAddHoliday(form) {
    debugger;

    if (form.valid) {
      // let leaveHoliday = {
      //   "day": "Tuesday",
      //   "date": ISODate("2018-05-05T07:00:00.000+0000"),
      //   "isRestricted": false,
      //   "isGeneral": true,
      //   "occasion": "diwali",
      //   "createdAt": new Date(),
      //   "updatedAt": new Date(),
      // }
      
    }

    this.modalRef.hide();
    //this.action.emit(true); // here you can send object  instead of true
  }

  public onEditHoliday(form) {
    console.log("Edit Holiday form submitted");
    this.modalRef.hide();
    //this.action.emit(true); // here you can send object  instead of true
  }

}
