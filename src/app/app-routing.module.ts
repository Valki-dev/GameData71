import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { MainComponent } from './core/pages/main/main.component';


const routes: Routes = [
  // {path: 'videogames', loadChildren: () => import('./core/pages/videogames/videogames.module').then(response => response.VideogamesModule) },
  { path: 'home', loadChildren: () => import('./core/pages/main/main.module').then(module => module.MainModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
