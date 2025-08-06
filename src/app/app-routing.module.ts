import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {SignupComponent} from './views/signup/signup.component';
import {HomeComponent} from './layout/home/home.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'equipements',
        loadChildren: () => import('./equipements/equipements.module').then(m => m.EquipementsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
