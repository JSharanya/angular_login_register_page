import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'dashboard', component:DashboardComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
