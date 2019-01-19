import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FormService} from "../form.service";
import {ConsultationService} from "../service/consultation.service";

@Component({
  selector: 'app-add-patient-consultation',
  templateUrl: './add-patient-consultation.component.html',
  styleUrls: ['./add-patient-consultation.component.scss']
})
export class AddPatientConsultationComponent implements OnInit {

  formAddConsultationPatient: FormGroup;
  submitted = false
  medecins: any = []
  types: any = []
  show


  constructor(private consultationService: ConsultationService, private formService: FormService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  get f() {
    return this.formAddConsultationPatient.controls;
  }

  ngOnInit() {
    this.formService.getMedecins()
      .subscribe((data: any) => {
        this.setMedecins(data)
      })

    this.formService.getConsultationTypes()
      .subscribe((data: any) => {
        this.setTypes(data)
        this.show = true;
      })


    this.formAddConsultationPatient = this.formBuilder.group({
      medecin: ['', Validators.required],
      type: ['', Validators.required],
    })


  }

  onSubmit() {
    this.submitted = true;
    if (this.formAddConsultationPatient.invalid) {
      return;
    }
    this.consultationService.postConsultation({
      "medecin": this.formAddConsultationPatient.value.medecin,
      "patient": this.route.snapshot.params['id'],
      "type": this.formAddConsultationPatient.value.type
    }).subscribe((data: any) => {
      this.router.navigate(['/patient-show/' + this.route.snapshot.params['id']])
    })
  }

  setMedecins(data) {
    this.medecins = Object.entries(data)
  }

  setTypes(data) {
    this.types = Object.entries(data)
  }

}
