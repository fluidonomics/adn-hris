import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonService } from '../../../../../../../base/_services/common.service';
import { AuthService } from "../../../../../../../base/_services/authService.service";
import { UtilityService } from "../../../../../../../base/_services/utilityService.service";
import { environment } from '../../../../../../../../environments/environment'
import swal from 'sweetalert2';
import { MyTeamService } from '../../my-team.service';

@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper--mtrinitiate',
    templateUrl: 'transaction-history.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class transactionHistoryComponent implements OnInit {

    ngOnInit(){
        
    }    

}