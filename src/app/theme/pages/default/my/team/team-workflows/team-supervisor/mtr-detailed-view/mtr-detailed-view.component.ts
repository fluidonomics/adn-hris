import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { MtrDetailedViewService } from "./mtr-detailed-view.service"
import { CommonService } from "../../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.kra-view",
    templateUrl: "./mtr-detailed-view.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [MtrDetailedViewService]
})

export class MtrDetailedViewComponent {

    @ViewChild('mtrDetailModal') mtrDetailModal: TemplateRef<any>;

    window: any = window;
    mtrCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];
    mtrInfoData: any = [];
    isSubmitted: boolean = false;
    isMtrAvaliable: boolean = false;
    param_emp_id: number;
    param_id: number;
    mtrWorkFlowData: any = [];
    status: any;
    isDisabled: boolean = true;
    user: any;

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
    meta: Meta, title: Title,
    private _route: ActivatedRoute,
    private _router: Router,
    public _authService: AuthService,
    private _commonService: CommonService,
    private _mtrService: MtrDetailedViewService,
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
                this._route.params.subscribe(params => {
                    if (params['id'] && params['emp_id']) {
                        this.param_id = params['id'];
                        this.param_emp_id = parseInt(params['emp_id']);
                        this.initData();
                    }
                });
            }
        );
    }

    initData() {
        this.loadMtrCategoryData();
        this.loadWeightAgeData();
        this.loadSupervisorData();
        this.loadMtrInfo();
        this.getEmployee();
    }

    loadMtrInfo() {
        this._mtrService.getMtrInfo(this.param_id).subscribe(
            res => {
                this.mtrInfoData = res.json().data;
                this.isDisabled = res.json().status == 'Approved' ? true : false;
                this.status = res.json().status;
            },
            error => {
            });;
    }

    loadMtrCategoryData() {
        this._commonService.getMtrCategory()
            .subscribe(
                data => {
                    this.mtrCategoryData = data.json();
                },
                error => {
                });
    }

    loadWeightAgeData() {
        this._commonService.getMtrWeightage()
            .subscribe(
                data => {
                    this.weightageData = data.json();
                },
                error => {
                });
    }

    loadSupervisorData() {
        this._commonService.getMtrSupervisor(this.param_emp_id)
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

    preSaveMtrDetails(mtrId: number, status: string) {
        let swalOption = {}
        let index = this.mtrData.no - 1;
        this.mtrInfoData[index].sendBackComment = this.mtrData.sendBackComment;
        if (status == 'SendBack' && (!this.mtrInfoData[index].sendBackComment || this.mtrInfoData[index].sendBackComment == "")) {
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
                    this.saveMtrDetails(index, status);
                }
            });
        }
    }

    saveMtrDetails(index: number, status: string) {
        this.mtrInfoData[index].supervisorStatus = status;        
        this._mtrService.saveMtr(this.mtrInfoData[index]).subscribe(res => {
            if (res.ok) {
                this.modalRef.hide();
                if (status == 'SendBack' || this.mtrInfoData.filter(x => x.supervisorStatus == 'Approved').length == this.mtrInfoData.length) {
                    let mtrStatus = (status == 'SendBack' ? 'SendBack' : 'Approved');
                    this.saveMtrWorkFlow({ _id: this.param_id, status: mtrStatus })
                }
            }
        },
        error => {
        });
    }

    saveMtrWorkFlow(data) {
        this._mtrService.saveMtrWorkFlow(data)
            .subscribe(
                res => {
                },
                error => {
                });
    }

    modalRef: BsModalRef;
    mtrData: any = {};
    showMtrDetail(index, event) {
        this.modalRef = this.modalService.show(this.mtrDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.mtrData = this.mtrInfoData[index];
        this.mtrData.no = index + 1;
        this.mtrData.weightage = this.weightageData.find(f => f._id == this.mtrData.weightage_id);
        this.mtrData.category = this.mtrCategoryData.find(f => f._id == this.mtrData.category_id);
    }

}