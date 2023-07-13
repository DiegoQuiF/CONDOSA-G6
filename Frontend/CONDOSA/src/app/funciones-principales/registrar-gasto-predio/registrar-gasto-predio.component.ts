import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoGastos } from 'src/app/models/tipo-gastos';
import { DescripGastos } from 'src/app/models/descrip-gastos';
import { ConnBackendService } from 'src/app/services/conn-backend.service';
import { Predio } from 'src/app/models/predio';
import { PredioGastosDet } from 'src/app/models/predio-gastos-det';

@Component({
  selector: 'app-registrar-gasto-predio',
  templateUrl: './registrar-gasto-predio.component.html',
  styleUrls: ['./registrar-gasto-predio.component.css']
})
export class RegistrarGastoPredioComponent implements OnInit {

  constructor(private connBackend: ConnBackendService) { }

  tipoGastoArray: Array<TipoGastos> = new Array<TipoGastos>();
  //Atributos para el cmbobox
  selectedItemTipoGasto: string = '--seleccione--';
  isActiveTipoGasto: boolean = false;

  descripGastoArray: Array<DescripGastos> = new Array<DescripGastos>();
  //Atributos para el cmbobox
  selectedItemDescripGasto: string = '--seleccione--';
  isActiveDescripGasto: boolean = false;

  predioArray: Array<Predio> = new Array<Predio>();
  nombrePredio: string = '-';



  montoTotal: number = 0;
  id_gasto: string = '';
  id_personal: string = '';
  id_predio_gastos: string = '';


  id_predio: string = '';
  periodo: string = '-';
  @Output() mostrarRegistroPredio_OUT = new EventEmitter<boolean>();
  @Output() llamarFinalizarPredio_OUT = new EventEmitter<string>();
  @Input() id_predio_IN: string = "";
  @Input() predio_IN: string = "";
  @Input() periodo_IN: string = "";
  @Input() idPeriodo_IN: string = "";
  @Input() idPredioGastos_IN: string = "";

  gastosRegistradosArray: PredioGastosDet[] = [];

  gatosRegistradosArray: any[] = [
    { TipoGasto: 'Planilla (portería- áreas comunes- limpieza)', Monto: 305 },
    { TipoGasto: 'Administración y contabilidad ', Monto: 660 },
    { TipoGasto: 'Teléfono fijo e internet', Monto: 123 },
    { TipoGasto: 'Planilla (portería- áreas comunes- limpieza)', Monto: 305 },
    { TipoGasto: 'Administración y contabilidad ', Monto: 660 },
    { TipoGasto: 'Teléfono fijo e internet', Monto: 123 },
    { TipoGasto: 'Consumo de Luz Mensual SS-GG -Suministro 1695605', Monto: 123 },
    { TipoGasto: 'Consumo de Luz Mensual BCI -Suministro 1695613', Monto: 123 }
  ];

  

  ngOnInit() {
    this.nombrePredio = this.predio_IN;
    this.periodo = this.periodo_IN;
    this.id_predio = this.id_predio_IN;
    this.id_predio_gastos = this.idPredioGastos_IN
    //CARGAMOS LOS TIPOS DE GASTO  EN UN ARRAY
    this.getTiposGastos_BD();
    this.getGastosDet_BD();
  }

  set_mostrarRegistroPredio(item: boolean) {
    console.log("se cambia a " + item + "desde el registrar predios");
    this.mostrarRegistroPredio_OUT.emit(item);
  }

  finalizarRegistroPredio() {
    //Aca iria el metodo para modificar la tabla ESTADO_REGISTRO_PREDIO de l BD
    this.set_mostrarRegistroPredio(false);
    this.llamarFinalizarPredio_OUT.emit();
  }

  selectedTipoGasto(item: TipoGastos): void {    //PERMITE SELECCIONAR EL TIPO DE GASTO Y CERRAR EL CBOX DE PREDIOS
    this.toggleActiveTipoGasto();
    if (this.selectedItemTipoGasto != item.descripcion) {
      this.selectedItemTipoGasto = item.descripcion;
      this.selectedItemDescripGasto = '--seleccione--';
      this.montoTotal = 0;
      this.descripGastoArray.splice(0, this.descripGastoArray.length);
    }

    this.getDescripcionesGasto_BD(item.id_tipo_gasto);
  }

