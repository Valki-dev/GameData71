import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogamesRoutingModule } from './videogames-routing.module';
import { VideogamesComponent } from './components/videogames-overview/videogames.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { VideogameDetailsComponent } from './components/videogame-details/videogame-details.component';


@NgModule({
  declarations: [
    VideogamesComponent,
    VideogameDetailsComponent
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
