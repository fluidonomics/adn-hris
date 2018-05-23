import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthService } from "../../../../../../../base/_services/authService.service";

@Component({
    selector: "app-leave-forward",
    templateUrl: "./leave-forward.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class LeaveForwardComponent implements OnInit {

  @Input() leave: any;

    constructor(public authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    navigateToDetails(event) {
      this.router.navigate(['my/leaves/dashboard/details/'+this.leave._id]);
    }
}
