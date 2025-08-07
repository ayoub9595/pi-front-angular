import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EquipementsRoutingModule} from './equipements-routing.module';
import { AddEquipementComponent } from './views/add-equipement/add-equipement.component';
import {ReactiveFormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';
import {DeleteIconComponent} from '../components/icons/delete-icon/delete-icon.component';
import { EquipementListComponent } from './views/equipement-list/equipement-list.component';
import {EditIconComponent} from '../components/icons/edit-icon/edit-icon.component';
import {LoaderComponent} from '../components/loader/loader.component';
import { EditEquipementComponent } from './views/edit-equipement/edit-equipement.component';
import {ConfirmModalComponent} from '../components/confirm-modal/confirm-modal.component';



@NgModule({
  declarations: [
    AddEquipementComponent,
    EquipementListComponent,
    EditEquipementComponent
  ],
  imports: [
    CommonModule,
    EquipementsRoutingModule,
    ReactiveFormsModule,
    DeleteIconComponent,
    EditIconComponent,
    LoaderComponent,
    ConfirmModalComponent
  ]
})
export class EquipementsModule { }
