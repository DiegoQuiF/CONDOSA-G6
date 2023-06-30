export class Registro_Casa {
    num_casa: string;
    bloque: string;
    propietario: string;
    categoria: string;
    area_casa: string;
    cochera: string;
    area_total: string
    participacion: string
    estado: string
    id_predio: string


    constructor(
        num_casa: string,
        bloque: string,
        propietario: string,
        categoria: string,
        area_casa: string,
        cochera: string,
        area_total: string,
        participacion: string,
        estado: string,
        id_predio: string
    ) {
        this.num_casa = num_casa
        this.bloque = bloque
        this.propietario = propietario
        this.categoria = categoria
        this.area_casa = area_casa
        this.cochera = cochera
        this.area_total = area_total
        this.participacion = participacion
        this.estado = estado
        this.id_predio = id_predio
    }
}

