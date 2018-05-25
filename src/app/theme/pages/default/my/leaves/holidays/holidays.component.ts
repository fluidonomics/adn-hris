import { Component, Input, Output, OnInit, ViewEncapsulation, TemplateRef, EventEmitter } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LeaveService } from '../leave.service';
import swal from 'sweetalert2';

const now = new Date();

@Component({
  selector: "app-my-leaves-holidays",
  templateUrl: "./holidays.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class HolidaysComponent implements OnInit {

  public holidayList: any = [];
  addholiday: any = {};
  editholiday: any = {};
  modalRef: BsModalRef;

  public year: any;

  key: string = '';


  @Output() action = new EventEmitter();

  constructor(
    private modalService: BsModalService,
    private leaveService: LeaveService
  ) {

  }

  ngOnInit(): void {
    this.year = now.getFullYear();
    this.getHolidays();
  }

  public getHolidays() {
    this.leaveService.getLeaveHolidays(this.year).subscribe(
      res => {
        if (res.ok) {
          let body = res.json();
          this.holidayList = body || [];
        }
      },
      error => {
        console.error(error);
      });
  }

  sort(key: string) {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openEditModal(template: TemplateRef<any>, holiday) {
    this.modalRef = this.modalService.show(template);
    this.editholiday = holiday;
  }

  public onAddHoliday(formdata) {
    if (formdata.valid) {
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      let date = new Date(formdata.form.value.date);
      let dayName = days[date.getDay()];

      const payload = {
        day: dayName,
        date: formdata.form.value.date,
        isGeneral: formdata.form.value.isGeneral,
        createdAt: new Date(),
        updatedAt: new Date(),
        occasion: formdata.form.value.occasion
      }

      this.leaveService.saveLeaveHoliday(payload).subscribe(
        res => {
          this.getHolidays();
          swal("Add Holiday", "", "success");
          this.modalRef.hide();
        },
        error => {
          console.log(error);
        });
    }
  }

  public onEditHoliday(formdata) {
    if (formdata.valid) {
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      let date = new Date(formdata.form.value.date);
      let dayName = days[date.getDay()];

      const payload = {
        _id: formdata.form.value._id,
        day: dayName,
        date: formdata.form.value.date,
        isGeneral: formdata.form.value.isGeneral,
        createdAt: new Date(),
        updatedAt: new Date(),
        occasion: formdata.form.value.occasion
      }

      this.leaveService.updateLeaveHoliday(payload).subscribe(
        res => {
          this.getHolidays();
          swal("Edit Holiday", "", "success");
          this.modalRef.hide();
        },
        error => {
          console.log(error);
        });
    }
  }

  public onDeleteHoliday(holiday: any) {

    if (holiday._id) {
      this.leaveService.removeLeaveHoliday(holiday).subscribe(
        res => {
          this.getHolidays();
          swal("Delete Holiday", "", "success");
        },
        error => {
          console.log(error);
        });
    }
  }

}
