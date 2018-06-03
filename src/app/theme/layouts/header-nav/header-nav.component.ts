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
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {
    imageBase:string;
    notificationData:any=[];
    constructor(public authService: AuthService,
        private socket: Socket
    ) {
        this.imageBase=environment.content_api_base.imgBase;
    }
    ngOnInit() {
        this.imageBase=environment.content_api_base.imgBase;
        setTimeout(() => {
           this.socket.emit("userData",this.authService.atCurrentUserData._id);
        }, 1000);
        setTimeout(() => {
           this.socket.emit("getNotificationByUserId",this.authService.atCurrentUserData._id);
        }, 1500);
        
        this.socket.on("sendBackNotificationByUserId",(data) => {
           this.notificationData=data;
        });

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

    getTime(createdAt)
    {
       let date2=new Date().getTime();
       let date1=new Date(createdAt).getTime();
       var d = Math.abs(date2 - date1) / 1000;                                   
       var r = {
          year:null,
          month:null,
          week:null,
          day:null,
          hour:null,
          minute:null,
          second:null,
       };                                                               
       var s = {                                                                 
           year: 31536000,
           month: 2592000,
           week: 604800, // uncomment row to ignore
           day: 86400,   // feel free to add your own row
           hour: 3600,
           minute: 60,
           second: 1
       };
   
       Object.keys(s).forEach(function(key){
           r[key] = Math.floor(d / s[key]);
           d -= r[key] * s[key];
       
       });
       
       return r.year!=0 ? (r.year > 1 ? r.year +' yrs' : r.year + ' yr'):
          (r.week!=0 ? (r.week > 1 ? r.week +' weeks' : r.week + ' week'):
          (r.day!=0 ? (r.day > 1 ? r.day +' days' : r.day + ' day'):
          (r.hour!=0 ? (r.hour > 1 ? r.hour +' hrs' : r.hour + ' hr'):
          (r.minute!=0 ? (r.minute > 1 ? r.minute +' mins' : r.minute + ' min'):
          (r.second!=0 ? (r.second > 1 ? r.second +' days' : r.second + ' day'):'just now')))));
    }

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
