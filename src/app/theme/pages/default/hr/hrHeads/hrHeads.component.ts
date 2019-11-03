import { Router } from '@angular/router';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HrService } from "../hr.service";


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./hrHeads.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./hrHeads.component.scss']
})

export class HrHeads implements OnInit {
    buisnessHrHeadData: any = [];
    groupHrHeadData: any = [];
    hrspocData: any = [];

    key: string = ''; //set default
    reverse: boolean = false;
    imageBase: any;
    itemPerPage: number = 10;
    p2: number = 1;
    search: any;

    constructor(
        private _hrService: HrService
    ) {

    }

    ngOnInit() {
        this._hrService.getAllHrHeads().subscribe(res => {
            var hrHeads = res.json() || []
            if (hrHeads && hrHeads.result && hrHeads.result.length > 0) {
                this.buisnessHrHeadData = hrHeads.result.filter(h => h.type == 1);
                this.groupHrHeadData = hrHeads.result.filter(h => h.type == 2);
                this.hrspocData = hrHeads.result.filter(h => h.type == 3);
            }
        });
    }

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
}