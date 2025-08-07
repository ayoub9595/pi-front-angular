import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddEquipementComponent} from './views/add-equipement/add-equipement.component';
import {EquipementListComponent} from './views/equipement-list/equipement-list.component';


const routes: Routes = [
  {path: '',component: EquipementListComponent},
  {path: 'add',component: AddEquipementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EquipementsRoutingModule { }
