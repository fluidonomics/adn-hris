import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../base/_services/authService.service";
import swal from 'sweetalert2';

@Injectable()
export class LearningService {

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

    initBatch(data) {
        let url = "learning/initiateLearningProcess";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }


    // getLearningBatches(emp_id?: number): Observable<Response> {
    //    let url = "learning/getlearningmaster?empId=" + emp_id;
    //    return this.authService.get(url).map(this.extractData).catch(this.handleError);
    // }

    saveLearning(data: any): Observable<Response> {
        let url = "learning/postlearning";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    getEmployeeLearningInfo(emp_id?: number): Observable<Response> {
        let url = "learning/getlearningmaster?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmployeeLearningDetails(master_id?: number): Observable<Response> {
        let url = "learning/lerningdetails?master_id=" + master_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    submitLearningAgendas(data: any): Observable<Response> {
        let url = "learning/submitlearning";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    getLearningBatches(empId?: number): Observable<Response> {
        let url = "learning/getlearningbatch?empId=" + empId;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    updateBatch(data) {
        let url = "learning/updatebatch";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    getLearningBySupervisor(supervisorId: number, learningStatus: string): Observable<Response> {
        let url = "learning/learningbysuperviser?supervisorId=" + supervisorId + '&status=' + learningStatus;
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