import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { CustomPipePageComponent } from './pages/custom-pipe-page/custom-pipe-page.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ColorCasePipe } from './pipes/color-case.pipe';

@NgModule({
  declarations: [
    /* Components */
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    CustomPipePageComponent,

    /* Pipes */
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
    ColorCasePipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
})
export class ProductsModule {}
