import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response, ResponseContentType } from "@angular/http";
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DocumentService {
    CONTENT_API_BASE = environment.content_api_base.apiBase;

    constructor(private _http: Http) {
    }

    downloadPdf(fileUrl?: number): Observable<Response> {
        let headers = new Headers();
        headers.append('Accept', 'application/pdf');
        let url = this.CONTENT_API_BASE + fileUrl;
        return this._http.get(url, { headers: headers, responseType: ResponseContentType.Blob }).catch(this.handleError);
    }

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