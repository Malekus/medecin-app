import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http: HttpClient) {
  }

  getConsultations(search = null) {
    if (search == null)
      return this.http.get('/api/consultations')
    return this.http.get('/api/consultations?search=' + search)
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

  addMedicament(data: any) {
    return this.http.post('api/consultation/addMedicament', data);
  }

  removeMedicament(data: any) {
    return this.http.post('api/consultation/removeMedicament', data);
  }
}
