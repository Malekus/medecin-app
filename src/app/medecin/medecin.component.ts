import {Component, OnInit} from '@angular/core';
import {MedecinService} from "../service/medecin.service";


@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})
export class MedecinComponent implements OnInit {

  medecins: any = [];
  links: any = [];
  meta: any = [];
  diplomes: any = [];
  search;
  existe = false;

  constructor(private medecinService: MedecinService) {
  }

  ngOnInit() {
    this.medecinService.getMedecins()
      .subscribe(
        (data: any) => {
          this.setMedecins(data)
        });
  }

  setMedecins(data) {
    if(data.data == []){
      this.existe = true;
      this.medecins = true
    }
    else{
      this.medecins = data.data
    }
    this.links = data.links
    this.meta = data.meta
  }

  onSearch(searching) {
    this.medecins = [];
    this.medecinService.getMedecins(searching)
      .subscribe((data: any) => {
        if(data.data.length == 0){
          this.medecinService.getMedecins()
            .subscribe(
              (data : any) => {
                this.setMedecins(data)
              }
            )
        }
        this.setMedecins(data)
      });
  }

}

