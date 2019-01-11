import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) {
  }

  getConfigurations() {
    return this.http.get('/api/configurations')
  }

  getConfiguration(id) {
    return this.http.get('api/configuration/' + id)
  }

  postConfiguration(data) {
    return this.http.post('api/configuration', data);
  }

  putConfiguration(id, data) {
    return this.http.put('api/configuration/' + id, data);
  }

  deleteConfiguration(id) {
    return this.http.delete('api/configuration/' + id);
  }
}
