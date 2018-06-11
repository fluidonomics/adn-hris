import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import 'rxjs/add/observable/throw';
import * as FileSaver from 'file-saver';

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

    getAge(birthdate)
    {
        var today = new Date();
        var birth= new Date(birthdate);
        var birthday = new Date(birth.getFullYear(),birth.getMonth(),birth.getDate());
        var differenceInMilisecond = today.valueOf() - birthday.valueOf();
        var year_age = Math.floor(differenceInMilisecond / 31536000000);
        var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        var month_age = Math.floor(day_age/30);
        day_age = day_age % 30;
        return year_age;
        // return {
        //         "year":year_age,
        //         "month":month_age,
        //         "days": day_age,
        //         "brithday":(today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate()) ? 'Happy BirthDay':null
        //        }
    }

    saveAsCSV(buffer:any,fileName:string)
    {
     const EXCEL_TYPE = 'text/csv';
     const EXCEL_EXTENSION = '.csv';
     let blob = new Blob([buffer], { type: EXCEL_TYPE });
     FileSaver.saveAs(blob, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
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
                if (body) {
                    objError.body = body;
                }
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