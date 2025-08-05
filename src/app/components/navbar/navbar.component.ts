import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Output() toggle = new EventEmitter();

  handleToggle() {
    this.toggle.emit();
  }

}
