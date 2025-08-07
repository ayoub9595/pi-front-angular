import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {SignupComponent} from './views/signup/signup.component';
import {HomeComponent} from './layout/home/home.component';
import {authGuard, redirectIfAuthenticatedGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '',component: LoginComponent,canActivate: [redirectIfAuthenticatedGuard]},
  {path: 'signup',component: SignupComponent, canActivate: [redirectIfAuthenticatedGuard]},
  {
    path: 'home', component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'equipements',
        loadChildren: () => import('./equipements/equipements.module').then(m => m.EquipementsModule),

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
