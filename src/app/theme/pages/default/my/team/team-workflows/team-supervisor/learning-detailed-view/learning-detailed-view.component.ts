import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { CommonService } from "../../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { UtilityService } from "../../../../../../../../base/_services/utilityService.service";
import { LearningDetailedViewService } from './learning-detailed-view.service';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.learning-detailed-view",
    templateUrl: "./learning-detailed-view.component.html",
    styleUrls: ['./learning-detailed-view.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [LearningDetailedViewService]
})

export class LearningDetailedViewComponent {

    @ViewChild('learningDetailModal') learningDetailModal: TemplateRef<any>;

    window: any = window;
    kraCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];

    kraInfoData: any = [];
    learningInfoData: any = [];

    isSubmitted: boolean = false;


    isKraAvaliable: boolean = false;

    param_emp_id: number;
    param_master_id: number;
    param_id: number;
    kraWorkFlowData: any = [];

    status: any;
    statusq: any;
    isDisabled: boolean = true;
    isDis: boolean = true;
    user: any;
    showStat = false;

    learningData: any;


    constructor(@Inject(PLATFORM_ID) private platformId: Object,
    meta: Meta, title: Title,
    private _route: ActivatedRoute,
    private _router: Router,
    public _authService: AuthService,
    private _commonService: CommonService,
    private _learningService: LearningDetailedViewService,
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
                      this.param_master_id = parseInt(params['id']);
                      console.log("path var : ", params['id']);
                      this.initData();
                  }
              });
          });


  }

  initData() {
      //console.log("route : ", this._route.url._value[])
      this.loadLearningEmployee();
    //   this.loadKraCategoryData();
    //   this.loadWeightAgeData();
      this.loadSupervisorData();
    //   this.loadKraInfo();
      this.getEmployee();
  }

  loadLearningEmployee() {

    this._learningService.getLearningInfo(this.param_master_id).subscribe(
        res => {
            console.log("response : ", res.json().result.message);
            this.learningInfoData = res.json().result.message;
            this.isDis = res.json().status == 'Approved' ? true : false;
            this.statusq = res.json().status;
            console.log("learningInfoData : ", this.learningInfoData);
        },
        error => {


        }
    );
  }


//   loadKraInfo() {
//       this._learningService.getKraInfo(this.param_id).subscribe(
//           res => {
//               this.kraInfoData = res.json().data;
//               this.isDisabled = res.json().status == 'Approved' ? true : false;
//               this.status = res.json().status;
//               console.log("kra info data : ", res.json());
//           },
//           error => {
//           });;
//   }

//   loadKraCategoryData() {
//       this._commonService.getKraCategory()
//           .subscribe(
//               data => {
//                   this.kraCategoryData = data.json();
//               },
//               error => {
//               });
//   }

//   loadWeightAgeData() {
//       this._commonService.getKraWeightage()
//           .subscribe(
//               data => {
//                   this.weightageData = data.json();
//               },
//               error => {
//               });
//   }

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
                  this.saveLearningDetails(index, status);
              }
          });
      }
  }

  saveLearningDetails(index: number, status: string) {
      this.learningInfoData[index].supervisorStatus = status;        
      this._learningService.saveLearning(this.learningInfoData[index]).subscribe(res => {
          if (res.ok) {
              this.modalRef.hide();
              if (status == 'SendBack' || this.learningInfoData.filter(x => x.supervisorStatus == 'Approved').length == this.learningInfoData.length) {
                  let kraStatus = (status == 'SendBack' ? 'SendBack' : 'Approved');
                  //this.saveKraWorkFlow({ _id: this.param_id, status: kraStatus })
              }
          }
      },
          error => {
          });
  }

//   saveKraWorkFlow(data) {
//       this._learningService.saveKraWorkFlow(data)
//           .subscribe(
//               res => {
//               },
//               error => {
//               });
//   }

  modalRef: BsModalRef;
  kraData: any = {};
  showKraDetail(index, event) {
      debugger;
      console.log("index and event : ", index, event);
      this.modalRef = this.modalService.show(this.learningDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
      this.kraData = this.learningInfoData[index];
      this.kraData.no = index + 1;
      this.kraData.weightage = this.weightageData.find(f => f._id == this.kraData.weightage_id);
      this.kraData.category = this.kraCategoryData.find(f => f._id == this.kraData.category_id);
      console.log("kradata no : ", this.kraData.no);
  }


}