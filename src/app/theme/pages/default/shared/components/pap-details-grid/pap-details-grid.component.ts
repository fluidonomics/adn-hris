import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PapService } from '../../../services/pap.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import * as _ from 'lodash';

@Component({
    selector: 'pap-details-grid',
    templateUrl: 'pap-details-grid.component.html',
    providers: [PapService]
})

export class PapDetailsGridComponent implements OnInit {

    @Input() empId;
    @Input() papMasterId;

    @Output() showDetails = new EventEmitter();

    papDetails = [];
    papInfoData=[];

    supervisorData: any = [];
    weightageData: any = [];
    papCategoryData:any=[];
    papRatingScaleData:any=[];

    constructor(
        private papService: PapService,
        private _commonService: CommonService
    ) { }

    ngOnChanges(changes) {
        console.log(changes);
        this.loadPapDetails();
        this.loadSupervisorData();
        this.loadWeightAgeData();
        this.loadPAPCategoryData();
        this.loadRatingScaleData();
    }
    loadPAPCategoryData() {
        this._commonService.getKraCategory().subscribe(data => {
            this.papCategoryData = data.json();
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
    loadSupervisorData() {
        this._commonService.getKraSupervisor(this.empId).subscribe(data => {
            this.supervisorData = data.json();
        }, error => {
        });
    }

    ngOnInit() { }

    loadPapDetails() {
        this.papService.getPapDetailsSingleEmployee(this.empId).subscribe(res => {           
             let papDetails = res || [];

            if (papDetails.length > 0) {
                let papWorkFlowData = _.chain(papDetails).groupBy('pap_master_id').map(function (v, i) {
                    return v[0];
                }).value();
                this.papInfoData=papWorkFlowData[0].papdetails;
                console.log(papWorkFlowData);
            }
        });
    }
    showPAPDetails(i){       
       this.showDetails.emit(i);
    }
}