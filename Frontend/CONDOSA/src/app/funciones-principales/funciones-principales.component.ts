import { Component, OnInit } from '@angular/core';
import { Registro_Casa } from '../models/registro_casa';

//PREDIOS
import { Predio } from './../models/predio'
import { PredioService } from './../services/predio.service';


@Component({
  selector: 'app-funciones-principales',
  templateUrl: './funciones-principales.component.html',
  styleUrls: ['./funciones-principales.component.css']
})
export class FuncionesPrincipalesComponent implements OnInit {
  predioArray:Predio[] = [];
  filteredPredios:Predio[] = [];
  searchPredios:String = '';
  selectedItemPredio:String = 'Seleccione';
  isActivePredios: boolean = false;
  nomPresidente: String = '';

  periodoArray:Predio[] = [];
  filteredPeriodos:Predio[] = [];
  searchPeriodos:String = '';
  selectedItemPeriodo:String = 'Seleccione';
  isActivePeriodo: boolean = false;

  mostrarRegistrarGPredios: boolean = false;  //PERMITE MOSTRAR EL PANEL DE REGISTRO DE GASTOS DE PREDIO
  mostrarRegistrarGCasa: boolean = false;   //PERMITE MOSTRAR EL PANEL DE REGISTRO DE GASTOS DE CASA

  cuadradoColor: string = 'red';    //COLOR SEMAFORO DE LA CASA

  constructor(
    private predioService:PredioService
    ){}

  






  datosTabla: Array<Registro_Casa> = new Array<Registro_Casa>(
    new Registro_Casa('1', 'A', 'Juan Pérez', 'Residencial', '120', '20', '140', '12%', 'no finalizado', '5'),
    new Registro_Casa('2', 'B', 'María Gómez', 'Comercial', '80', '10', '90', '8%', 'no finalizado', '5'),
    new Registro_Casa('3', 'A', 'Carlos López', 'Residencial', '150', '30', '180', '15%', 'no finalizado', '5'),
    new Registro_Casa('4', 'C', 'Laura Ramírez', 'Residencial', '100', '15', '115', '10%', 'no finalizado', '5'),
    new Registro_Casa('5', 'B', 'Pedro Martínez', 'Comercial', '90', '12', '102', '9%', 'no finalizado', '5'),
    new Registro_Casa('6', 'A', 'Juan Pérez', 'Residencial', '120', '20', '140', '12%', 'no finalizado', '5'),
    new Registro_Casa('7', 'B', 'María Gómez', 'Comercial', '80', '10', '90', '8%', 'no finalizado', '5'),
    new Registro_Casa('8', 'A', 'Carlos López', 'Residencial', '150', '30', '180', '15%', 'no finalizado', '5'),
    new Registro_Casa('9', 'C', 'Laura Ramírez', 'Residencial', '100', '15', '115', '10%', 'no finalizado', '5'),
    new Registro_Casa('10', 'B', 'Pedro Martínez', 'Comercial', '90', '12', '102', '9%', 'no finalizado', '5'),
    new Registro_Casa('11', 'A', 'Juan Pérez', 'Residencial', '120', '20', '140', '12%', 'no finalizado', '5'),
    new Registro_Casa('12', 'B', 'María Gómez', 'Comercial', '80', '10', '90', '8%', 'no finalizado', '5'),
    new Registro_Casa('13', 'A', 'Carlos López', 'Residencial', '150', '30', '180', '15%', 'no finalizado', '5'),
    new Registro_Casa('14', 'C', 'Laura Ramírez', 'Residencial', '100', '15', '115', '10%', 'no finalizado', '5'),
    new Registro_Casa('15', 'B', 'Pedro Martínez', 'Comercial', '90', '12', '102', '9%', 'no finalizado', '5'),
    new Registro_Casa('16', 'A', 'Juan Pérez', 'Residencial', '120', '20', '140', '12%', 'no finalizado', '5'),
    new Registro_Casa('17', 'B', 'María Gómez', 'Comercial', '80', '10', '90', '8%', 'no finalizado', '5'),
    new Registro_Casa('18', 'A', 'Carlos López', 'Residencial', '150', '30', '180', '15%', 'no finalizado', '5'),
    new Registro_Casa('19', 'C', 'Laura Ramírez', 'Residencial', '100', '15', '115', '10%', 'no finalizado', '5'),
    new Registro_Casa('20', 'B', 'Pedro Martínez', 'Comercial', '90', '12', '102', '9%', 'no finalizado', '5')
  );
  
