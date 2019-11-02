import { Component, ComponentFactoryResolver, OnInit, PLATFORM_ID, Inject, ElementRef, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { ScriptLoaderService } from "../_services/script-loader.service";
import { AuthService } from "../base/_services/authService.service";
import { Helpers } from "../helpers";
import { CommonService } from "../base/_services/common.service";
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {

    constructor( ) {
    }
    prepareBody(): any {
        let headerData = [];
        headerData = [
            { text: 'KEY RESPONSIBILITY AREAS (KRAs)', style: 'tableHeader', colSpan: 11, alignment: 'center' },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ];
        let subHeaderData = [];
        subHeaderData = [
            { text: 'S.No.', style: 'tableHeader', alignment: 'center' },
            { text: 'KRA DESCRIPTION*', style: 'tableHeader', alignment: 'center' },
            { text: 'CATEGORIZATION*', style: 'tableHeader', alignment: 'center' },
            { text: 'WEIGHTAGE*[in %]', style: 'tableHeader', alignment: 'center' },
            { text: 'Metrics ', style: 'tableHeader', alignment: 'center' },
            { text: 'KRA Measure of Success', style: 'tableHeader', alignment: 'center' },
            { text: 'Year End Review', style: 'tableHeader', alignment: 'center' },
            { text: 'Employee Comments', style: 'tableHeader', alignment: 'center' },
            { text: 'Managers Comment', style: 'tableHeader', alignment: 'center' },
            { text: 'Reviewers Comment', style: 'tableHeader', alignment: 'center' },
            { text: 'Final Performance Rating', style: 'tableHeader', alignment: 'center' }
        ];
        let bodyData = [];
        bodyData.push(headerData);
        bodyData.push(subHeaderData);

        return bodyData;
    }
    preparePdf(){
        let bodyData = this.prepareBody();
        var dd = {
            pageOrientation: 'landscape',
            pageSize: 'LEGAL',
            content: [
                {
                    style: 'tableExample',
                    color: '#444',
                    table: {
                        widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'
                            , 'auto', 'auto', 'auto', 'auto', 'auto'
                        ],
                        headerRows: 2,
                        // keepWithHeaderRows: 1,
                        body: bodyData
                    }
                }
            ]
          };
        pdfMake.createPdf(dd).download();
    }
    ngOnInit() {
        this.preparePdf();
    }

   
}