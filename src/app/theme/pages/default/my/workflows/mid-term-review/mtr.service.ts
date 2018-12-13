import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../../../base/_services/authService.service";

@Injectable()
export class MtrService {

    constructor(private authService: AuthService) {
    }

    getEmployeeMtrWorkFlowInfo(emp_id?: number): Observable<Response> {
        let url = "midterm/getMtrDetailsSingleEmployee?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getMtrBySupervisor(supervisorId?: number): Observable<Response> {
        let url = "midterm/getMtrBySupervisor?supervisor_id=" + supervisorId;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
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