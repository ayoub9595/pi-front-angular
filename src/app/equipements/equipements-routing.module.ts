import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddEquipementComponent} from './views/add-equipement/add-equipement.component';
import {EquipementListComponent} from './views/equipement-list/equipement-list.component';
import {EditEquipementComponent} from './views/edit-equipement/edit-equipement.component';


const routes: Routes = [
  {path: '',component: EquipementListComponent},
  {path: 'add',component: AddEquipementComponent},
  {path: 'edit/:id',component: EditEquipementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EquipementsRoutingModule { }
