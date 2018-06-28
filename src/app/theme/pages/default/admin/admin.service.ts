import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs';
import { AuthService } from '../../../../base/_services/authService.service';
import { UtilityService } from '../../../../base/_services/utilityService.service';


@Injectable()
export class AdminService {

    constructor(
        private authService: AuthService,
        private utilityService: UtilityService
    ) {
    }

    getFinancialYear() {
        let url = "common/getFinincialYear";
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    postLeaveTransactionYear(data) {
        let url = "leave/postLeaveTransactionYear";
        return this.authService.post(url, data).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

}
