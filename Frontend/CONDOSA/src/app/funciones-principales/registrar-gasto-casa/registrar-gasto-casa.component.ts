import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registrar-gasto-casa',
  templateUrl: './registrar-gasto-casa.component.html',
  styleUrls: ['./registrar-gasto-casa.component.css']
})
export class RegistrarGastoCasaComponent implements OnInit {

  @Output() mostrarRegistroCasa=new EventEmitter<boolean>();
  @Output() estadoRegistroCasa=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
