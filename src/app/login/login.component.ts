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


@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
    model: any = {

    };
    loading = false;
    returnUrl: string;
    loginModel: any = {

    };
    error = false;
    @ViewChild('loginForm') loginForm: ElementRef;
    //@ViewChild('alertSignin', { read: ViewContainerRef }) alertSignin: ViewContainerRef;
    // @ViewChild('alertSignup', { read: ViewContainerRef }) alertSignup: ViewContainerRef;
    //@ViewChild('alertForgotPass', { read: ViewContainerRef }) alertForgotPass: ViewContainerRef;

    // constructor(private _router: Router,
    //     private _script: ScriptLoaderService,
    //     //private _userService: UserService,
    //     private _route: ActivatedRoute,
    //     private _authService: AuthService,
    //     //private _alertService: AlertService,
    //     private cfr: ComponentFactoryResolver) {
    // }

    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _script: ScriptLoaderService,
        private _cfr: ComponentFactoryResolver,
        private _route: ActivatedRoute,
        public _router: Router,
        private _authService: AuthService,
    ) {
        title.setTitle('ADN HRIS | Login');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Login.' },
            { name: 'description', content: 'Login.' }
        ]);
    }


    ngOnInit() {
        this.model.remember = true;
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(() => {
                Helpers.setLoading(false);
                // /LoginCustom.init();
            });
    }

    login(form) {
        if (form.valid) {
            this.loading = true;
            this._authService.login(this.loginModel)
                .subscribe(
                data => {
                    this._router.navigate([this.returnUrl]);
                },
                error => {
                    //this.showAlert('alertSignin');
                    //this._alertService.error(error);
                    this.error = true;
                    this.loading = false;
                });
        }
        else {
            this.loginForm.nativeElement.className = this.loginForm.nativeElement.className + ' ng-submited';
        }
    }

    showAlert(target) {
        // this[target].clear();
        // let factory = this.cfr.resolveComponentFactory(AlertComponent);
        // let ref = this[target].createComponent(factory);
        // ref.changeDetectorRef.detectChanges();
    }
}