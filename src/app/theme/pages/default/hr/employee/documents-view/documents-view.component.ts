import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { UtilityService } from "../../../../../../base/_services/utilityService.service";
import { AuthService } from "../../../../../../base/_services/authService.service";
import { CommonService } from "../../../../../../base/_services/common.service";
//import { MyService } from "../my.service";
import { environment } from "../../../../../../../environments/environment";
import swal from 'sweetalert2';
import * as FileSaver from 'file-saver';



@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--documents",
    templateUrl: "./documents-view.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ["./documents-view.component.css"]
})

export class DocumentsViewComponent implements OnInit {

    param_emp_id: number;
    documentsData: any = []
    contentBase: any;
    currentDate:any;

    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        private _authService: AuthService,
        private _utilityService:UtilityService,
        private _commonService:CommonService,
        //private _myService: MyService
    ) {
        title.setTitle('ADN HRIS | My Documents');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Employee Documents' },
            { name: 'description', content: 'Employee Documents' }
        ]);
        this.currentDate = new Date();
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            if (params['id']) {
                this.param_emp_id = params['id'];
            }
            this._authService.validateToken().subscribe(
                res => {
                    this.initData();
                });
        });
        this.contentBase = environment.content_api_base.apiBase;
    }

    initData() {
        this._commonService.getEmployeeExternalDocument(this.param_emp_id)
            .subscribe(
            data => {
                if (data.ok) {
                    this.documentsData = data.json();
                }
            },
            error => {
            });
    }
   
    goToUrl(url: string) {
        var link =this.contentBase + url;
        window.open(link,'_blank');
    }
}