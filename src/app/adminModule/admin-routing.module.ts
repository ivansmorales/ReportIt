import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormLoginComponent } from './login-admin/components/form-login/form-login.component';
import { HeaderAdminComponent } from './login-admin/components/header-admin/header-admin.component';
import {ReportsAdminComponent} from './reports-admin/reports-admin.component';

const routes : Routes = [
  {path: 'loginAdmin', component: LoginAdminComponent},
  {path: 'reportsAdmin', component: ReportsAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
