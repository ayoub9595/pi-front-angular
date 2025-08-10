import { Component, EventEmitter, Input, Output } from '@angular/core';
import { navigationData } from '../../utils/NavigationData';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() show: boolean | undefined;
  @Output() showChange = new EventEmitter<void>();

  isLoggedIn: boolean;
  isAdmin: boolean;
  role: 'ADMIN' | 'UTILISATEUR' = 'UTILISATEUR';

  openSections: { [key: string]: boolean } = {
    equipement: false,
    affectation: false
  };

  navigationData = navigationData;

  constructor(private authenticationService: AuthenticationService) {
    this.role = this.authenticationService.getCurrentUserRole()!
    this.isLoggedIn = authenticationService.isLoggedIn();
    this.isAdmin = authenticationService.isAdmin();
  }

  handleChangeShow(): void {
    this.showChange.emit();
  }

  toggleSection(section: string) {
    this.openSections[section] = !this.openSections[section];
  }
}
