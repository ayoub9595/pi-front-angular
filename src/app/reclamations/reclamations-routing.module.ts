import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReclamationListComponent} from './views/reclamation-list/reclamation-list.component';
import {AddReclamationComponent} from './views/add-reclamation/add-reclamation.component';

const routes: Routes = [
  {  path: '', component: ReclamationListComponent },
  {  path: 'add', component: AddReclamationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationsRoutingModule { }
