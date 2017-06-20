import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sd-lawn',
  templateUrl: './lawn.component.html',
  styleUrls: ['./lawn.component.styl']
})
export class LawnComponent implements OnInit {

  public game: GameService;
  constructor(game: GameService) {
    this.game = game;
  }

  ngOnInit() {
  }
}
