import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Importaciones de primeNg
import { SharedModule } from './shared/shared.module';
import { AppRouteModule } from './app-route.module';
import { VentasModule } from './ventas/ventas.module';

import localeEs from '@angular/common/locales/es-AR'
import localeFr from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEs );
registerLocaleData( localeFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouteModule,
    BrowserModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
