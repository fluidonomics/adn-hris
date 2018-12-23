import { FormBuilder, NgForm } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { MtrService } from "../../../services/mtr.service"
import { CommonService } from "../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { forEach } from "@angular/router/src/utils/collection";
import { NgSelectComponent } from '@ng-select/ng-select';
import * as _ from 'lodash';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.my-workflows-mtr",
    templateUrl: "./mtr.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [MtrService]
})
export class MyMtrComponent {

    @ViewChild('mtrDetailModal') kraDetailModal: TemplateRef<any>;

    supervisorData: any = [];
    weightageData: any = [];

    param_id: number;
    _currentEmpId: number;

    isMtrAvaliable: boolean = false;
    isPreviousKRA: boolean = false;

    mtrWorkFlowData: any = [];

    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    itemPerPage: number = 10;

    mtrCategoryData: any[];

    isDisabled: boolean = false;
    isChangable: boolean = false;
    employee: any = {};

    mtrInfoData: any = [];

    modalRef: BsModalRef;
    mtrData: any = {};
    currentEmployee: any = {};

    progressStatuses = [
        {
            id: "InProgress",
            label: "In progress"
        },
        {
            id: "Completed",
            label: "Completed"
        },
        {
            id: "Dropped",
            label: "Dropped"
        }
    ];

