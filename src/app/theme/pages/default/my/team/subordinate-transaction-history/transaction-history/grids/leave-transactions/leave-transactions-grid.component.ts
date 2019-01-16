import { ViewEncapsulation, Component, OnInit, Input } from "@angular/core";
import { UtilityService } from "../../../../../../../../../base/_services/utilityService.service";

@Component({
    selector: 'leave-transactions-grid',
    templateUrl: 'leave-transactions-grid.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class TransactionHistoryLeavesComponent implements OnInit {

    @Input('leavesTransactions') leavesTransactions = [];

    leaveTransactionsFilter: any = {
        page: 1
    };

    constructor(
    ) {

    }

    ngOnInit() {

    }
}