import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MedecinService} from "../service/medecin.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormService} from "../form.service";

@Component({
  selector: 'app-medecin-update',
  templateUrl: './medecin-update.component.html',
  styleUrls: ['./medecin-update.component.scss']
})
export class MedecinUpdateComponent implements OnInit {

  @Input() idModal: string;
  @Input() idMedecin: string = null;

  specialites: any = [];
  diplomes: any = [];

  updateFormMedecin: any = new FormGroup({
    nom: new FormControl(),// ['', Validators.required],
    prenom: new FormControl(),//['', [Validators.required]],
    diplome: new FormControl(),//['', [Validators.required]],
    specialite: new FormControl(),//['', [Validators.required]],
  });


  constructor(private medecinService: MedecinService, private formService: FormService, private http: HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit() {

    let id = this.idMedecin != null ? this.idMedecin : this.route.snapshot.params['id'];
    this.medecinService.getMedecin(id)
      .subscribe((data: any) => {
        this.initForm(data.data)
      })

  }

  initForm(data) {
    this.updateFormMedecin = new FormGroup({
      nom: new FormControl(data.nom),// ['', Validators.required],
      prenom: new FormControl(data.prenom),//['', [Validators.required]],
      diplome: new FormControl(6),//['', [Validators.required]],
      specialite: new FormControl(data.specialite),//['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.updateFormMedecin.value)
    console.log(this.diplomes);
  }

  getValue(type, value) {
    if (type == 'diplome') {
      this.diplomes.forEach(function (element) {
        if(element[1] == value){
          return element[0]
        }
      });
    }
  }
}
