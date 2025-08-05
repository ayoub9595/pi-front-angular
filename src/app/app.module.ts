import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import {NgOptimizedImage} from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './layout/home/home.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { ProfileButtonComponent } from './components/buttons/profile-button/profile-button.component';
import { NotificationsButtonComponent } from './components/buttons/notifications-button/notifications-button.component';
import { ToggleButtonComponent } from './components/buttons/toggle-button/toggle-button.component';
import { ProfileIconComponent } from './components/icons/profile-icon/profile-icon.component';
import { DetailsIconComponent } from './components/icons/details-icon/details-icon.component';
import { ChangeIconComponent } from './components/icons/change-icon/change-icon.component';
import { LogoutIconComponent } from './components/icons/logout-icon/logout-icon.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    BackdropComponent,
    ProfileButtonComponent,
    NotificationsButtonComponent,
    ToggleButtonComponent,
    ProfileIconComponent,
    DetailsIconComponent,
    ChangeIconComponent,
    LogoutIconComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
