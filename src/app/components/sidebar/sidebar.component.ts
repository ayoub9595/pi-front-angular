import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
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
  nom: string = 'Utilisateur';
  isMobile: boolean = false;

  openSections: { [key: string]: boolean } = {
    equipement: false,
    affectation: false
  };

  navigationData = navigationData;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.role = this.authenticationService.getCurrentUserRole()!
    this.nom = this.authenticationService.getCurrentUserName();
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

  handleLogout(): void {
    localStorage.clear();
    this.router.navigate(['/'], { replaceUrl: true });
  }

  handleSubLinkClick(subLink: any, event: Event): void {
    if (subLink.label === "Logout") {
      event.preventDefault();
      this.handleLogout();
    } else {
      this.handleChangeShow();
    }
  }

  getNavigationData() {
    const baseData = this.navigationData[this.role] || [];

    if (this.isMobile) {
      const userMenuItem = {
        id: "utilisateur",
        title: "Utilisateur",
        isToggleable: true,
        subLinks: [
          { to: "/home/profile", label: this.nom,showRoleBadge: true },
          { to: "/home/change-password", label: "Changer mot de passe" },
          { to: "#", label: "Logout" }
        ]
      };

      return [userMenuItem,...baseData];
    }

    return baseData;
  }
}
