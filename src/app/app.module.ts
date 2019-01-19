import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {PatientComponent} from './patient/patient.component';
import {AppRoutingModule} from "./app-routing.module";

import {ConfigurationComponent} from './configuration/configuration.component';
import {StatistiqueComponent} from './statistique/statistique.component';
import {TitreComponent} from './titre/titre.component';
import {MedicamentComponent} from './medicament/medicament.component';
import {ConsultationComponent} from './consultation/consultation.component';
import {RechercheComponent} from './recherche/recherche.component';

import {MedecinComponent} from './medecin/medecin.component';
import {MedecinShowComponent} from './medecin-show/medecin-show.component';
import {MedecinDeleteComponent} from './medecin-delete/medecin-delete.component';
import {MedecinAddComponent} from './medecin-add/medecin-add.component';
import {MedecinUpdateComponent} from './medecin-update/medecin-update.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DropdownComponent } from './dropdown/dropdown.component';
import { TitreShowComponent } from './titre-show/titre-show.component';
import { CentreAddComponent } from './centre-add/centre-add.component';
import { ConsultationAddComponent } from './consultation-add/consultation-add.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { MedecinFormComponent } from './medecin-form/medecin-form.component';
import { PatientShowComponent } from './patient-show/patient-show.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { AddPatientCentreComponent } from './add-patient-centre/add-patient-centre.component';
import { CentreShowComponent } from './centre-show/centre-show.component';
import { RemovePatientCentreComponent } from './remove-patient-centre/remove-patient-centre.component';
import { AddPatientConsultationComponent } from './add-patient-consultation/add-patient-consultation.component';
import { UpdatePatientConsultationComponent } from './update-patient-consultation/update-patient-consultation.component';
import { RemovePatientConsultationComponent } from './remove-patient-consultation/remove-patient-consultation.component';
import { LoaderComponent } from './loader/loader.component';
import { AddPatientMedicamentComponent } from './add-patient-medicament/add-patient-medicament.component';
import { RemovePatientMedicamentComponent } from './remove-patient-medicament/remove-patient-medicament.component';
import { UpdatePatientMedicamentComponent } from './update-patient-medicament/update-patient-medicament.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    PatientComponent,
    MedecinComponent,
    ConfigurationComponent,
    StatistiqueComponent,
    TitreComponent,
    MedicamentComponent,
    ConsultationComponent,
    RechercheComponent,
    MedecinShowComponent,
    MedecinDeleteComponent,
    MedecinAddComponent,
    MedecinUpdateComponent,
    DropdownComponent,
    TitreShowComponent,
    CentreAddComponent,
    ConsultationAddComponent,
    PatientAddComponent,
    MedecinFormComponent,
    PatientShowComponent,
    PatientDeleteComponent,
    PatientUpdateComponent,
    AddPatientCentreComponent,
    CentreShowComponent,
    RemovePatientCentreComponent,
    AddPatientConsultationComponent,
    UpdatePatientConsultationComponent,
    RemovePatientConsultationComponent,
    LoaderComponent,
    AddPatientMedicamentComponent,
    RemovePatientMedicamentComponent,
    UpdatePatientMedicamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
