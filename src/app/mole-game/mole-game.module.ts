import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from './game.service';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { HoleComponent } from './hole/hole.component';
import { LawnComponent } from './lawn/lawn.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GameComponent
  ],
  declarations: [GameComponent, HeaderComponent, LawnComponent, HoleComponent],
  providers: [GameService]
})
export class MoleGameModule { }
