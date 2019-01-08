import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http: HttpClient) { }

  getMedecins() {
    return this.http.get('http://127.0.0.1:8000/api/medecins')
  }

  getMedecin(id) {
    return this.http.get('http://127.0.0.1:8000/api/medecin/' + id)
  }
}
