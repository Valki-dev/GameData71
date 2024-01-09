import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogamesComponent } from './components/videogames-overview/videogames.component';
import { VideogameDetailsComponent } from './components/videogame-details/videogame-details.component';

const routes: Routes = [
  { path: '', component: VideogamesComponent },
  { path: ':id', component: VideogameDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideogamesRoutingModule { }
