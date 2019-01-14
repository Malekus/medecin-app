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

  getDiplomesLT() {
    if (localStorage.getItem('diplomes') === null) {
      this.http.get('/api/form/diplomes')
        .subscribe((data: any) => {
          localStorage.setItem('diplomes', data);
        })

    }
    return localStorage.getItem('diplomes');
  }
}
