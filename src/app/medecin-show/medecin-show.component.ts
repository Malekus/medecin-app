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
  show;
  constructor(private route: ActivatedRoute, private medecinService: MedecinService) {
  }

  ngOnInit() {
    this.medecinService.getMedecin(this.route.snapshot.params['id'])
      .subscribe((data: any) => {
        console.log(data.data)
          this.setMedecin(data.data)
        this.show = true;
      });
  }

  setMedecin(data) {
    this.medecin = data;
    this.centre = data.centre;
    this.consultations = data.consultations;
  }

}
