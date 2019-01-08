import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientComponent} from "./patient/patient.component";
import {HomeComponent} from "./home/home.component";
import {MedecinComponent} from "./medecin/medecin.component";
import {ConfigurationComponent} from "./configuration/configuration.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'medecin', component: MedecinComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'configuration', component: ConfigurationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
