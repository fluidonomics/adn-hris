import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http"
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { LoginComponent } from "./login/login.component";
import { ForgetPasswordComponent } from './password/forget-password/forget-password.component';
import { ResetPasswordComponent } from "./password/reset-password/reset-password.component";
import { AccessDeniedComponent } from './accessDenied/accessDenied.component';



import { AuthService } from "./base/_services/authService.service";
import { CommonService } from "./base/_services/common.service";

import { BaseModule } from "./base/base.module"
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment'
import { UtilityService } from './base/_services/utilityService.service';
import { DocumentService } from './base/_services/documentService.service';

const config: SocketIoConfig = { url: environment.api_base.apiBase, options: {} };

@NgModule({
    declarations: [
        LoginComponent,
        ThemeComponent,
        AppComponent,
        ForgetPasswordComponent,
        ResetPasswordComponent,
        AccessDeniedComponent
    ],
    imports: [
        BaseModule,
        LayoutModule,
        BrowserModule.withServerTransition({ appId: 'AdnHris' }),
        SocketIoModule.forRoot(config),
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [ScriptLoaderService, AuthService, CommonService, UtilityService,DocumentService],
    bootstrap: [AppComponent]
})
export class AppModule { }