import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { VideogamesModule } from '../videogames/videogames.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    VideogamesModule,
    RouterModule
  ]
})
export class MainModule { }
