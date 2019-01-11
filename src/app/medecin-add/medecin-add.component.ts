import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MedecinService} from "../service/medecin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-medecin-add',
  templateUrl: './medecin-add.component.html',
  styleUrls: ['./medecin-add.component.scss']
})
export class MedecinAddComponent implements OnInit {


  @Input() idModal: string;

  addForm = new FormGroup({
    nom: new FormControl(),// ['', Validators.required],
    prenom: new FormControl(),//['', [Validators.required]],
    diplome: new FormControl(),//['', [Validators.required]],
    specialite: new FormControl(),//['', [Validators.required]],
  });

  constructor(private medecinService: MedecinService, private route: Router) {
  }

  ngOnInit() {

  }


  onSubmit() {
    console.log(this.addForm.value);
    this.medecinService.postMedecin(this.addForm.value)
      .subscribe((data: any) => {
        let element: HTMLElement = document.getElementById("btnClose");
        element.click();
        this.route.navigate(['medecin-show/' + data.data.id])
      });

  }

}
