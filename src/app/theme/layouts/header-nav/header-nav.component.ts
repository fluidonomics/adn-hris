import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { AuthService } from "../../../base/_services/authService.service"
import { Socket } from 'ngx-socket-io';

declare let mLayout: any;
declare let $: any;


@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {
    constructor(public authService: AuthService,
        private socket: Socket
    ) {

    }
    ngOnInit() {
        // this.socket.emit("initData","Hello Form init");
        // this.socket.on('insertedNotification', (data) => {

        // });
        // this.socket.on("getData",(data)=>{
        //     alert(data);
        // });
    }
    ngAfterViewInit() {
        mLayout.initHeader();
    }

    // removeScript()
    // {
    //     $('script[src$="assets/vendors/base/vendors.bundle.js"]').remove();
    //     $('script[src$="assets/demo/default/base/scripts.bundle.js"]').remove();
    // }

}
