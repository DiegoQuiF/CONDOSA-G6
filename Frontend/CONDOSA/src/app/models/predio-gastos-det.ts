export class PredioGastosDet {
    id_predio_gastos_det: string;
    descripcion: string;
    importe: string;

    constructor(id_pre_gas_det:string, des:string, imp:string){
        this.id_predio_gastos_det = id_pre_gas_det;
        this.descripcion = des;
        this.importe = imp;
    }
}