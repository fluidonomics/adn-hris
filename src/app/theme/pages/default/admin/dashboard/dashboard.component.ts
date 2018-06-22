import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AdminService } from '../admin.service';
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";

const now = new Date();

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.admin-dashboard",
    templateUrl: "./dashboard.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AdminDashboardComponent {

    public transactionYear: any = {};
    public yearList: any = [];


    constructor(
        private adminService: AdminService
    ) {
    }
    // constructor(private formBuilder: FormBuilder,
    //     private modalService: NgbModal) {
    // }

    ngOnInit() {
        this.adminService.getFinancialYear().subscribe(res => {
            if (res.ok) {
                this.yearList = res.json() || [];
                console.log(this.yearList);
            }
        })
    }

    onTranYearSubmit(form) {

    }
}

