import { Component, ComponentFactoryResolver, OnInit, PLATFORM_ID, Inject, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { ScriptLoaderService } from "../../_services/script-loader.service";
import { AuthService } from "../../base/_services/authService.service";
import { Helpers } from "../../helpers";

@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: './forget-password.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ForgetPasswordComponent {
    loading = false;
    forgetModel: any = {};
    isForgetPassword: boolean = true;

    constructor(private _router: Router,
        private _script: ScriptLoaderService,
        private _route: ActivatedRoute,
        private _authService: AuthService,
    ) {
    }

    ngOnInit() {
    }

    forgetPassword() {
        this.loading = true;
        this._authService.forget(this.forgetModel)
            .subscribe(
            data => {
                if (data.ok) {
                    this.loading = false;
                    this.isForgetPassword = false;
                }
            },
            error => {
                this.loading = false;
            });
    }
}