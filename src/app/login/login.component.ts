import { Component, ComponentFactoryResolver, OnInit, PLATFORM_ID, Inject, ElementRef, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { ScriptLoaderService } from "../_services/script-loader.service";
import { AuthService } from "../base/_services/authService.service";
import { Helpers } from "../helpers";
import { CommonService } from "../base/_services/common.service";



@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
    loading = false;
    returnUrl: string;
    loginModel: any = {

    };
    error = false;
    errorMsg = "";
    // @ViewChild('loginForm') loginForm: ElementRef;
    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        public _router: Router,
        private _authService: AuthService,
    ) {
        title.setTitle('ADN HRIS | Login');
        meta.addTags([
            { name: 'author', content: 'LogiN Adn' },
            { name: 'keywords', content: 'Login.' },
            { name: 'description', content: 'Login.' }
        ]);
        // setTimeout(function(){window.location.reload()}, 1000);
        // clearTimeout();
    }


    ngOnInit() {
        //this.remember = true;
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);
        Helpers.setLoading(false);
    }

    login() {
        this.loading = true;
        this._authService.login(this.loginModel)
            .subscribe(
            data => {

                this._router.navigate([this.returnUrl]);
            },
            error => {
                // this.errorMsg = error.json().error.message || error "Error to login";
                this.errorMsg = "Error to login";
                this.error = true;
                this.loading = false;
            });
    }
}