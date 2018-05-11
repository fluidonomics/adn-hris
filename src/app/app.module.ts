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

import {BaseModule} from "./base/base.module"


@NgModule({
    declarations: [
        LoginComponent,
        ThemeComponent,
        AppComponent,
        ForgetPasswordComponent,
        ResetPasswordComponent,
        AccessDeniedComponent,
    ],
    imports: [
        BaseModule,
        LayoutModule,
        BrowserModule.withServerTransition({ appId: 'AdnHris' }),
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [ScriptLoaderService, AuthService, CommonService],
    bootstrap: [AppComponent]
})
export class AppModule { }