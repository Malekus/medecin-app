import {Component, OnInit} from '@angular/core';
import {MedecinService} from "../medecin.service";

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})
export class MedecinComponent implements OnInit {

  medecins = [];
  links = [];
  meta = [];

  constructor(private medecinService: MedecinService) {
  }

  ngOnInit() {
    this.medecinService.getMedecins()
      .subscribe((data) => this.getMedecins(data));
  }

  getMedecins(data) {
    this.medecins = data.data
    this.links = data.links
    this.meta = data.meta
  }

  add(){

  }

}

