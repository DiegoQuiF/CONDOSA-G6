import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Registro_Casa } from 'src/app/models/registro_casa';

@Component({
  selector: 'app-registrar-gasto-casa',
  templateUrl: './registrar-gasto-casa.component.html',
  styleUrls: ['./registrar-gasto-casa.component.css']
})
export class RegistrarGastoCasaComponent implements OnInit {

  @Output() mostrarRegistroCasa_OUT=new EventEmitter<boolean>();
  @Output() estadoRegistroNum_Casa=new EventEmitter<string>();

  //DATOS DE LA CASA
  num_casa:string='5';
  
  

  constructor() { }

  ngOnInit() {
  }

  set_mostrarRegistroCasa(item:boolean){
    this.mostrarRegistroCasa_OUT.emit(item);
  }
  
  finalizarRegistroCasa(num_casa:string){
    //Aca iria el metodo para modificar la tabla ESTADO_REGISTRO_PREDIO de l BD
    this.estadoRegistroNum_Casa.emit(num_casa);
  }
  
}
