import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PredioService {
  private BASE_URL = 'http://127.0.0.1:5000/'
  constructor(private http:HttpClient) { }

  getPredios():Observable<any>{
    return this.http.get(`${this.BASE_URL}/getPredios`);
  }
}
