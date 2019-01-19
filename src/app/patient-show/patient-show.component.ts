import {Component, OnInit} from '@angular/core';
import {PatientService} from "../service/patient.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-patient-show',
  templateUrl: './patient-show.component.html',
  styleUrls: ['./patient-show.component.scss']
})
export class PatientShowComponent implements OnInit {

  patient: any = [];
  show;
  medicaments: any = []
  constructor(private route: ActivatedRoute, private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getPatient(this.route.snapshot.params['id'])
      .subscribe((data: any) => {
        this.setPatient(data.data)
        console.log(this.patient)
        this.show = true;
      });
  }

  setPatient(data) {
    this.patient = data;
    console.log(this.patient.medicaments)

    for (var i = 0; i < this.patient.medicaments.length / 2; i += 2) {
      this.medicaments.push([this.patient.medicaments[i].label, this.patient.medicaments[i+1].label, this.patient.medicaments[i].idConsultation, this.patient.medicaments[i].idMedicament])
    }

    console.log(this.medicaments)
  }
}
