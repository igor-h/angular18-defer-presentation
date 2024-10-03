import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";

@Component({
  selector: 'old-profile-info',
  standalone: true,
  imports: [],
  template: `Full Name: {{fullName}}`,
})
export class ProfileInfoWithoutSignal implements OnChanges {
  @Input() firstName: string | null = null
  @Input() lastName: string | null = null
  @Output() profileChanged = new EventEmitter<boolean>();

  fullName: string | null = null

  ngOnChanges() {
    this.fullName = `${this.firstName} ${this.lastName}`
    console.log('Full name changed:', this.fullName)
  }

  emitProfileChanged() {
    this.profileChanged.emit(true);
  }
}
