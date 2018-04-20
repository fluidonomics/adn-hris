import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './password/forget-password/forget-password.component';
import { ResetPasswordComponent } from './password/reset-password/reset-password.component';
import { AccessDeniedComponent } from './accessDenied/accessDenied.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    //{ path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'login', component: LoginComponent },
    { path: 'reset', component: ForgetPasswordComponent },
    { path: 'reset/:token', component: ResetPasswordComponent },
    { path: "access-denied", component: AccessDeniedComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }