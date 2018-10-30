import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from "../../../../../base/_services/common.service";
import { HrService } from "../hr.service";
import { UtilityService } from '../../../../../base/_services/utilityService.service';

declare var $
declare var mApp;
import swal from 'sweetalert2';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--addemployee",
    templateUrl: "./transferResponsibility.component.html",
    styleUrls: ["./transferResponsibility.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class TransferResponsibilityComponent implements OnInit {
    supervisorTransferTypeData: any = [{
        name: "Supervisor Transfer",
        id: "tranfser"
    }, {
        name: "Supervisor Correction",
        id: "correction"
    }];
    employeesData: any = [];
    secondarySuperviserDetails: any = {};
    supervisorData: any = [];
    selectedEmployee: any = {};
    request: any = {};
    companiesData: any = [];
    _currentEmpId: number;

    constructor(
        private _commonService: CommonService,
        private _hrService: HrService,
        public utilityService: UtilityService,
    ) {

    }

    ngOnInit() {
        this.initDropdown();
    }

    //Filled Init Dropdown 
    initDropdown() {
        this.loadAllEmployee();
    }
    loadAllEmployee() {
        this._hrService.getAllEmployee()
            .subscribe(
                res => {
                    let data = res.json().data || [];
                    if (data.length > 0) {
                        this.employeesData = data || [];
                    }
                    else {
                        this.employeesData = data.json().data || [];
                    }
                },
                error => {
                });
    }
    employeeSelected(selectedEmpId) {
        this.selectedEmployee = this.employeesData.filter(obj => obj._id == selectedEmpId)[0];
        this._commonService.getSupervisor(this.selectedEmployee.grade_id).subscribe(res => {
            this.supervisorData = res.json() || [];
        })
        this.getEmployeeDetails(selectedEmpId);
    }
    getEmployeeDetails(selectedEmpId) {
        this._hrService.getEmployeeDetails(selectedEmpId)
            .subscribe(
                res => {
                    if (res.ok) {
                        let details = res.json().data[0] || {};
                        if (details.supervisorDetails.secondarySupervisorDetails) {
                            this.secondarySuperviserDetails = details.supervisorDetails.secondarySupervisorDetails
                        } else {
                            this.secondarySuperviserDetails.fullName = "";
                        }

                    }
                },
                error => {
                    console.log(error);
                });
    }






    //Submit Add Employee Form
    onTransferSubmit(form) {
        if (form.valid) {
            console.log(this.request);
            this._hrService.updateSupervisortransferInfo(this.request).subscribe(data => {
                if (data.ok) {
                    swal({
                        title: 'Responsibility transferred',
                        text: "",
                        type: 'success',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        showConfirmButton: false,
                        timer: 1000
                    }).then((result) => {
                        form.resetForm();
                    });
                }
            });
        }
    }

    checkUserNameExists(_element) {
        if (_element.valid) {
            this._commonService.checkUserNameExists(_element.value)
                .subscribe(
                    data => {
                        if (data.json())
                            _element.control.setErrors({ "userNameExists": true })
                    },
                    error => {
                        _element.control.setErrors(null)
                    });

        }
    }

    //Clear All Form Data 
    clearFormData() {
        this.request = {};
    }
}

