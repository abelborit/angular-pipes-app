import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

/* Configuración del locale o idioma de la aplicación */
/* el locale o idioma por defecto es el inglés y aquí se está importando el de es-MX y le pusimos el nombre de localeEsMX para poder usarlo en los pipes. Al modificar el locale modifica el DatePipe, CurrencyPipe, DecimalPipe, PercentPipe cuando se usen y colocando sus campos necesarios */
import localeEsMX from '@angular/common/locales/es-MX';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

/* este registerLocaleData() establece en Angular el idioma o los idiomas o locales que queremos que nuestra aplicación use */
registerLocaleData(localeEsMX);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    // {
    //   /* colocar el locale de forma global en toda la aplicación y no hacerlo uno por uno en donde el pipe lo necesite. Aquí el LOCALE_ID es la inyección para decirle a Angular que establezca el idioma por defecto según su useValue. (https://angular.io/api/core/LOCALE_ID) */
    //   provide: LOCALE_ID,
    //   useValue: 'es-MX',
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
