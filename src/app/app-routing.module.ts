import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {SignupComponent} from './views/signup/signup.component';
import {HomeComponent} from './layout/home/home.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'home',component: HomeComponent,children: [
    {path: '', component: DashboardComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
