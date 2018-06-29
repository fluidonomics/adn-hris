import { Component, Input, Output, OnInit, ViewEncapsulation, TemplateRef, EventEmitter } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LeaveService } from '../leave.service';
import swal from 'sweetalert2';
import { UtilityService } from '../../../../../../base/_services/utilityService.service';

const now = new Date();

@Component({
    selector: "app-my-leaves-holidays",
    templateUrl: "./holidays.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HolidaysComponent implements OnInit {

    holidayList: any = [];
    addholiday: any = {};
    editholiday: any = {};
    modalRef: BsModalRef;
    year: any;
    isGeneralHolidayCount: number = 0;
    years: any = [];
    currentDate: Date = new Date();

    key: string = '';
    p2: number;
    itemPerPage: number = 10;

    @Output() action = new EventEmitter();

    constructor(
        private modalService: BsModalService,
        private leaveService: LeaveService,
        private utilityService: UtilityService
    ) {

    }

    ngOnInit(): void {
        this.year = now.getFullYear();
        this.getHolidays();
        this.loadYears();
    }

    loadYears()
    {
        for (let index = 2015; index <= this.currentDate.getFullYear(); index++) {
            this.years.push(index)
        }
    }

    public getHolidays() {
        this.utilityService.showLoader('#holidayLoader');
        this.leaveService.getLeaveHolidays(this.year).subscribe(
            res => {
                if (res.ok) {
                    let body = res.json();
                    this.holidayList = body || [];
                    this.isGeneralHolidayCount = this.holidayList.filter(hol => hol.isGeneral == true).length || 0;
                }
            },
            error => {
                console.error(error);
            }, () => {
                this.utilityService.hideLoader('#holidayLoader');
            });
    }

    // setYear(year) {
    //     this.year = year;
    //     this.getHolidays();
    // }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    openEditModal(template: TemplateRef<any>, holiday) {
        this.modalRef = this.modalService.show(template);
        this.editholiday = Object.assign({}, holiday);
        if (this.editholiday && this.editholiday.date) {
            this.editholiday.date = new Date(this.editholiday.date);
        }
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
                //createdAt: new Date(),
                //updatedAt: new Date(),
                occasion: formdata.form.value.occasion
            }

            swal({
                title: 'Are you sure?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value) {
                    this.leaveService.saveLeaveHoliday(payload).subscribe(
                        res => {
                            this.getHolidays();
                            swal("Add Holiday", "", "success");
                            this.modalRef.hide();
                        },
                        error => {
                            //console.log(error);
                        });
                }
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
            swal({
                title: 'Are you sure?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value) {
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
            });
        }
    }

    public onDeleteHoliday(holiday: any) {

        if (holiday._id) {
            swal({
                title: 'Are you sure?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value) {
                    this.leaveService.removeLeaveHoliday(holiday).subscribe(
                        res => {
                            this.getHolidays();
                            swal("Delete Holiday", "", "success");
                        },
                        error => {
                            console.log(error);
                        });
                }
            });
        }
    }

}
