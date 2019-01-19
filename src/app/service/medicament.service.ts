import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  constructor(private http: HttpClient) {
  }

  getMedicaments(search = null) {
    if (search == null)
      return this.http.get('/api/medicaments')
    return this.http.get('/api/medicaments?search=' + search)
  }

  getMedicament(id) {
    return this.http.get('api/medicament/' + id)
  }

  postMedicament(data) {
    return this.http.post('api/medicament', data);
  }

  putMedicament(id, data) {
    return this.http.put('api/medicament/' + id, data);
  }

  deleteMedicament(id) {
    return this.http.delete('api/medicament/' + id);
  }
}
