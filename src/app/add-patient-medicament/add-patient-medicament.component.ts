import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../service/patient.service";
import {MedicamentService} from "../service/medicament.service";
import {ConsultationService} from "../service/consultation.service";

@Component({
  selector: 'app-add-patient-medicament',
  templateUrl: './add-patient-medicament.component.html',
  styleUrls: ['./add-patient-medicament.component.scss']
})
export class AddPatientMedicamentComponent implements OnInit {

  formAddPatientMedicament: FormGroup;
  consultations: any = [];
  medicaments: any = [];
  show;
  submitted = false

  constructor(private patientService: PatientService, private consultationService: ConsultationService, private formBuilder: FormBuilder, private medicamentService: MedicamentService, private router: Router, private route: ActivatedRoute) {
  }

  get f() {
    return this.formAddPatientMedicament.controls;
  }

  ngOnInit() {
    this.patientService.getPatient(this.route.snapshot.params['id'])
      .subscribe((data: any) => {
        this.setConsultations(data.data.consultations)
      })

    this.medicamentService.getMedicaments()
      .subscribe((data: any) => {
        this.setMedicaments(data.data)
        this.show = true;
      })

    this.formAddPatientMedicament = this.formBuilder.group({
      consultation: ['', Validators.required],
      medicament: ['', Validators.required],
    })
  }

  setConsultations(data: any) {
    let arr = []
    data.forEach(function (element) {
      arr.push([element.idConsultation, "Dr " + element.nom.toUpperCase(), element.label])
    })
    this.consultations = arr;
  }

  setMedicaments(data: any) {
    let arr = []
    data.forEach(function (element) {
      arr.push([element.id, element.nom, element.type])
    })
    this.medicaments = arr
  }

  onSubmit() {
    this.submitted = true;
    if (this.formAddPatientMedicament.invalid) {
      return;
    }

    console.log(this.formAddPatientMedicament.value)
    this.consultationService.addMedicament(this.formAddPatientMedicament.value)
      .subscribe((data: any) => {
        console.log(data)
        this.router.navigate(['/patient-show/' + this.route.snapshot.params['id']])
      })
  }

}
