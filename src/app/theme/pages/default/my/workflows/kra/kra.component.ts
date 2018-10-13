import { FormBuilder,NgForm } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter,ViewChild,TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { KraService } from "./kra.service"
import { CommonService } from "../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { forEach } from "@angular/router/src/utils/collection";
import { NgSelectComponent } from '@ng-select/ng-select'


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./kra.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./kra.component.css'],
    providers: [KraService],
})
export class MyKraComponent {

    @ViewChild('kraDetailModal') kraDetailModal: TemplateRef<any>;
    @ViewChild('KRADataForm') fleaveapplication: NgForm;   
    window: any = window;
    kraCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];

    isKRAsaveClicked:boolean=false;

    kraInfoData: any = [];

    isSubmitted: boolean = false;
    _currentEmpId: number;
    kraArrLength: number = 7

    isKraAvaliable: boolean = false;


    param_id: number;
    kraWorkFlowData: any = [];

    isDisabled: boolean = true;
    employee: any = {};


    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    itemPerPage: number = 10;

    modalRef: BsModalRef;   
    kraData: any = {};
    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _kraService: KraService,
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
                        this.initData();
                    }
                    else {
                        this.param_id = null;
                        this.loadKraWorkFlowDetails();
                    }
                });
            });


    }

    loadKraWorkFlowDetails() {
        this._kraService.getEmployeeKraWorkFlowInfo(this._currentEmpId).subscribe(
            res => {
                this.kraWorkFlowData = res.json();
            },
            error => {
            });;
    }

    initData() {
        this.loadEmployee();
        this.loadKraCategoryData();
        this.loadWeightAgeData();
        this.loadSupervisorData();
        this.loadKraInfo();
    }

    loadEmployee() {
        this._commonService.getEmployee(this._currentEmpId)
            .subscribe(
                res => {
                    this.employee = res.json() || {};
                },
                error => {
                });
    }

    loadKraInfo() {
        this._kraService.getKraInfo(this.param_id).subscribe(
            res => {
                this.kraInfoData = res.json().data;
                let status = res.json().status;
                this.isDisabled = status == "Initiated" || status == "SendBack" ? false : true;
                if (this.kraInfoData.length == 0) {
                    this.addKraHtml();
                }
                //this.addDummyRow((7 - this.kraInfoData.length));
            },
            error => {
            });;
    }

    loadKraCategoryData() {
        this._commonService.getKraCategory()
            .subscribe(
                data => {
                    this.kraCategoryData = data.json();
                },
                error => {
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
        this._commonService.getKraSupervisor(this._currentEmpId)
            .subscribe(
                data => {
                    this.supervisorData = data.json();
                },
                error => {
                });
    }

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }


    addKraHtml() {
        if (this.kraInfoData.length < 7) {
            let data = { _id: null, kra: "", category_id: "", weightage_id: "", unitOfSuccess: "", measureOfSuccess: "", supervisor_id: "", sendBackComment: "", kraWorkflow_id: this.param_id };
            this.kraInfoData.push(data);
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

    showKRADetails(index:number){
        this.modalRef = this.modalService.show(this.kraDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.kraData =JSON.parse(JSON.stringify(this.kraInfoData[index])); 
        this.kraData.no = index + 1;
        this.kraData.weightage = this.weightageData.find(f => f._id == this.kraData.weightage_id);
        this.kraData.category = this.kraCategoryData.find(f => f._id == this.kraData.category_id);
    }
    saveKRADetails(form,id:number){
        debugger;
        if(form.valid){
        this.modalRef.hide();
        this.kraInfoData[this.kraData.no-1]=JSON.parse(JSON.stringify(this.kraData));   
        this.saveKraDetails(this.kraData.no-1);     
        }
       
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
                if (this.kraInfoData[index]._id)
                    this.deleteKra(this.kraInfoData[index]._id, index);
                else {
                    this.kraInfoData.splice(index, 1);
                    if (this.kraInfoData.length == 0) {
                        this.addKraHtml();
                    }
                }
            }
        });
    }

    deleteKra(_id: number, index: number) {
        this._kraService.deleteKra(_id)
            .subscribe(
                res => {
                    if (res.ok) {
                        this.kraInfoData = this.kraInfoData.filter(x => x._id != _id);
                        //delete this.kraInfoData[index];
                        if (this.kraInfoData.length == 0) {
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
                    }
                },
                error => {
                });
    }

    saveKraDetails(index: number) {
        this.kraInfoData[index].supervisorStatus = null;
        this._kraService.saveKra(this.kraInfoData[index])
            .subscribe(
                res => {
                    if (res.ok) {
                        this.kraInfoData[index] = res.json();
                        swal({
                            title: 'Success',
                            text: "KRA has been Saved.",
                            type: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#66BB6A',
                            confirmButtonText: 'OK'
                        });
                    }
                },
                error => {
                });
    }

    isWeightage() {
        let isKraWeightAge = this.kraInfoData.reduce((prev, next) => prev + parseInt(this.weightageData.filter(c => c._id == next.weightage_id)[0].kraWeightageName.replace('%', '')), 0) == 100 ? true : false;
        if (!isKraWeightAge) {
            swal({
                title: 'Oops!',
                text: 'Sum of weightages should be 100%',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
            return isKraWeightAge;
        }
        else {
            return isKraWeightAge;
        }
    }

    isCategoryUnique() {
        let categoryUnique = Array.from(new Set(this.kraInfoData.map((item: any) => item.category_id))).length == this.kraInfoData.length ? true : false;
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
        let isSendBackNotSaved = this.kraInfoData.filter(x => x.supervisorStatus != 'SendBack').length == this.kraInfoData.length ? true : false;
        let isAllKraSaved = this.kraInfoData.filter(x => x._id == null || x._id == undefined).length == 0 ? true : false;
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

    isRequiredWorkFlowLength() {
        return this.employee.grade_id <= 2 && this.kraInfoData.length >= 5 ? true : (this.employee.grade_id > 2 && this.kraInfoData.length >= 3 ? true : false)
    }

    submitKraWorkFlow(isFormDirty) {
        //let requiredWorkFlowLength= 
        //let total = this.kraInfoData.reduce((prev,next) => prev + parseInt(this.weightageData.filter(c=>c._id==next.weightage_id)[0].kraWeightageName.replace('%','')) ,0);
        //let unique=Array.from(new Set(this.kraInfoData.map((item: any) => item.category_id)));
        //let unique=this.kraInfoData.map(item => item.category_id).filter((value, index, self) => self.indexOf(value) === index);       
        if (this.isSendBackOrNewKraSaved(isFormDirty)) {
            if (this.isWeightage()) {
                if (!this.isRequiredWorkFlowLength()) {
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
                else {
                    this.isCategoryUnique();
                }
            }
        }
    }

    saveKraWorkFlow() {
        this._kraService.saveKraWorkFlow({ _id: this.param_id, status: 'Submitted' })
            .subscribe(
                res => {
                    if (res.ok) {
                        swal({
                            title: 'Submitted Successfully!',
                            text: "KRA has been submitted for Supervisor Approval.",
                            type: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#66BB6A',
                            confirmButtonText: 'OK'
                        });
                        this.loadKraInfo();
                    }
                },
                error => {
                });
    }
}
