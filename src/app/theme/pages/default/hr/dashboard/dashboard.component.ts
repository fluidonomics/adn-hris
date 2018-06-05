import { Component, OnInit, ViewEncapsulation, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from "@angular/platform-browser";
import { FormBuilder } from "@angular/forms";
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { UtilityService } from '../../../../../base/_services/utilityService.service';
const now = new Date();

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./dashboard.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {

    rolesData:any[];
    documentData:any[];

    constructor( @Inject(PLATFORM_ID) private platformId: Object,
    meta: Meta, title: Title,
    private _script: ScriptLoaderService,
    private utilityService: UtilityService,
    
) {
    title.setTitle('ADN Dashbord | Dashboard');
    meta.addTags([
        { name: 'author', content: '' },
        { name: 'keywords', content: 'Dashboard' },
        { name: 'description', content: 'Dashboard.' }
    ]);
}

ngOnInit() {
   this.initData();
}

ngAfterViewInit() {
    this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
        'assets/app/js/dashboard.js');
}

initData()
{
    // this.loadRole();
    // this.loadDocumentData();
}




}