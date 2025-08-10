import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffectationListComponent } from './views/affectation-list/affectation-list.component';
import {AffectationsRoutingModule} from './affectations-routing.module';
import {ConfirmModalComponent} from '../components/confirm-modal/confirm-modal.component';
import {LoaderComponent} from '../components/loader/loader.component';
import {EditIconComponent} from '../components/icons/edit-icon/edit-icon.component';
import {DeleteIconComponent} from '../components/icons/delete-icon/delete-icon.component';
import {ShowIconComponent} from '../components/show-icon/show-icon.component';



@NgModule({
  declarations: [
    AffectationListComponent
  ],
  imports: [
    CommonModule,
    AffectationsRoutingModule,
    ConfirmModalComponent,
    LoaderComponent,
    EditIconComponent,
    DeleteIconComponent,
    ShowIconComponent
  ]
})
export class AffectationsModule { }
