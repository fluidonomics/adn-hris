import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from "../auth/_guards/auth.guard";
//import {CommonService} from "../base/_services/common.service";
import { AuthService } from "../base/_services/authService.service"

const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "canActivate": [AuthService],
        "children": [
            {
                "path": "admin",
                "loadChildren": ".\/pages\/default\/admin\/admin.module#AdminModule"
            },
            {
                "path": "hr",
                "loadChildren": ".\/pages\/default\/hr\/hr.module#HrModule"
            },
            {
                "path": "my",
                "loadChildren": ".\/pages\/default\/my\/my.module#MyModule"
            },
            {
                "path": "dashboard",
                "loadChildren": ".\/pages\/default\/dashboard\/dashboard.module#DashboardModule"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "dashboard",
                "pathMatch": "full"
            },
            {
                "path": "**",
                "redirectTo": "404"
            }
        ]
    }

    // {
    //     "path": "**",
    //     "redirectTo": "404",
    //     "pathMatch": "full"
    // }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }