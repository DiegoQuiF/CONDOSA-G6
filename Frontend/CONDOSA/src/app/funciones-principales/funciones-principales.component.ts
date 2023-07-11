import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//MODELOS
import { Predio } from './../models/predio'
import { Gastos } from './../models/gastos'
import { Casas } from '../models/casas';
import { TipoGastos } from '../models/tipo-gastos';
import { DescripGastos } from '../models/descrip-gastos';
//SERVICIO BACKEND
import { ConnBackendService } from '../services/conn-backend.service';
import { RegistroPredioEstado } from '../models/registro-predio-estado';
import { RegistroCasaEstado } from '../models/registro-casa-estado';


@Component({
  selector: 'app-funciones-principales',
  templateUrl: './funciones-principales.component.html',
  styleUrls: ['./funciones-principales.component.css']
})

export class FuncionesPrincipalesComponent implements OnInit {

  constructor(private connBackend: ConnBackendService) { }


  finalizadoColor = getComputedStyle(document.documentElement).getPropertyValue('--finalizado-color');
  no_finalizadoColor = getComputedStyle(document.documentElement).getPropertyValue('--no-finalizado-color');
  finalizadoSombra = getComputedStyle(document.documentElement).getPropertyValue('--box-shadow-finalizado');
  no_finalizadoSombra = getComputedStyle(document.documentElement).getPropertyValue('--box-shadow-no-finalizado');

  predioArray: Array<Predio> = new Array<Predio>();
  filteredPredios: Array<Predio> = new Array<Predio>();
  searchPredios: string = '';
  selectedTextPredio: string = '--seleccione--';
  isActivePredios: boolean = false;


  gastoArray: Array<Gastos> = new Array<Gastos>();

  filteredPeriodos: Array<Gastos> = new Array<Gastos>();
  searchPeriodos: string = '';
  selectedTextPeriodo: string = '--seleccione--';
  isActivePeriodo: boolean = false;

  casasArray: Array<Casas> = new Array<Casas>();

  prediosEstadoArray: Array<RegistroPredioEstado> = new Array<RegistroPredioEstado>(
    new RegistroPredioEstado("1", "1", "finalizado", "Abr-23"),
    new RegistroPredioEstado("2", "2", "no finalizado", "Jun-23"),
    new RegistroPredioEstado("3", "3", "no finalizado", "Jun-23"),
    new RegistroPredioEstado("4", "4", "no finalizado", "Jun-23"),
    new RegistroPredioEstado("5", "5", "no finalizado", "Jun-23"),
    new RegistroPredioEstado("6", "6", "no finalizado", "Jun-23"),
    new RegistroPredioEstado("7", "7", "no finalizado", "Jun-23"),
    new RegistroPredioEstado("8", "8", "no finalizado", "Jun-23"),
    new RegistroPredioEstado("9", "9", "no finalizado", "Jun-23"),
    new RegistroPredioEstado("10", "10", "no finalizado", "Jun-23")
  );

  casasEstadoArray: Array<RegistroCasaEstado> = new Array<RegistroCasaEstado>(
    new RegistroCasaEstado("1", "1", "no finalizado", "Jun-23", "20"),
    new RegistroCasaEstado("2", "2", "no finalizado", "Jun-23", "21"),
    new RegistroCasaEstado("3", "3", "no finalizado", "Jun-23", "22"),
    new RegistroCasaEstado("4", "4", "no finalizado", "Jun-23", "23"),
    new RegistroCasaEstado("5", "5", "no finalizado", "Jun-23", "24"),
    new RegistroCasaEstado("6", "6", "no finalizado", "Jun-23", "25"),
    new RegistroCasaEstado("7", "7", "no finalizado", "Jun-23", "26"),
    new RegistroCasaEstado("8", "8", "no finalizado", "Jun-23", "27"),
    new RegistroCasaEstado("9", "9", "no finalizado", "Jun-23", "28"),
    new RegistroCasaEstado("10", "10", "no finalizado", "Jun-23", "29")
  );


