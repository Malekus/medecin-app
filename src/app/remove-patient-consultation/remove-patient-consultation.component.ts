import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CentreService} from "../service/centre.service";
import {ConsultationService} from "../service/consultation.service";

@Component({
  selector: 'app-remove-patient-consultation',
  templateUrl: './remove-patient-consultation.component.html',
  styleUrls: ['./remove-patient-consultation.component.scss']
})
export class RemovePatientConsultationComponent implements OnInit {


  @Input() nomMedecin: string;
  @Input() typeConsultation: string;
  @Input() idModal: string;
  @Input() idConsultation: string;

  deleteForm: FormGroup

  constructor(private router: Router, private route: ActivatedRoute, private consultationService: ConsultationService) {
  }

  ngOnInit() {
    this.deleteForm = new FormGroup({})
  }

  onSubmit() {

    this.consultationService.deleteConsultation(this.idConsultation)
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
