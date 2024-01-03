import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  /* se está importando el PrimeNgModule que hicimos y esto mismo se puede colocar en el app.module.ts para que esté de forma global y pueda ser usado en toda la aplicación pero pueden haber módulos donde no se utilice el PrimeNg y por eso se hará mientras lo vayamos necesitando. Recordar que así estén en varios lugares Angular lo guarda en memoria para reutilizarlo */
  imports: [CommonModule, PrimeNgModule],
})
export class SharedModule {}
