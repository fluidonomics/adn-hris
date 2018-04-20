import { Component, OnInit, ViewEncapsulation, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from "@angular/platform-browser";
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./dashboard.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit, AfterViewInit {

    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _script: ScriptLoaderService,
    ) {
        title.setTitle('ADN Dashbord | Dashboard');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Dashboard' },
            { name: 'description', content: 'Dashboard.' }
        ]);
    }

    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
            'assets/app/js/dashboard.js');
    }

}