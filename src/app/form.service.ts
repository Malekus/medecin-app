import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) {
  }

  getCentreTypes() {
    return this.http.get('/api/form/centreTypes')
  }

  getCentres() {
    return this.http.get('/api/form/centres')
  }

  getPatients() {
    return this.http.get('/api/form/patients')
  }

  getMedecins() {
    return this.http.get('/api/form/medecins')
  }

  getMedicaments() {
    return this.http.get('/api/form/medicaments')
  }

  getDiplomes() {
    return this.http.get('/api/form/diplomes')
  }


  getTypes() {
    return this.http.get('/api/form/types')
  }

  getSpecialites() {
    return this.http.get('/api/form/specialites')
  }

  getConsultationTypes(){
    return this.http.get('/api/form/consultationTypes')
  }
}
