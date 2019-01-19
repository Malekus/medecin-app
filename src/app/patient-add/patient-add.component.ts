import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../form.service";
import {PatientService} from "../service/patient.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  @Input() modalName: string;

  addFormPatient: FormGroup;
  submitted = false;

  constructor(private patientService: PatientService, private formService: FormService, private route: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.addFormPatient = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      numsecu: ['', Validators.compose([Validators.maxLength(15), Validators.required, Validators.pattern('^[0-9]*$')])],
      adresse: ['', Validators.required],
      tel: ['', Validators.compose([Validators.required, Validators.pattern('(0|(\\+33)|(0033))[1-9][0-9]{8}')])]
    });
  }

  get f() {
    return this.addFormPatient.controls;
  }

  onSubmit() {

    this.submitted = true;

    if (this.addFormPatient.invalid) {
      return;
    }

    this.patientService.postPatient(this.addFormPatient.value)
      .subscribe((data: any) => {
        this.route.navigate(['/patient-show/' + data.data.id])
      })
  }

}
