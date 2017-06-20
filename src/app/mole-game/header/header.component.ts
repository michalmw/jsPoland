import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  public score: number;
  public time: Date;

  constructor() {
    this.score = 100;
    setInterval( () => this.time = new Date(), 1000);
  }

  ngOnInit() {
  }

}
