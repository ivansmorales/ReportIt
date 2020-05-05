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
import {PageNotFoundComponent} from './main_components/page-not-found/page-not-found.component' 
import { HeaderpagenotfoundComponent } from './main_components/page-not-found/components/headerpagenotfound/headerpagenotfound.component';
import { ErrorMessageComponent } from './main_components/page-not-found/components/error-message/error-message.component';
import { CarouselLandingpageComponent } from './main_components/landing-page/components/carousel-landingpage/carousel-landingpage.component';
import { ContactoLangingpageComponent } from './main_components/landing-page/components/contacto-langingpage/contacto-langingpage.component';
import { IntegrantesLandingpageComponent } from './main_components/landing-page/components/integrantes-landingpage/integrantes-landingpage.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderLandingPageComponent,
    InfoLandingPageComponent,
    FooterComponent,
    HeaderpagenotfoundComponent,
    ErrorMessageComponent,
    PageNotFoundComponent,
    CarouselLandingpageComponent,
    ContactoLangingpageComponent,
    IntegrantesLandingpageComponent

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
