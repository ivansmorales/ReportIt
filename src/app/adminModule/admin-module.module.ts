import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormLoginComponent } from './login-admin/components/form-login/form-login.component';
import { HeaderAdminComponent } from './login-admin/components/header-admin/header-admin.component';



@NgModule({
  declarations: [LoginAdminComponent, FormLoginComponent, HeaderAdminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModuleModule { }
