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

    getBankInfo(emp_id?: number): Observable<Response> {
        let url = "user/getBankInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getSalaryInfo(emp_id?: number): Observable<Response> {
        let url = "user/getSalaryInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getAddressInfo(emp_id?: number): Observable<Response> {
        let url = "user/getAddressInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getDocumentsInfo(emp_id?: number): Observable<Response> {
        let url = "user/getDocumentsInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getCarInfo(emp_id?: number): Observable<Response> {
        let url = "user/getCarInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    getAcademicInfo(emp_id?: number): Observable<Response> {
        let url = "user/getAcademicInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getPositionDetails(emp_id?: number): Observable<Response> {
        let url = "user/getPositionInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getCertificationInfo(emp_id?: number): Observable<Response> {
        let url = "user/getCertificationInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getPreviousEmploymentInfo(emp_id?: number): Observable<Response> {
        let url = "user/getPreviousEmploymentInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getFamilyInfo(emp_id?: number): Observable<Response> {
        let url = "user/getFamilyInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getOfficeDetails(emp_id?: number): Observable<Response> {
        let url = "user/getOfficeInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getSeperationDetails(emp_id?: number): Observable<Response> {
        let url = "user/seperationInfo?emp_id=" + emp_id;
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
    
    saveAddressInfo(data: any): Observable<Response> {
        {
            let url = "user/addAddressInfo"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateAddressInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    }

    saveDocumentsInfo(data: any): Observable<Response> {
        {
            let url = "user/addDocumentsInfo"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateDocumentsInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    }

    saveOfficeInfo(data: any): Observable<Response> {
        {
            let url = "user/addOfficeInfo"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateOfficeInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    }
    
    savePositionInfo(data: any): Observable<Response> {
        {
            let url = "user/addPositionInfo"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updatePositionInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    }

    saveBankDetails(data: any): Observable<Response> {
        {
            let url = "user/addBankInfo"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateBankInfo";
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
        let url = "user/addCarInfo"
        if (data._id != null && data._id != "" && data._id != undefined) {
            url = "user/updateCarInfo";
        }
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }



    saveAcademicInfo(data: any): Observable<Response> {
        let url = "user/addAcademicInfo"
        if (data._id != null && data._id != "" && data._id != undefined) {
            url = "user/updateAcademicInfo";
        }
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    saveCertificationInfo(data: any): Observable<Response> {
        {
            let url = "user/addCertificationInfo"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateCertificationInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    }

    savePreviousEmploymentInfo(data: any): Observable<Response> {
        {
            let url = "user/addPreviousEmploymentInfo"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updatePreviousEmploymentInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    }

    saveFamilyInfo(data: any): Observable<Response> {
        {
            let url = "user/addFamilyInfo"
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateFamilyInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    }

    saveKra(data: any): Observable<Response> {
        {
            let url = "kra/addKraInfo"
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    }

    deleteAcademicInfo(_id: number) {
        let url = "user/deleteAcademicInfo?_id=" + _id;
        return this.authService.delete(url).map(this.extractData).catch(this.handleError);
    }

    deletePreviousEmploymentInfo(_id: number) {
        let url = "user/deletePreviousEmploymentInfo?_id=" + _id;
        return this.authService.delete(url).map(this.extractData).catch(this.handleError);
    }

    deleteFamilyInfo(_id: number) {
        let url = "user/deleteFamilyInfo?_id=" + _id;
        return this.authService.delete(url).map(this.extractData).catch(this.handleError);
    }
    
    deleteCertificationInfo(_id: number) {
        let url = "user/deleteCertificationInfo?_id=" + _id;
        return this.authService.delete(url).map(this.extractData).catch(this.handleError);
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