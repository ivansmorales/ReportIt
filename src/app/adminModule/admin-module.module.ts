import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormLoginComponent } from './login-admin/components/form-login/form-login.component';
import { HeaderAdminComponent } from './login-admin/components/header-admin/header-admin.component';
import {ReportsAdminComponent} from './reports-admin/reports-admin.component';
import { FooterAdminComponent } from './main-components/footer-admin/footer-admin.component';
import { HeaderLoginComponent } from './main-components/header-login/header-login.component';



@NgModule({
  declarations: [LoginAdminComponent, FormLoginComponent, HeaderAdminComponent, ReportsAdminComponent, FooterAdminComponent, HeaderLoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModuleModule { }
