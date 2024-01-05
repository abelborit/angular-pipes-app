import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'products-pages-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  /* Pipe: i18n Select */
  /* si en gender se agrega un nueva opción y se coloca en el this.gender del handleChangeClient pero en invitationMap no entonces técnicamente regresaría un undefined y el undefined no se grafica o no se muestra en el HTML */
  public name: string = 'Jagger';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  handleChangeClient(): void {
    this.name = this.name === 'Jagger' ? 'Taira' : 'Jagger';
    this.gender = this.gender === 'male' ? 'female' : 'male';
  }

  /* Pipe: i18n Plural (funciona mejor con los números que en este caso usaremos el .length) */
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Melisa',
    'Eduardo',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    /* el uso del caracter "#" va a inferir el valor que estas comparando, en este caso el clients.length. Es la representación del valor o condicián que estás comparando */
    other: 'tenemos # clientes esperando.',
  };
  removeClient(): void {
    this.clients.shift();
  }

  /* Pipe: slice */
  public namesArray: string[] = [
    'Manuel',
    'Juan',
    'Felix',
    'Nicole',
    'Valeria',
    'Massi',
  ];

  /* Pipe: json */
  public infoData = {
    nombre: 'Ejemplo',
    edad: 25,
    ciudad: 'Ciudad Ejemplo',
    ocupacion: 'Desarrollador',
    idiomas: ['español', 'inglés'],
    intereses: ['programación', 'tecnología', 'viajes'],
    estadoCivil: 'Soltero',
    nivelEducacion: 'Magister',
    fechaRegistro: '04-01-2024',
    suscrito: true,
    hobby: 'Programar',
  };

  /* Pipe: keyValue */
  public personData = {
    nombre: 'Ejemplo',
    edad: 25,
    ciudad: 'Ciudad Ejemplo',
    ocupacion: 'Desarrollador',
    idiomas: ['español', 'inglés'],
  };
  /* El pipe keyValue puede recibir como parámetro opcional una función compareFn. Puedes crear tu propia función y pasársela como parámetro al pipe. Esta devuelve el orden de los atributos que tenía el objeto original. También se puede obtener el orden invertido si en lugar de 1, la función retorna -1. */
  noSorting = () => {
    return 1;
  };

  /* Pipe: Async */
  /* funciona tanto para observables como para promesas. Este Async Pipe va a determinar automáticamente si se está conectando a un observable o una promesa */
  /* al importar interval desde rxjs el interval es una manera de crear observables que empieza a emitir valores desde 0, 1, 2, 3, etc basado en la cantidad de tiempo que queramos definir, por ejemplo, interval(1000) que cada 1000ms = 1seg se va a emitir un valor que empieza desde el 0. Para estar seguros de la información que fluye a través de este interval se puede mandar a llamar el método pipe y usar el tap() pero hay que recordar que en los observables hasta que no se suscriban a él entonces no va a emitir nada y solo es una fracción de código esperando a que algo los active para emitir valores. Si se pasa el myObservableTimer por el pipe json entonces veremos algo similar a { "source": {} }

  Pero si lo usamos con el pipe async entonces ya hay alguien que está suscrito a él. Si colocamos ambos pipes json y async veremos que solo cambia el de async pero no el de json porque al usar el pipe entonces lo trata como una instancia independiente, es como una suscripción independiente que realiza. Lo bueno que tiene el pipe async es que si estamos en una pantalla A donde se realiza esta suscripción independiente usando el pipe async y luego nos vamos a una pantalla B entonces vemos que las emisiones se detienen, automáticamente hacen la limpieza de la suscripción de ese observable y ya no nos preocupamos de hacer un unsuscribe en el ngOnDestroy y luego cuando regresemos de nuevo a la pantalla A entonces se empiezan a emitir de nuevo los valores porque ya tenemos una nueva suscripción */
  /* este myObservableTimer es de tipo Observable que resuelve un number */
  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap((value) => console.log('tap: ', value))
  );

  /* este myPromiseValue es de tipo Promise que resuelve un string Promise<string>. A diferencia de los observables, las promesas no se pueden cancelar usando ese async pipe, es decir, si estoy en la pantalla A y se lanza esta promesa donde 5 segundos después se va a resolver, entonces durante esos 5 segundos yo cambio a la pantalla B, de igual forma se realiza la promesa y no se cancela como en el caso de los observables. Tener en consideración también de que Angular es muy inteligente que si queremos modificar el estado de alguna propiedad pero no está montado el componente entonces no nos lanzará un error como en otros Frameworks o librerías, por ejemplo en React no sale un warning diciendo que no se puede cambiar el estado de un componente que no está montado */
  public myPromiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Se finalizó la promesa');
      console.log('Se finalizó la promesa');
      this.personData.nombre = 'Otro nombre desde el Async Pipe'; // personData es del keyValue pipe
    }, 5000);
  });
}

/* ******************************************************************************************************************* */
/* Diferencia entre i18nSelect y i18nPlural */
/*
  - El I18nSelectPipe, es más genérico y su objetivo simplemente es hacer match con una opción del objeto y mostrar su valor.
  - El I18nPluralPipe, tiene un uso más especifico, únicamente para mostrar un string de acuerdo al idioma local. Por ejemplo, para mostrar un string en singular o plural de acuerdo a la cantidad a items a mostrar. Ya que no se puede decir, por ejemplo: 10 articulo. Entonces el I18nPluralPipe hace su trabajo y cambia la palabra "artículo" por "artículos" en plural.
*/
