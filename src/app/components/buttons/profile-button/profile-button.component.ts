import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'profile-button',
  standalone: false,
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.css'
})
export class ProfileButtonComponent {
  constructor(private router: Router) {

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
