import { Injectable, } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../../../base/_services/authService.service"


@Injectable()
export class BatchService {
    constructor(private authService: AuthService,
        private http: Http) {
    }
    
    saveBatch(data:any):Observable<Response> 
    {
        let url = "batch/addBatchInfo";
        if (data._id) {
            url = "batch/updateBatchInfo"
        }
        return this.authService.post(url,data).map(this.extractData).catch(this.handleError);
    }

    saveKraWorkFlow(data:any):Observable<Response> 
    {
        let url = "kra/addKraWorkFlowInfo"
        if(data._id)
        {
            url = "kra/updateKraWorkFlowInfo"
        }
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
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