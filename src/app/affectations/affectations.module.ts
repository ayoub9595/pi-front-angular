import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffectationListComponent } from './views/affectation-list/affectation-list.component';
import {AffectationsRoutingModule} from './affectations-routing.module';
import {ConfirmModalComponent} from '../components/confirm-modal/confirm-modal.component';
import {LoaderComponent} from '../components/loader/loader.component';
import {EditIconComponent} from '../components/icons/edit-icon/edit-icon.component';
import {DeleteIconComponent} from '../components/icons/delete-icon/delete-icon.component';
import {ShowIconComponent} from '../components/show-icon/show-icon.component';
import { UserCardInfoComponent } from './components/user-card-info/user-card-info.component';
import { EquipementCardInfoComponent } from './components/equipement-card-info/equipement-card-info.component';
import { AffectationDetailsComponent } from './views/affectation-details/affectation-details.component';
import {InfoModalComponent} from '../components/info-modal/info-modal.component';
import { AddAffectationComponent } from './views/add-affectation/add-affectation.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditAffectationComponent } from './views/edit-affectation/edit-affectation.component';



@NgModule({
  declarations: [
    AffectationListComponent,
    UserCardInfoComponent,
    EquipementCardInfoComponent,
    AffectationDetailsComponent,
    AddAffectationComponent,
    EditAffectationComponent
  ],
    imports: [
        CommonModule,
        AffectationsRoutingModule,
        ConfirmModalComponent,
        LoaderComponent,
        EditIconComponent,
        DeleteIconComponent,
        ShowIconComponent,
        InfoModalComponent,
        ReactiveFormsModule
    ]
})
export class AffectationsModule { }
