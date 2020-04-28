import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LogInUserComponent } from './log-in-user/log-in-user.component';
import { ReportsUserComponent } from './reports-user/reports-user.component';
import { FormularioLogInComponent } from './log-in-user/components/formulario-log-in/formulario-log-in.component';
import { FormRegisteruserComponent } from './register-user/components/form-registeruser/form-registeruser.component';



@NgModule({
  declarations: [RegisterUserComponent, LogInUserComponent, ReportsUserComponent, FormularioLogInComponent, FormRegisteruserComponent],
  imports: [
    CommonModule
  ]
})
export class UserModuleModule { }
