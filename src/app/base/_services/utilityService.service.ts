import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

    constructor() {

    }


    subtractDates(startDate: string, endDate: string) {
        let difference = Math.ceil((Date.parse(endDate) - Date.parse(startDate)) / (1000 * 3600 * 24));
        return isNaN(difference) ? 0 : difference;
    }
}