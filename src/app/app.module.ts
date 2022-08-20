import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//para  cambiar locale de la app de manera local IDIOMA de forma general(el name localEs es el nombre que le quiera dar )
import localeEs from '@angular/common/locales/es-PA'; 
import localeIt from '@angular/common/locales/it'; 
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs); // spanish panamá 
registerLocaleData(localeIt); //  Italian 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule, 
    BrowserAnimationsModule,
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PA'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
