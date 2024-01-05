import { Component } from '@angular/core';

@Component({
  selector: 'products-pages-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLowercase: string = 'jagger emmet';
  public nameUppercase: string = 'JAGGER EMMET';
  public nameRandomStyle: string = 'JagGEr EmmET';

  public currentDate: Date = new Date();
}

/*
Los pipes puros e impuros son un concepto esencial en Angular y tienen un impacto significativo en el rendimiento de una aplicación.

  - Los pipes puros se ejecutan solo cuando cambian los argumentos que reciben, lo que significa que la transformación solo se realiza cuando es necesario.
  - Los pipes impuros se ejecutan cada vez que hay un cambio en la aplicación, lo que podría afectar el rendimiento si se utilizan incorrectamente.

Un caso de uso común para la memorización de pipes es cuando se tienen datos que no cambian con frecuencia, como listas de usuarios o datos estáticos. En lugar de recalcular la transformación cada vez que se renderiza el componente, podemos emplear un pipe puro con memorización para almacenar en caché los resultados y evitar cálculos innecesarios.
*/
