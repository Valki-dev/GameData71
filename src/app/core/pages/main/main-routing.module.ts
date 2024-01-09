import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(module => module.DashboardModule) },
  { path: 'videogames', loadChildren: () => import('../videogames/videogames.module').then(module => module.VideogamesModule) },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
