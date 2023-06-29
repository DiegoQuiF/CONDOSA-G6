import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funciones-principales',
  templateUrl: './funciones-principales.component.html',
  styleUrls: ['./funciones-principales.component.css']
})
export class FuncionesPrincipalesComponent implements OnInit {

  selectedItemPredios: string = '';
  selectedItemMeses: string = '';

  searchValuePredios: string = '';
  searchValueMeses: string = '';


  filteredItemsPredios: string[] = [];
  filteredItemsMeses: string[] = [];

  isActivePredios: boolean = false;
  isActiveMeses: boolean = false;

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
  presidente ="Ávalos Cuadros, Juan Carlos";
  constructor() { }

  ngOnInit() {
    this.filteredItemsPredios = this.predios;
    this.selectedItemPredios = this.predios[0];

    this.filteredItemsMeses = this.meses;
    this.selectedItemMeses = this.meses[0];
  }

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
}
