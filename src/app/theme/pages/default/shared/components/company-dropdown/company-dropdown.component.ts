import { Component, Output, EventEmitter } from '@angular/core';
import { CommonService } from "../../../../../../base/_services/common.service";

import swal from 'sweetalert2';


@Component({
    selector: 'company-dropdown',
    templateUrl: 'company-dropdown.component.html',
    styleUrls: ['company-dropdown.component.scss']
})
export class CompanyDropdownComponent {

    public companyId: any;
    oldCompanyId: any;
    companyList: any = [];

    @Output('onCompanyChange') companyChangeEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private _commonService: CommonService
    ) {
        this.companyId = parseInt(this._commonService.getCompanyIdLocal());
        // Temporary code, Remove it once the year transition has happened.
        if (!this.companyId) {
            this.companyId = 1;
            this._commonService.setCompanyIdLocal(this.companyId);
        }
        // ----------------------------------------------------------------
        this.getCompanies();
        this.oldCompanyId = this.companyId;
    }

    getCompanies() {
        this._commonService.getComapnies().subscribe(res => {
            if (res.ok) {
                this.companyList = res.json() || [];
                if (this.companyList && this.companyList.length > 0) {
                    if (!this.companyId) {
                        this.companyId = 1;
                        this._commonService.setCompanyIdLocal(this.companyId);
                    }
                    this._commonService.currentCompany.next(this.getCurrentCompany());
                }
                this.oldCompanyId = this.companyId;
            }
        })
    }


    onCompanyChange(event) {
        swal({
            title: 'Are you sure?',
            text: "You want to change company",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                let company = this.companyList.find(c => c._id === event);
                this.companyChangeEvent.emit({ event: event, companyId: this.companyId, currentCompany: company });
                this._commonService.setCompanyIdLocal(this.companyId);
                this.oldCompanyId = this.companyId;
                window.location.href = window.location.origin + '/dashboard';
            } else {
                this.companyId = this.oldCompanyId;
            }
        });
    }

    public getCurrentCompany() {
        let company = this.companyList.find(f => f._id == this.companyId);
        return company;
    }


}
