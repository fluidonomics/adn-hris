import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from "@angular/http";

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
        return isNaN(difference) ? 0 : difference;
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