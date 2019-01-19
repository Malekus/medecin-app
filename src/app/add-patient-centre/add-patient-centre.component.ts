import {Component, OnInit} from '@angular/core';
import {CentreService} from "../service/centre.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-add-patient-centre',
  templateUrl: './add-patient-centre.component.html',
  styleUrls: ['./add-patient-centre.component.scss']
})
export class AddPatientCentreComponent implements OnInit {

  centres: any = []
  formAddPatientCentre: FormGroup;
  show;
  submitted = false;

  constructor(private centreService: CentreService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  get f() {
    return this.formAddPatientCentre.controls;
  }

  ngOnInit() {
    this.centreService.getCentres()
      .subscribe((data: any) => {
          this.setCentres(data.data)
          this.show = true
        })


    this.formAddPatientCentre = this.formBuilder.group({
      centre: ['', Validators.required]
    });
  }

  onSubmit() {

    this.submitted = true;

    if (this.formAddPatientCentre.invalid) {
      return;
    }


    console.log({
      id: (this.formAddPatientCentre.value.centre),
      patient: (this.route.snapshot.params['id'])
    })

    this.centreService.addPatient({
      id: parseInt(this.formAddPatientCentre.value.centre),
      patient: parseInt(this.route.snapshot.params['id'])
    })
      .subscribe(() => {
        this.router.navigate(['/patient-show/' + this.route.snapshot.params['id']])
      }, (err) => {
        console.log(err)
      })

  }

  setCentres(data) {
    let r = []
    console.log(data)
    data.forEach(function (element) {
      r.push([element.id, element.nom, element.type])
    })
    this.centres = r
    console.log(this.centres)
  }

}
