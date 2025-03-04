import {Component, input, output} from "@angular/core";

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  template: `<button (click)="emitChange()">Emit greetings</button>`,
})
export class ChildComponent {

  fullName = input<string | null>(null);
  message = output<string>();

  emitChange() {
    this.message.emit(`Greetings from ${this.fullName()}`);
  }

}
