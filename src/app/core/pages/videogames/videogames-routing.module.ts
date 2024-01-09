import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogamesComponent } from './components/videogames-overview/videogames.component';
import { VideogamesIndividualComponent } from './components/videogames-individual/videogames-individual.component';

const routes: Routes = [
  { path: '', component: VideogamesComponent },
  { path: ':id', component: VideogamesIndividualComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideogamesRoutingModule { }
