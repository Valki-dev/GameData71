import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { VideogamesModule } from '../videogames/videogames.module';
import { RouterModule } from '@angular/router';
import { NavSideMenuComponent } from '../../components/nav-side-menu/nav-side-menu.component';


@NgModule({
  declarations: [
    NavSideMenuComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    VideogamesModule,
    RouterModule
  ],
  exports: [
    NavSideMenuComponent
  ]
})
export class MainModule { }
