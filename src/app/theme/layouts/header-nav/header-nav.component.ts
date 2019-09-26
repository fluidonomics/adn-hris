import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { AuthService } from "../../../base/_services/authService.service"
import { environment } from "../../../../environments/environment";
import { CommonService } from "../../../base/_services/common.service";

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
    companyId: any = this.commonService.getCompanyIdLocal();
    logoBase: any = "./assets/demo/default/media/img/logo/";
    companyLogo: any = this.logoBase + "company_1.jpg";

    constructor(
        public authService: AuthService,
        private commonService: CommonService
    ) {
        this.imageBase = environment.content_api_base.imgBase;
    }
    ngOnInit() {
        this.imageBase = environment.content_api_base.imgBase;
        this.setCompanyLogo();
        // this.socket.emit("initData","Hello Form init");
        // this.socket.on('insertedNotification', (data) => {

        // });
        // this.socket.on("getData",(data)=>{
        //     alert(data);
        // });

        // this.socket.on("sendBack",(data)=>{
        //     alert(data);
        // });


        // this.socket.on("setReadStatusChanged",(data) => {
        //     console.log(data);
        // });

        // this.socket.on("pushNotification",(data) => {
        //     alert('push notification');
        // });
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

    setReadStatus() {
        // this.socket.emit("setReadStatus",{_id:this.authService.atCurrentUserData._id,currentDate:new Date()},);
    }

    // removeScript()
    // {
    //     $('script[src$="assets/vendors/base/vendors.bundle.js"]').remove();
    //     $('script[src$="assets/demo/default/base/scripts.bundle.js"]').remove();
    // }

    setCompanyLogo() {
        if (this.companyId == 1) {
            this.companyLogo = this.logoBase + "company_1_lg.png";
        }
        else if (this.companyId == 2) {
            this.companyLogo = this.logoBase + "company_2.png";
        }
        else if (this.companyId == 3) {
            this.companyLogo = this.logoBase + "company_3.png";
        }
        else if (this.companyId == 4) {
            this.companyLogo = this.logoBase + "company_4.png";
        }
        else {
            this.companyLogo = this.logoBase + "company_5.png";
        }
    }

}
