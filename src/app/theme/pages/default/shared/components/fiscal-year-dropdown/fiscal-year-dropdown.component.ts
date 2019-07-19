import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService } from "../../../../../../base/_services/common.service";

@Component({
    moduleId: module.id,
    selector: 'fiscal-year-dropdown',
    templateUrl: 'fiscal-year-dropdown.component.html',
    styleUrls: ['fiscal-year-dropdown.component.scss']
})
export class FiscalYearDropdownComponent {

    public fiscalYearId: any;
    financialYearList: any = [];

    @Output('onfiscalYearChange') fiscalYearChangeEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private _commonService: CommonService
    ) {
        this.fiscalYearId = parseInt(this._commonService.getFiscalYearIdLocal());
        // Temporary code, Remove it once the year transition has happened.
        if (!this.fiscalYearId) {
            this.fiscalYearId = 3;
        }
        // ----------------------------------------------------------------
        this.getFinancialYears();
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
                    // let fYear = this.financialYearList.filter(d => d._id === this.fiscalYearId);
                    // if (fYear["0"]) {
                    //     this.leaveapplication.fYear = {
                    //         startDate: new Date(fYear["0"].starDate),
                    //         endDate: new Date(fYear["0"].endDate)
                    //     };
                    //     // this.fiscalYearId = fYear["0"]._id;
                    //     resolve(true);
                    // }
                }
            }
        })
    }


    onfiscalYearChange(event) {
        let fYear = this.financialYearList.find(f => f._id === event);
        this.fiscalYearChangeEvent.emit({ event: event, fiscalYearId: this.fiscalYearId, currentFiscalYear: fYear });
        this._commonService.setFiscalYearIdLocal(this.fiscalYearId);
        window.location.reload();
    }
}
