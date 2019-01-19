import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CentreService} from "../service/centre.service";

@Component({
  selector: 'app-remove-patient-centre',
  templateUrl: './remove-patient-centre.component.html',
  styleUrls: ['./remove-patient-centre.component.scss']
})
export class RemovePatientCentreComponent implements OnInit {

  @Input() centreNom: string;
  @Input() idModal: string;
  @Input() nom: string;
  @Input() prenom: string;
  @Input() idCentre: string;

  deleteForm: FormGroup

  constructor(private router: Router, private route: ActivatedRoute, private centreService: CentreService) {
  }

  ngOnInit() {
    this.deleteForm = new FormGroup({})
  }

  onSubmit() {

    this.centreService.removePatient({id: this.idCentre, patient: this.route.snapshot.params['id']})
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
