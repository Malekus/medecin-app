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
import {PatientShowComponent} from "./patient-show/patient-show.component";
import {PatientDeleteComponent} from "./patient-delete/patient-delete.component";
import {PatientUpdateComponent} from "./patient-update/patient-update.component";
import {PatientAddComponent} from "./patient-add/patient-add.component";
import {AddPatientCentreComponent} from "./add-patient-centre/add-patient-centre.component";
import {RemovePatientCentreComponent} from "./remove-patient-centre/remove-patient-centre.component";
import {AddPatientConsultationComponent} from "./add-patient-consultation/add-patient-consultation.component";
import {UpdatePatientConsultationComponent} from "./update-patient-consultation/update-patient-consultation.component";
import {AddPatientMedicamentComponent} from "./add-patient-medicament/add-patient-medicament.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'medecin', component: MedecinComponent},
  {path: 'medecin-show/:id', component: MedecinShowComponent},
  {path: 'medecin-add', component: MedecinAddComponent},
  {path: 'medecin-update/:id', component: MedecinUpdateComponent},
  {path: 'medecin-delete/:id', component: MedecinDeleteComponent},

  {path: 'statistique', component: StatistiqueComponent},

  {path: 'patient', component: PatientComponent},
  {path: 'patient-show/:id', component: PatientShowComponent},
  {path: 'patient-add', component: PatientAddComponent},
  {path: 'patient-update/:id', component: PatientUpdateComponent},
  {path: 'patient-delete/:id', component: PatientDeleteComponent},
  {path: 'patient-add-centre/:id', component: AddPatientCentreComponent},
  {path: 'patient-remove-centre/:id', component: RemovePatientCentreComponent},
  {path: 'patient-add-medicament/:id', component: AddPatientMedicamentComponent},

  {path: 'configuration', component: ConfigurationComponent},

  {path: 'consultation', component: ConsultationComponent},
  {path: 'consultation-add/:id', component: AddPatientConsultationComponent},
  {path: 'consultation-update/:id', component: UpdatePatientConsultationComponent},

  {path: 'medicament', component: MedicamentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
