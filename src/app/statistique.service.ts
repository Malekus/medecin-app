import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(private http: HttpClient) { }

  getHome(){
    return this.http.get('/api/statistique')
  }
}
