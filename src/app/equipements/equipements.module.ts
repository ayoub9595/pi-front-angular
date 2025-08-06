import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EquipementsRoutingModule} from './equipements-routing.module';
import { AddEquipementComponent } from './views/add-equipement/add-equipement.component';
import {ReactiveFormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';
import {DeleteIconComponent} from '../components/icons/delete-icon/delete-icon.component';



@NgModule({
  declarations: [
    AddEquipementComponent
  ],
  imports: [
    CommonModule,
    EquipementsRoutingModule,
    ReactiveFormsModule,
    DeleteIconComponent,
  ]
})
export class EquipementsModule { }
