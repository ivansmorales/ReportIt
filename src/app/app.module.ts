import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos
import {UserModuleModule} from './userModule/user-module.module';
import {AdminModuleModule} from './adminModule/admin-module.module';

/*
import { ReportsComponent } from './userModule/reports/reports.component';
import { ReportsAdminComponent } from './adminModule/reports-admin/reports-admin.component';

//Imports del componente LandingPage
import { LandingPageComponent } from './main_components/landing-page/landing-page.component';
import { HeaderLandingPageComponent } from './main_components/landing-page/components/header-landing-page/header-landing-page.component';
import { InfoLandingPageComponent } from './main_components/landing-page/components/info-landing-page/info-landing-page.component';

//Imports de main-components
import { FooterComponent } from './main_components/footer/footer.component';

//Imports del componente LogIn de User
import {LogInUserComponent} from './userModule/log-in-user/log-in-user.component';
import {FormularioLogInComponent} from './userModule/log-in-user/components/formulario-log-in/formulario-log-in.component';
import { HeaderRegisterLogInUserComponent } from './main_components/header-register-log-in-user/header-register-log-in-user.component';

//Imports del componente Register de User
import {FormRegisteruserComponent} from './userModule/register-user/components/form-registeruser/form-registeruser.component';
import{RegisterUserComponent} from './userModule/register-user/register-user.component' 

//Imports del componente Login de Admin
import{LoginAdminComponent} from './adminModule/login-admin/login-admin.component'
import{FormLoginComponent} from './adminModule/login-admin/components/form-login/form-login.component'
import{HeaderAdminComponent} from './adminModule/login-admin/components/header-admin/header-admin.component';
import { CarrouselComponent } from './main_components/landing-page/components/carrousel/carrousel.component';
import { PageNotFoundComponent } from './main_components/page-not-found/page-not-found.component'

*/

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModuleModule,
    AdminModuleModule  



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
