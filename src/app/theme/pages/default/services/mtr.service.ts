import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../base/_services/authService.service";

@Injectable()
export class MtrService {

    constructor(private authService: AuthService) {
    }

    getEmployeeMtrWorkFlowInfo(emp_id?: number): Observable<Response> {
        let url = "midterm/getMtrDetailsSingleEmployee?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getMtrBySupervisor(supervisorId: number, mtrStatus: string): Observable<Response> {
        let url = "midterm/getMtrBySupervisor?supervisorId=" + supervisorId + '&status=' + mtrStatus;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }


    getMtrBatches(emp_id?: number): Observable<Response> {
        let url = "midterm/getMtrBatches?empId=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    deleteKra(data: any): Observable<Response> {
        let url = "midterm/deleteMtrKra";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }
    saveKra(data: any): Observable<Response> {
        let url = "midterm/postNewMtrKra";
        if (data._id) {
            url = "midterm/updateMtr";
        }
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }
    saveKraWorkFlow(data: any): Observable<Response> {
        let url = "midterm/mtrSubmit"
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    getMtrDetails(mtrMasterId?: number): Observable<Response> {
        let url = "midterm/getMtrDetails?mtrMasterId=" + mtrMasterId;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    mtrApproval(data: any): Observable<Response> {
        return this.authService.post("midterm/mtrApproval", data).map(this.extractData).catch(this.handleError);
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