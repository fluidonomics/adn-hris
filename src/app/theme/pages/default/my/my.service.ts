import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../base/_services/authService.service";

@Injectable()
export class MyService {
    constructor(private authService: AuthService,
        private http: Http) {
    }

    // verify() {
    //     let url="/verify";
    //     return this.authService.get(url).map((response: Response) => response.json());
    // }

    // forgotPassword(email: string) {
    //     let url="/verify";
    //     return this.authService.post('/api/forgot-password', JSON.stringify({ email })).map((response: Response) => response.json());
    // }

    // getAll() {
    //     let url="/user";
    //     return this.authService.get(url).map((response: Response) => response.json());
    // }

    // getById(id: number) {
    //     let url="/user?id"+id;
    //     return this.authService.get(url + id).map((response: Response) => response.json());
    // }

    // create(user: User) {
    //     let url="/user";
    //     return this.authService.post(url, user).map((response: Response) => response.json());
    // }

    // update(user: User) {
    //     let url="/user?id"+user.id;
    //     return this.authService.put(url, user).map((response: Response) => response.json());
    // }

    // delete(id: number) {
    //     let url="/user?id"+id;
    //     return this.authService.delete('/api/user/' + id).map((response: Response) => response.json());
    // }

    // private helper methods
    // private jwt() {
    //     // create authorization header with jwt token
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.token) {
    //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //         return new RequestOptions({ headers: headers });
    //     }
    // }


    getPersonalInfo(emp_id?: number): Observable<Response> {
        let url = "user/getPersonalInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getBankDetails(emp_id?: number): Observable<Response> {
        let url = "user/getBankDetails?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getSalaryDetails(emp_id?: number): Observable<Response> {
        let url = "user/getSalaryDetails?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getAddressDetails(emp_id?: number): Observable<Response> {
        let url = "user/getAddressDetails?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getDocuments(emp_id?: number): Observable<Response> {
        let url = "user/getDocuments?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getCarDetails(emp_id?: number): Observable<Response> {
        let url = "user/getCarDetails?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    getAcademicInfo(emp_id?: number): Observable<Response> {
        let url = "user/getAcademicInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getPositionDetails(emp_id?: number): Observable<Response> {
        let url = "user/getPositionDetails?emp_id=" + emp_id;
        return this.authService.get(url + emp_id).map(this.extractData).catch(this.handleError);
    }

    getCertifications(emp_id?: number): Observable<Response> {
        let url = "user/getCertifications?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getTraniningInfo(emp_id?: number): Observable<Response> {
        let url = "user/getTraniningInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmployementDetails(emp_id?: number): Observable<Response> {
        let url = "user/getPreviousEmployementHistory?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getFamilyDetails(emp_id?: number): Observable<Response> {
        let url = "user/familyDetails?emp_id=" + emp_id;
        return this.authService.get(url + emp_id).map(this.extractData).catch(this.handleError);
    }

    getOfficeDetails(emp_id?: number): Observable<Response> {
        let url = "user/officeDetails?emp_id=" + emp_id;
        return this.authService.get(url + emp_id).map(this.extractData).catch(this.handleError);
    }

    getPayrollDetails(emp_id?: number): Observable<Response> {
        let url = "user/payrollDetails?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getSeperationDetails(emp_id?: number): Observable<Response> {
        let url = "user/seperationDetails?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    savePersonalInfo(data: any): Observable<Response> {
        {
            let url = "user/addPersonalInfo"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updatePersonalInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    }

    saveBankDetails(data: any): Observable<Response> {
        {
            let url = "user/addBank"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateBank";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    }

    saveSalaryDetails(data: any): Observable<Response> {
        {
            let url = "user/addSalaryInfo"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateSalaryInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    }

    saveCarDetails(data: any): Observable<Response> {
        {
            let url = "user/addCarDetails"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateCarDetails";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
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