import { Injectable } from '@angular/core';
import { AuthService } from '../../../../base/_services/authService.service';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PapService {

    constructor(
        private authService: AuthService
    ) { }


    private extractData(res: Response) {
        return res || {};
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