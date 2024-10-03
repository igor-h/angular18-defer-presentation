import {Component} from "@angular/core";
import {ChildComponent} from "./child.component";

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [
    ChildComponent
  ],
  template: `
    <app-child-component [fullName]="fullName"
                         (message)="onChangeMessage($event)">
    </app-child-component>`,
})
export class ParentComponent {

  fullName = "John Doe";

  onChangeMessage(message: string) {
    console.log(message);
  }

}
