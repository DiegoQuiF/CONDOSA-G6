import { Component, OnInit } from '@angular/core';
import { Registro_Casa } from '../models/registro_casa';

@Component({
  selector: 'app-funciones-principales',
  templateUrl: './funciones-principales.component.html',
  styleUrls: ['./funciones-principales.component.css']
})
export class FuncionesPrincipalesComponent implements OnInit {


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

  //ATRIBUTOS PARA EL BUSCADOR DE TEXTO DE PREDIOS Y PERIODOS. 

  predios = [
    "Condominio Las Rosas",
    "Mirador del Valle",
    "Paseo del Río",
    "Brisas del Mar",
    "La Hacienda",
    "Altos del Cielo",
    "Monte Verde",
    "Los Pinos",
    "Sol Naciente",
    "Vista Hermosa",
    "El Paraíso",
    "Amanecer Dorado",
    "El Oasis",
    "Rincón del Lago"
  ];
  meses = ["Enero-23", "Febrero-23", "Marzo-23", "Abril-23"];
  selectedItemPredios: string = '';
  selectedItemMeses: string = '';

  searchValuePredios: string = '';
  searchValueMeses: string = '';


  filteredItemsPredios: string[] = [];
  filteredItemsMeses: string[] = [];

  isActivePredios: boolean = false;
  isActiveMeses: boolean = false;

  //Atributos de este espacio del predio 
  idPredioSeleccionado:string='4';
  estadoRegistroPredioSelected:string='no finalizado';

  //solo hay 2 estados, no finalizado y finalizado. 


  //Datos del predio
  presidente ="Ávalos Cuadros, Juan Carlos";

  //ATRIBUTOS Funcionalidades

  //REGISTRAR GASTOS PREDIOS 
  mostrarRegistrarGPredios: boolean = false;

  //REGISTRAR GASTOS PREDIOS 
  mostrarRegistrarGCasa: boolean = false;
  //ATRIBUTOS PARA EL SEMAFORO DE CASA
  cuadradoColor: string = 'red';
  //



  constructor() { }

  ngOnInit() {
    //METODOS PARA LOS BUSCADORES DE PREDIO Y PERIODO
    this.filteredItemsPredios = this.predios;
    this.selectedItemPredios = this.predios[0];

    this.filteredItemsMeses = this.meses;
    this.selectedItemMeses = this.meses[0];
    //
  }
  //METODOS PARA LOS BUSCADORES DE PREDIO Y PERIODO
  toggleActivePredios(): void {
    this.isActivePredios = !this.isActivePredios;
  }

  toggleActiveMeses(): void {
    console.log("se detecta el click");
    this.isActiveMeses = !this.isActiveMeses;
  }

  selectItemPredios(item: string): void {
    this.selectedItemPredios = item;
    this.isActivePredios = false;
  }

  selectItemMeses(item: string): void {
    this.selectedItemMeses = item;
    this.isActiveMeses = false;
  }

  filterItemsPredios(): void {
    this.filteredItemsPredios = this.predios.filter(item => item.toLowerCase().startsWith(this.searchValuePredios.toLowerCase()));
  }

  filterItemsMeses(): void {
    this.filteredItemsMeses = this.meses.filter(item => item.toLowerCase().startsWith(this.searchValueMeses.toLowerCase()));
  }
  closeComboboxPredios(): void {
    this.isActivePredios = false;
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
}
