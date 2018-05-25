import { Component, PLATFORM_ID, Input, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { CommonService } from "../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./bulkemail.component.html",
    encapsulation: ViewEncapsulation.None

})
export class BulkEmailComponent implements OnInit {



    disabled: boolean = false;

    bulkemail: any = {}



    options = {
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            //['height', ['height']],
            ['insert', ['picture', 'link', 'video', 'table']]
        ],
        placeholder: "Enter Email Data"
    }

    // options = {
    //     height: 300,
    //     focus: true,
    //     airMode: false,
    //     toolbar: [
    //             ['edit', ['undo', 'redo']],
    //             ['headline', ['style']],
    //             ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
    //             ['fontface', ['fontname']],
    //             ['textsize', ['fontsize']],
    //             ['fontclr', ['color']],
    //             ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
    //             ['height', ['height']],
    //             ['table', ['table']],
    //             ['insert', ['link', 'picture', 'video', 'hr']],
    //             ['view', ['fullscreen', 'codeview']],
    //             ['help', ['help']]
    //     ]
    // };
    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
    ) {
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);
    }

    ngOnInit() {
    }

    // modalOpen(content) {
    //     this.modalService.open(content).result.then((result) => {
    //         this.modalClose = `Closed with: ${result}`;
    //     }, (reason) => {
    //         this.modalClose = `Dismissed ${this.modalDismissReason(reason)}`;
    //     });
    // }


    // email validation here
    private emailValidator(control: FormControl) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    }


    sendEmail(form) {
        this._commonService.sendEmail(this.bulkemail)
            .subscribe(
            data => {
                if (data.ok) {
                    swal("E-mail has been sent!", "", "success");
                    form.resetForm();
                }
            },
            error => {
            });
    }
}

