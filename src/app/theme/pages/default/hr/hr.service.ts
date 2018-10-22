import { Injectable, } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../base/_services/authService.service"

@Injectable()
export class HrService {
    constructor(private authService: AuthService) {
    }

    addEmployee(data: any): Observable<Response> {
        let url = "user/addEmployee";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    getAllEmployee() {
        let url = "user/getAllEmployee";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    getEmployeeDetails(empId: number) {
        let url = "user/getEmployeeDetails?emp_id=" + empId;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    loadDivision() {
        let url = "master/getAllDivision";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }



    saveBulkKra(data: any) {
        let url = "kra/addBulkKra";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }


    private extractData(res: Response) {
        return res || {};
        // let body = res.json();
        // return body || { };
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