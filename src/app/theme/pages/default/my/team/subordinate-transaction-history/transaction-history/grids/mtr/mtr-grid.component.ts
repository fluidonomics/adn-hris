import { ViewEncapsulation, Component, OnInit, Input, TemplateRef, ViewChild } from "@angular/core";
import { UtilityService } from "../../../../../../../../../base/_services/utilityService.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { CommonService } from "../../../../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../../../../base/_services/authService.service";
import { environment } from "../../../../../../../../../../environments/environment";

@Component({
    selector: 'mtr-grid',
    templateUrl: 'mtr-grid.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class TransactionHistoryMtrComponent implements OnInit {

    @Input('mtrDetails') mtrDetails = [];
    @Input('user') user: any;
    @ViewChild('mtrDetailModal') mtrDetailModal: TemplateRef<any>;

    modalRef: BsModalRef;
    mtrData: any = {};
    mtrInfoData: any = [];
    kraCategoryData: any[];
    weightageData: any = [];
    imageBase = "";

    constructor(
        private modalService: BsModalService,
        private _commonService: CommonService,
        private _authService: AuthService

    ) {
        this.imageBase = environment.content_api_base.imgBase;

    }

    ngOnInit() {
        this.loadMtrCategoryData();
        this.loadWeightAgeData();
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
        this.mtrData = this.mtrDetails[index] || {};
        this.mtrData.no = index + 1;
        this.mtrData.weightage = this.weightageData.find(f => f._id == this.mtrData.weightage_id);
        this.mtrData.category = this.kraCategoryData.find(f => f._id == this.mtrData.category_id);
    }
}