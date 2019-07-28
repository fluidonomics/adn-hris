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

    getEmployeesForPapInitiate(fiscalYearId: any) {
        let url = "pap/getEmployeesForPapInitiate?fiscalYearId=" + fiscalYearId;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    getEmployeesForGrievance(): Observable<Response> {
        let url = "pap/getEmployeesForGrievance";
        return this.authService.get(url).catch(this.handleError);
    }
    getEmployeesForFeedbackInit() {
        let url = "pap/getEmployeesForFeedbackInit";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    initiatePapProcess(data) {
        let url = "pap/initiatePapProcess";
        return this.authService.post(url, data).catch(this.handleError);
    }

    terminatePap(data) {
        let url = "pap/terminatePap";
        return this.authService.post(url, data).catch(this.handleError);
    }

    raiseGreivance(data) {
        let url = "pap/initiateGrievance";
        return this.authService.post(url, data).catch(this.handleError);
    }
    getPAPBatches(emp_id?: number, empName?: string, fiscalYearId?: string): Observable<Response> {
        let url = "pap/getPapBatches?currentUserId=" + emp_id + "&fiscalYearId=" + fiscalYearId;
        if (empName) {
            url += '&empName=' + empName;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    papUpdate(data: any): Observable<Response> {
        let url = "pap/papUpdate";
        return this.authService.post(url, data).catch(this.handleError);
    }
    papUpdateSupervisor(data: any): Observable<Response> {
        let url = "pap/papUpdateSupervisor";
        return this.authService.post(url, data).catch(this.handleError);
    }
    papUpdateReviewer(data: any): Observable<Response> {
        let url = "pap/papUpdateReviewer";
        return this.authService.post(url, data).catch(this.handleError);
    }
    papSubmit(data: any): Observable<Response> {
        let url = "pap/papSubmit";
        return this.authService.post(url, data).catch(this.handleError);
    }
    papSubmitToReviewer(data: any): Observable<Response> {
        let url = "pap/papSubmitToReviewer";
        return this.authService.post(url, data).catch(this.handleError);
    }
    papInitiateFeedback(data: any): Observable<Response> {
        let url = "pap/initiateFeedback";
        return this.authService.post(url, data).catch(this.handleError);
    }



    getPapDetailsSingleEmployee(emp_id: number) {
        let url = "pap/getPapDetailsSingleEmployee?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getPapBySupervisor(empId: number) {
        let url = "pap/getPapBySupervisor?empId=" + empId;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getPapByReviewer(empId: number) {
        let url = "pap/getPapByReviewer?empId=" + empId;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    updateBatch(data: any): Observable<Response> {
        let url = "pap/updateBatch";
        return this.authService.post(url, data).catch(this.handleError);
    }

    releaseFeedback(data: any) {
        let url = "pap/releaseFeedback";
        return this.authService.post(url, data).catch(this.handleError);
    }

    initGrievancePhase(data) {
        let url = "pap/initGrievancePhase";
        return this.authService.post(url, data).catch(this.handleError);
    }

    getAllPap() {
        let url = "pap/getAllPap";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmployeesForGrievanceFeedbackInit() {
        let url = "pap/getEmployeesForGrievanceFeedbackInit";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    papInitiateGrievanceFeedback(data: any): Observable<Response> {
        let url = "pap/initiateGrievanceFeedback";
        return this.authService.post(url, data).catch(this.handleError);
    }

    releaseGrievanceFeedback(data: any) {
        let url = "pap/releaseGrievanceFeedback";
        return this.authService.post(url, data).catch(this.handleError);
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