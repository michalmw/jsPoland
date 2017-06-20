import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  @Input() score: number;
  @Input() time: Date;

  constructor() {}

  ngOnInit() {
  }

}
