import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from "../../../../auth/_guards/auth.guard";
import { AdminComponent } from './admin.component';
import { ConfigureComponent } from './configure/configure.component';
import { MasterDataComponent } from './masterData/masterData.component';
import { AdminGuard } from "./_guard/admin.guard";


// const routes: Routes = [
//     {
//         "path": "",
//         "component": AdminComponent,
//         "canActivate": [AuthGuard],
//         "children": [
//             {
//                 "path": "admin",
//                 "loadChildren": ".\/pages\/default\/admin\/admin.module#AdminModule"
//             },
//             {
//                 "path": "404",
//                 "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
//             },
//             {
//                 "path": "",
//                 "redirectTo": "index",
//                 "pathMatch": "full"
//             }
//         ]
//     },
//     {
//         "path": "**",
//         "redirectTo": "404",
//         "pathMatch": "full"
//     }
// ];

const routes: Routes = [{
    path: '', component: AdminComponent, canActivate: [AdminGuard],
    children: [
        { path: 'masterData', component: MasterDataComponent },
        { path: 'configure', component: ConfigureComponent },
    ]
}

]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }