import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; //Backend
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modulos
import {UserModuleModule} from './userModule/user-module.module';
import {AdminModuleModule} from './adminModule/admin-module.module';

// Local Storage
import {LogalStorageService} from './userModule/services/logal-storage.service';
import {StorageServiceModule} from 'ngx-webstorage-service';

// Landing Page
import {LandingPageComponent} from './main_components/landing-page/landing-page.component';
import {HeaderLandingPageComponent} from './main_components/landing-page/components/header-landing-page/header-landing-page.component';
import {InfoLandingPageComponent} from './main_components/landing-page/components/info-landing-page/info-landing-page.component';

// Footer
import {FooterComponent} from './main_components/footer/footer.component';
import {PageNotFoundComponent} from './main_components/page-not-found/page-not-found.component';
import { HeaderpagenotfoundComponent } from './main_components/page-not-found/components/headerpagenotfound/headerpagenotfound.component';
import { ErrorMessageComponent } from './main_components/page-not-found/components/error-message/error-message.component';
import { CarouselLandingpageComponent } from './main_components/landing-page/components/carousel-landingpage/carousel-landingpage.component';
import { ContactoLangingpageComponent } from './main_components/landing-page/components/contacto-langingpage/contacto-langingpage.component';
import { IntegrantesLandingpageComponent } from './main_components/landing-page/components/integrantes-landingpage/integrantes-landingpage.component';

import { registerLocaleData } from '@angular/common';
import localeMx from '@angular/common/locales/es-MX';
import localeUS from '@angular/common/locales/en';

registerLocaleData(localeMx, 'es-MX');
registerLocaleData(localeUS, 'en'); 


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
    AdminModuleModule,
    FormsModule,
    StorageServiceModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
