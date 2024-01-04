import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

/* este módulo solo exportará módulos de PrimeNG y con esto ganamos legibilidad y ordenamiento en el código aunque también puede ser que si por ejemplo solo usemos botones e inputs entonces va a cargarse todo pero en alguna parte de la aplicación ya estará cargado este módulo y Angular lo guarda en memoria entonces lo que se puede hacer también es dividir los módulos de PrimeNG según cómo lo utilicemos, es decir, un módulo para los botones, otro módulo para los inputs, etc., o sino tener todos lo módulos en un solo archivo como en este caso */
@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
  ],
})
export class PrimeNgModule {}
