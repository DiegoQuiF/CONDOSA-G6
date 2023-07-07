import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoGastos } from 'src/app/models/tipo-gastos';
import { DescripGastos } from 'src/app/models/descrip-gastos';
import { ConnBackendService } from 'src/app/services/conn-backend.service';
import { Predio } from 'src/app/models/predio';

@Component({
  selector: 'app-registrar-gasto-predio',
  templateUrl: './registrar-gasto-predio.component.html',
  styleUrls: ['./registrar-gasto-predio.component.css']
})
export class RegistrarGastoPredioComponent implements OnInit {
  
  constructor(private connBackend:ConnBackendService){}

  tipoGastoArray:TipoGastos[] = [];
  selectedItemTipoGasto:String = 'Seleccione';
  isActiveTipoGasto:boolean = false;

  descripGastoArray:DescripGastos[] = [];
  selectedItemDescripGasto:String = 'Seleccione';
  isActiveDescripGasto: boolean = false;

  predioArray:Predio[] = [];

  predioCuota:string = 'Nombre del predio';
  periodoCuota:string = 'Periodo del predio';





  @Output() mostrarRegistroPredio_OUT=new EventEmitter<boolean>();
  @Output() estadoRegistroPredio_OUT=new EventEmitter<string>();
  @Input() id_predio_IN:string = "";

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
    
    this.connBackend.getPredio(this.id_predio_IN)
    .subscribe(data=>{
      console.log(data)
      this.predioArray = data.predio;
      this.predioCuota = this.predioArray[0].predio;
    },
    error=>console.log(error));
    
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
    console.log("Se finaliza del predio de id: "+ this.id_predio_IN)
  }

  selectedTipoGasto(item: TipoGastos): void {    //PERMITE SELECCIONAR EL TIPO DE GASTO Y CERRAR EL CBOX DE PREDIOS
    this.selectedItemTipoGasto = item.descripcion;
    this.connBackend.getDescripGastos(item.id_tipo_gasto)
    .subscribe(data=>{
      console.log(data)
      this.descripGastoArray = data.descripGastosComunes;
    },
    error=>console.log(error));
    this.toggleActiveTipoGasto();
  }

  toggleActiveTipoGasto(): void {   //PERMITE (PARA EL CBOX DE TIPO GASTOS) ACTIVAR SI ESTÁ DESACTIVADO, DESACTIVAR SI ESTÁ ACTIVADO
    this.isActiveTipoGasto = !this.isActiveTipoGasto;
  }


  selectedDescripGasto(item: DescripGastos): void {    //PERMITE SELECCIONAR LA DESCRIPCION Y CERRAR SU RESPECTIVO CBOX
    this.selectedItemDescripGasto = item.descripcion;
    this.toggleActiveDescripGasto();
  }

  toggleActiveDescripGasto(): void {   //PERMITE (PARA EL CBOX DE DESCRIPCION) ACTIVAR SI ESTÁ DESACTIVADO, DESACTIVAR SI ESTÁ ACTIVADO
    if(this.selectedItemTipoGasto !== "Seleccione"){
      this.isActiveDescripGasto = !this.isActiveDescripGasto;
    }
    else{
      alert('Seleccione un TIPO DE GASTO.');
    }
  }


}   