  meses = ["Enero-23", "Febrero-23", "Marzo-23", "Abril-23"];
  selectedItemMeses: string = '';
  searchValueMeses: string = '';
  filteredItemsMeses: string[] = [];
  isActiveMeses: boolean = false;
  estadoRegistroPredioSelected:string='no finalizado';
  presidente ="Ávalos Cuadros, Juan Carlos";
  
  toggleActiveMeses(): void {
    console.log("se detecta el click");
    this.isActiveMeses = !this.isActiveMeses;
  }

  selectItemMeses(item: string): void {
    this.selectedItemMeses = item;
    this.isActiveMeses = false;
  }

  filterItemsMeses(): void {
    this.filteredItemsMeses = this.meses.filter(item => item.toLowerCase().startsWith(this.searchValueMeses.toLowerCase()));
  }
  
  closeComboboxMeses(): void {
    this.isActiveMeses = false;
  }

  //

  //METODOS PARA EL SEMAFORO DE CASA.
  cambiarColorCuadrado() {
    this.cuadradoColor = 'green';
  }
  //Ocular o Mostrar el registro para predios true mostrar, y false ocultar
  cambiarEstadoRegistroPredio(item:boolean){
    console.log("se cambia a "+ item + "desde el principal");
    this.mostrarRegistrarGPredios=item;
  }
  //Metodo para indicar que ya se termino de regitrar 
  finalizarRegistroPredio(){
    this.estadoRegistroPredioSelected='finalizado';
    //Aca iria el metodo para modificar la tabla ESTADO_REGISTRO_PREDIO de la BD
    console.log("Se finaliza el registro del predio desde el principal");
  }

  // true mostrar, y false ocultar
  cambiarEstadoRegistroCasa(item:boolean){
    this.mostrarRegistrarGCasa=item;
  }
  //Metodo para indicar que ya se termino de regitrar 
  finalizarRegistroCasa(num_casa:string){
    //Aca iria el metodo para modificar la tabla ESTADO_REGISTRO_CASA de la BD, usando el num_casa
    console.log("Se finaliza de la casa: "+  num_casa)
    for (let i = 0; i < this.datosTabla.length; i++) {
      if (this.datosTabla[i].num_casa === num_casa) {
        this.datosTabla[i].estado = 'finalizado';
        break;
      }
    }
  }







  
  ngOnInit(): void {
    this.predioService.getPredios()
    .subscribe(data=>{
      console.log(data)
      this.predioArray = data.predios;    //OBTIENE LOS PREDIOS EN predioArray
      this.filteredPredios = this.predioArray;    //PASA LOS DATOS OBTENIDOS A UN SUBARRAY DE PREDIOS FILTRADOS filteredPredios
    },
    error=>console.log(error));
  }

  //SOBRE LOS PREDIOS
  selectedPredio(item: Predio): void {    //PERMITE SELECCIONAR EL PREDIO Y CERRAR EL CBOX DE PREDIOS
    this.selectedItemPredio = item.predio;
    this.nomPresidente = item.responsable;
    this.isActivePredios = false;
  }

  filterPredios(): void {   //PERMITE FILTRAR LOS PREDIOS CON LA BARRA DE BÚSQUEDA
    this.filteredPredios = this.predioArray.filter(predio => predio.predio.toLowerCase().startsWith(this.searchPredios.toLowerCase()))
  }

  closeComboboxPredios(): void {    //PERMITE DESACTIVAR EL CBOX DE PREDIOS
    this.isActivePredios = false;
  }

  toggleActivePredios(): void {   //PERMITE (PARA EL CBOX DE PREDIOS) ACTIVAR SI ESTÁ DESACTIVADO, DESACTIVAR SI ESTÁ ACTIVADO
    this.isActivePredios = !this.isActivePredios;
  }
}
