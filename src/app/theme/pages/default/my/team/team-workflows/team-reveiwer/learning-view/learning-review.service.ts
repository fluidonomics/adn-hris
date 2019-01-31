import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../../../../../base/_services/authService.service";

@Injectable()
export class LearningReviewService {
    constructor(private authService: AuthService) {
    }
    
    getLearningInfo(master_id: number): Observable<Response> {

        let url = "learning/lerningdetails?master_id=" + master_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getLearningByReviewer(reviewerId: number): Observable<Response> {
        let url = "learning/learningbyreviewer?reviewerId=" + reviewerId;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmployeeLearningDetails(master_id?: number): Observable<Response> {
        let url = "learning/lerningdetails?master_id=" + master_id;
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