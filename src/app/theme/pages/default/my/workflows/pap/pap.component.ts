import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap";


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper.mypap",
    templateUrl: "./pap.component.html",
    encapsulation: ViewEncapsulation.None
})
export class MyPapComponent {

    @ViewChild('papDetailModal') papDetailModal: TemplateRef<any>;

    search: any;
    papWorkFlowData: any = [];
    isPapAvaliable: boolean = false;

    modalRef: BsModalRef;

    constructor() { }

    ngOnInit() {

    }

    saveKRADetails(form, id: number) {
       
    }


}
