import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-components-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
          },
        ],
      },

      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipe de Ordenamiento',
            icon: 'pi pi-cog',
            routerLink: 'custom',
          },
        ],
      },
    ];
  }

  public routeCss: any = document.getElementById('themeLink');
  public dark: boolean = true;
  public theme: string = 'Dark';

  handleChangeTheme(): void {
    if (this.dark) {
      this.routeCss.setAttribute('href', 'assets/theme/theme-vela-blue.css');
      this.dark = false;
      this.theme = 'Light';
    } else {
      this.routeCss.setAttribute('href', 'assets/theme/theme-saga-blue.css');
      this.dark = true;
      this.theme = 'Dark';
    }
  }
}
