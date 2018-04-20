import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../../../layouts/layout.module';

import { AdminComponent } from './admin.component';
import { ConfigureComponent } from './configure/configure.component';
import { MasterDataComponent } from './masterData/masterData.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminGuard } from "./_guard/admin.guard";

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ], declarations: [
        AdminComponent,
        ConfigureComponent,
        MasterDataComponent,
    ],
    providers: [AdminGuard]
})
export class AdminModule {
}