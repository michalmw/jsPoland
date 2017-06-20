import { GameService } from './../game.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hole } from './../hole';

@Component({
  selector: 'sd-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.styl']
})
export class HoleComponent implements OnInit {

  @Input()
  public hole: Hole;

  @Output()
  public hit = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  getClass() {
    return `hole ${this.hole.state}`;
  }

}
