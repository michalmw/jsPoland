import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoleGameModule } from './mole-game/mole-game.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MoleGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
