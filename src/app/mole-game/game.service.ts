import { Injectable } from '@angular/core';
import { Hole } from './hole';

@Injectable()
export class GameService {

  private holes: Hole[];
  private gameLoop;
  public score: number;
  public gameTime;

  constructor() {
    this.holes = [];
    this.score = 0;
    let len = 4;
    while (len--) {
      this.holes.push(new Hole())
    }

    this.startGame();
    setInterval( () => this.gameTime = new Date(), 1000);

  }
  getHoles() {
    return this.holes;
  }
  getScore() {
    return this.score;
  }
  startGame() {
    this.gameLoop = setInterval( () => {

      setTimeout( () => {
        this.holes[index].state = '';
      }, 750)

      const index = Math.floor(Math.random() * this.holes.length);
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
      this.score += 10;
      setTimeout( () => {
        hole.state = '';
        this.startGame();
      }, 1000);
    }
  }
}
