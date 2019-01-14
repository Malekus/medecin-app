import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MedicamentService} from "../service/medicament.service";

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent implements OnInit {

  constructor(private medicamentService: MedicamentService) {
  }

  ngOnInit() {
  }

  test() {
    console.log("toto");

  }

}
