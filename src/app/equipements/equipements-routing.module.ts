import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddEquipementComponent} from './views/add-equipement/add-equipement.component';


const routes: Routes = [
  {path: '',component: AddEquipementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EquipementsRoutingModule { }
