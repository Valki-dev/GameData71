import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/modules/shared.module';
import { PrimeNGModule } from './shared/modules/prime-ng.module';
import { VideogamesComponent } from './core/pages/videogames/videogames.component';
import { CardGameComponent } from './shared/components/card-game/card-game.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogamesComponent,
    CardGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrimeNGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
