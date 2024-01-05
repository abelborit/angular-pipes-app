import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-pages-custom-pipe-page',
  templateUrl: './custom-pipe-page.component.html',
  styleUrls: ['./custom-pipe-page.component.css'],
})
export class CustomPipePageComponent {
  public dataToUse: string = 'Jagger - Emmet';
  public isUpperCase: boolean = false;

  handleToggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public toSortBy?: keyof Hero;
  public toAscToDes: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Catwoman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ];

  handleSortBy(value: keyof Hero): void {
    this.toSortBy = value;
    this.toAscToDes = !this.toAscToDes;
  }
}
