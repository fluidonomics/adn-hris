import { Injectable, Inject, PLATFORM_ID, } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../_services/authService.service";

@Injectable()
export class leaveService {
    
    constructor(@Inject(PLATFORM_ID) private platformId: Object,private authService: AuthService, private http: Http){

    }
    
    getLeaveType(): Observable<Response> {
        let url = "leave/getLeaveTypes";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    getEmaiDetailsOfEmployee(): Observable<Response> {
        let url = "leave/getEmployeEmailDetails";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    postEmployeeLeaveDetails(leavesData: any): Observable<Response> {
        let url = "leave/applyLeave";
        return this.authService.post(url, leavesData).map(this.extractData).catch(this.handleError);
    }
    private extractData(res: Response) {
        return res || {} ;
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