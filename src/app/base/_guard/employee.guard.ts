import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/authService.service';
import { JwtHelper } from 'angular2-jwt';


@Injectable()
export class EmployeeGuard implements CanActivate {

    jwtHelper: JwtHelper = new JwtHelper();

    isHr() {
        let userInfo = sessionStorage.getItem('accessToken') ? this.jwtHelper.decodeToken(sessionStorage.getItem('accessToken')) : null;
        if (userInfo) {
            if (userInfo.roles.indexOf('Employee') > -1) {
                return true;
            }
        }
        return false;
    }

    constructor(private router: Router, private _authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (!this._authService.userSignedIn()) {
            this.router.navigate(['/login']);
        }
        else {
            if (this.isHr()) {
                return true;
            }
            this.router.navigate(['/access-denied']);
        }
    }
}
