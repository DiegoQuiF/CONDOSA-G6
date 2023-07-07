import { Component, OnInit } from '@angular/core';
import { Registro_Casa } from '../models/registro_casa';

//MODELOS
import { Predio } from './../models/predio'
import { Gastos } from './../models/gastos'
import { Casas } from '../models/casas';
import { TipoGastos } from '../models/tipo-gastos';
import { DescripGastos } from '../models/descrip-gastos';
//SERVICIO BACKEND
import { ConnBackendService } from '../services/conn-backend.service';


@Component({
  selector: 'app-funciones-principales',
  templateUrl: './funciones-principales.component.html',
  styleUrls: ['./funciones-principales.component.css']
})

export class FuncionesPrincipalesComponent implements OnInit {

  constructor(private connBackend:ConnBackendService){}

  predioArray:Predio[] = [];
  filteredPredios:Predio[] = [];
  searchPredios:String = '';
  selectedItemPredio:String = 'Seleccione';
  isActivePredios: boolean = false;
  nomPresidente: String = '';

  gastoArray:Gastos[] = [];
  filteredPeriodos:Gastos[] = [];
  searchPeriodos:String = '';
  selectedItemPeriodo:String = 'Seleccione';
  isActivePeriodo: boolean = false;

  casasArray:Casas[] = [];
  datosTabla:Array<Registro_Casa> = new Array<Registro_Casa>();

  mostrarRegistrarGPredios: boolean = false;  //PERMITE MOSTRAR EL PANEL DE REGISTRO DE GASTOS DE PREDIO
  mostrarRegistrarGCasa: boolean = false;   //PERMITE MOSTRAR EL PANEL DE REGISTRO DE GASTOS DE CASA

  cuadradoColor: string = 'red';    //COLOR SEMAFORO DE LA CASA

  






  
  
  estadoRegistroPredioSelected:string='no finalizado';
  id_predio_selected='1';  
  //METODOS PARA EL SEMAFORO DE CASA.
  cambiarColorCuadrado() {
    this.cuadradoColor = 'green';
  }
  //Ocular o Mostrar el registro para predios true mostrar, y false ocultar
  

  
  //Metodo para indicar que ya se termino de regitrar 
  finalizarRegistroCasa(num_casa:string){
    //Aca iria el metodo para modificar la tabla ESTADO_REGISTRO_CASA de la BD, usando el num_casa
    for (let i = 0; i < this.datosTabla.length; i++) {
      console.log("el numero verificando es:"+this.datosTabla[i].numero);
      if (this.datosTabla[i].numero == num_casa) {
        this.datosTabla[i].estado_finalizado = 'finalizado';
        console.log("la participacionde la casa "+ num_casa+" ahora es: "+ this.datosTabla[i].estado_finalizado);
        break;
      }
    }
  }




  //AL INICIO
  ngOnInit(): void {
    this.connBackend.getPredios()
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

    this.connBackend.getGastos(item.id_predio)
    .subscribe(data=>{
      console.log(data)
      this.gastoArray = data.gastos;    //OBTIENE LOS PREDIOS EN predioArray
      this.filteredPeriodos = this.gastoArray;    //PASA LOS DATOS OBTENIDOS A UN SUBARRAY DE PREDIOS FILTRADOS filteredPredios
    },
    error=>console.log(error));

    this.connBackend.getCasas(item.id_predio)
      .subscribe(
        data=>{
        console.log(data)
        this.casasArray = data.casas;
        this.datosTabla = new Array<Registro_Casa>();
        this.casasArray.forEach(casa => {
          const registro = new Registro_Casa(
            casa.area_casa,
            casa.area_cochera,
            casa.area_total,
            casa.estado,
            casa.id_casa,
            casa.id_indice,
            casa.id_predio,
            casa.mdu,
            casa.numero,
            casa.participacion,
            casa.piso,
            casa.responsable,
            "no finalizado"
          );
        // Agregar el objeto a datosTabla
        this.datosTabla.push(registro);
        console.log(this.datosTabla);
      });
   

    },
    error=>console.log(error));
    
    this.selectedItemPeriodo = 'Seleccione';
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


  //SOBRE LOS PERIODOS
  selectedPeriodo(item1: Gastos): void {    //PERMITE SELECCIONAR EL PREDIO Y CERRAR EL CBOX DE PREDIOS
    this.selectedItemPeriodo = item1.periodo;
    this.isActivePeriodo = false;
  }

  filterPeriodos(): void {   //PERMITE FILTRAR LOS PREDIOS CON LA BARRA DE BÚSQUEDA
    this.filteredPeriodos = this.gastoArray.filter(periodo => periodo.periodo.toLowerCase().startsWith(this.searchPeriodos.toLowerCase()))
  }

  closeComboboxPeriodos(): void {    //PERMITE DESACTIVAR EL CBOX DE PREDIOS
    this.isActivePeriodo = false;
  }

  toggleActivePeriodos(): void {   //PERMITE (PARA EL CBOX DE PREDIOS) ACTIVAR SI ESTÁ DESACTIVADO, DESACTIVAR SI ESTÁ ACTIVADO
    this.isActivePeriodo = !this.isActivePeriodo;
  }


  //ESTADOS DEL SUBRECUADRO DE REGISTRO DE GASTOS DEL PREDIO
  cambiarEstadoRegistroPredio(item:boolean){
    if(this.selectedItemPredio !== 'Seleccione'){
      if(this.selectedItemPeriodo !== 'Seleccione'){
        console.log("se cambia a "+ item + "desde el principal");
        this.mostrarRegistrarGPredios=item;
      }
      else{
        alert('Seleccione un PERIODO.');
      }
    }
    else{
      alert('Seleccione un PREDIO.');
    }
  }
  
  finalizarRegistroPredio(){
    this.estadoRegistroPredioSelected='finalizado';
    //Aca iria el metodo para modificar la tabla ESTADO_REGISTRO_PREDIO de la BD
    console.log("Se finaliza el registro del predio desde el principal");
  }


  //ESTADOS DEL SUBRECUADRO DE REGISTRO DE GASTOS DE LA CASA
  cambiarEstadoRegistroCasa(item:boolean){
    if(this.selectedItemPredio !== 'Seleccione'){
      if(this.selectedItemPeriodo !== 'Seleccione'){
        console.log("se cambia a "+ item + "desde el principal");
        this.mostrarRegistrarGCasa=item;
      }
      else{
        alert('Seleccione un PERIODO.');
      }
    }
    else{
      alert('Seleccione un PREDIO.');
    }
  }


}
