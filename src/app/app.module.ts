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
import {MedecinComponent} from './medecin/medecin.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { TitreComponent } from './titre/titre.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { ConsultationComponent } from './consultation/consultation.component';


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
    ConsultationComponent
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
