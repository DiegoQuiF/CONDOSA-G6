export class Registro_Casa {
    area_casa: string;
    area_cochera: string;
    area_total: string;
    estado: string;
    id_casa: string;
    id_indice: string;
    id_predio: string;
    mdu: string;
    numero: string;
    participacion: string;
    piso: string;
    responsable: string;
    estado_finalizado: string;

    constructor(
      area_casa: string,
      area_cochera: string,
      area_total: string,
      estado: string,
      id_casa: string,
      id_indice: string,
      id_predio: string,
      mdu: string,
      numero: string,
      participacion: string,
      piso: string,
      responsable: string,
      estado_finalizado: string
    ) {
      this.area_casa = area_casa;
      this.area_cochera = area_cochera;
      this.area_total = area_total;
      this.estado = estado;
      this.id_casa = id_casa;
      this.id_indice = id_indice;
      this.id_predio = id_predio;
      this.mdu = mdu;
      this.numero = numero;
      this.participacion = participacion;
      this.piso = piso;
      this.responsable = responsable;
      this.estado_finalizado=estado_finalizado;
    }
  }
  