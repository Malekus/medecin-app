import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MedecinService} from "../service/medecin.service";
import {Router} from "@angular/router";
import {FormService} from "../form.service";

@Component({
  selector: 'app-medecin-add',
  templateUrl: './medecin-add.component.html',
  styleUrls: ['./medecin-add.component.scss']
})
export class MedecinAddComponent implements OnInit {


  @Input() idModal: string;

  diplomes: any = [];
  specialites: any = [];
  submitted = false;
  addFormMedecin: FormGroup;


  constructor(private medecinService: MedecinService, private formService: FormService, private route: Router) {
    this.formService.getSpecialites()
      .subscribe((data: any) => {
        this.specialites = Object.entries(data);
      })


    this.formService.getDiplomes()
      .subscribe((data: any) => {
        this.diplomes = Object.entries(data);
      })
  }

  ngOnInit() {
    this.addFormMedecin = new FormGroup({
      nom: new FormControl(),// ['', Validators.required],
      prenom: new FormControl(),//['', [Validators.required]],
      diplome: new FormControl(),//['', [Validators.required]],
      specialite: new FormControl(),//['', [Validators.required]],
    });

  }


  onSubmit() {
    this.submitted = true;

    if (this.addFormMedecin.invalid) {
      return;
    }

    this.medecinService.postMedecin(this.addFormMedecin.value)
      .subscribe((data: any) => {
        this.route.navigate(['/medecin-show/' + data.data.id])
      });
  }

}
