import { FormBuilder, NgForm } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { LearningService } from "../../services/learning.service"
import { CommonService } from "../../../../../base/_services/common.service";
import { AuthService } from "../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { forEach } from "@angular/router/src/utils/collection";
import { NgSelectComponent } from '@ng-select/ng-select';
import * as _ from 'lodash';
import { UtilityService } from "../../../../../base/_services/utilityService.service";

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./learning.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [LearningService]
})
export class MyLearningComponent {

    @ViewChild('mylearningDetailModal') mylearningDetailModal: TemplateRef<any>;

    param_id: number;
    _currentEmpId: number;

    isLearningAvaliable: boolean = false;

    LearningAgendaData: any = [];
    learningData: any = {};
    learningInfoData: any = [];
    learningDetails: any = [];

    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    itemPerPage: number = 10;

    DevAreaData = [ 
        'Individual Development',
        'Functional Development'
    ];

    supervisorData: any = [];

    isDisabled: boolean = false;
    isChangable: boolean = false;
    isSendBack: boolean = false;
    employee: any = {};

    

    modalRef: BsModalRef;
    currentEmployee: any = {};
    progressStatuses = [];
    colorStatuses = [];

    showStat = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _learningService: LearningService,
        private modalService: BsModalService,
        private utilityService: UtilityService) {
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);
        this.progressStatuses = this._learningService.progressStatuses;
        this.colorStatuses = this._learningService.colorStatuses;

    }

    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this._route.queryParams.subscribe(params => {
                    if (params['id']) {
                        //debugger;
                        this.param_id = params['id'];
                        this.loadData();
                    }
                    else {
                        //debugger;
                        this.param_id = null;
                        this.loadLearningDetailsInfo();
                    }
                });
            });
    }


    saveLearningAgendas(form,id: number) {
        //console.log(this.learningData.supportRequired);

        if (form.valid) {
            this.learningInfoData[this.learningData.no - 1] = JSON.parse(JSON.stringify(this.learningData));
            this.saveLearningDetails(this.learningData.no - 1);
        }
    }
    saveLearningDetails(index: number) {
        let request = {

            _id: this.learningInfoData[index]._id,
            master_id: this.param_id,
            supervisor_id: this.learningInfoData[index].supervisor_id,
            status: this.learningInfoData[index].status,
            measureOfSuccess: this.learningInfoData[index].measureOfSuccess,
            isDeleted: false,
            createdBy: this._currentEmpId,
            updatedBy: this.learningInfoData[index].updatedBy,
            progressStatus: this.learningInfoData[index].progressStatus,
            developmentArea: this.learningInfoData[index].developmentArea,
            developmentPlan: this.learningInfoData[index].developmentPlan,
            timelines: this.learningInfoData[index].timelines,
            supportRequired: this.learningInfoData[index].supportRequired,

        }
        let isError: boolean = false;

        if (isError) {
            swal({
                title: 'Oops!',
                text: ' Dropped colour status need status as Dropped only',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
        }
        else {
            this._learningService.saveLearning(request).subscribe(res => {
                this.utilityService.hideLoader('.m-content');
                if (res.ok) {
                    //this.mtrInfoData[index] = res.json();
                    let data = res.json();
                    this.learningInfoData[index] = data.result.message
                    swal({
                        title: 'Success',
                        text: "Learning Process has been saved",
                        type: 'success',
                        showCancelButton: false,
                        confirmButtonColor: '#66BB6A',
                        confirmButtonText: 'OK'
                    });
                }
                this.loadLearningAgendaInfo();
            }, error => {
                this.utilityService.hideLoader('.m-content');
                this.modalRef.hide();
            });
        }

    }



    loadData() {
        this.loadLearningAgendaInfo();
        this.loadSupervisorData();
        this.loadLearningDetailsInfo();
        //this.loadLearningDetails();
    }

    loadLearningAgendaInfo() {
        this._learningService.getEmployeeLearningInfo(this._currentEmpId).subscribe(res => {
            let data = res.json();
            this.LearningAgendaData = data.result.message;
            // this.isChangable = this.learningInfoData.filter(mtr => mtr.status != "Submitted" && mtr.status != "Approved" && mtr.status != "Dropped").length > 0;
        }, error => {
        });;
    }

    loadLearningDetailsInfo() {
        debugger;
        this._learningService.getEmployeeLearningDetails(this.param_id).subscribe(res => {
            let data = res.json();

            this.learningInfoData = data.result.message;

            // this.isChangable = this.learningInfoData.filter(mtr => mtr.status != "Submitted" && mtr.status != "Approved" && mtr.status != "Dropped").length > 0;
        }, error => {
        });;
    }

    loadSupervisorData() {
        this._commonService.getKraSupervisor(this._currentEmpId).subscribe(data => {
            this.supervisorData = data.json();
        }, error => {
        });
    }

    // loadLearningDetails() {
    //     this.utilityService.showLoader('.m-datatable');
    //     this._learningService.getEmployeeLearningInfo(this._currentEmpId).subscribe(res => {
    //         this.utilityService.hideLoader('.m-datatable');
    //         let data = res.json();
    //         this.LearningAgendaData = data.result.message;
    //     }, error => {
    //         this.utilityService.hideLoader('.m-datatable');
    //     });
    // }

    addLearningHtml() {
        let learnA = this.learningInfoData.filter(learn => learn.status != 'Initiated');
        if (learnA && learnA.length < 3) {
            let data = {
                //  _id: null, kra: "", category_id: "", weightage_id: "", unitOfSuccess: "", measureOfSuccess: "", supervisor_id: "", sendBackComment: "", kraWorkflow_id: this.param_id 

                _id: null,
                master_id: this.param_id,
                supervisor_id: "",
                status: "initiated",
                measureOfSuccess: "",
                isDeleted: false,
                createdBy: "",
                updatedBy: this._currentEmpId,
                progressStatus: "Open",
                developmentArea: "",
                developmentPlan: "",
                timelines: "",
                supportRequired: "",

            };

            this.learningInfoData.push(data);
        }
        else {
            swal({
                title: 'Oops!',
                text: "You can't add more than 3 Learning Agendas",
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
        }
    }
















    onStatusChange(event) {
        if (event.id == "Dropped") {
            this.learningData.colorStatus = "Dropped"
        } else {
            this.learningData.colorStatus = null;
        }
    }
    onColorStatusChange(event) {
        if (event.id == "Dropped") {
            swal({
                title: 'Are you sure?',
                text: "Selecting Dropped will automatically select the progress status as Dropped. Do you wish to continue",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                width: "45rem"
            }).then((result) => {
                if (result.value) {
                    this.learningData.progressStatus = "Dropped"
                } else {
                    this.learningData.colorStatus = null;
                }
            });
        }
    }







    // loadEmployeeDetails() {
    //     this._commonService.getEmployee(this._currentEmpId).subscribe(res => {
    //         this.currentEmployee = res.json() || {};
    //     });
    // }







    //-------------------FOR VALIDATIONS---------------------------------------------------------





    showLearningDetails(index: number) {
        this.modalRef = this.modalService.show(this.mylearningDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.learningData = JSON.parse(JSON.stringify(this.learningInfoData[index]));
        this.learningData.no = index + 1;




        // if (this.learningData.progressStatus == "Dropped") {
        //     this.isDisabled = true;
        // } else {
        //     if (this.learningData.status) {
        //         this.isDisabled = this.learningData.status == "SendBack" || this.learningData.status == "Pending" || this.learningData.status == "New" ? false : true;
        //     }
        //     else {
        //         this.isDisabled = false;
        //     }
        // }

        // if (this.learningData.mtr_master_status == "SendBack" && this.learningData.status != "Dropped") {
        //     this.isSendBack = true;
        // }
        // else {
        //     this.isSendBack = false;
        // }


    }







    // showDroppedKraConfirmation(request) {
    //     let promise = new Promise((res, reject) => {
    //         if (request.progressStatus == "Dropped") {
    //             swal({
    //                 title: 'Are you sure?',
    //                 text: "You want to drop this KRA",
    //                 type: 'warning',
    //                 showCancelButton: true,
    //                 confirmButtonColor: '#3085d6',
    //                 cancelButtonColor: '#d33',
    //                 confirmButtonText: 'Yes'
    //             }).then((result) => {
    //                 res(result.value);
    //             });
    //         } else {
    //             res(true);
    //         }
    //     });
    //     return promise;
    // }


    // deleteKraHtml(index: number) {
    //     swal({
    //         title: 'Are you sure?',
    //         text: "Do you want to delete the KRA ?",
    //         type: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#d33',
    //         cancelButtonColor: '#9a9caf',
    //         confirmButtonText: 'Yes'
    //     }).then((result) => {
    //         if (result.value) {
    //             if (this.mtrInfoData[index]._id) {
    //                 let request = {
    //                     id: this.mtrInfoData[index]._id,
    //                     updatedBy: this._currentEmpId
    //                 }
    //                 this.deleteKra(request, index);
    //             }
    //             else {
    //                 this.mtrInfoData.splice(index, 1);
    //                 if (this.mtrInfoData.length == 0) {
    //                     this.addKraHtml();
    //                 }
    //             }
    //         }
    //     });
    //}













    // --------------------------FOR POP UP MESSAGES-------------------------------------







    deleteKra(data: any, index: number) {
        // this._learningService.deleteKra(data)
        //     .subscribe(
        //     res => {
        //         if (res.ok) {
        //             this.mtrInfoData = this.mtrInfoData.filter(x => x._id != data._id);
        //             //delete this.kraInfoData[index];
        //             if (this.mtrInfoData.length == 0) {
        //                 this.addKraHtml();
        //             }
        //             swal({
        //                 title: 'Deleted',
        //                 text: "KRA has been deleted successfully.",
        //                 type: 'warning',
        //                 showCancelButton: false,
        //                 confirmButtonColor: '#D33',
        //                 confirmButtonText: 'OK'
        //             });
        //             this.loadMTRInfo();
        //         }
        //     },
        //     error => {
        //     });
    }



    isSendBackOrNewKraSaved(isFormDirty) {
        // let isSendBackNotSaved = this.mtrInfoData.filter(x => x.supervisorStatus != 'SendBack').length == this.mtrInfoData.length ? true : false;
        // let isAllKraSaved = this.mtrInfoData.filter(x => x._id == null || x._id == undefined).length == 0 ? true : false;
        // if (!isSendBackNotSaved || !isAllKraSaved || isFormDirty) {
        //     swal({
        //         title: 'Oops!',
        //         text: 'Please save unsaved KRAs before submitting',
        //         type: 'warning',
        //         showCancelButton: false,
        //         confirmButtonColor: '#66BB6A',
        //         confirmButtonText: 'OK'
        //     });
        //     return false;
        // }
        // else {
        //     return true;
        // }
    }


    submitKraWorkFlow(isFormDirty) {

        // if (this.isSendBackOrNewKraSaved(isFormDirty)) {
        //     if (this.isWeightage()) {
        //         if (this.isEmployeeCommentsFilled()) {
        //             let kraLength = this.employee.grade_id <= 2 ? 5 : 3;
        //             swal({
        //                 title: 'Do you want to Submit?',
        //                 text: "For your grade ateast " + kraLength + " KRAs are required",
        //                 type: 'warning',
        //                 showCancelButton: true,
        //                 confirmButtonColor: '#d33',
        //                 cancelButtonColor: '#9a9caf',
        //                 confirmButtonText: 'Proceed Anyway',
        //             }).then((result) => {
        //                 if (result.value) {
        //                     this.isCategoryUnique();
        //                 }
        //             });
        //         }
        //     }
        // }
    }


    isRequiredWorkFlowLength() {
        // return this.employee.grade_id <= 2 && this.mtrInfoData.length >= 5 ? true : (this.employee.grade_id > 2 && this.mtrInfoData.length >= 3 ? true : false)
    }


    // isEmployeeCommentsFilled() {
    //     let mtrs = this.mtrInfoData.filter((mtr) => { return mtr.employeeComment == null || mtr.employeeComment == undefined || mtr.employeeComment == '' });
    //     if (mtrs.length > 0) {
    //         swal({
    //             title: 'Oops!',
    //             text: 'Please fill Employee Remarks before submitting',
    //             type: 'warning',
    //             showCancelButton: false,
    //             confirmButtonColor: '#66BB6A',
    //             confirmButtonText: 'OK'
    //         });
    //         return false;
    //     }
    //     return true;
    // }

}

