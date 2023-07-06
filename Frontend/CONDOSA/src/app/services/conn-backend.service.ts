import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ConnBackendService {

  private BASE_URL = 'http://127.0.0.1:5000/'
  constructor(private http:HttpClient) { }

  getPredios():Observable<any>{
    return this.http.get(`${this.BASE_URL}/getPredios`);
  }

  getGastos(id:string):Observable<any>{
    return this.http.get(`${this.BASE_URL}/getPredios/${id}`);
  }

  getCasas(id:string):Observable<any>{
    return this.http.get(`${this.BASE_URL}/getPredios/${id}/getCasas`);
  }

  getTipoGastos():Observable<any>{
    return this.http.get(`${this.BASE_URL}/getTipoGastosComunes`);
  }

  getDescripGastos(id:string):Observable<any>{
    return this.http.get(`${this.BASE_URL}/getTipoGastosComunes/${id}`);
  }
}