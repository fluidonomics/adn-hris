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

    /*  Returns -1 if startDate < endDate
        Returns 0 if startDate = endDate
        Returns 1 if startDate > endDate   */
    compareDates(startDate: string, endDate: string) {
        if (startDate && endDate && startDate === endDate)
            return 0;
        else {
            let sd = new Date(startDate);
            let ed = new Date(endDate);
            if (sd.getFullYear() < ed.getFullYear())
                return -1;
            else if (sd.getFullYear() > ed.getFullYear()) {
                return 1;
            } else {
                if (sd.getMonth() < ed.getMonth())
                    return -1;
                else if (sd.getMonth() > ed.getMonth()) {
                    return 1;
                } else {
                    if (sd.getDate() < ed.getDate())
                        return -1;
                    else if (sd.getDate() > ed.getDate()) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
        }
    }

    getAge(birthdate) {
        var today = new Date();
        var birth = new Date(birthdate);
        var birthday = new Date(birth.getFullYear(), birth.getMonth(), birth.getDate());
        var differenceInMilisecond = today.valueOf() - birthday.valueOf();
        var year_age = Math.floor(differenceInMilisecond / 31536000000);
        var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        var month_age = Math.floor(day_age / 30);
        day_age = day_age % 30;
        return year_age;
        // return {
        //         "year":year_age,
        //         "month":month_age,
        //         "days": day_age,
        //         "brithday":(today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate()) ? 'Happy BirthDay':null
        //        }
    }

    saveAsCSV(buffer: any, fileName: string) {
        const EXCEL_TYPE = 'text/csv';
        const EXCEL_EXTENSION = '.csv';
        let blob = new Blob([buffer], { type: EXCEL_TYPE });
        FileSaver.saveAs(blob, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }

    saveAsxls(buffer: any, fileName: string) {
        const EXCEL_TYPE = 'application/vnd.ms-excel';
        const EXCEL_EXTENSION = '.xls';
        let blob = new Blob([buffer], { type: EXCEL_TYPE });
        FileSaver.saveAs(blob, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }

    saveAsxlsx(buffer: any, fileName: string) {
        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        const EXCEL_EXTENSION = '.xlsx';
        let blob = new Blob([buffer], { type: EXCEL_TYPE });
        FileSaver.saveAs(blob, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }

    saveAstxt(buffer: any, fileName: string) {
        const EXCEL_TYPE = 'text/plain';
        const EXCEL_EXTENSION = '.txt';
        let blob = new Blob([buffer], { type: EXCEL_TYPE });
        FileSaver.saveAs(blob, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }

    showLoader(element, msg?: string) {
        let options: any = {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success'
        };

        if (msg) {
            options.message = msg;
        }
        mApp.block(element, options);
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