  nomPresidente: string = '';

  mostrarComp_RegistGastPredios: boolean = false;  //PERMITE MOSTRAR EL PANEL DE REGISTRO DE GASTOS DE PREDIO
  mostrarComp_RegistGastCasa: boolean = false;   //PERMITE MOSTRAR EL PANEL DE REGISTRO DE GASTOS DE CASA

  predioisSeleccionado: boolean = false;
  periodoisSeleccionado: boolean = false;


  bloquearPredios: boolean = false;
  bloquearPeriodos: boolean = false;

  bloquearRegistrarPredio: boolean = false;
  bloquearRegistrarCasas: boolean = false;



  estadoRegistroPredioSelected: string = 'no finalizado';
  id_selectedPredio = '';



  //AL INICIO SE OBTIENEN LOS PREDIOS PARA EL COMBO BOX
  ngOnInit(): void {

    //OBTENEMOS LOS PREDIOS DE LA BD PARA EL CBOBOX
    this.getPredios_BD();
  }


  //SOBRE LOS PREDIOS
  selectedPredio(item: Predio): void {    //PERMITE SELECCIONAR EL PREDIO Y CERRAR EL CBOX DE PREDIOS
    this.isActivePredios = false;//PARA EL SELECCIONADOR


    this.selectedTextPredio = item.predio;
    this.nomPresidente = item.responsable;
    this.predioisSeleccionado = true;

    if (item.id_predio == this.id_selectedPredio) {
      this.periodoisSeleccionado = true;
    } else {
      this.casasArray.splice(0, this.casasArray.length);//VACIAMOS LA TABLA
      this.id_selectedPredio = item.id_predio;
      this.selectedTextPeriodo = '--seleccione--';
      this.getPeriodos_BD(item);
      this.periodoisSeleccionado = false;
    }

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
    this.isActivePeriodo = false;//PARA EL SELECCIONADOR



    this.periodoisSeleccionado = true;
    if (this.selectedTextPeriodo != item1.periodo) {
      this.selectedTextPeriodo = item1.periodo;
      this.casasArray.splice(0, this.casasArray.length);//VACIAMOS LA TABLA
      this.actualizarDatosCasas(this.id_selectedPredio, this.selectedTextPeriodo);
    }

  }

  filterPeriodos(): void {   //PERMITE FILTRAR LOS PREDIOS CON LA BARRA DE BÚSQUEDA
    this.filteredPeriodos = this.gastoArray.filter(periodo => periodo.periodo.toLowerCase().startsWith(this.searchPeriodos.toLowerCase()))
  }

  closeComboboxPeriodos(): void {    //PERMITE DESACTIVAR EL CBOX DE PREDIOS
    this.isActivePeriodo = false;
  }

  toggleActivePeriodos(): void {   //PERMITE (PARA EL CBOX DE PREDIOS) ACTIVAR SI ESTÁ DESACTIVADO, DESACTIVAR SI ESTÁ ACTIVADO
    if (this.selectedTextPredio !== "--seleccione--") {
      this.isActivePeriodo = !this.isActivePeriodo;
    }
    else {
      alert('Seleccione un PREDIO antes de seleccionar alguno de los PERIODOS.');
    }
  }


  finalizarRegistroPredio() {
    console.log("el numero por verificar es:" + this.id_selectedPredio + "y el periodo es: " + this.selectedTextPeriodo);
    for (let i = 0; i < this.predioArray.length; i++) {
      console.log("el numero verificando es:" + this.predioArray[i].id_predio);
      if (this.prediosEstadoArray[i].id_predio == this.id_selectedPredio) {
        this.prediosEstadoArray[i].estado = 'finalizado';
        console.log("El estaod del id  " + this.id_selectedPredio + " ahora es: " + this.prediosEstadoArray[i].estado);
        break;
      }
    }

    this.estadoRegistroPredioSelected = 'finalizado';

    //Metodo para modificar la tabla ESTADO_REGISTRO_PREDIO de la BD

    console.log("Se finaliza el registro del predio desde el principal");
  }


