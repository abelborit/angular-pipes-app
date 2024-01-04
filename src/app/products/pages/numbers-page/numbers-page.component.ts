import { Component } from '@angular/core';

@Component({
  selector: 'products-pages-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css'],
})
export class NumbersPageComponent {
  public totalTodaySells: number = 25785.5895;
  public totalBrutalSells: number = 325438.8672;
  public percentNumber: number = 0.4856;
}
