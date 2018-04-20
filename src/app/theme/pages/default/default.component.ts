import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../../helpers';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { AuthService } from "../../../base/_services/authService.service"

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
    templateUrl: "./default.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class DefaultComponent implements OnInit {


    constructor(private _authService: AuthService) {

    }
    ngOnInit() {
        //this._authService.validateToken();
    }

}