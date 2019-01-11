import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http: HttpClient) {
  }

  getMedecins() {
    return this.http.get('/api/medecins')
  }

  getMedecin(id) {
    return this.http.get('api/medecin/' + id)
  }

  postMedecin(data) {
    return this.http.post('api/medecin', data);
  }

  putMedecin(id, data) {
    return this.http.put('api/medecin/' + id, data);
  }

  deleteMedecin(id) {
    return this.http.delete('api/medecin/' + id);
  }

}
