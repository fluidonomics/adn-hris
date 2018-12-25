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

    getEmployeesForPapInitiate() {
        let url = "pap/getEmployeesForPapInitiate";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    initiatePapProcess(data) {
        let url = "pap/initiatePapProcess";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }
    getPAPBatches(emp_id?: number): Observable<Response> {
        let url = "pap/getPapBatches?currentUserId=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getPapDetailsSingleEmployee(emp_id: number) {
        let url = "pap/getPapDetailsSingleEmployee?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        let data = res.json() || {};
        if (data.result && data.result.message) {
            return data.result.message;
        } else {
            return null;
        }
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