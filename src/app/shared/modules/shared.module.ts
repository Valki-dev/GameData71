import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardGameComponent } from '../components/card-game/card-game.component';
import { CardComponent } from '../components/card/card.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@NgModule({
  declarations: [CardComponent, CardGameComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, CardGameComponent, SpinnerComponent],
})
export class SharedModule {}
