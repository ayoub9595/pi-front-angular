import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationsRoutingModule } from './reclamations-routing.module';
import { AddReclamationComponent } from './views/add-reclamation/add-reclamation.component';
import { ReclamationListComponent } from './views/reclamation-list/reclamation-list.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AddReclamationComponent,
    ReclamationListComponent
  ],
  imports: [
    CommonModule,
    ReclamationsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReclamationsModule { }
