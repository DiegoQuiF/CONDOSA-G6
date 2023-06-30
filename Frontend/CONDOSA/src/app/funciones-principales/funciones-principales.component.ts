import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funciones-principales',
  templateUrl: './funciones-principales.component.html',
  styleUrls: ['./funciones-principales.component.css']
})
export class FuncionesPrincipalesComponent implements OnInit {


  datosTabla: any[] = [
    { nroCasa: '1', bloque: 'A', propietario: 'Juan Pérez', categoria: 'Residencial', areaCasa: '120', cochera1: '20', areaTotal: '140', participacion: '12%' },
    { nroCasa: '2', bloque: 'B', propietario: 'María Gómez', categoria: 'Comercial', areaCasa: '80', cochera1: '10', areaTotal: '90', participacion: '8%' },
    { nroCasa: '3', bloque: 'A', propietario: 'Carlos López', categoria: 'Residencial', areaCasa: '150', cochera1: '30', areaTotal: '180', participacion: '15%' },
    { nroCasa: '4', bloque: 'C', propietario: 'Laura Ramírez', categoria: 'Residencial', areaCasa: '100', cochera1: '15', areaTotal: '115', participacion: '10%' },
    { nroCasa: '5', bloque: 'B', propietario: 'Pedro Martínez', categoria: 'Comercial', areaCasa: '90', cochera1: '12', areaTotal: '102', participacion: '9%' },
    { nroCasa: '1', bloque: 'A', propietario: 'Juan Pérez', categoria: 'Residencial', areaCasa: '120', cochera1: '20', areaTotal: '140', participacion: '12%' },
    { nroCasa: '2', bloque: 'B', propietario: 'María Gómez', categoria: 'Comercial', areaCasa: '80', cochera1: '10', areaTotal: '90', participacion: '8%' },
    { nroCasa: '3', bloque: 'A', propietario: 'Carlos López', categoria: 'Residencial', areaCasa: '150', cochera1: '30', areaTotal: '180', participacion: '15%' },
    { nroCasa: '4', bloque: 'C', propietario: 'Laura Ramírez', categoria: 'Residencial', areaCasa: '100', cochera1: '15', areaTotal: '115', participacion: '10%' },
    { nroCasa: '5', bloque: 'B', propietario: 'Pedro Martínez', categoria: 'Comercial', areaCasa: '90', cochera1: '12', areaTotal: '102', participacion: '9%' },
    { nroCasa: '1', bloque: 'A', propietario: 'Juan Pérez', categoria: 'Residencial', areaCasa: '120', cochera1: '20', areaTotal: '140', participacion: '12%' },
    { nroCasa: '2', bloque: 'B', propietario: 'María Gómez', categoria: 'Comercial', areaCasa: '80', cochera1: '10', areaTotal: '90', participacion: '8%' },
    { nroCasa: '3', bloque: 'A', propietario: 'Carlos López', categoria: 'Residencial', areaCasa: '150', cochera1: '30', areaTotal: '180', participacion: '15%' },
    { nroCasa: '4', bloque: 'C', propietario: 'Laura Ramírez', categoria: 'Residencial', areaCasa: '100', cochera1: '15', areaTotal: '115', participacion: '10%' },
    { nroCasa: '5', bloque: 'B', propietario: 'Pedro Martínez', categoria: 'Comercial', areaCasa: '90', cochera1: '12', areaTotal: '102', participacion: '9%' },
    { nroCasa: '1', bloque: 'A', propietario: 'Juan Pérez', categoria: 'Residencial', areaCasa: '120', cochera1: '20', areaTotal: '140', participacion: '12%' },
    { nroCasa: '2', bloque: 'B', propietario: 'María Gómez', categoria: 'Comercial', areaCasa: '80', cochera1: '10', areaTotal: '90', participacion: '8%' },
    { nroCasa: '3', bloque: 'A', propietario: 'Carlos López', categoria: 'Residencial', areaCasa: '150', cochera1: '30', areaTotal: '180', participacion: '15%' },
    { nroCasa: '4', bloque: 'C', propietario: 'Laura Ramírez', categoria: 'Residencial', areaCasa: '100', cochera1: '15', areaTotal: '115', participacion: '10%' },
    { nroCasa: '5', bloque: 'B', propietario: 'Pedro Martínez', categoria: 'Comercial', areaCasa: '90', cochera1: '12', areaTotal: '102', participacion: '9%' }
  ];


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
  }
}
