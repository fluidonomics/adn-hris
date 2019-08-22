import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../../../../../base/_services/authService.service";

@Injectable()
export class PipReviewService {
   constructor(private authService: AuthService) {
   }

   getPipDetails(master_id?: number): Observable<Response> {
      let url = "pip/getpipdetails?master_id=" + master_id;
      return this.authService.get(url).map(this.extractData).catch(this.handleError);
   }

   getPipInfo(emp_id?: number): Observable<Response> {
      let url = "pip/getpipmaster?emp_id=" + emp_id;
      return this.authService.get(url).map(this.extractData).catch(this.handleError);
   }

   getPipBySupervisor(supervisor_id: number, status: string, fiscalYearId: string): Observable<Response> {
      let url = "pip/supervisorgetpipdetails?supervisor_id=" + supervisor_id + "&status=" + status+ "&fiscalYearId=" + fiscalYearId;
      return this.authService.get(url).map(this.extractData).catch(this.handleError);
   }

   getPipByReviewer(reviewerId: number): Observable<Response> {
      let url = "pip/pipbyreviewer?reviewerId=" + reviewerId;
      return this.authService.get(url).map(this.extractData).catch(this.handleError);
   }
   updateMaster(data) {
      let url = "pip/updatepipmaster";
      return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
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