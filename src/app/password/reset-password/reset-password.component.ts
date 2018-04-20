import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ScriptLoaderService } from "../../_services/script-loader.service";
import { Helpers } from "../../helpers";
import { AuthService } from "../../base/_services/authService.service";

@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: './reset-password.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ResetPasswordComponent {
    loading = false;
    returnUrl: string;
    resetModel: any = {};

    //@ViewChild('alertSignin', { read: ViewContainerRef }) alertSignin: ViewContainerRef;
    //@ViewChild('alertForgotPass', { read: ViewContainerRef }) alertForgotPass: ViewContainerRef;

    constructor(private _router: Router,
        private _script: ScriptLoaderService,
        private _route: ActivatedRoute,
        private _authService: AuthService,
        private cfr: ComponentFactoryResolver) {
        this.resetModel.token = this._route.snapshot.params['token'];
    }

    ngOnInit() {
        //this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        //this._router.navigate([this.returnUrl]);

        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(() => {
                Helpers.setLoading(false);
            });
    }

    resetPassword() {
        this.loading = true;
        this._authService.reset(this.resetModel)
            .subscribe(
            data => {
                // this._router.navigate([this.returnUrl]);
                this.loading = false;
            },
            error => {
                //this.showAlert('alertSignin');
                //this._alertService.error(error);
                this.loading = false;
            });
    }
}