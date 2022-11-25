

export class RutaModel{

    id: string | undefined;
    nombreRuta: string | undefined;
    destinos: string = "Proximamente..";
    tipoVehiculo: boolean;

    constructor(){
        this.tipoVehiculo = true;
    }
}

