import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogamesIndividualComponent } from './components/videogames-individual/videogames-individual.component';
import { VideogamesComponent } from './components/videogames-overview/videogames.component';

const routes: Routes = [
  {
    path: '',
    component: VideogamesComponent,
    children: [
      { path: '', component: VideogamesComponent },
      { path: ':id', component: VideogamesIndividualComponent },
      { path: '**', redirectTo: 'videogames' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideogamesRoutingModule { }
