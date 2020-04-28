import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormLoginComponent } from './login-admin/components/form-login/form-login.component';
import { HeaderAdminComponent } from './login-admin/components/header-admin/header-admin.component';
import {ReportsAdminComponent} from './reports-admin/reports-admin.component';



@NgModule({
  declarations: [LoginAdminComponent, FormLoginComponent, HeaderAdminComponent, ReportsAdminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModuleModule { }
