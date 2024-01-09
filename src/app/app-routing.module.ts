import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';


const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'videogames', loadChildren: () => import('./core/pages/videogames/videogames.module').then(response => response.VideogamesModule) },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
