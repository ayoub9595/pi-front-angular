import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'toggle-button',
  standalone: false,
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css'
})
export class ToggleButtonComponent {

  @Output() toggle = new EventEmitter();

  toggleButton() {
    this.toggle.emit();
  }

}
