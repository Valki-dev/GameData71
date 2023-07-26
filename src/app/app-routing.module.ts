import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { VideogamesComponent } from './core/pages/videogames/videogames.component';
const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'videogames', component: VideogamesComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
