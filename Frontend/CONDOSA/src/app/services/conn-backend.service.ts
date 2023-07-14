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

  getPredio(id:string):Observable<any>{
    return this.http.get(`${this.BASE_URL}/getPredio/${id}`);
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

  getGastosPredios(id:string):Observable<any>{
    return this.http.get(`${this.BASE_URL}/getGastosPredios/${id}`);
  }

  getGastosPrediosI(id:string, idgasto:string):Observable<any>{
    return this.http.get(`${this.BASE_URL}/getGastosPredios/21/1`);
  }

  postGastosPredios(id_pre_ga:string, id_ga:string, imp:string):Observable<any>{
    const data = {
      id_predio_gastos: id_pre_ga,
      id_gasto: id_ga,
      importe: imp
    };
    return this.http.post(`${this.BASE_URL}/insertarGastoPredio`, data);
  }

  putGastosPredios(id_pre_ga_det:string, imp:string){
    const data = {
      id_predio_gastos_det: id_pre_ga_det,
      importe: imp
    };
    return this.http.put(`${this.BASE_URL}/actualizarGastoPredio`, data);
  }

  getRegistroPredioEstadoI():Observable<any>{
    return this.http.get(`${this.BASE_URL}/getRegistroPredioEstado`);
  }

  postRegistroPredioEstado(id_pred:string, id_pers:string, id_est:string, peri:string):Observable<any>{
    const data = {
      id_predio : id_pred,
      id_personal : id_pers,
      id_estado : id_est,
      periodo : peri
    };
    return this.http.post(`${this.BASE_URL}/insertarRegistroPredioEstado`, data);
  }

  putRegistroPredioEstado(id_est:string, id_pred:string, peri:string){
    const data = {
      id_estado : id_est,
      id_predio : id_pred,
      periodo : peri
    };
    return this.http.put(`${this.BASE_URL}/actualizarRegistroPredioEstado`, data);
  }
}