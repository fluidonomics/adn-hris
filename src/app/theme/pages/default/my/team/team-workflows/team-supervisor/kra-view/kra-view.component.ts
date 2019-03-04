import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { KraViewService } from "./kra-view.service"
import { CommonService } from "../../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { MyTeamService } from "../../../my-team.service";
import { environment } from "../../../../../../../../../environments/environment";

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.kra-view",
    templateUrl: "./kra-view.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [KraViewService]
})
export class MyTeamKraComponent {

    @ViewChild('kraDetailModal') kraDetailModal: TemplateRef<any>;

    window: any = window;
    kraCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];

    kraInfoData: any = [];

    isSubmitted: boolean = false;


    isKraAvaliable: boolean = false;

    param_emp_id: number;
    param_id: number;
    kraWorkFlowData: any = [];

    status: any;
    isDisabled: boolean = true;
    user: any;
    employees: any = [];
    imageBase: string;

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _kraService: KraViewService,
        private modalService: BsModalService
    ) {
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);
        this.imageBase = environment.content_api_base.imgBase;

    }

    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._route.params.subscribe(params => {
                    if (params['id'] && params['emp_id']) {
                        this.param_id = params['id'];
                        this.param_emp_id = parseInt(params['emp_id']);
                        this.initData();
                    }
                });
            });


    }

    initData() {
        this.loadKraCategoryData();
        this.loadWeightAgeData();
        this.loadSupervisorData();
        this.loadKraInfo();
        this.getEmployee();
    }

    loadKraInfo() {
        this._kraService.getKraInfo(this.param_id).subscribe(
            res => {
                this.kraInfoData = res.json().data;
                this.isDisabled = res.json().status == 'Approved' ? true : false;
                this.status = res.json().status;
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
        this._commonService.getKraSupervisor(this.param_emp_id)
            .subscribe(
                data => {
                    this.supervisorData = data.json();
                },
                error => {
                });
    }

    getEmployee() {
        this._commonService.getEmployee(this.param_emp_id).subscribe(res => {
            if (res.ok) {
                this.user = res.json() || {};
            }
        })
    }

    preSaveKraDetails(kraId: number, status: string) {
        let swalOption = {}
        let index = this.kraData.no - 1;
        this.kraInfoData[index].sendBackComment = this.kraData.sendBackComment;
        if (status == 'SendBack' && (!this.kraInfoData[index].sendBackComment || this.kraInfoData[index].sendBackComment == "")) {
            swal({
                title: 'Please specify the reason!',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
        }
        else {
            let text = "Do you want to approve kra ?";
            let confirmButtonText = "Approve";
            let confirmButtonColor = "#66BB6A";
            if (status == 'SendBack') {
                text = "Do you want to send back kra ?";
                confirmButtonText = "Send Back";
                confirmButtonColor = "#f22d4e";
            }
            swal({
                title: 'Are you sure?',
                text: text,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: confirmButtonColor,
                cancelButtonColor: '#9a9caf',
                confirmButtonText: confirmButtonText
            }).then((result) => {
                if (result.value) {
                    this.saveKraDetails(index, status);
                }
            });
        }
    }

    saveKraDetails(index: number, status: string) {
        let text = "Kra has been approved successfully";
        if (status == 'SendBack') {
            text = "Kra has been sent back.";
        }
        this.kraInfoData[index].supervisorStatus = status;
        this._kraService.saveKra(this.kraInfoData[index]).subscribe(res => {
            if (res.ok) {
                this.modalRef.hide();
                swal({
                    title: 'Success',
                    text: text,
                    type: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#66BB6A',
                    confirmButtonText: 'OK'
                });
                if (status == 'SendBack' || this.kraInfoData.filter(x => x.supervisorStatus == 'Approved').length == this.kraInfoData.length) {
                    let kraStatus = (status == 'SendBack' ? 'SendBack' : 'Approved');
                    this.saveKraWorkFlow({ _id: this.param_id, status: kraStatus })
                }
            }
        }, error => {
            console.log(error);
        });
    }

    saveKraWorkFlow(data) {
        this._kraService.saveKraWorkFlow(data).subscribe(res => {
        }, error => {
            console.log(error);
        });
    }

    modalRef: BsModalRef;
    kraData: any = {};
    showKraDetail(index, event) {
        this.modalRef = this.modalService.show(this.kraDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.kraData = this.kraInfoData[index];
        this.kraData.no = index + 1;
        this.kraData.weightage = this.weightageData.find(f => f._id == this.kraData.weightage_id);
        this.kraData.category = this.kraCategoryData.find(f => f._id == this.kraData.category_id);
    }


}
