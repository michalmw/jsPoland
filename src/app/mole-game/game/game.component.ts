import { Component, OnInit } from '@angular/core';
import { GameService } from './../game.service';


@Component({
  selector: 'sd-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.styl']
})
export class GameComponent implements OnInit {

  public game: GameService;

  constructor(game: GameService) {
    this.game = game;
    console.log('test', this.game.getHoles());
  }

  ngOnInit() {
  }

}
