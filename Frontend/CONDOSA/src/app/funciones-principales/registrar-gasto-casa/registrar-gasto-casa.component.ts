import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-registrar-gasto-casa',
  templateUrl: './registrar-gasto-casa.component.html',
  styleUrls: ['./registrar-gasto-casa.component.css']
})
export class RegistrarGastoCasaComponent implements OnInit {

  @Output() mostrarRegistroCasa_OUT=new EventEmitter<boolean>();
  @Output() estadoRegistroNum_Casa=new EventEmitter<string>();

  //DATOS DE LA CASA
  num_casa_selected:string='--N° Casa--';
  
  listaCasas: any[] = ['20', '21', '22','23','24','25','26','27','28','29','30'];
  //
  listaTipoGastoCasas: any[] = ['Gasto genrico', '´Sanciones'];
  listaDescripcionCasas: any[] = ['Agua', 'Luz y Electricidad'];
  
  gatosRegistradosCasa: any[] = [
    { TipoGasto: 'Gasto de agua individual', Monto: 30},
    { TipoGasto: 'Administración y contabilidad ', Monto: 66 },
    { TipoGasto: 'Teléfono fijo e internet',  Monto: 12.3},
    { TipoGasto: 'Consumo de Luz Mensual SS-GG -Suministro 1695605',  Monto: 12.3 },
    { TipoGasto: 'Consumo de Luz Mensual BCI -Suministro 1695613',  Monto: 12.3},
    { TipoGasto: 'Planilla (portería- áreas comunes- limpieza)', Monto: 30.5},
    { TipoGasto: 'Administración y contabilidad ', Monto: 66.0 },
    { TipoGasto: 'Teléfono fijo e internet',  Monto: 12.3},
    { TipoGasto: 'Maltratar-faltar el respeto al personal',  Monto: 12.3},
    { TipoGasto: 'Utilizar el estacionamiento como depocito',  Monto: 12.3}
  ];

  gatosRegistradosPredio: any[] = [
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

  ngOnInit() {
  }

  set_mostrarRegistroCasa(item:boolean){
    this.mostrarRegistroCasa_OUT.emit(item);
  }
  
  finalizarRegistroCasa(){
    //Aca iria el metodo para modificar la tabla ESTADO_REGISTRO_PREDIO de la BD
    if(this.num_casa_selected !== '--N° Casa--'){
      console.log("se manda el numero:"+ this.num_casa_selected)
      this.estadoRegistroNum_Casa.emit(this.num_casa_selected);
    }else{
      alert('Selecciona un numero de casa');
    }
    
  }
  
}
