import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [RouterOutlet,MenubarModule ],
  template: `
      <p>parent works!</p>

      <h1>call childs bellow</h1>

      <p-menubar [model]="items" />

      <router-outlet></router-outlet>
     
  `,
  styleUrl: './parent.component.scss'
})
export class ParentComponent {


  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'First child',
            icon: 'pi pi-home',
            routerLink: 'child'
        },
        {
            label: 'Second Child',
            icon: 'pi pi-star',
            routerLink: 'second-child'
        },
    ]
}

}
