import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {DeferableViewComponent} from "./control-flow-components/deferable-view/deferable-view.component";
import {IfComponent} from "./control-flow-components/if/if.component";
import {ForComponent} from "./control-flow-components/for/for.component";
import {SwitchComponent} from "./control-flow-components/switch/switch.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parent', 
    
    loadComponent: () => import('./components/parent/parent.component').then(m => m.ParentComponent),
    children: [
      {
        path: 'child',
        loadComponent: () => import('./components/child/child.component').then(m => m.ChildComponent),
      },
      {
        path: 'second-child',
        loadComponent: () => import('./components/second-child/second-child.component').then(m => m.SecondChildComponent),
      },
    ],
  },
  { path: 'defer', component: DeferableViewComponent },
  { path: 'if', component: IfComponent },
  { path: 'for', component: ForComponent },
  { path: 'switch', component: SwitchComponent }
];
