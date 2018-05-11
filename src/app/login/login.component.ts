import { Component, ComponentFactoryResolver, OnInit, PLATFORM_ID, Inject, ElementRef, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { ScriptLoaderService } from "../_services/script-loader.service";
import { AuthService } from "../base/_services/authService.service";
// import { AlertService } from "./_services/alert.service";
// import { UserService } from "./_services/user.service";
// import { AlertComponent } from "./_directives/alert.component";
// import { LoginCustom } from "./_helpers/login-custom";
import { Helpers } from "../helpers";
import { CommonService } from "../base/_services/common.service";
import { StylesCompileDependency } from "@angular/compiler";


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
    errorMsg="";
    // @ViewChild('loginForm') loginForm: ElementRef;
    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        // private _script: ScriptLoaderService,
        // private _cfr: ComponentFactoryResolver,
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
    }


    ngOnInit() {
        //this.remember = true;
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);
        // this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
        //     .then(() => {
               
        // });
        Helpers.setLoading(false);
    }

    login() {
        // if (form.valid) {
            this.loading = true;
            this._authService.login(this.loginModel)
                .subscribe(
                data => {
                   
                    this._router.navigate([this.returnUrl]);
                },
                error => {
                    this.errorMsg= error.json().error.message ||error;
                    this.error = true;
                    this.loading = false;
                });
        // }
        // else {
        //     this.loginForm.nativeElement.className = this.loginForm.nativeElement.className + ' ng-submited';
        // }
    }
}