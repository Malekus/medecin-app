import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.scss']
})
export class TitreComponent implements OnInit {

  @Input() titreClasse: string;
  @Input() titrePartie: string;


  constructor() { }

  ngOnInit() {
  }


}
