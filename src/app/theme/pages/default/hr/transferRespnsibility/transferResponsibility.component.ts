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
    secondarySupervisorData:any=[];
    selectedEmployee: any = {};
    request: any = {};
    companiesData: any = [];
    _currentEmpId: number;
    primarySupervisor:any;
    seconderySupervisor:any;

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
        debugger;
        this._commonService.getSupervisor(this.selectedEmployee.grade_id).subscribe(res => {
            this.supervisorData = res.json() || [];
           this.secondarySupervisorData=res.json()|| [];
        })
        this.getEmployeeDetails(selectedEmpId);
    }
    primarySupervisorSelected(selectedPrimarySupervisorId){
        this.secondarySupervisorData = this.secondarySupervisorData.filter(obj => obj._id != selectedPrimarySupervisorId);
    }
    getEmployeeDetails(selectedEmpId) {
        this._hrService.getEmployeeDetails(selectedEmpId)
            .subscribe(
                res => {
                    if (res.ok) {                       
                        let details = res.json().data[0] || {};

                        if (details.supervisorDetails.secondarySupervisorDetails) {
                            this.seconderySupervisor = details.supervisorDetails.secondarySupervisorDetails.fullName +" ["+details.supervisorDetails.secondarySupervisorDetails.userName+"]";
                        } else {
                            this.seconderySupervisor = "";
                        }
                        if (details.supervisorDetails.primarySupervisorDetails) {
                            this.primarySupervisor = details.supervisorDetails.primarySupervisorDetails.fullName +" ["+details.supervisorDetails.primarySupervisorDetails.userName+"]";
                        } else {
                            this.primarySupervisor = "";
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
                    let status = data.json() || false;
                    if (status) {
                        swal({
                            title: 'Supervisor Revision Successful',
                            text: "",
                            type: 'success',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            showConfirmButton: false,
                            timer: 1000
                        }).then((result) => {
                            form.resetForm();
                        });
                    } else {
                        swal({
                            title: '',
                            text: "Supervisor Revision Failed",
                            type: 'warning',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            showConfirmButton: false,
                            timer: 1000
                        }).then((result) => {
                            form.resetForm();
                        });
                    }
                }
            });
        }
    }

    checkEmailExists(_element) {
        if (_element.valid) {
            this._commonService.checkEmailExists(_element.value)
                .subscribe(
                    data => {
                        if (data.json())
                            _element.control.setErrors({ "emailExists": true })
                    },
                    error => {
                        _element.control.setErrors(null)
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

