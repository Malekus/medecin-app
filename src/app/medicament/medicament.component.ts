import {Component, OnInit} from '@angular/core';
import {MedicamentService} from "../service/medicament.service";

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent implements OnInit {

  medicaments;
  links;
  meta;
  search;

  constructor(private medicamentService: MedicamentService) {
  }

  ngOnInit() {
    this.medicamentService.getMedicaments()
      .subscribe((data) => {
        this.setMedicaments(data)
        console.log(this.medicaments)
      });
  }

  setMedicaments(data) {
    this.medicaments = data.data;
    this.links = data.links;
    this.meta = data.meta;
  }

  onSearch(searching) {
    /*
    this.medicaments = [];
    this.medicamentService.getMedicaments(searching)
      .subscribe((data) => {
        this.setMedicaments(data)
      });
    */
  }

}
