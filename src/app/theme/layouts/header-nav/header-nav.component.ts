import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { AuthService } from "../../../base/_services/authService.service"


declare let mLayout: any;
declare let $ :any;

@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {


    constructor(public authService: AuthService,
    ) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        mLayout.initHeader();
    }

    // removeScript()
    // {
    //     $('script[src$="assets/vendors/base/vendors.bundle.js"]').remove();
    //     $('script[src$="assets/demo/default/base/scripts.bundle.js"]').remove();
    // }
}