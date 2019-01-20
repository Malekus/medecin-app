import {Component, OnInit} from '@angular/core';
import {StatistiqueService} from "../statistique.service";
import {Chart} from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  medecins: any = []
  patients: any = []
  consultations: any = []
  medicaments: any = []
  show
  chartWeek: any = [];
  chartMedecin: any = []
  chartMedicament: any = []
  categories: any = []

  constructor(private statistiqueService: StatistiqueService) {
  }

  ngOnInit() {
    this.statistiqueService.getHome()
      .subscribe(
        (data: any) => {
          console.log(data)
          console.log(data.specialite)
          let labelSpecialite = []
          let valueSpecialite = []
          data.specialite.forEach(function (value) {
            console.log(value.label);
            labelSpecialite.push(value.label);
            valueSpecialite.push(value.nbSpe);
          });
          let labelMedicament = []
          let typeMedicament = []
          data.typeMedicament.forEach(function (value) {
            labelMedicament.push(value.label);
            typeMedicament.push(value.nbType);
          });
          console.log(this.getWeek())
          this.categories = data.categories;
          this.chartWeek = new Chart('lineChart', {
            type: 'line',
            data: {
              labels: this.getWeek().reverse(),
              datasets: [{
                label: 'Activité des 7 derniers jours',
                data: Object.values(data.tab).reverse()
              }]
            }
          });

          this.chartMedecin = new Chart('chartMedecinID', {
            type: 'bar',
            data: {
              labels: labelSpecialite,
              datasets: [{
                label: 'Nombre de médecin par spécialité',
                data: valueSpecialite,
                fill: false,
                backgroundColor: '#2c3e50',
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                  }
                }]
              }
            }
          });

          this.chartMedecin = new Chart('chartMedicamentID', {
            type: 'bar',
            data: {
              labels: labelMedicament,
              datasets: [{
                label: 'Nombre de médicament par type',
                data: typeMedicament,
                fill: false,
                backgroundColor: '#2c3e50',
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  display: true,
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                  }
                }]
              }
            }
          });
        }
      )


  }


  getWeek() {
    let arr = []
    var today = new Date();

    for (let i = 0; i < 7; i++) {
      arr[i] = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i).toLocaleDateString();
    }

    return arr
  }

}
