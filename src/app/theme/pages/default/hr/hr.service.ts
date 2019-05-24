import { Injectable, } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../base/_services/authService.service";

declare var moment;

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
    getAllEmployeeForMTR() {
        let url = "midterm/getEmpDetailsForMidTermInitiate";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    loadDivision() {
        let url = "master/getAllDivision";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    updateSupervisortransferInfo(data: any){
        let url="user/updateSupervisortransferInfo";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }
    

    getEmployeeByGrade() {
        let url="dashboard/empcountbygrade";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    saveBulkKra(data: any) {
        let url = "kra/addBulkKra";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    getHrEmpRatio() {
        let url = "dashboard/hrempratio";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getKraDetails(fromDate?: number, toDate?: number) {
        let url = "dashboard/kraempdetails";
        if (fromDate) {
            url += "?fromDate=" + fromDate
        }
        if (toDate) {
            url += "&toDate=" + toDate
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getMtrDetails(fromDate?: number, toDate?: number) {
        let url = "dashboard/mtrdetails";
        if (fromDate) {
            url += "?fromDate=" + fromDate
        }
        if (toDate) {
            url += "&toDate=" + toDate
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmpKraDetails(fromDate?: number, toDate?: number) {
        let url = "dashboard/empdetails";
        if (fromDate) {
            url += "?fromDate=" + fromDate
        }
        if (toDate) {
            url += "&toDate=" + toDate
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmpMtrDetails(fromDate?: number, toDate?: number) {
        let url = "dashboard/mtrempdetails";
        if (fromDate) {
            url += "?fromDate=" + fromDate
        }
        if (toDate) {
            url += "&toDate=" + toDate
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmpByGrade() {

        let url = "dashboard/empgradeinfo";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getLearningDetails(fromDate?: number, toDate?: number) {
        let url = "dashboard/learningstatus";
        if (fromDate) {
            url += "?fromDate=" + fromDate
        }
        if (toDate) {
            url += "&toDate=" + toDate
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmpLearningDetails(fromDate?: number, toDate?: number) {
        let url = "dashboard/learningempdetails";
        if (fromDate) {
            url += "?fromDate=" + fromDate
        }
        if (toDate) {
            url += "&toDate=" + toDate
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getCurrentMonthDates() {
        let dateRange = [];
        let startDate = new Date();
        let cur_date = new Date();
        cur_date.setFullYear(startDate.getFullYear() - 1);
        // let y = moment(startDate).endOf('month');
        // let endDate = y._d;
        dateRange = [cur_date, new Date()];
        return dateRange;
    }

    getEmpTypeRatio() {
        let url = "dashboard/emptyperatio";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }


    saveBulkMtr(data: any) {
        let url = "midterm/initiateMidTermProcess";
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