import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ConsultationService} from "../service/consultation.service";

@Component({
  selector: 'app-remove-patient-medicament',
  templateUrl: './remove-patient-medicament.component.html',
  styleUrls: ['./remove-patient-medicament.component.scss']
})
export class RemovePatientMedicamentComponent implements OnInit {

  @Input() patientNom: string;
  @Input() idModal: string;
  @Input() nom: string;
  @Input() type: string;
  @Input() idMedicament: string;
  @Input() idConsultation: string;

  deleteForm: FormGroup

  constructor(private router: Router, private route: ActivatedRoute, private consultationService: ConsultationService) {
  }

  ngOnInit() {
    this.deleteForm = new FormGroup({})
  }

  onSubmit() {
    console.log({consultation: this.idConsultation, medicament: this.idMedicament})
    this.consultationService.removeMedicament({consultation: this.idConsultation, medicament: this.idMedicament})
      .subscribe((data: any) => {
          let element: HTMLElement = document.getElementById("btnClose" + this.idModal);
          element.click();
        }, (err) => {
          console.log(err)
        },
        () => {
          this.load()

        },)

  }

  load() {
    location.reload()
  }
}
