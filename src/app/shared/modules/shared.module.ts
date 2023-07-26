import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSideMenuComponent } from 'src/app/core/components/nav-side-menu/nav-side-menu.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/core/pages/dashboard/dashboard.component';
import { CardComponent } from '../components/card/card.component';



@NgModule({
  declarations: [
    NavSideMenuComponent,
    DashboardComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavSideMenuComponent,
    DashboardComponent,
    CardComponent
  ]
})
export class SharedModule { }
