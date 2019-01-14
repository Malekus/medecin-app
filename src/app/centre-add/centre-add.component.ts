import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CentreService} from "../service/centre.service";
import {Router} from "@angular/router";
import {FormService} from "../form.service";

@Component({
  selector: 'app-centre-add',
  templateUrl: './centre-add.component.html',
  styleUrls: ['./centre-add.component.scss']
})
export class CentreAddComponent implements OnInit {

  addCentreForm = new FormGroup({
    nom: new FormControl(),// ['', Validators.required],
    type: new FormControl(),//['', [Validators.required]],
    adresse: new FormControl(),
  });

  centres: object;

  constructor(private centreService: CentreService, private formService: FormService, private route: Router) {
  }

  ngOnInit() {
    this.formService.getCentreTypes().subscribe((data: any) => {
      this.centres = Object.entries(data);
    });
  }

  onSubmit() {
    console.log(this.addCentreForm.value);
    /*
    this.medecinService.postMedecin(this.addFormMedecin.value)
      .subscribe((data: any) => {
        let element: HTMLElement = document.getElementById("btnClose");
        element.click();
        this.route.navigate(['medecin-show/' + data.data.id])
      });
    */

    this.addCentreForm = new FormGroup({
      nom: new FormControl(),// ['', Validators.required],
      type: new FormControl(),//['', [Validators.required]],
      adresse: new FormControl(),
    });

    let element: HTMLElement = document.getElementById("btnClose");
    element.click();

  }
}
