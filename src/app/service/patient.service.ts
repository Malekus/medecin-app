import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatients(search = null) {
    if(search == null)
      return this.http.get('/api/patients')
    return this.http.get('/api/patients?search=' + search)
  }

  getPatient(id) {
    return this.http.get('api/patient/' + id)
  }

  postPatient(data) {
    return this.http.post('api/patient', data);
  }

  putPatient(id, data) {
    return this.http.put('api/patient/' + id, data);
  }

  deletePatient(id) {
    return this.http.delete('api/patient/' + id);
  }
}
