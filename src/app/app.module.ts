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
    MedecinUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
