import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { KraService } from "./kra.service"
import { CommonService } from "../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./kra.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [KraService]
})
export class MyKraComponent {

    kraCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];

    kraInfoData: any = [];

    isSubmitted: boolean = false;
    _currentEmpId: number;
    kraArrLength: number = 7

    isKraAvaliable: boolean = false;
 

    param_id: number;
    kraWorkFlowData: any = [];

    isDisabled:boolean=true;


    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _kraService: KraService
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
                        this.param_id=null;
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
        this.loadKraCategoryData();
        this.loadWeightAgeData();
        this.loadSupervisorData();
        this.loadKraInfo();
    }

    loadKraInfo() {
        this._kraService.getKraInfo(this.param_id).subscribe(
            res => {
                this.kraInfoData = res.json().data;
                let status= res.json().status;
                this.isDisabled = status =="Initiated" || status=="SendBack" ? false :true ;
                if(this.kraInfoData.length==0)
                {
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

    // onKraSubmit(isSaveDraft: boolean) {
    //     var filterKraData=[];
    //     for (let i = 0; i < this.kraInfoData.length; i++) {
    //        if(this.kraInfoData[i].kra && this.kraInfoData[i].category_id && this.kraInfoData[i].weightage_id && this.kraInfoData[i].unitOfSuccess && this.kraInfoData[i].measureOfSuccess && this.kraInfoData[i].supervisor_id)
    //        {
    //             filterKraData.push(this.kraInfoData[i])
    //        }
    //        if(i == this.kraInfoData.length-1)
    //        {
    //             this._kraService.saveKra({"kraInfo":filterKraData,"kraWorkflow_id":this.param_id,"isSaveDraft":isSaveDraft})
    //             .subscribe(
    //             data => {
    //                     let messageString= isSaveDraft ? 'save':'submitted';
    //                     swal("Kra is " + messageString, "", "success");
    //                     this.loadKraInfo();
    //             },
    //             error => {
    //             });
    //        }
    //     }
        
    // };

    addDummyRow(loopLength) {
        for (let j = 0; j < loopLength; j++) {
            let data = {
                _id: "",
                kra: "",
                category_id: "",
                weightage_id: "",
                unitOfSuccess: "",
                measureOfSuccess: "",
                supervisor_id: "",
                sendBackComment:"",
                kraWorkflow_id: this.param_id
            };
            this.kraInfoData.push(data);
        }
    }


    addKraHtml()
    {
        if(this.kraInfoData.length < 7)
        {
            let data = {_id:null,kra: "",category_id: "",weightage_id: "",unitOfSuccess: "",measureOfSuccess: "",supervisor_id: "",sendBackComment:"",kraWorkflow_id: this.param_id};
            this.kraInfoData.push(data);
        }
        else{
            swal({
                    title: 'Oops!',
                    text:"You can't add more than 7 KRAs",
                    type: 'warning',
                    showCancelButton: false,
                    confirmButtonColor: '#66BB6A',
                    confirmButtonText: 'OK'
            });
        }
    }

    deleteKraHtml(index:number)
    {
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
                if(this.kraInfoData[index]._id)
                this.deleteKra(this.kraInfoData[index]._id,index);
                else
                {
                  delete this.kraInfoData[index];
                  if(this.kraInfoData.length==0)
                  {
                      this.addKraHtml();
                  }
                }
            }
        });
    }

    deleteKra(_id:number,index:number)
    {
        this._kraService.deleteKra(_id)
        .subscribe(
        res => {
                if(res.ok)
                {
                   this.kraInfoData = this.kraInfoData.filter(x => x._id != _id);
                   //delete this.kraInfoData[index];
                   if(this.kraInfoData.length==0)
                   {
                     this.addKraHtml();
                   }
                   swal({
                    title: 'Deleted',
                    text:"KRA has been deleted successfully.",
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

    saveKraDetails(index:number)
    {
        this.kraInfoData[index].supervisorStatus=null;
        this._kraService.saveKra(this.kraInfoData[index])
        .subscribe(
        res => {
                if(res.ok)
                {
                   this.kraInfoData[index]=res.json();
                swal({
                    title: 'Success',
                    text:"KRA has been Saved.",
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

    submitKraWorkFlow()
    {
        if(this.kraInfoData.filter(x => x.supervisorStatus != 'SendBack').length==this.kraInfoData.length)
        {
            this._kraService.saveKraWorkFlow({_id:this.param_id,status:'Submitted'})
            .subscribe(
            res => {
                    if(res.ok)
                    {
                        swal({
                            title: 'Submitted Successfully!',
                            text:"KRA has been submitted for Supervisor Approval.",
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
        else{
            swal({
                title: 'Oops!',
                text:'Please save unsaved KRAs before submitting',
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#66BB6A',
                confirmButtonText: 'OK'
            });
        } 
    }
}
