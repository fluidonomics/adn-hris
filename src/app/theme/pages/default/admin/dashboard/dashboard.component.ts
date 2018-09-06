import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AdminService } from '../admin.service';
import { UtilityService } from '../../../../../base/_services/utilityService.service';
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import swal from 'sweetalert2';

const now = new Date();

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.admin-dashboard",
    templateUrl: "./dashboard.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AdminDashboardComponent {

    public transactionYear: any = {};
    public yearList: any = [];
    public currentActiveYear: any;

    constructor(
        private adminService: AdminService,
        private utilityService: UtilityService
    ) {
    }
    // constructor(private formBuilder: FormBuilder,
    //     private modalService: NgbModal) {
    // }

    ngOnInit() {
        this.adminService.getFinancialYear().subscribe(res => {
            if (res.ok) {
                let list = res.json() || [];
                if (list && list.length > 0) {
                    this.yearList = list.filter(year => {
                        if (year.isYearActive) {
                            this.currentActiveYear = year;
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
                console.log(this.yearList);
            }
        })
    }

    onTranYearSubmit(form) {
        if (form.valid) {
            let newYear = this.yearList.find(year => {
                return year._id == form.value.tranYears
            });
            let data = {
                NewFinancialYearId: form.value.tranYears,
                PreviousFinancialYearId: this.currentActiveYear._id
            };

            swal({
                title: 'Are you sure?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.value == true) {
                    this.utilityService.showLoader('#tranForm');
                    this.adminService.postLeaveTransactionYear(data).subscribe(s => {
                        swal("Transaction Completed", "", "success");
                    }, error => {
                        console.log(error);
                    }, () => {
                        this.utilityService.hideLoader('#tranForm');
                    });
                }
            });
        }
    }
}

