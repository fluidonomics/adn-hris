import { Component, OnInit, ViewEncapsulation, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from "@angular/platform-browser";
import { Helpers } from '../../../../helpers';
import { DocumentService } from "../../../../base/_services/documentService.service";
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import * as FileSaver from 'file-saver';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./dashboard.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit, AfterViewInit {

    fileUrl: String = "adn-test-bucket/externalDocuemnt/PMS+Presentation+-+180918.pptx";
    fileName: String = "performance_management";

    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _documentService: DocumentService,
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

    downloadPdf(fileUrl, fileName) {
        this._documentService.downloadPpt(fileUrl).subscribe((response) => {
            var mediaType = 'application/pptx';
            var blob = new Blob([response['_body']], { type: mediaType });
            //var filename = fileName.split(' ').join('_') + '_' + '.pdf';
            var filename = "performance_management" + '.pptx';
            FileSaver.saveAs(blob, filename);
        });
    }

}