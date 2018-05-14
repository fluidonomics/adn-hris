import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../../base/_services/authService.service";

@Injectable()
export class MyTeamService {
    constructor(private authService: AuthService) {
    }

    getProfileProcessInfo(empId?:number):Observable<Response> {
        let url = "user/getProfileProcessInfo" 
        if(empId)
        {
           url = "user/getProfileProcessInfo?emp_id="+empId 
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    saveProfileStatus(data: any): Observable<Response> {
        {
            let url = "user/addProfileProcessInfo"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateProfileProcessInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    }

    deleteImage(data:any)
    {
        let url = "upload/deleteImage";
        return this.authService.post(url,data).map(this.extractData).catch(this.handleError);
    }

    getAllEmployee() {
        let url = "user/getAllEmployee";
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