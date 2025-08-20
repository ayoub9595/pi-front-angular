import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationsRoutingModule } from './reclamations-routing.module';
import { AddReclamationComponent } from './views/add-reclamation/add-reclamation.component';
import { ReclamationListComponent } from './views/reclamation-list/reclamation-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ShowIconComponent} from "../components/show-icon/show-icon.component";
import { ReclamationDetailsComponent } from './views/reclamation-details/reclamation-details.component';
import {InfoModalComponent} from '../components/info-modal/info-modal.component';
import { ProcessReclamationComponent } from './components/process-reclamation/process-reclamation.component';


@NgModule({
  declarations: [
    AddReclamationComponent,
    ReclamationListComponent,
    ReclamationDetailsComponent,
    ProcessReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationsRoutingModule,
    ReactiveFormsModule,
    ShowIconComponent,
    InfoModalComponent
  ]
})
export class ReclamationsModule { }
