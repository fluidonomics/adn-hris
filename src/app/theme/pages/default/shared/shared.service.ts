import { Injectable } from '@angular/core';

declare var moment;

@Injectable()
export class SharedService {

    constructor(

    ) {

    }

    sortData(data, key) {
        // data = data.sort((a, b) => {
        //     if (moment(a.kra.updatedAt).isBefore(b.kra.updatedAt)) return 1;
        //     else if (!moment(a.kra.updatedAt).isBefore(b.kra.updatedAt)) return -1;
        //     else return 0;
        // });
    }
}