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
