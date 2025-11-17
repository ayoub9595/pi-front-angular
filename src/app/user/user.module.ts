import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './views/profile/profile.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ShowIconComponent} from "../components/show-icon/show-icon.component";
import {LoaderForButtonComponent} from "../components/loader-for-button/loader-for-button.component";


@NgModule({
  declarations: [
    ProfileComponent,
    ChangePasswordComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        ShowIconComponent,
        LoaderForButtonComponent
    ]
})
export class UserModule { }
