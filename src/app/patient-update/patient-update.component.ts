import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../form.service";
import {PatientService} from "../service/patient.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.scss']
})
export class PatientUpdateComponent implements OnInit {

  updateFormPatient: FormGroup;
  submitted = false;
  show = false

  constructor(private patientService: PatientService, private formService: FormService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.patientService.getPatient(this.route.snapshot.params['id'])
      .subscribe((data: any) => {
          this.updateFormPatient = this.formBuilder.group({
            nom: [data.data.nom, Validators.required],
            prenom: [data.data.prenom, Validators.required],
            numsecu: [data.data.numsecu, Validators.compose([Validators.maxLength(15), Validators.required, Validators.pattern('^[0-9]*$')])],
            adresse: [data.data.adresse, Validators.required],
            tel: [data.data.tel, Validators.compose([Validators.required, Validators.pattern('(0|(\\+33)|(0033))[1-9][0-9]{8}')])]
          });
        },
        () => {
        },
        () => {
          this.show = true;
        })

  }

  get f() {
    return this.updateFormPatient.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.updateFormPatient.invalid) {
      return;
    }

    this.patientService.putPatient(this.route.snapshot.params['id'], this.updateFormPatient.value)
      .subscribe((data: any) => {
        this.router.navigate(['/patient-show/' + this.route.snapshot.params['id']])
      })
  }
}
