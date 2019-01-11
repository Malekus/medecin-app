import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http: HttpClient) {
  }

  getConsultations() {
    return this.http.get('/api/consultations')
  }

  getConsultation(id) {
    return this.http.get('api/consultation/' + id)
  }

  postConsultation(data) {
    return this.http.post('api/consultation', data);
  }

  putConsultation(id, data) {
    return this.http.put('api/consultation/' + id, data);
  }

  deleteConsultation(id) {
    return this.http.delete('api/consultation/' + id);
  }
}
