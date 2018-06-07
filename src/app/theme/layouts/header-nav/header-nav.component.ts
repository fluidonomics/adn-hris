import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { AuthService } from "../../../base/_services/authService.service"
import { Socket } from 'ngx-socket-io';
import { environment } from "../../../../environments/environment";

declare let mLayout: any;
declare let $: any;


@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    styleUrls: ["./header-nav.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {
    imageBase: string;
    constructor(public authService: AuthService,
        private socket: Socket
    ) {
        this.imageBase = environment.content_api_base.imgBase;
    }
    ngOnInit() {
        this.imageBase = environment.content_api_base.imgBase;
        // this.socket.emit("initData","Hello Form init");
        // this.socket.on('insertedNotification', (data) => {

        // });
        // this.socket.on("getData",(data)=>{
        //     alert(data);
        // });

        // this.socket.on("sendBack",(data)=>{
        //     alert(data);
        // });


        this.socket.on("setReadStatusChanged",(data) => {
            console.log(data);
        });

        this.socket.on("pushNotification",(data) => {
            alert('push notification');
        });
    }
    ngAfterViewInit() {
        mLayout.initHeader();
    }

    // btnClick()
    // {
    //     let url = "common/sendNotification";
    //     this.authService.get(url).subscribe(data=>{

    //     });

    // }

    setReadStatus()
    {
        this.socket.emit("setReadStatus",{_id:this.authService.atCurrentUserData._id,currentDate:new Date()},);
    }
    
    // removeScript()
    // {
    //     $('script[src$="assets/vendors/base/vendors.bundle.js"]').remove();
    //     $('script[src$="assets/demo/default/base/scripts.bundle.js"]').remove();
    // }

}
