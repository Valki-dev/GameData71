import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './core/pages/main/main.component';
import { MainModule } from './core/pages/main/main.module';
import { PrimeNGModule } from './shared/modules/prime-ng.module';
import { SharedModule } from './shared/modules/shared.module';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrimeNGModule,
    HttpClientModule,
    MainModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
