import { ViewEncapsulation, Component, OnInit, Input, TemplateRef, ViewChild } from "@angular/core";
import { UtilityService } from "../../../../../../../../../base/_services/utilityService.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { CommonService } from "../../../../../../../../../base/_services/common.service";

@Component({
    selector: 'mtr-grid',
    templateUrl: 'mtr-grid.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class TransactionHistoryMtrComponent implements OnInit {

    @Input('mtrDetails') mtrDetails = [];
    @ViewChild('mtrDetailModal') mtrDetailModal: TemplateRef<any>;

    modalRef: BsModalRef;
    mtrData: any = {};
    mtrInfoData: any = [];
    kraCategoryData: any[];
    weightageData: any = [];

    constructor(
        private modalService: BsModalService,
        private _commonService: CommonService,

    ) {

    }

    ngOnInit() {

    }

    loadMtrCategoryData() {
        this._commonService.getKraCategory().subscribe(data => {
            this.kraCategoryData = data.json();
        }, error => {
        });
    }

    loadWeightAgeData() {
        this._commonService.getKraWeightage().subscribe(data => {
            this.weightageData = data.json();
        }, error => {
        });
    }

    showMtrDetail(index, event) {
        this.modalRef = this.modalService.show(this.mtrDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.mtrData = this.mtrInfoData.mtr_details[index] || {};
        this.mtrData.no = index + 1;
        this.mtrData.weightage = this.weightageData.find(f => f._id == this.mtrData.weightage_id);
        this.mtrData.category = this.kraCategoryData.find(f => f._id == this.mtrData.category_id);
    }
}