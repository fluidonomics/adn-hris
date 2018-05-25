import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { CommonService } from "../../../../../base/_services/common.service";
import { AuthService } from "../../../../../base/_services/authService.service";
import { MyService } from "../my.service";
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { environment } from "../../../../../../environments/environment";
import swal from 'sweetalert2';
declare var mApp;
declare var $;

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--documents",
    templateUrl: "./documents.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ["./documents.component.css"]
})

export class DocumentsComponent implements OnInit {
    options: UploaderOptions;
    uploadInput: EventEmitter<UploadInput>;
    humanizeBytes: Function;
    currentDate: any = new Date();

    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _myService: MyService
    ) {
        title.setTitle('ADN HRIS | My Documents');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Employee Documents' },
            { name: 'description', content: 'Employee Documents' }
        ]);

        this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = humanizeBytes;
        this.currentDate = new Date();
    }
    ngOnInit() {

    }
}