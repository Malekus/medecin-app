import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-titre-show',
  templateUrl: './titre-show.component.html',
  styleUrls: ['./titre-show.component.scss']
})
export class TitreShowComponent implements OnInit {

  @Input() titre: string;
  @Input() classIcon: string;
  constructor() { }

  ngOnInit() {
  }

}
