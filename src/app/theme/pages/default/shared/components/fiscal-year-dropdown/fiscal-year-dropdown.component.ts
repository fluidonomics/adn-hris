import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService } from "../../../../../../base/_services/common.service";

import swal from 'sweetalert2';

@Component({
    moduleId: module.id,
    selector: 'fiscal-year-dropdown',
    templateUrl: 'fiscal-year-dropdown.component.html',
    styleUrls: ['fiscal-year-dropdown.component.scss']
})
export class FiscalYearDropdownComponent {

    public fiscalYearId: any;
    oldFiscalYearId: any;
    financialYearList: any = [];

    @Output('onfiscalYearChange') fiscalYearChangeEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private _commonService: CommonService
    ) {
        this.fiscalYearId = parseInt(this._commonService.getFiscalYearIdLocal());
        // Temporary code, Remove it once the year transition has happened.
        if (!this.fiscalYearId) {
            this.fiscalYearId = 3;
            this._commonService.setFiscalYearIdLocal(this.fiscalYearId);
        }
        // ----------------------------------------------------------------
        this.getFinancialYears();
        this.oldFiscalYearId = this.fiscalYearId;
    }


    getFinancialYears() {
        this._commonService.getFinancialYear().subscribe(res => {
            if (res.ok) {
                this.financialYearList = res.json() || [];
                if (this.financialYearList && this.financialYearList.length > 0) {
                    if (!this.fiscalYearId) {
                        this.fiscalYearId = this.financialYearList.filter(f => f.isYearActive === true)[0]._id;
                        this._commonService.setFiscalYearIdLocal(this.fiscalYearId);
                    }
                    this._commonService.currentFinancialYear.next(this.getCurrentFiscalYear());
                }
                this.oldFiscalYearId = this.fiscalYearId;
            }
        })
    }


    onfiscalYearChange(event) {
        swal({
            title: 'Are you sure?',
            text: "You want to change fiscal year",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                let fYear = this.financialYearList.find(f => f._id === event);
                this.fiscalYearChangeEvent.emit({ event: event, fiscalYearId: this.fiscalYearId, currentFiscalYear: fYear });
                this._commonService.setFiscalYearIdLocal(this.fiscalYearId);
                this.oldFiscalYearId = this.fiscalYearId;
                window.location.href = window.location.origin + '/dashboard';
            } else {
                this.fiscalYearId = this.oldFiscalYearId;
            }
        });
    }

    public getCurrentFiscalYear() {
        let fyear = this.financialYearList.find(f => f._id == this.fiscalYearId);
        return fyear;
    }
}
