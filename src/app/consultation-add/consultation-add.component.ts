import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ConsultationService} from "../service/consultation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-consultation-add',
  templateUrl: './consultation-add.component.html',
  styleUrls: ['./consultation-add.component.scss']
})
export class ConsultationAddComponent implements OnInit {

  addConsultationForm = new FormGroup({
    patient: new FormControl()
  });

  constructor(private consultationService: ConsultationService, private route: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.addConsultationForm.value);
    /*
    this.medecinService.postMedecin(this.addFormMedecin.value)
      .subscribe((data: any) => {
        let element: HTMLElement = document.getElementById("btnClose");
        element.click();
        this.route.navigate(['medecin-show/' + data.data.id])
      });
    */

  }
}
