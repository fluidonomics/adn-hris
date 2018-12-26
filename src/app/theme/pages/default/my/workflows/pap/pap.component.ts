import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../../../base/_services/authService.service';
import { CommonService } from '../../../../../../base/_services/common.service';
import { PapService } from '../../../services/pap.service';
import * as _ from 'lodash';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.mypap",
    templateUrl: "./pap.component.html",
    encapsulation: ViewEncapsulation.None,
    providers: [PapService]
})
export class MyPapComponent {

    @ViewChild('papDetailModal') papDetailModal: TemplateRef<any>;

    papWorkFlowData: any = [];
    isPapAvaliable: boolean = false;

    modalRef: BsModalRef;
    param_id: number;
    _currentEmpId: number;

    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;
    itemPerPage: number = 10;

    papMasterData = [];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private papService: PapService
    ) { }

    ngOnInit() {
        this._authService.validateToken().subscribe(res => {
            this._currentEmpId = this._authService.currentUserData._id;
            this._route.queryParams.subscribe(params => {
                if (params['id']) {
                    this.param_id = params['id'];
                    this.loadData();
                }
                else {
                    this.param_id = null;
                    this.loadPapDetails();
                }
            });
        });
    }

    loadData() {

    }

    loadPapDetails() {
        this.papService.getPapDetailsSingleEmployee(this._currentEmpId).subscribe(res => {
            debugger;
            let papDetails = res || [];
            if (papDetails.length > 0) {
                this.papMasterData = _.chain(papDetails).groupBy('pap_master_id').map(function (v, i) {
                    return v[0];
                }).value();
            }
        });
    }


}
