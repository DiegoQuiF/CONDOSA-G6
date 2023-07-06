import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TipoGastos } from 'src/app/models/tipo-gastos';
import { DescripGastos } from 'src/app/models/descrip-gastos';
import { ConnBackendService } from 'src/app/services/conn-backend.service';

@Component({
  selector: 'app-registrar-gasto-predio',
  templateUrl: './registrar-gasto-predio.component.html',
  styleUrls: ['./registrar-gasto-predio.component.css']
})
export class RegistrarGastoPredioComponent implements OnInit {
  
  constructor(private connBackend:ConnBackendService){}

  tipoGastoArray:TipoGastos[] = [];
  selectedItemTipoGasto:String = 'Seleccione';
  descripGastoArray:DescripGastos[] = [];
  selectedItemDescripGasto:String = 'Seleccione';
  





  @Output() mostrarRegistroPredio_OUT=new EventEmitter<boolean>();
  @Output() estadoRegistroPredio_OUT=new EventEmitter<string>();
  
  gatosRegistrados: any[] = [
    { TipoGasto: 'Planilla (portería- áreas comunes- limpieza)', Monto: 305},
    { TipoGasto: 'Administración y contabilidad ', Monto: 660 },
    { TipoGasto: 'Teléfono fijo e internet',  Monto: 123},
    { TipoGasto: 'Consumo de Luz Mensual SS-GG -Suministro 1695605',  Monto: 123 },
    { TipoGasto: 'Consumo de Luz Mensual BCI -Suministro 1695613',  Monto: 123},
    { TipoGasto: 'Planilla (portería- áreas comunes- limpieza)', Monto: 305},
    { TipoGasto: 'Administración y contabilidad ', Monto: 660 },
    { TipoGasto: 'Teléfono fijo e internet',  Monto: 123},
    { TipoGasto: 'Consumo de Luz Mensual SS-GG -Suministro 1695605',  Monto: 123 },
    { TipoGasto: 'Consumo de Luz Mensual BCI -Suministro 1695613',  Monto: 123},
    { TipoGasto: 'Planilla (portería- áreas comunes- limpieza)', Monto: 305},
    { TipoGasto: 'Administración y contabilidad ', Monto: 660 },
    { TipoGasto: 'Teléfono fijo e internet',  Monto: 123},
    { TipoGasto: 'Consumo de Luz Mensual SS-GG -Suministro 1695605',  Monto: 123 },
    { TipoGasto: 'Consumo de Luz Mensual BCI -Suministro 1695613',  Monto: 123},
    { TipoGasto: 'Planilla (portería- áreas comunes- limpieza)', Monto: 305},
    { TipoGasto: 'Administración y contabilidad ', Monto: 660 },
    { TipoGasto: 'Teléfono fijo e internet',  Monto: 123},
    { TipoGasto: 'Consumo de Luz Mensual SS-GG -Suministro 1695605',  Monto: 123 },
    { TipoGasto: 'Consumo de Luz Mensual BCI -Suministro 1695613',  Monto: 123}
  ]; 

  listaTipoGasto: any[] = ['Gasto Diverso', 'Gasto Laboral', 'Gasto Adm. y Contabilidad'];
  listaDescripcion: any[] = ['Telefono fijo e internet', 'Planilla', 'Administracion y Contabilidad','Consumo de Luz Mensual SS-GG -Suministro 1695605'];
  
  ngOnInit() {
    this.connBackend.getTipoGastos()
    .subscribe(data=>{
      console.log(data)
      this.tipoGastoArray = data.tipoGastosComunes;
    },
    error=>console.log(error));
  }

  set_mostrarRegistroPredio(item:boolean){
    console.log("se cambia a "+ item + "desde el registrar predios");
    this.mostrarRegistroPredio_OUT.emit(item);
  }

  finalizarRegistroPredio(){
    //Aca iria el metodo para modificar la tabla ESTADO_REGISTRO_PREDIO de l BD
    this.estadoRegistroPredio_OUT.emit('finalizado');
  }




  selectedTipoGasto(item: TipoGastos): void {    //PERMITE SELECCIONAR EL PREDIO Y CERRAR EL CBOX DE PREDIOS
    this.selectedItemTipoGasto = item.descripcion;
    this.connBackend.getDescripGastos(item.id_tipo_gasto)
    .subscribe(data=>{
      console.log(data)
      this.tipoGastoArray = data.descripGastosComunes;
    },
    error=>console.log(error));
  }

  selectedDescripGasto(item: DescripGastos): void {    //PERMITE SELECCIONAR EL PREDIO Y CERRAR EL CBOX DE PREDIOS
    this.selectedItemDescripGasto = item.descripcion;
  }
}   
