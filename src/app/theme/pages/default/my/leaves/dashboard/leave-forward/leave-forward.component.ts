import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';

import { AuthService } from "../../../../../../../base/_services/authService.service";

@Component({
    selector: "app-leave-forward",
    templateUrl: "./leave-forward.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class LeaveForwardComponent implements OnInit {

    constructor(public authService: AuthService, private router: Router) {

    }

    ngOnInit() {
    }

    navigateToDetails(event, leave) {
      this.router.navigate(['my/leaves/dashboard/details/1']);
        //this.router.navigate(['my/leaves/dashboard/details/' + leave._id]);
    }
}
