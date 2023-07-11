export class RegistroPredioEstado {
    id_registro_predio_estado: string
    id_predio: string
    estado: string
    periodo: string
    
    constructor(
        id_registro_predio_estado: string,
        id_predio: string,
        estado: string,
        periodo: string
    ) {
        this.id_registro_predio_estado = id_registro_predio_estado
        this.id_predio = id_predio
        this.estado = estado
        this.periodo = periodo
    }
}