import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import 'rxjs/add/observable/throw';

declare var mApp;

@Injectable()
export class UtilityService {

    constructor() {

    }

    currentDateStr() {
        var date = new Date();
        return [
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes()
        ].join('');
    }

    subtractDates(startDate: string, endDate: string) {
        if (startDate && endDate && startDate === endDate)
            return 1;
        let difference = Math.ceil((Date.parse(endDate) - Date.parse(startDate)) / (1000 * 3600 * 24));
        if (!isNaN(difference))
            if (difference < 0)
                return 0;
            else
                return difference + 1;
        else
            return 0;
    }

    showLoader(element) {
        mApp.block(element, {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
            // message: 'Please wait...'
        });
    }

    hideLoader(element) {
        mApp.unblock(element);
    }

    extractData(res: Response) {
        return res || {};
        // let body = res.json();
        // return body || { };
    }

    handleError(error: Response | any) {
        let objError: any = {};
        if (error instanceof Response) {
            let err = error as any;
            if (err._body != "") {
                const body = error.json() || '';
            }
            objError.error = err;
            objError.status = err.status;
            objError.errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            objError.errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(objError);
    }
}