import { Injectable } from '@angular/core';

declare var mApp;

@Injectable()
export class UtilityService {

    constructor() {

    }


    subtractDates(startDate: string, endDate: string) {
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
}