import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../../../../base/_services/authService.service"
import { environment } from "../../../../../../environments/environment"

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private _router: Router,
        private _authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // if(this._authService.isLoggedIn() && this._authService.atCurrentUserData.roles.indexOf() >-1)
        // {
        //     this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //     return false;
        // }
        // {
        //     return true;
        // }
        this._router.navigate(environment.access_deniedPath)
        return false;

        // return this._userService.verify().map(
        //     data => {
        //         if (data !== null) {
        //             // logged in so return true
        //             return true;
        //         }
        //         // error when verify so redirect to login page with the return url
        //         this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //         return false;
        //     },
        //     error => {
        //         // error when verify so redirect to login page with the return url
        //         this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //         return false;
        //     });

    }
}