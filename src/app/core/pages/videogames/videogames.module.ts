import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogamesRoutingModule } from './videogames-routing.module';
import { VideogamesComponent } from './components/videogames-overview/videogames.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { VideogamesIndividualComponent } from './components/videogames-individual/videogames-individual.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    VideogamesComponent,
    VideogamesIndividualComponent
  ],
  imports: [
    CommonModule,
    VideogamesRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    VideogamesComponent
  ]
})
export class VideogamesModule { }
