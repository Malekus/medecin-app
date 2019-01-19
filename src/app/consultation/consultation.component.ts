import {Component, OnInit} from '@angular/core';
import {ConsultationService} from "../service/consultation.service";

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  consultations;
  links;
  meta;
  search;

  constructor(private consultationService: ConsultationService) {
  }

  ngOnInit() {
    this.consultationService.getConsultations()
      .subscribe((data) => {
        this.setConsultations(data)
        console.log(this.consultations)
      });
  }

  setConsultations(data) {
    this.consultations = data.data;
    this.links = data.links;
    this.meta = data.meta;
  }

  onSearch(searching) {
    /*
    this.consultations = [];
    this.consultationService.getConsultations(searching)
      .subscribe((data) => {
        this.setConsultations(data)
      })
    */
  }
}
