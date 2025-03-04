import {Component, effect, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `The current value of count is: {{ count() }} <br/>
  <button (click)="increaseCountValue()">Increase count</button>
  <button (click)="resetValue()">Reset count</button>`

})
export class CounterComponent {

  // Create a signal with an initial value of 0
  count: WritableSignal<number> = signal(0);

  constructor() {
    effect(() => {
      console.log(`The current value of count is: ${this.count()}`);
    });
  }

  increaseCountValue() {
    this.count.update(value => value + 1); // this will increment the current value of count by 1
  }

  resetValue() {
    this.count.set(0); // this will overwrite the current value of count
  }
}
