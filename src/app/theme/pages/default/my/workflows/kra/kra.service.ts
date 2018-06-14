import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../../../base/_services/authService.service";

@Injectable()
export class KraService {
    constructor(private authService: AuthService) {
    }

    getEmployeeKraWorkFlowInfo(emp_id?: number): Observable<Response> {
        let url = "kra/getEmployeeKraWorkFlowInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getKraInfo(kraWorkflow_id?: number): Observable<Response> {
        let url = "kra/getKraInfo?kraWorkflow_id=" + kraWorkflow_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
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

    saveKra(data: any): Observable<Response> {
        let url = "kra/addKraInfo"
        if(data._id)
        {
            url = "kra/updateKraInfo"
        }
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    deleteKra(_id:number)
    {
        let url = "kra/deleteKraInfo?_id="+_id;
        return this.authService.delete(url).map(this.extractData).catch(this.handleError);
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