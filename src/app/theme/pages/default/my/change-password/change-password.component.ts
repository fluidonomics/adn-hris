import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { DocumentService } from "../../../../../base/_services/documentService.service";
import { UtilityService } from "../../../../../base/_services/utilityService.service";
import { CommonService } from "../../../../../base/_services/common.service";
import { MyService } from "../my.service";
import { AuthService } from "../../../../../base/_services/authService.service";
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { environment } from "../../../../../../environments/environment";
import swal from 'sweetalert2';
import * as FileSaver from 'file-saver';



@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--documents",
    templateUrl: "./change-password.component.html",
    encapsulation: ViewEncapsulation.None,
})

export class ChangePasswordComponent implements OnInit {
    _currentEmpId: number;
    password:any={};


    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        private _authService: AuthService,
        private _commonService:CommonService,
        private _myService: MyService
    ) {
        title.setTitle('ADN HRIS | Change Password');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Change Password' },
            { name: 'description', content: 'Change Password' }
        ]);
    }

    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
            });
    }

    changePassword(form)
    {
      this._myService.changePassword(this.password).subscribe(
        res => {
            if(res.ok)
            {
                if(res.status==201)
                {
                    swal({
                        type: 'warning',
                        title: 'Oops!',
                        text: "Old password didn't match."
                    });
                }
                else{
                    form.resetForm();
                    swal({
                        type: 'success',
                        title: 'Success',
                        titleText: "Password changed successfully.",
                    });
               }
            }
        },
        error => {
            var d="abc";
        });
    }

}