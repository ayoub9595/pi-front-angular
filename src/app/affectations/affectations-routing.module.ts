import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AffectationListComponent} from './views/affectation-list/affectation-list.component';
import {AddAffectationComponent} from './views/add-affectation/add-affectation.component';
import {EditAffectationComponent} from './views/edit-affectation/edit-affectation.component';

const routes: Routes = [
  {path: '',component: AffectationListComponent},
  {path: 'add',component: AddAffectationComponent},
  {path: 'edit/:id',component: EditAffectationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AffectationsRoutingModule { }
