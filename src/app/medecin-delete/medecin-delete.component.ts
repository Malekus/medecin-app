import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {MedecinService} from "../service/medecin.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-medecin-delete',
  templateUrl: './medecin-delete.component.html',
  styleUrls: ['./medecin-delete.component.scss']
})
export class MedecinDeleteComponent implements OnInit {
  @Input() idModal: string;
  @Input() idMedecin: string;
  medecin: object = [];

  deleteFormMedecin: any = new FormGroup({});

  constructor(private medecinService: MedecinService, private http: HttpClient, private route: Router) {
  }


  ngOnInit() {
    this.initDelete();
  }

  getMedecin(data) {
    this.medecin = data.data;
  }

  initDelete(){
    this.medecinService.getMedecin(this.idMedecin)
      .subscribe((data: any) => {
        this.getMedecin(data);
      })
  }

  onSubmit() {
    console.log("je supprime ce medecin " + this.idMedecin);
    let element: HTMLElement = document.getElementById("btnClose"+ this.idMedecin);
    element.click();
    this.route.navigate(['medecin']);
  }
}
