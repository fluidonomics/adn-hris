import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../base/_services/authService.service";
import swal from 'sweetalert2';

@Injectable()
export class PipService {

   progressStatuses = [
      {
         id: "InProgress",
         label: "In progress"
      },
      {
         id: "Completed",
         label: "Completed"
      }
   ];

   // Red(learning completed ), Amber(sent back by supervisor) and Green(approved by sup), default - nothing
   colorStatuses = [
      {
         id: "Green",
         label: "Green(going good)"
      },
      {
         id: "Yellow",
         label: "Yellow(Need help to complete KRA)"
      },
      {
         id: "Amber",
         label: "Amber(Not able to do complete KRA)"
      },
      {
         id: "Dropped",
         label: "Dropped"
      }
   ];

   constructor(private authService: AuthService) {
   }


   savePip(data: any): Observable<Response> {
      let url = "pip/insertpip";
      return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
   }

   submitPip(data: any): Observable<Response> {
      let url = "pip/submitpip";
      return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
   }

   getPipDetails(master_id?: number): Observable<Response> {
      let url = "pip/getpipdetails?master_id=" + master_id;
      return this.authService.get(url).map(this.extractData).catch(this.handleError);
   }

   getPipInfo(emp_id?: number): Observable<Response> {
      let url = "pip/getpipmaster?emp_id=" + emp_id;
      return this.authService.get(url).map(this.extractData).catch(this.handleError);
   }

   getPipBySupervisor(supervisor_id: number,status: string): Observable<Response> {
      let url = "pip/supervisorgetpipdetails?supervisor_id=" + supervisor_id + "&status=" + status;
      return this.authService.get(url).map(this.extractData).catch(this.handleError);
   }

   updateBatch(data) {
      let url = "pip/updatebatch";
      return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
   }

   getPipBatches(empId?: number): Observable<Response> {
      let url = "pip/getpipbatch?empId=" + empId;
      return this.authService.get(url).map(this.extractData).catch(this.handleError);
   }

   initBatch(data) {
      let url = "pip/initiatepip";
      return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
   }

   getPipByReviewer(reviewerId: number): Observable<Response> {
      let url = "pip/pipbyreviewer?reviewerId=" + reviewerId;
      return this.authService.get(url).map(this.extractData).catch(this.handleError);
  }


   private extractData(res: Response) {
      return res || {};
   }
   private handleError(err: Response | any) {
      debugger;
      if (err.status == 300) {
         let error = err.json() || {};
         swal("Error", error.title, "error");
      }

      return Observable.throw(err);
   }


}