import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientComponent} from "./patient/patient.component";
import {HomeComponent} from "./home/home.component";
import {MedecinComponent} from "./medecin/medecin.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {StatistiqueComponent} from "./statistique/statistique.component";
import {MedicamentComponent} from "./medicament/medicament.component";
import {ConsultationComponent} from "./consultation/consultation.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'statistique', component: StatistiqueComponent},
  {path: 'medecin', component: MedecinComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'configuration', component: ConfigurationComponent},
  {
    path: 'consultation', component: ConsultationComponent
  },
  {path: 'medicament', component: MedicamentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
