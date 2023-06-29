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
    { nroCasa: '5', bloque: 'B', propietario: 'Pedro Martínez', categoria: 'Comercial', areaCasa: '90', cochera1: '12', areaTotal: '102', participacion: '9%' }
  ];


  //ATRIBUTOS PARA EL BUSCADOR DE TEXTO DE PREDIOS Y PERIODOS. 

  predios = [
    "Residencial Los Alamos",
    "Condominio Las Rosas",
    "Residencial Parque del Sol",
    "Residencial Villa Esperanza",
    "Condominio Jardines de la Montaña",
    "Condominio Riviera del Lago",
    "Residencial El Bosque Encantado",
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

 
  //

  //OTROS DATOS
  presidente ="Ávalos Cuadros, Juan Carlos";

  //ATRIBUTOS REGISTRAR GASTOS PREDIOS 
  mostrarRegistrarGPredios: boolean = false;
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
  //
}
