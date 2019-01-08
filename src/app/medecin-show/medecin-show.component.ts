import {Component, OnInit} from '@angular/core';
import {MedecinService} from "../medecin.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-medecin-show',
  templateUrl: './medecin-show.component.html',
  styleUrls: ['./medecin-show.component.scss']
})
export class MedecinShowComponent implements OnInit {

  medecin = [];

  constructor(private route: ActivatedRoute, private medecinService: MedecinService) {
  }

  ngOnInit() {
    this.medecinService.getMedecin(this.route.snapshot.params['id'])
      .subscribe((data) => this.getMedecin(data));
  }

  getMedecin(data) {
    this.medecin = data.data;
  }

}
