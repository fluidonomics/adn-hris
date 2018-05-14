import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ScriptLoaderService } from "../../_services/script-loader.service";
import { Helpers } from "../../helpers";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import swal from "sweetalert2";


@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: './reset-password.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ResetPasswordComponent {
    resetModel: any = {};
    isLinkExpire=false;
    isResetSection=false;

    constructor(private _router: Router,
        private _script: ScriptLoaderService,
        private _route: ActivatedRoute,
        private http: Http
    ) {
        this.resetModel.token = this._route.snapshot.params['token'];
    }

    ngOnInit() {
        let url= environment.api_base.apiBase + "/" +environment.api_base.apiPath + "/auth/reset"
        this.http.get(url+"/"+this.resetModel.token).map(this.extractData).catch(this.handleError).subscribe( data => {
            if (data.status!=200) {
                this.isLinkExpire=true;
                Helpers.setLoading(false);
            }
            if (data.status==200) {
                this.isResetSection=true;
                Helpers.setLoading(false);
            }
        },
        error => {
            this.isLinkExpire=true;
            Helpers.setLoading(false);
        });
      
    }

    resetPassword() {
        let url= environment.api_base.apiBase + "/" +environment.api_base.apiPath + "/auth/reset"
        this.http.post(url, this.resetModel).map(this.extractData).catch(this.handleError).subscribe( data => {
             swal({
                type: 'success',
                text: 'Password changed successfully!',
                showCancelButton: false,
                allowOutsideClick:false,
                allowEscapeKey:false,
                confirmButtonText: 'OK',
              }).then((result) => {
                if (result.value) {
                    this._router.navigate(['login'])
                }
              })
        },
        error => {
            
        });
    }

    
    private extractData(res: Response) {
        return res || {};
        // let body = res.json();
        // return body || { };
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}