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

    _currentEmpId: number;
    documentsData: any = [];

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
        //     this._authService.validateToken().subscribe(
        //         res => {
        //             this._currentEmpId = this._authService.currentUserData._id;
        //             this.initData();
        //    });
        this.initData();
    }

    initData() {
        this.documentsData = [
            {
                "documentName": "abaccc 1",
                "documentUrl": "./assets 1",
                "uploadDocument": {
                    "_id": null,
                    "documentsUrl": "./assets1"
                }
            },
            {
                "documentName": "abaccc2",
                "documentUrl": "./assets2",
                "uploadDocument": {
                    "_id": 1,
                    "documentsUrl": "./assets2"
                }
            },
            {
                "documentName": "abaccc3",
                "documentUrl": "./assets3",
                "uploadDocument": {
                    "_id": null,
                    "documentsUrl": "./assets3"
                }
            }
        ]
        // // this._myService.getDocuments(this._currentEmpId)
        // //     .subscribe(
        // //     data => {
        // //         if (data.ok) {
        // //             this.documentsData = data.json();
        // //         }
        // //     },
        // //     error => {
        // // });
    }

    onUploadOutput(output: UploadOutput, fileName: string): void {
        let atCurrentAuthData = this._authService.currentAuthData;
        if (output.type === 'allAddedToQueue') { // when all files added in queue
            const event: UploadInput = {
                fieldName: 'employeeExternalDocuments',
                type: 'uploadAll',
                url: environment.api_base.apiBase + '/' + environment.api_base.apiPath + '/upload/document',
                headers: {
                    'access-token': atCurrentAuthData.accessToken,
                    'client': atCurrentAuthData.client,
                    'expiry': atCurrentAuthData.expiry,
                    'token-type': atCurrentAuthData.tokenType,
                    'uid': atCurrentAuthData.uid
                },
                method: 'POST',
            };
            this.uploadInput.emit(event);
        } else if (output.type === 'done') {
            if (output.file.responseStatus == 200) {
                swal({ type: 'success', title: 'Upload successfully', text: fileName.toLocaleUpperCase(), showConfirmButton: false, timer: 800 })
            }
            else {
                swal("Error!", "Error on Upload " + fileName, "error");
            }
        }
    }

    // showPdf(pdfLink) {
    //     // swal({
    //     //     imageUrl: imageLink ? environment.content_api_base.imgBase + imageLink : environment.content_api_base.imgBase + environment.content_api_base.noImagePath,
    //     //     imageHeight: 700,
    //     //     showConfirmButton: false,
    //     // });
    // }

    removeDocument(pdfLink, index) {
        // let isdeleted = pdfLink ? this.deleteDocImage(pdfLink): this.showDeleteMessage();
    }

    deleteDocImage(pdfLink, index) {
        // this._myService.deletePdf({ key: pdfLink }).subscribe(
        //     res => {
        //         if (res.ok) {
        //             this.documentsData[index].documentUrl = null;
        //             swal("Deleted", "Successfully", "success");
        //         }
        //     },
        //     error => {
        // });
    }

    showDeleteMessage() {
        swal("Error!", "Pdf not found", "error");
    }
}