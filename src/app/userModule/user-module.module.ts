import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


import { RegisterUserComponent } from './register-user/register-user.component';
import { LogInUserComponent } from './log-in-user/log-in-user.component';
import { ReportsUserComponent } from './reports-user/reports-user.component';
import { FormularioLogInComponent } from './log-in-user/components/formulario-log-in/formulario-log-in.component';
import { FormRegisteruserComponent } from './register-user/components/form-registeruser/form-registeruser.component';
import { UserRoutingModule } from './user-routing.module';
import { HeaderLoginRegisterComponent } from './main-components/header-login-register/header-login-register.component';
import { FooterLoginRegisterComponent } from './main-components/footer-login-register/footer-login-register.component';
import { ReportsComponent} from './reports/reports.component';

// Local storage
import {StorageServiceModule} from 'ngx-webstorage-service';

@NgModule({
  declarations: [RegisterUserComponent, LogInUserComponent, ReportsComponent,
    ReportsUserComponent, FormularioLogInComponent, FormRegisteruserComponent,
    HeaderLoginRegisterComponent, FooterLoginRegisterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    StorageServiceModule

  ]
})
export class UserModuleModule { }
