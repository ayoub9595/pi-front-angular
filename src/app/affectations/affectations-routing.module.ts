import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AffectationListComponent} from './views/affectation-list/affectation-list.component';

const routes: Routes = [
  {path: '',component: AffectationListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AffectationsRoutingModule { }