  //ESTADOS DEL SUBRECUADRO DE REGISTRO DE GASTOS DEL PREDIO
  cambiarEstadoRegistroPredio(item: boolean) {
    if (this.selectedTextPredio !== '--seleccione--') {
      if (this.selectedTextPeriodo !== '--seleccione--') {

        this.mostrarComp_RegistGastPredios = item;
        this.bloquearPredios = !this.bloquearPredios;
        this.bloquearPeriodos = !this.bloquearPeriodos;

        this.bloquearRegistrarPredio = !this.bloquearRegistrarPredio;
        this.bloquearRegistrarCasas = !this.bloquearRegistrarCasas;
      }
      else {
        alert('Seleccione un PERIODO.');
      }
    }
    else {
      alert('Seleccione un PREDIO.');
    }
  }

  //Metodo para indicar que ya se termino de regitrar 
  finalizarRegistroCasa(num_casa: string) {
    //Aca iria el metodo para modificar la tabla REGISTRO_CASA_ESTADO de la BD, usando el num_casa
    for (let i = 0; i < this.casasEstadoArray.length; i++) {
      console.log("el numero verificando es:" + this.casasEstadoArray[i].num_casa);
      if (this.casasEstadoArray[i].num_casa == num_casa&&this.casasEstadoArray[i].periodo == this.selectedTextPeriodo) {
        this.casasEstadoArray[i].estado = 'finalizado';
        console.log("la participacionde la casa " + num_casa + " ahora es: " + this.casasEstadoArray[i].estado);
        //Metodo para modificar la tabla ESTADO_REGISTRO_PREDIO de la BD
        break;
      }
    }
  }

  //ESTADOS DEL SUBRECUADRO DE REGISTRO DE GASTOS DE LA CASA
  cambiarEstadoRegistroCasa(item: boolean) {
    console.log("El estado del predioSeleccionado es:" + this.predioisSeleccionado)

    if (this.predioisSeleccionado) {
      if (this.periodoisSeleccionado) {
        this.mostrarComp_RegistGastCasa = item;

        this.bloquearPredios = !this.bloquearPredios;
        this.bloquearPeriodos = !this.bloquearPeriodos;

        this.bloquearRegistrarPredio = !this.bloquearRegistrarPredio;
        this.bloquearRegistrarCasas = !this.bloquearRegistrarCasas;
      }
      else {
        alert('Seleccione un PERIODO.');
      }
    }
    else {
      alert('Seleccione un PREDIO.');
    }
  }

  actualizarDatosCasas(id_predio: string, periodo: string): void {
    if (this.predioisSeleccionado == true && this.periodoisSeleccionado == true) {
      console.log("Se cumplen las condiciones para getCasas");
      this.getCasas_BD(id_predio, periodo);
    }
  }




  getPredios_BD(): void {
    this.connBackend.getPredios()
      .subscribe(data => {
        console.log(data)
        this.predioArray = data.predios;    //OBTIENE LOS PREDIOS EN predioArray
        this.predioArray.forEach(predio => {
          

        });
        this.filteredPredios = this.predioArray;    //PASA LOS DATOS OBTENIDOS A UN SUBARRAY DE PREDIOS FILTRADOS filteredPredios
      },
        error => console.log(error));
  }
  getPeriodos_BD(item: Predio): void {
    this.connBackend.getGastos(item.id_predio)
      .subscribe(data => {
        this.gastoArray = data.gastos;
        this.filteredPeriodos = this.gastoArray;    //PASA LOS DATOS OBTENIDOS A UN SUBARRAY DE PREDIOS FILTRADOS filteredPredios
      },
        error => console.log(error));
  }

  getCasas_BD(id_predio: string, periodo: string): void {
    this.connBackend.getCasas(id_predio)
      .subscribe(
        data => {
          console.log(data)
          this.casasArray = data.casas;
          this.casasArray.forEach(casa => {
            
          });
          console.log(this.casasArray);
        },
        error => console.log(error));
  }
}
