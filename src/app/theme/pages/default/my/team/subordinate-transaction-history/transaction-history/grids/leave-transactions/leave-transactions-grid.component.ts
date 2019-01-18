import { ViewEncapsulation, Component, OnInit, Input } from "@angular/core";
import { UtilityService } from "../../../../../../../../../base/_services/utilityService.service";
import { LeaveService } from "../../../../../leaves/leave.service";
import { AuthService } from "../../../../../../../../../base/_services/authService.service";
import { UserData } from "../../../../../../../../../base/_interface/auth.model";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { environment } from "../../../../../../../../../../environments/environment";

@Component({
    selector: 'leave-transactions-grid',
    templateUrl: 'leave-transactions-grid.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [LeaveService]
})

export class TransactionHistoryLeavesComponent implements OnInit {

    @Input('leavesTransactions') leavesTransactions = [];

    leaveTransactionsFilter: any = {
        page: 1
    };
    currentUser: UserData;
    modalRef: BsModalRef;
    leaveDetails: any = {};
    imageBase = "";

    constructor(
        private leaveService: LeaveService,
        private authService: AuthService,
        private modalService: BsModalService
    ) {
        this.imageBase = environment.content_api_base.imgBase;

    }

    ngOnInit() {
        this.authService.validateToken().subscribe(res => {
            this.currentUser = this.authService.currentUserData;
        });
    }

    showLeaveDetail(leaveId, templateRef, event) {
        debugger;
        if (event) {
            event.stopPropagation();
        }
        this.leaveDetails = {};

        this.leaveService.getLeaveDetailsById(leaveId).subscribe(res => {
            if (res.ok) {
                let body = res.json();
                if (body.data[0]) {
                    this.leaveDetails.leave = body.data[0];
                    if (this.leaveDetails.leave.emp_id) {
                        this.leaveService.getEmployeeLeaveBalance(this.leaveDetails.leave.emp_id, 1).subscribe(res => {
                            if (res.ok) {
                                let balances = res.json() || [];
                                if (balances.length > 0) {
                                    let balance = balances.filter(b => { return b.leaveTypeId == this.leaveDetails.leave.leave_type })[0];
                                    this.leaveDetails.leave.balance = balance.leaveBalance;
                                }
                            }
                        })
                    }
                    this.modalRef = this.modalService.show(templateRef, Object.assign({}, { class: 'gray modal-lg' }));
                }
            }
        });
    }
}