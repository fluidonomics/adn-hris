import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { PipReviewService } from "./pip-review.service"
import { CommonService } from "../../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { UtilityService } from "../../../../../../../../base/_services/utilityService.service";

@Component({
   selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.pip-view",
   templateUrl: "./pip-review.component.html",
   encapsulation: ViewEncapsulation.None,
   providers: [PipReviewService]
})
export class PipReview {

   @ViewChild('pipDetailModal') pipDetailModal: TemplateRef<any>;
   @ViewChild('pipCompletionModal') pipCompletionModal: TemplateRef<any>;


   window: any = window;
   kraCategoryData: any[];
   weightageData: any = [];
   supervisorData: any = [];

   kraInfoData: any = [];
   pipInfoData: any = [];
   pipMasterData: any = [];

   isSubmitted: boolean = false;


   isKraAvaliable: boolean = false;

   param_emp_id: number;
   param_master_id: number;
   param_id: number;
   kraWorkFlowData: any = [];

   status: any;
   statusq: any;
   isDisabled: boolean = false;
   isDis: boolean = true;
   user: any;
   showStat = false;

   _currentEmpId: number;
   masterStatus: string;

   devArea: [
      'Individual Development',
      'Functional Development'
   ];

   finalRecommendation = [
      {
          '_id':1,
          'final_recommendation': "Continue in current role"
      },
      {
          '_id':2,
          'final_recommendation': "Internal Movement"
      },
      {
          '_id':3,
          'final_recommendation': "Remedial action"
      },
      {
         '_id':4,
         'final_recommendation': "Extended"
     }
   ];
   extendPIP = [
      {
          '_id':1,
          'extended_by': "1 Months"
      },
      {
          '_id':2,
          'extended_by': "2 Months"
      },
      {
          '_id':3,
          'extended_by': "3 Months"
      },
   ];

   timelinesData = [
      {
          '_id': 3,
          'timeline' : "3 Months"
      },
      {
          '_id': 6,
          'timeline' : "6 Months"
      }
  ];


   constructor(@Inject(PLATFORM_ID) private platformId: Object,
      meta: Meta, title: Title,
      private _route: ActivatedRoute,
      private _router: Router,
      public _authService: AuthService,
      private _commonService: CommonService,
      private _pipService: PipReviewService,
      private modalService: BsModalService,
      private utilityService: UtilityService
   ) {
      title.setTitle('ADN HRIS | My Profile');
      meta.addTags([
         { name: 'author', content: '' },
         { name: 'keywords', content: 'Add new employee' },
         { name: 'description', content: 'Add new employee.' }
      ]);

   }

   ngOnInit() {

      this._currentEmpId = this._authService.currentUserData._id;
      this._authService.validateToken().subscribe(
         res => {
            this._route.params.subscribe(params => {
               if (params['id'] && params['emp_id']) {
                  this.param_id = params['id'];
                  this.param_emp_id = parseInt(params['emp_id']);
                  this.param_master_id = parseInt(params['id']);
                  this.initData();
               }
            });
         });


   }

   initData() {
      this.loadPipEmployee();
      this.loadSupervisorData();
      this.getEmployee();
      this.loadMasterData();
   }

   loadPipEmployee() {

      this._pipService.getPipDetails(this.param_master_id).subscribe(
         res => {

            this.pipInfoData = res.json().result.message;
            this.masterStatus = this.pipInfoData[0].master_status;
            this.isDis = res.json().status == 'Approved' ? true : false;
            this.statusq = res.json().status;
         },
         error => {


         }
      );
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

   loadMasterData() {
      this._pipService.getPipByReviewer(this._currentEmpId).subscribe(
         res => {

            this.pipMasterData = res.json().result.message;
            this.pipMasterData = this.pipMasterData.filter(pip => pip._id == this.param_master_id);
         },
         error => {
            swal("Error", error.title, "error");
         }
      );
   }

   saveComments(pipData: any) {
      
      if (!pipData.pip_master_details.rev_final_com) {
          swal({
              title: 'Please fill remarks!',
              type: 'warning',
              showCancelButton: false,
              confirmButtonColor: '#66BB6A',
              confirmButtonText: 'OK'
          });
      }
      else {

          swal({
              title: 'Are you sure?',
              // text: text,
              type: 'warning',
              showCancelButton: true,
              // confirmButtonColor: confirmButtonColor,
              cancelButtonColor: '#9a9caf',
              // confirmButtonText: confirmButtonText
          }).then((result) => {
              if (result.value) {
                 
                  let request = {
                     masterId: pipData.pip_master_details._id,
                     updatedAt: new Date(),
                     updatedBy: this._currentEmpId,
                     hrFinalCom: pipData.pip_master_details.hr_final_com,
                     empFinalCom: pipData.pip_master_details.emp_final_com,
                     revFinalCom: pipData.pip_master_details.rev_final_com,
                     supFinalCom: pipData.pip_master_details.sup_final_com
                  }

                  this.utilityService.showLoader('.mtrDetailsPortlet');
                  this._pipService.updateMaster(request).subscribe(res => {
                      if (res.ok) {
                          this.modalRef.hide();
                          this.utilityService.hideLoader('.mtrDetailsPortlet');
                          swal({
                              title: 'Submitted Successfully!',
                              text: "",
                              type: 'success',
                              showCancelButton: false,
                              confirmButtonColor: '#66BB6A',
                              confirmButtonText: 'OK'
                          });
                          //this.loadPipEmployee();

                      }
                  }, err => {
                      if (err.status == 300) {
                          let error = err.json() || {};
                          swal("Error", error.title, "error");
                          //this.loadPipEmployee();
                          this.modalRef.hide();
                      }
                      this.utilityService.hideLoader('.m-content');
                  })
              }
          });
      }

  }



   modalRef: BsModalRef;
   pipData: any = {};
   showPipDetails(index, event) {

      this.modalRef = this.modalService.show(this.pipDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
      this.pipData = this.pipInfoData[index];
      this.pipData.no = index + 1;
      // this.learnData.weightage = this.weightageData.find(f => f._id == this.learnData.weightage_id);
      // this.learnData.category = this.kraCategoryData.find(f => f._id == this.learnData.category_id);
      if (this.pipData.status == "Approved" || this.pipData.status == "SendBack") {
         this.isDisabled = true;
      }
      else {
         this.isDisabled = false;
      }
   }

   showCompletionDetails() {
      this.modalRef = this.modalService.show(this.pipCompletionModal, Object.assign({}, { class: 'gray modal-lg' }));
      this.pipData = this.pipMasterData[0];
      this.pipData.no = 1;

      if(this.pipData.pip_master_details.sup_final_com && this.pipData.pip_master_details.rev_final_com && !this.pipData.pip_master_details.extended_by) {

         $("#rev_final_com").attr('disabled', 'disabled');
         $("#submitForm").remove();
     }

     if(!this.pipData.pip_master_details.sup_final_com) {

         $("#rev_final_com").attr('disabled', 'disabled');
         $("#submitForm").remove();
     }
  }


}
