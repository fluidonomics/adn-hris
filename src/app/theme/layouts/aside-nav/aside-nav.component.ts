import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { AuthService } from "../../../base/_services/authService.service"

declare let mLayout: any;
@Component({
    selector: "app-aside-nav",
    templateUrl: "./aside-nav.component.html",
    //styles:['.m-aside-left {top: 0;bottom: 0;position: fixed;height: auto!important;left: 0;z-index: 98;-webkit-backface-visibility: hidden;backface-visibility: hidden;transition: width .2s ease;width: 255px;top: 70px}'],
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {

    constructor(public authService: AuthService) {
    }
    ngOnInit() {

    }

    ngAfterViewInit() {

        mLayout.initAside();
        let menu = mLayout.getAsideMenu();
        let item = $(menu).find('a[href="' + window.location.pathname + '"]').parent('.m-menu__item'); (<any>$(menu).data('menu')).setActiveItem(item);
    }



}