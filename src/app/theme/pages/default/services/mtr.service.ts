import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthService } from "../../../../base/_services/authService.service";
import swal from 'sweetalert2';

@Injectable()
export class MtrService {

    progressStatuses = [
        {
            id: "InProgress",
            label: "In progress"
        },
        {
            id: "Completed",
            label: "Completed"
        },
        {
            id: "Dropped",
            label: "Dropped"
        }
    ];

    // Red(Not able to do complete KRA  ), Amber(Need help to complete KRA) and Green(going good)
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

    getEmployeeMtrWorkFlowInfo(emp_id?: number, fiscalYearId?: number): Observable<Response> {
        let url = "midterm/getMtrDetailsSingleEmployee?emp_id=" + emp_id + "&fiscalYearId=" + fiscalYearId;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getMtrBySupervisor(supervisorId: number, mtrStatus: string): Observable<Response> {
        let url = "midterm/getMtrBySupervisor?supervisorId=" + supervisorId + '&status=' + mtrStatus;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }


    getMtrBatches(emp_id?: number, fiscalYearId?: number): Observable<Response> {
        let url = "midterm/getMtrBatches?empId=" + emp_id + "&fiscalYearId=" + fiscalYearId;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    updateBatch(data) {
        let url = "midterm/updateBatch";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    deleteKra(data: any): Observable<Response> {
        let url = "midterm/deleteMtrKra";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }
    saveKra(data: any): Observable<Response> {
        let url = "midterm/postNewMtrKra";
        if (data._id) {
            url = "midterm/updateMtr";
        }
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }
    saveKraWorkFlow(data: any): Observable<Response> {
        let url = "midterm/mtrSubmit"
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    getMtrDetails(mtrMasterId?: number): Observable<Response> {
        let url = "midterm/getMtrDetails?mtrMasterId=" + mtrMasterId;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    mtrApproval(data: any): Observable<Response> {
        return this.authService.post("midterm/mtrApproval", data);
    }

    private extractData(res: Response) {
        return res || {};
    }
    private handleError(err: Response | any) {
        if (err.status == 300) {
            let error = err.json() || {};
            swal("Error", error.title, "error");
        }

        return Observable.throw(err);
    }
}