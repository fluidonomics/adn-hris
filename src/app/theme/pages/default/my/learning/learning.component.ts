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
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.my-learning",
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
    progressStatusData = [
        'Open',
        'Completed'
    ];
    suparr = [];

    showSub:boolean = true;

    supervisorData: any = [];

    isDisabled: boolean = false;
    isCompleted: boolean = false;
    isVisible: boolean = true;
    showStats: boolean = false;
    isApproved: boolean = false;
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
                    //debugger;
                    if (params['id']) {
                        this.param_id = params['id'];
                        this.loadData();
                    }
                    else {
                        //debugger;
                        this.param_id = null;
                        this.loadLearningAgendaInfo();
                    }
                });
            });
    }


    saveLearningAgendas(form, id: number) {
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
            employeeComment: this.learningInfoData[index].employeeComment

        }
        //debugger;
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
        this.loadEmployeeDetails();
    }

    loadLearningAgendaInfo() {
        this._learningService.getEmployeeLearningInfo(this._currentEmpId).subscribe(res => {
            let data = res.json();
            this.LearningAgendaData = data.result.message;
            console.log("agenda info: " + this.learningInfoData);
            
        }, error => {
        });;

        
    }

    loadLearningDetailsInfo() {
        this._learningService.getEmployeeLearningDetails(this.param_id).subscribe(res => {
            let data = res.json();
            //debugger;
            this.learningInfoData = data.result.message;
            console.log("details info: " + this.learningInfoData);
            
            if(this.learningInfoData.length > 0){
                this.showSub = this.learningInfoData.filter(learn => learn.status != "Submitted" && learn.status != "Approved" ).length > 0;
            } 
            else {
                this.learningInfoData = [
                    {
            
                        _id: null,
                        master_id: this.param_id,
                        supervisorId: "",
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
                        employeeComment: "",
                        supervisorComment: ""
            
                    }
                ];
            }
           
            // this.isChangable = this.learningInfoData.filter(mtr => mtr.status != "Submitted" && mtr.status != "Approved" && mtr.status != "Dropped").length > 0;
        }, error => {
        });;

        // for(let i=0;i<this.LearningAgendaData.length;i++) {
        //     if(this.LearningAgendaData[i]._id == this.param_id) {
        //         if(this.LearningAgendaData[i].status == "Approved" || this.LearningAgendaData[i].status == "Submitted") {
        //             this.showSub = false;
        //             break;
        //             debugger;
        //         } 
        //         else {
        //             this.showSub = true;
        //             break;
        //             debugger;
        //         }
        //     }
        // }
    }

    loadSupervisorData() {
        this._commonService.getKraSupervisor(this._currentEmpId).subscribe(data => {
        
            this.supervisorData = data.json();

            // for(let i=0;i<this.supervisorData.length;i++) {
            //     this.suparr.push(this.supervisorData[i].fullName);

            // }
            
           //this.suparr.push(this.supervisorData.fullName);
        }, error => {
        });
    }

    loadEmployeeDetails() {
        this._commonService.getEmployee(this._currentEmpId).subscribe(res => {
            this.currentEmployee = res.json() || {};
        });
    }

    addLearningHtml() {
        //let learnA = this.learningInfoData.filter(learn => learn.status != 'Initiated');
        //if (learnA && learnA.length < 3) {
        let data = {

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
            employeeComment: "",
            supervisorComment: ""

        };

        this.learningInfoData.push(data);

    }


    submitLearningAgenda(isFormDirty) {
        if (this.learningInfoData.length > 0) {
            //debugger;
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
                        masterId: this.param_id,
                        empId: this._currentEmpId,
                        supervisor_id: this.currentEmployee.supervisorDetails._id,
                        emp_name: this.currentEmployee.fullName,
                        supervisor_name: this.currentEmployee.supervisorDetails.fullName,
                        action_link: window.location.origin + '/my/team/workflows/supervisor'
                    }
                    //debugger;
                    this.utilityService.showLoader('.m-content');
                    this._learningService.submitLearningAgendas(data).subscribe(res => {
                        this.utilityService.hideLoader('.m-content');
                        if (res.ok) {
                            swal({
                                title: 'Submitted Successfully!',
                                text: "Learning Agendas have been submitted for Supervisor Approval.",
                                type: 'success',
                                showCancelButton: false,
                                confirmButtonColor: '#66BB6A',
                                confirmButtonText: 'OK'
                            });
                           // debugger;
                            this.loadLearningDetailsInfo();
                        }
                    }, error => {
                        this.loadLearningDetailsInfo();
                        this.utilityService.hideLoader('.m-content');
                    });
                }
            });

        } else {
            //debugger;
            swal({
                title: 'Error! ',
                text: "No Agendas Added!",
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
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



    //-------------------FOR VALIDATIONS---------------------------------------------------------





    showLearningDetails(index: number) {
        this.modalRef = this.modalService.show(this.mylearningDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.learningData = JSON.parse(JSON.stringify(this.learningInfoData[index]));
        this.learningData.no = index + 1;
        console.log("Index: " + index);

        


        if (this.learningData.status == "SendBack" || this.learningData.status == "initiated") {
            this.isDisabled = false;
        }
        else {
            this.isDisabled = true;
        }
        if (this.learningData.progressStatus == "Completed") {
            this.isCompleted = true;
        }
        else {
            this.isCompleted = false;
        }

        if (this.learningData.status == "Approved" || this.learningData.status == "SendBack") {
            this.showStat = true;
        }
        else {
            this.showStat = false;
        }

        if (this.learningData.status == "Approved") {
            this.isApproved = true;
        }
        else {
            this.isApproved = false;
        }

        if (this.learningData.master_status == "Approved" || this.learningData.master_status == "Submitted") {
            this.showSub = false;
        }
        else {
            this.showSub = true;
        }


    }


}

