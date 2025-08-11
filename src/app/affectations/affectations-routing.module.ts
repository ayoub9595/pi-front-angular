import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AffectationListComponent} from './views/affectation-list/affectation-list.component';
import {AddAffectationComponent} from './views/add-affectation/add-affectation.component';

const routes: Routes = [
  {path: '',component: AffectationListComponent},
  {path: 'add',component: AddAffectationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AffectationsRoutingModule { }
