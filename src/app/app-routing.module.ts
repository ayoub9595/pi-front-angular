import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {SignupComponent} from './views/signup/signup.component';
import {HomeComponent} from './layout/home/home.component';
import {adminGuard, authGuard, redirectIfAuthenticatedGuard} from './guards/auth.guard';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {AccessDeniedComponent} from './views/access-denied/access-denied.component';

const routes: Routes = [
  {path: '',component: LoginComponent,canActivate: [redirectIfAuthenticatedGuard]},
  {path: 'signup',component: SignupComponent, canActivate: [redirectIfAuthenticatedGuard]},
  {
    path: 'home', component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'equipements',
        canActivate: [adminGuard],
        loadChildren: () => import('./equipements/equipements.module').then(m => m.EquipementsModule),

      },
      {
        path: 'dashboard', component: DashboardComponent
      }
    ]
  },
  {path:'access-denied', component: AccessDeniedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
