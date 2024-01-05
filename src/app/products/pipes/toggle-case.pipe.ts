import { Pipe, PipeTransform } from '@angular/core';
/* Los pipes sirven para transformar datos recibidos por argumento. En los custom pipes también se puede hacer inyección de dependencias y se puede utilizar a lo largo de toda la aplicación si está declarado en el módulo más alto de la aplicación o sino en los módulos donde se vaya a necesitar */

/* nombre | toggleCase -> NOMBRE */
/* NOMBRE | toggleCase -> nombre */

@Pipe({
  /* este name es el nombre el cual vamos a utilizar para colocarlo en el HTML */
  name: 'toggleCase',
})

/* el PipeTransform es el método que se va a llamar para hacer la transformación visual de la data */
export class ToggleCasePipe implements PipeTransform {
  /* el value es cualquier tipo de dato pero si se quiere colocar de forma específica un tipo entonces se puede colocar como string, number, string[], una interface creada, etc.... */
  // transform(value: any, ...args: any[]): any {}

  transform(value: string, toUpper: boolean = false): string {
    // console.log({
    //   value,
    //   toUpper,
    //   result: toUpper ? value.toLocaleUpperCase() : value.toLocaleLowerCase(),
    // });

    return toUpper ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
  }
}
