import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'profile-button',
  standalone: false,
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.css'
})
export class ProfileButtonComponent implements OnInit {
  userName: string = 'Utilisateur';
  userRole: string = 'UTILISATEUR';

  constructor(private router: Router,private authService: AuthenticationService) {

  }

  ngOnInit() {
    this.userName = this.authService.getCurrentUserName();
    this.userRole = this.authService.getCurrentUserRole();
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  get roleBadgeText(): string {
    return this.userRole === 'ADMIN' ? 'Admin' : 'Utilisateur';
  }

  get roleBadgeClass(): string {
    return this.userRole.toLowerCase();
  }

}
