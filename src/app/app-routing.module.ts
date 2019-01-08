import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientComponent} from "./patient/patient.component";
import {HomeComponent} from "./home/home.component";
import {MedecinComponent} from "./medecin/medecin.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {StatistiqueComponent} from "./statistique/statistique.component";
import {MedicamentComponent} from "./medicament/medicament.component";
import {ConsultationComponent} from "./consultation/consultation.component";
import {MedecinShowComponent} from "./medecin-show/medecin-show.component";
import {MedecinAddComponent} from "./medecin-add/medecin-add.component";
import {MedecinUpdateComponent} from "./medecin-update/medecin-update.component";
import {MedecinDeleteComponent} from "./medecin-delete/medecin-delete.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'medecin', component: MedecinComponent},
  {path: 'medecin-show/:id', component: MedecinShowComponent},
  {path: 'medecin-add', component: MedecinAddComponent},
  {path: 'medecin-update/:id', component: MedecinUpdateComponent},
  {path: 'medecin-delete/:id', component: MedecinDeleteComponent},

  {path: 'statistique', component: StatistiqueComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'configuration', component: ConfigurationComponent},
  {path: 'consultation', component: ConsultationComponent},
  {path: 'medicament', component: MedicamentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
