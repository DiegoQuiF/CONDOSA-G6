export class Predio {
    id_predio: string;
    predio: string;
    responsable: string;

    estado_finalizado: string;
    constructor(id_pre:string, pre:string, per:string, es_fin:string){
        this.id_predio = id_pre;
        this.predio = pre;
        this.responsable = per;
        this.estado_finalizado=es_fin;
    }
}