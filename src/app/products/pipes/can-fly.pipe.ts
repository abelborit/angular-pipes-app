import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  /* este name es el nombre el cual vamos a utilizar para colocarlo en el HTML */
  name: 'canFly',
})

/* el PipeTransform es el método que se va a llamar para hacer la transformación visual de la data */
export class CanFlyPipe implements PipeTransform {
  /* en vez de regresar un string regresará cualquiera de las dos opciones 'sí vuela' | 'no vuela' y así lo hacemos más preciso */
  transform(value: boolean): 'sí vuela' | 'no vuela' {
    return value ? 'sí vuela' : 'no vuela';
  }
}
