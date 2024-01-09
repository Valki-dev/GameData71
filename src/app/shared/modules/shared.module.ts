import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../components/card/card.component';
import { CardGameComponent } from '../components/card-game/card-game.component';


@NgModule({
  declarations: [
    CardComponent,
    CardGameComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    CardGameComponent
  ]
})
export class SharedModule { }
