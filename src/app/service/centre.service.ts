import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  constructor(private http: HttpClient) {
  }

  getCentres() {
    return this.http.get('/api/centres')
  }

  getCentre(id) {
    return this.http.get('api/centre/' + id)
  }

  postCentre(data) {
    return this.http.post('api/centre', data);
  }

  putCentre(id, data) {
    return this.http.put('api/centre/' + id, data);
  }

  deleteCentre(id) {
    return this.http.delete('api/centre/' + id);
  }
}
