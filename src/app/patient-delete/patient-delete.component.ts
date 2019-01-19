import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {PatientService} from "../service/patient.service";
import {FormService} from "../form.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.scss']
})
export class PatientDeleteComponent implements OnInit {


  @Input() idModal: string;
  @Input() idPatient: string;
  @Input() nom: string;
  @Input() prenom: string;

  patient: object = []
  show = false
  deleteFormPatient: any = new FormGroup({});

  constructor(private patientService: PatientService, private formService: FormService, private route: Router) {
  }

  ngOnInit() {

  }

  onSubmit() {
    this.patientService.deletePatient(this.idPatient)
      .subscribe(() => {

        },
        () => {
        },
        () => {
          let element: HTMLElement = document.getElementById("btnClose" + this.idPatient);
          element.click();
          this.route.navigate(['/'])
        })




  }
}
