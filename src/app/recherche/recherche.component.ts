import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {

  @Input() titreBtn: string;
  @Input() placeholder: string;
  @Input() modalName: string;


  constructor() {
  }

  ngOnInit() {
  }

}
