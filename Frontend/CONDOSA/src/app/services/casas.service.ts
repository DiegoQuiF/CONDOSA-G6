import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CasasService {
  private BASE_URL = 'http://127.0.0.1:5000/'
  constructor(private http:HttpClient) { }

  getCasas(id:string):Observable<any>{
    return this.http.get(`${this.BASE_URL}/getPredios/${id}/getCasas`);
  }
}