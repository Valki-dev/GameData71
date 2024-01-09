import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/modules/shared.module';
import { PrimeNGModule } from './shared/modules/prime-ng.module';
import { HttpClientModule } from '@angular/common/http';
import { VideogamesModule } from './core/pages/videogames/videogames.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './core/pages/main/main.component';
import { MainModule } from './core/pages/main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrimeNGModule,
    HttpClientModule,
    MainModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