    // Red(Not able to do complete KRA  ), Amber(Need help to complete KRA) and Green(going good)
    colorStatuses = [
        {
            id: "Green",
            label: "Green(going good)"
        },
        {
            id: "Amber",
            label: "Amber(Need help to complete KRA)"
        },
        {
            id: "Red",
            label: "Red(Not able to do complete KRA)"
        }
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _mtrService: MtrService,
        private modalService: BsModalService
    ) {
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);

    }

    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this._route.queryParams.subscribe(params => {
                    if (params['id']) {
                        this.param_id = params['id'];
                        this.loadData();
                    }
                    else {
                        this.param_id = null;
                        this.loadMTRWorkFlowDetails();
                    }
                });
            });
    }
    addKraHtml() {
        if (this.mtrInfoData.length < 7) {
            let data = { _id: null, kra: "", category_id: "", weightage_id: "", unitOfSuccess: "", measureOfSuccess: "", supervisor_id: "", sendBackComment: "", kraWorkflow_id: this.param_id };
            this.mtrInfoData.push(data);
        }
        else {
            swal({
                title: 'Oops!',
                text: "You can't add more than 7 KRAs",
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
        }
    }
    loadData() {
        debugger;
        this.loadMTRCategoryData();
        this.loadWeightAgeData();
        this.loadSupervisorData();
        this.loadMTRInfo();
        this.loadEmployeeDetails();
    }
    loadMTRCategoryData() {
        this._commonService.getKraCategory().subscribe(data => {
            this.mtrCategoryData = data.json();
        }, error => {
        });
    }
    loadWeightAgeData() {
        this._commonService.getKraWeightage()
            .subscribe(
                data => {
                    this.weightageData = data.json();
                },
                error => {
                });
    }
    loadSupervisorData() {
        this._commonService.getKraSupervisor(this._currentEmpId).subscribe(data => {
            this.supervisorData = data.json();
        }, error => {
        });
    }
    loadMTRInfo() {
        this._mtrService.getEmployeeMtrWorkFlowInfo(this._currentEmpId).subscribe(res => {
            let data = res.json();
            this.mtrInfoData = data.result.message;
            this.isChangable = this.mtrInfoData.filter(mtr => mtr.status != "Submitted" && mtr.status != "Approved").length > 0;
        }, error => {
        });;
    }
    loadEmployeeDetails() {
        this._commonService.getEmployee(this._currentEmpId).subscribe(res => {
            this.currentEmployee = res.json() || {};
        });
    }

    showMTRDetails(index: number) {
        this.modalRef = this.modalService.show(this.kraDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.mtrData = JSON.parse(JSON.stringify(this.mtrInfoData[index]));
        this.mtrData.no = index + 1;
        if (this.mtrData.kra_details && this.mtrData.kra_details._id) {
            this.isPreviousKRA = true;
        }
        else {
            this.isPreviousKRA = false;
        }
        if (this.mtrData.progressStatus == "Dropped") {
            this.isDisabled = true;
        } else {
            if (this.mtrData.status) {
                this.isDisabled = this.mtrData.status == "SendBack" || this.mtrData.status == "Pending" ? false : true;
            }
        }


        //this.mtrData.weightage = this.weightageData.find(f => f._id == this.mtrData.weightage_id);
        //this.mtrData.category = this.kraCategoryData.find(f => f._id == this.kraData.category_id);
    }

    loadMTRWorkFlowDetails() {
        this._mtrService.getEmployeeMtrWorkFlowInfo(this._currentEmpId).subscribe(res => {
            let data = res.json();
            this.mtrWorkFlowData = data.result.message;
            this.mtrWorkFlowData = _.chain(this.mtrWorkFlowData).groupBy('mtr_batch._id').map(function (v, i) {
                return v[0];
            }).value();
        }, error => {
        });;
    }

    saveKRADetails(form, id: number) {
        if (form.valid) {
            this.mtrInfoData[this.mtrData.no - 1] = JSON.parse(JSON.stringify(this.mtrData));
            this.saveMtrDetails(this.mtrData.no - 1);
        }
    }

    saveMtrDetails(index: number) {
        let request = {
            _id: this.mtrInfoData[index]._id,
            mtr_master_id: this.param_id,
            mtr_kra: this.mtrInfoData[index].mtr_kra,
            supervisor_id: this.mtrInfoData[index].mtr_master_supervisor_id,
            mtr_batch_id: this.mtrInfoData[0].mtr_batch_id,
            weightage_id: this.mtrInfoData[index].weightage_id,
            category_id: this.mtrInfoData[index].category_id,
            unitOfSuccess: this.mtrInfoData[index].unitOfSuccess,
            measureOfSuccess: this.mtrInfoData[index].measureOfSuccess,
            isDeleted: false,
            createdBy: this._currentEmpId,
            empId: this._currentEmpId,
            employeeComment: this.mtrInfoData[index].employeeComment,
            progressStatus: this.mtrInfoData[index].progressStatus,
            colorStatus: this.mtrInfoData[index].colorStatus
        }

        this.showDroppedKraConfirmation(request).then(res => {
            if (res) {
                this.modalRef.hide();
                this._mtrService.saveKra(request).subscribe(res => {
                    if (res.ok) {
                        //this.mtrInfoData[index] = res.json();
                        let data = res.json();
                        this.mtrInfoData[index] = data.result.message
                        swal({
                            title: 'Success',
                            text: "MTR has been Saved.",
                            type: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#66BB6A',
                            confirmButtonText: 'OK'
                        });
                    }
                    this.loadMTRInfo();
                }, error => {
                    this.modalRef.hide();
                });
            }
        });
    }

    showDroppedKraConfirmation(request) {
        let promise = new Promise((res, reject) => {
            if (request.progressStatus == "Dropped") {
                swal({
                    title: 'Are you sure?',
                    text: "You want to drop this KRA",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    res(result.value);
                });
            } else {
                res(true);
            }
        });
        return promise;
    }


    deleteKraHtml(index: number) {
        swal({
            title: 'Are you sure?',
            text: "Do you want to delete the KRA ?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                if (this.mtrInfoData[index]._id) {
                    let request = {
                        id: this.mtrInfoData[index]._id,
                        updatedBy: this._currentEmpId
                    }
                    this.deleteKra(request, index);
                }
                else {
                    this.mtrInfoData.splice(index, 1);
                    if (this.mtrInfoData.length == 0) {
                        this.addKraHtml();
                    }
                }
            }
        });
    }

    deleteKra(data: any, index: number) {
        this._mtrService.deleteKra(data)
            .subscribe(
                res => {
                    if (res.ok) {
                        this.mtrInfoData = this.mtrInfoData.filter(x => x._id != data._id);
                        //delete this.kraInfoData[index];
                        if (this.mtrInfoData.length == 0) {
                            this.addKraHtml();
                        }
                        swal({
                            title: 'Deleted',
                            text: "KRA has been deleted successfully.",
                            type: 'warning',
                            showCancelButton: false,
                            confirmButtonColor: '#D33',
                            confirmButtonText: 'OK'
                        });
                        this.loadMTRInfo();
                    }
                },
                error => {
                });
    }

    isWeightage() {
        let weightage = 0;
        this.mtrInfoData.forEach(mtr => {
            if (mtr.progressStatus != "Dropped") {
                let w = parseInt(this.weightageData.find(c => c._id == mtr.weightage_id).kraWeightageName.replace('%', ''));
                if (!isNaN(w)) {
                    weightage += w;
                }
            }
        });

        if (weightage != 100) {
            swal({
                title: 'Oops!',
                text: 'Sum of weightages should be 100%',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
            return false;
        }
        else {
            return true;
        }
    }
    isCategoryUnique() {
        let categoryUnique = Array.from(new Set(this.mtrInfoData.map((item: any) => item.category_id))).length == this.mtrInfoData.length ? true : false;
        if (!categoryUnique) {
            swal({
                title: 'Do you want to Submit?',
                text: "Make sure you have covered all categories.",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#9a9caf',
                confirmButtonText: 'Proceed Anyway',
            }).then((result) => {
                if (result.value) {
                    this.saveKraWorkFlow();
                }
            });
        }
        else {
            this.saveKraWorkFlow();
        }
    }
    isSendBackOrNewKraSaved(isFormDirty) {
        let isSendBackNotSaved = this.mtrInfoData.filter(x => x.supervisorStatus != 'SendBack').length == this.mtrInfoData.length ? true : false;
        let isAllKraSaved = this.mtrInfoData.filter(x => x._id == null || x._id == undefined).length == 0 ? true : false;
        if (!isSendBackNotSaved || !isAllKraSaved || isFormDirty) {
            swal({
                title: 'Oops!',
                text: 'Please save unsaved KRAs before submitting',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
            return false;
        }
        else {
            return true;
        }
    }
    submitKraWorkFlow(isFormDirty) {
        //let requiredWorkFlowLength= 
        //let total = this.kraInfoData.reduce((prev,next) => prev + parseInt(this.weightageData.filter(c=>c._id==next.weightage_id)[0].kraWeightageName.replace('%','')) ,0);
        //let unique=Array.from(new Set(this.kraInfoData.map((item: any) => item.category_id)));
        //let unique=this.kraInfoData.map(item => item.category_id).filter((value, index, self) => self.indexOf(value) === index);       
        if (this.isSendBackOrNewKraSaved(isFormDirty)) {
            if (this.isWeightage()) {
                if (this.isEmployeeCommentsFilled()) {
                    let kraLength = this.employee.grade_id <= 2 ? 5 : 3;
                    swal({
                        title: 'Do you want to Submit?',
                        text: "For your grade ateast " + kraLength + " KRAs are required",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#d33',
                        cancelButtonColor: '#9a9caf',
                        confirmButtonText: 'Proceed Anyway',
                    }).then((result) => {
                        if (result.value) {
                            this.isCategoryUnique();
                        }
                    });
                }
            }
        }
    }
    isRequiredWorkFlowLength() {
        return this.employee.grade_id <= 2 && this.mtrInfoData.length >= 5 ? true : (this.employee.grade_id > 2 && this.mtrInfoData.length >= 3 ? true : false)
    }
    isEmployeeCommentsFilled() {
        let mtrs = this.mtrInfoData.filter((mtr) => { return mtr.employeeComment == null || mtr.employeeComment == undefined || mtr.employeeComment == '' });
        if (mtrs.length > 0) {
            swal({
                title: 'Oops!',
                text: 'Please fill Employee Remarks before submitting',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
            return false;
        }
        return true;
    }

    saveKraWorkFlow() {
        swal({
            title: 'Are you sure?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                let data = {
                    id: this.param_id,
                    empId: this._currentEmpId,
                    supervisor_id: this.currentEmployee.supervisorDetails._id,
                    emp_name: this.currentEmployee.fullName,
                    supervisor_name: this.currentEmployee.supervisorDetails.fullName,
                    action_link: window.location.origin + '/my/team/workflows/supervisor'
                }
                this._mtrService.saveKraWorkFlow(data).subscribe(res => {
                    if (res.ok) {
                        swal({
                            title: 'Submitted Successfully!',
                            text: "KRA has been submitted for Supervisor Approval.",
                            type: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#66BB6A',
                            confirmButtonText: 'OK'
                        });
                        this.loadMTRInfo();
                    }
                }, error => {
                });
            }
        });
    }
}