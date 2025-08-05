import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  show = true;

  closeSidebar() {
    this.show = false;
  }
  openSidebar() {
    this.show = true;
  }

}
