import {Component, OnInit} from '@angular/core';
import {MedecinService} from "../service/medecin.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-medecin-show',
  templateUrl: './medecin-show.component.html',
  styleUrls: ['./medecin-show.component.scss']
})
export class MedecinShowComponent implements OnInit {

  medecin: object = [];
  centre: object = [];
  consultations: object = [];
  constructor(private route: ActivatedRoute, private medecinService: MedecinService) {
  }

  ngOnInit() {
    this.medecinService.getMedecin(this.route.snapshot.params['id'])
      .subscribe((data: any) => {
          this.getMedecin(data.data)
      }

      );
  }

  getMedecin(data) {
    this.medecin = data;
    this.centre = data.centre;
    this.consultations = data.consultations;
  }

}
