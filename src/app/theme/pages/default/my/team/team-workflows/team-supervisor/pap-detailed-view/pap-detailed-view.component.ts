import { Component, OnInit, ViewEncapsulation,ViewChild, TemplateRef } from '@angular/core';
import { CommonService } from "../../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PapService } from '../../../../../services/pap.service';
import * as _ from 'lodash';
import swal from 'sweetalert2';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.pap-detailed-view",
    templateUrl: "./pap-detailed-view.component.html",
    styleUrls: ['pap-detailed-view.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [PapService]
})

export class PapDetailedViewComponent implements OnInit {

    @ViewChild('papDetailModal') papDetailModal: TemplateRef<any>;

    papWorkFlowData: any = [];
    isPapAvaliable: boolean = false;
    isChangable:boolean=true;

    supervisorData: any = [];
    weightageData: any = [];
    papCategoryData:any=[];
    papRatingScaleData:any=[];

    papData: any = {};
    papGridInput:any={};
    isDisabled:boolean=true;

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
   

    modalRef: BsModalRef;
    param_id: number;
    _currentEmpId: number;

    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    itemPerPage: number = 10;

    papMasterData = [];

    papInfoData:any=[];
    user: any;    

    constructor(
        public _authService: AuthService,
        private _commonService: CommonService,
        private modalService: BsModalService,
        private _route: ActivatedRoute,
        private papService: PapService
    ) { }   
    ngOnInit() { 
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this._route.params.subscribe(params => {
                    if (params['id'] && params['emp_id']) {
                        this.papGridInput.empId=parseInt(params['emp_id']);                       
                        this.papGridInput.param_id=parseInt(params['id']);  
                        this.loadData();                                             
                    }
                });
            }
        );
    }
    getEmployee() {
        this._commonService.getEmployee(this.papGridInput.empId).subscribe(res => {
            if (res.ok) {
                this.user = res.json() || {};
            }
        })
    }

    loadData() {
        this.getEmployee();
        this.loadPapDetails();
        this.loadSupervisorData();
        this.loadWeightAgeData();
        this.loadPAPCategoryData();
        this.loadRatingScaleData();
    }
    loadPapDetails() {       
        this.papService.getPapDetailsSingleEmployee(this.papGridInput.empId).subscribe(res => {            
            let papDetails = res || [];
            if (papDetails.length > 0) {
                this.papWorkFlowData = _.chain(papDetails).groupBy('pap_master_id').map(function (v, i) {
                    return v[0];
                }).value();
                this.papInfoData=this.papWorkFlowData[0].papdetails;
                this.isChangable=true;//this.papInfoData.filter(obj=> obj.status=="Pending Reviewer").length== this.papInfoData.length?false:true;
                console.log(this.papWorkFlowData);
            }
        });
    }
    loadSupervisorData() {
        this._commonService.getKraSupervisor(this.papGridInput.empId).subscribe(data => {
            this.supervisorData = data.json();
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
    loadRatingScaleData(){
        this._commonService.getPapRatingScale().subscribe(
            data => {
                this.papRatingScaleData = data.json().result;
                this.papRatingScaleData.forEach(element => {
                    element.displayName=element.ratingScale+"-"+element.nomenclature
                });
                console.log(this.papRatingScaleData);
            }, error => {
            });
    }  
    loadPAPCategoryData() {
        this._commonService.getKraCategory().subscribe(data => {
            this.papCategoryData = data.json();
        }, error => {
        });
    }
    showPAPDetails(index) {              
        this.modalRef = this.modalService.show(this.papDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.papData = JSON.parse(JSON.stringify(this.papInfoData[index]));
        this.papData.no = index + 1;
        
        console.log(this.papData);        
        this.isDisabled = this.papData.status == "Pending Reviewer" ? true : false;                        
    }
    saveKRADetails(form, id: number){        
            this.modalRef.hide();            
            let request={
                "papDetailsId" : this.papData._id,
                "updatedBy": this._currentEmpId,
                "supRemark": this.papData.supRemark,
                "sup_ratingScaleId": this.papData.sup_ratingScaleId
            }
            console.log(request);
            this.papService.papUpdateSupervisor(request).subscribe(res=>{               
                if(res.ok){
                    this.papGridInput={};
                    let gridInput={
                        empId:this._currentEmpId,
                        param_id:this.param_id
                    }
                    // this.papGridInput.empId=this._currentEmpId;
                    // this.papGridInput.param_id=this.param_id;
                    Object.assign(this.papGridInput,gridInput)
                    this.loadPapDetails();
                    swal({
                        title: 'Success',
                        text: "PAP has been Saved.",
                        type: 'success',
                        showCancelButton: false,
                        confirmButtonColor: '#66BB6A',
                        confirmButtonText: 'OK'
                    });
                }
            },error=>{

            })        
    }
    submitPapWorkFlow(){
        let dataWithoutPendingStatus=this.papInfoData.filter(obj=> obj.sup_ratingScaleId==null);

        if(dataWithoutPendingStatus.length==0){            
            let request={
                pap_master_id:this.papGridInput.param_id,
                updatedBy:this._currentEmpId
            }
            this.papService.papSubmitToReviewer(request).subscribe(
                res=>{
                    if(res.ok){
                        this.loadPapDetails()
                        swal({
                            title: 'Success',
                            text: "PAP has been submited.",
                            type: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#66BB6A',
                            confirmButtonText: 'OK'
                        });
                    }
                },error=>{

                }
            )
    }
    else{
        swal({
            title: 'Oops!',
            text: 'All PAP need to be saved before submitting',
            type: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#66BB6A',
            confirmButtonText: 'OK'
        });
    }
    }
    
}