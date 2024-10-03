import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-computed-example',
  standalone: true,
  template: `
    <div>
      <input type="text" placeholder="First Name" (keyup)="firstName.set($any($event.target).value)" />
      <input type="text" placeholder="Last Name" (keyup)="lastName.set($any($event.target).value)" />

      <p>Full Name: {{ fullName() }}</p>
    </div>
  `,
})
export class ComputedExampleComponent {
  // Signals for first and last name
  firstName = signal('John');
  lastName = signal('Doe');

  // Computed signal to calculate the full name
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
}
