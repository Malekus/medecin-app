import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FormService} from "../form.service";
import {ConsultationService} from "../service/consultation.service";


@Component({
  selector: 'app-update-patient-consultation',
  templateUrl: './update-patient-consultation.component.html',
  styleUrls: ['./update-patient-consultation.component.scss']
})
export class UpdatePatientConsultationComponent implements OnInit {

  formUpdateConsultationPatient: FormGroup;
  submitted = false
  medecins: any = []
  types: any = []
  consultation: any = []

  constructor(private consultationService: ConsultationService, private formService: FormService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  get f() {
    return this.formUpdateConsultationPatient.controls;
  }

  ngOnInit() {
    this.formService.getMedecins()
      .subscribe((data: any) => {
        this.setMedecins(data)
      })

    this.formService.getConsultationTypes()
      .subscribe((data: any) => {
        this.setTypes(data)
      })


    this.consultationService.getConsultation(this.route.snapshot.params['id'])
      .subscribe((data: any) => {
        this.consultation = data.data
        this.formUpdateConsultationPatient = this.formBuilder.group({
          medecin: [this.consultation.medecin.id, Validators.required],
          type: [this.consultation.type.id, Validators.required],
        })
      })


  }

  setMedecins(data) {
    this.medecins = Object.entries(data)
  }

  setTypes(data) {
    this.types = Object.entries(data)
  }

  onSubmit() {
    this.submitted = true;
    if (this.formUpdateConsultationPatient.invalid) {
      return;
    }


    this.consultationService.putConsultation(this.route.snapshot.params['id'], {
      "medecin": this.formUpdateConsultationPatient.value.medecin,
      "patient": this.consultation.patient.id,
      "type": this.formUpdateConsultationPatient.value.type
    }).subscribe((data: any) => {
      this.router.navigate(['/patient-show/' + this.consultation.patient.id])
    })


    console.log()

  }
}
