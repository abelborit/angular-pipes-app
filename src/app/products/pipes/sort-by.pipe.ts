import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  /* FORMA 1 */
  transform(
    heroes: Hero[],
    sortBy: keyof Hero | '' = '',
    toAscToDes: boolean = false
  ): Hero[] {
    // console.log({ heroes, sortBy, toAscToDes });

    return sortBy !== ''
      ? heroes.sort((a, b) => {
          return toAscToDes
            ? a[sortBy] > b[sortBy]
              ? 1
              : -1
            : a[sortBy] < b[sortBy]
            ? 1
            : -1;
        })
      : heroes;
  }

  /* FORMA 2 */
  // transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
  //   // console.log({ heroes, sortBy });

  //   switch (sortBy) {
  //     case 'name':
  //       return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));

  //     case 'canFly':
  //       return heroes.sort((a, b) => (a.canFly > b.canFly ? 1 : -1));

  //     case 'color':
  //       return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));

  //     default:
  //       return heroes;
  //   }
  // }
}
