import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { navigationData } from '../../utils/NavigationData';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit,OnDestroy {
  @Input() show: boolean | undefined;
  @Output() showChange = new EventEmitter<void>();

  isLoggedIn: boolean;
  isAdmin: boolean;
  role: 'ADMIN' | 'UTILISATEUR' = 'UTILISATEUR';
  isMobile: boolean = false;

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

  ngOnInit() {
    this.checkScreenSize();
  }

  ngOnDestroy() {
    // Cleanup is handled by @HostListener decorator
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 500;
  }

  handleChangeShow(): void {
    this.showChange.emit();
  }

  toggleSection(section: string) {
    this.openSections[section] = !this.openSections[section];
  }

  getNavigationData() {
    const baseData = this.navigationData[this.role] || [];

    if (this.isMobile) {
      const userMenuItem = {
        id: "utilisateur",
        title: "Utilisateur",
        isToggleable: true,
        subLinks: [
          { to: "/profile", label: "Profile" },
          { to: "/change-password", label: "Changer mot de passe" },
          { to: "/logout", label: "Logout" }
        ]
      };

      return [userMenuItem,...baseData];
    }

    return baseData;
  }

}
