import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    /* Ripple es una animación opcional para los componentes compatibles, como los botones. Está deshabilitado de forma predeterminada y debe habilitarse globalmente inyectando PrimeNGConfig. (https://www.primefaces.org/primeng-v15-lts/configuration#ripple) (https://primeng.org/configuration) */
    this.primengConfig.ripple = true;
  }
}
