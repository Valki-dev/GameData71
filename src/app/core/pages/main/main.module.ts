import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { VideogamesModule } from '../videogames/videogames.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    VideogamesModule
  ]
})
export class MainModule { }
