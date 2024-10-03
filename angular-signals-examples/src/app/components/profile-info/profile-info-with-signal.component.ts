import {Component, computed, effect, input, output} from "@angular/core";

@Component({
  selector: 'new-profile-info',
  standalone: true,
  imports: [],
  template: `Full Name: {{fullName()}}`
})
export class ProfileInfoWithSignal {

  firstName = input<string | null>(null);
  lastName = input<string | null>(null);
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  profileChanged = output<boolean>();

  constructor() {
    effect(() => {
      console.log('Full name changed:', this.fullName());
    });
  }

  emitProfileChanged() {
    this.profileChanged.emit(true);
  }
}
