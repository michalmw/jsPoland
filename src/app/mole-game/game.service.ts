import { Injectable } from '@angular/core';
import { Hole } from './hole';

@Injectable()
export class GameService {

  private holes: Hole[] = [];
  private gameLoop;

  constructor() {
    let len = 4;
    while (len--) {
      this.holes.push(new Hole())
    }
  }

  getHoles() {
    return this.holes;
  }

  startGame() {
    this.gameLoop = setInterval( () => {
      const index = (Math.random() * this.holes.length);
      this.holes[index].state = 'up';
      setTimeout( () => {
        this.holes[index].state = '';
      }, 750)
    }, 1000)
  }

  hit(hole: Hole) {
    if (hole.state === 'up') {
      clearInterval(this.gameLoop);
      hole.state = 'hit';
      setTimeout( () => {
        hole.state = '';
        this.startGame();
      }, 500);
    }
  }

}
