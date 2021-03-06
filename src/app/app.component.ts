import { Component, Inject, PLATFORM_ID, OnInit, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from "./helpers";
import { AuthService } from "./base/_services/authService.service";
import { environment } from '../environments/environment';
import { ScriptLoaderService } from './_services/script-loader.service';

@Component({
    selector: 'body',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
    title = 'app';
    globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';

    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        public authService: AuthService,
        private _router: Router,
        private _script: ScriptLoaderService, ) {
        if (isPlatformBrowser(this.platformId)) {
            environment.api_base.resetPasswordCallback = window.location.origin + "/reset-password";
            // this.authService.init(environment.api_base);
        }
        this.authService.init(environment.api_base);
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(result => {
                //this._script.load('head', 'assets/vendors/custom/fullcalendar/fullcalendar.bundle.js');
            });
    }


    ngOnInit() {
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                Helpers.setLoading(true);
                Helpers.bodyClass(this.globalBodyClass);
            }
            if (route instanceof NavigationEnd) {
                Helpers.setLoading(false);
            }
        });
    }
}