  toggleActiveTipoGasto(): void {   //PERMITE (PARA EL CBOX DE TIPO GASTOS) ACTIVAR SI ESTÁ DESACTIVADO, DESACTIVAR SI ESTÁ ACTIVADO
    this.isActiveTipoGasto = !this.isActiveTipoGasto;
  }


  selectedDescripGasto(item: DescripGastos): void {    //PERMITE SELECCIONAR LA DESCRIPCION Y CERRAR SU RESPECTIVO CBOX
    this.toggleActiveDescripGasto();
    if (this.selectedItemDescripGasto != item.descripcion) {
      this.montoTotal = 0;
      this.selectedItemDescripGasto = item.descripcion;
      this.id_gasto = item.id_gasto;
    }
  }

  toggleActiveDescripGasto(): void {   //PERMITE (PARA EL CBOX DE DESCRIPCION) ACTIVAR SI ESTÁ DESACTIVADO, DESACTIVAR SI ESTÁ ACTIVADO
    if (this.selectedItemTipoGasto !== "--seleccione--") {
      this.isActiveDescripGasto = !this.isActiveDescripGasto;
    }
    else {
      alert('Seleccione un TIPO DE GASTO.');
    }
  }


  registrarGastoPredio() {
    if(this.gastoRegistrado()){
      alert('Este gasto ya se encuentra registrado...');
    }
    else{
      this.connBackend.postGastosPredios(this.id_predio_gastos, this.id_gasto, this.montoTotal.toString())
      .subscribe(data => { console.log(data) }, error => console.log(error));
      alert('Se ha registrado el gasto...');
      this.getGastosDet_BD();
    }
  }


  gastoRegistrado() {
    const gastoRegistrado = this.gastosRegistradosArray.filter((gasto) => gasto.id_gasto === this.id_gasto);
    if(gastoRegistrado.length > 0){
      return true;
    }
    else{
      return false;
    }
  }

  existeTablaPredioGasto(periodo:string,id_predio:string):boolean{
    
    return true;
  }

  insertPredioGasto_BD(id_predio: string, id_personal: string, periodo: string, importe: number) {
    /*Codigo para inserta una fila en la tabla PREDIO_GASTOS, 
    recordar que esta tabla es para el total del gasto de un predio en un mes determinado, 
    se debe crear una vez y el importe se debe ir incrementando conforme se ingresen PREDIO_GASTOS_DET */

  }


  insertGastoPredioDetalle_BD(id_predio_gastos: string, id_gasto: string, importe: number): void {
    //Codigo para insertar una fila en la tabla PREDIO_GASTOS_DET, depende recordar que depende de la tabla PREDIO_GASTOS

  }

  getTiposGastos_BD(): void {
    this.connBackend.getTipoGastos()
      .subscribe(data => {
        console.log(data)
        this.tipoGastoArray = data.tipoGastosComunes;
      },
        error => console.log(error));
  }

  getGastosDet_BD(): void {
    this.connBackend.getGastosPredios(this.idPeriodo_IN)
      .subscribe(data => {
        console.log(data)
        this.gastosRegistradosArray = data.gastoPredioDetalle;
      },
        error => console.log(error));
  }

  getDescripcionesGasto_BD(item: string): void {
    this.connBackend.getDescripGastos(item)
      .subscribe(data => {
        console.log(data)
        this.descripGastoArray = data.descripGastosComunes;
      },
        error => console.log(error));
  }


  editarGasto(item: PredioGastosDet){
    this.getTiposGastos_BD();
    this.selectedItemTipoGasto = item.des_gasto;
    this.getDescripcionesGasto_BD(item.id_tipo_gasto.toString());
    this.selectedItemDescripGasto = item.descripcion;
    this.montoTotal = parseFloat(item.importe);
  }
}   
