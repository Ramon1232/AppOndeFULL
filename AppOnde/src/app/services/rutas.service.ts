import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RutaModel } from '../models/ruta.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})            
export class RutasService {

  private url = "https://rutas-e22e5-default-rtdb.firebaseio.com";

  constructor( private http: HttpClient ) { }


  crearRuta( ruta: RutaModel){
    return this.http.post(`${ this.url }/rutas.json`, ruta)
              .pipe(
                map( (resp: any) => {
                  ruta.id = resp.name;
                  return ruta;
                })
              );
  }

  actualizarRuta( ruta: RutaModel){

    const rutaTemp = {
      ...ruta
    };

    delete rutaTemp.id;

    return this.http.put(`${ this.url }/rutas/${ ruta.id}.json`, rutaTemp)
  }


  getRutas() {
    return this.http.get(`${ this.url }/rutas.json`)
    .pipe(
      map( this.crearArreglo )
    
    );
  }

  private crearArreglo( rutasObj: any ) {

    const rutas: RutaModel [] = [];

    if ( rutasObj === null ) {return [];}
   
    Object.keys( rutasObj ).forEach( key=> {

      const ruta: RutaModel = rutasObj[key];
      ruta.id = key;

      rutas.push( ruta );

    });

    return rutas;
  }


}

