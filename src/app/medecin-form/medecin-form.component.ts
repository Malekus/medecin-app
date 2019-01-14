import {Component, OnInit} from '@angular/core';
import {MedecinService} from "../service/medecin.service";
import {FormService} from "../form.service";
import {FormGroup, FormControl} from "@angular/forms";


@Component({
  selector: 'app-medecin-form',
  templateUrl: './medecin-form.component.html',
  styleUrls: ['./medecin-form.component.scss']
})
export class MedecinFormComponent implements OnInit {



  diplomes: any = [];
  specialites: any = [];


  deleteFormMedecin: any = new FormGroup({});

  constructor(private medecinService: MedecinService, private formService: FormService,) {
    this.formService.getSpecialites()
      .subscribe((data: any) => {
        this.specialites = Object.entries(data);
      })

    this.formService.getDiplomes()
      .subscribe((data: any) => {
        this.diplomes = Object.entries(data);
      })
  }

  ngOnInit() {
  }


}
