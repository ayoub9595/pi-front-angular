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
import {LoaderForButtonComponent} from "../components/loader-for-button/loader-for-button.component";
import {LoaderComponent} from '../components/loader/loader.component';
import { ReclamationTableComponent } from './views/reclamation-list/reclamation-table/reclamation-table.component';
import { ReclamationCardComponent } from './views/reclamation-list/reclamation-card/reclamation-card.component';


@NgModule({
  declarations: [
    AddReclamationComponent,
    ReclamationListComponent,
    ReclamationDetailsComponent,
    ProcessReclamationComponent,
    ReclamationTableComponent,
    ReclamationCardComponent
  ],
  imports: [
    CommonModule,
    ReclamationsRoutingModule,
    ReactiveFormsModule,
    ShowIconComponent,
    InfoModalComponent,
    LoaderForButtonComponent,
    LoaderComponent
  ]
})
export class ReclamationsModule { }
