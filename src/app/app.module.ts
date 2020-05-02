import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos
import {UserModuleModule} from './userModule/user-module.module';
import {AdminModuleModule} from './adminModule/admin-module.module';

//Landing Page
import {LandingPageComponent} from './main_components/landing-page/landing-page.component';
import {HeaderLandingPageComponent} from './main_components/landing-page/components/header-landing-page/header-landing-page.component';
import {InfoLandingPageComponent} from './main_components/landing-page/components/info-landing-page/info-landing-page.component';

//Footer
import {FooterComponent} from './main_components/footer/footer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderLandingPageComponent,
    InfoLandingPageComponent,
    FooterComponent

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
