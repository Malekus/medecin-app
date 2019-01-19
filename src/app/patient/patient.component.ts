import {Component, OnInit} from '@angular/core';
import {PatientService} from "../service/patient.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patients;
  links;
  meta;
  search;

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getPatients()
      .subscribe((data) => {
        this.setPatients(data)
      });
  }

  setPatients(data) {
    this.patients = data.data;
    this.links = data.links;
    this.meta = data.meta;
  }

  onSearch(searching) {
    this.patients = [];
    this.patientService.getPatients(searching)
      .subscribe((data) => {
        this.setPatients(data)
      });
  }


}
