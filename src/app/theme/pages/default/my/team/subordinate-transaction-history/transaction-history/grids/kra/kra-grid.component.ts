import { ViewEncapsulation, Component, OnInit, Input, TemplateRef, ViewChild } from "@angular/core";
import { UtilityService } from "../../../../../../../../../base/_services/utilityService.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { CommonService } from "../../../../../../../../../base/_services/common.service";

@Component({
    selector: 'kra-grid',
    templateUrl: 'kra-grid.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class TransactionHistoryKRAComponent implements OnInit {

    @Input('kraDetails') kraDetails = [];
    @Input('user') user :any;    
    @ViewChild('kraDetailModal') kraDetailModal: TemplateRef<any>;

    modalRef: BsModalRef;
    kraData: any = {};    
    kraCategoryData: any[];
    weightageData: any = [];

    constructor(
        private modalService: BsModalService,
        private _commonService: CommonService,

    ) {

    }
    

    ngOnInit() {
        this.loadKraCategoryData();
        this.loadWeightAgeData();
    }

    loadKraCategoryData() {
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
        this.modalRef = this.modalService.show(this.kraDetailModal, Object.assign({}, { class: 'gray modal-lg' }));
        this.kraData = this.kraDetails[index] || {};
        this.kraData.no = index + 1;
        this.kraData.weightage = this.weightageData.find(f => f._id == this.kraData.weightage_id);
        this.kraData.category = this.kraCategoryData.find(f => f._id == this.kraData.category_id);
    }
}