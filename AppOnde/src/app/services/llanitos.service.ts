import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LlanitosModel } from '../models/llanitos.model';

@Injectable({
  providedIn: 'root'
})
export class LlanitosService {

  private url = "https://llanitos-destinos-default-rtdb.firebaseio.com";

  constructor( private http: HttpClient ) { }


  crearLlanitos( llanitos: LlanitosModel){
    return this.http.post(`${ this.url }/Llanitos.json`, llanitos)
              .pipe(
                map( (resp: any) => {
                  llanitos.idLla = resp.name;
                  return llanitos;
                })
              );
  }

  actualizarLlanitos( llanitos: LlanitosModel){

    const llanitosTemp = {
      ...llanitos
    };

    delete llanitosTemp.idLla;

    return this.http.put(`${ this.url }/Llanitos/${ llanitos.idLla}.json`, llanitosTemp)
  }


  getLlanitos() {
    return this.http.get(`${ this.url }/Llanitos.json`)
    .pipe(
      map( this.crearArreglo )
    
    );
  }

  private crearArreglo( llanitos1Obj: any ) {

    const llanitos1: LlanitosModel [] = [];

    if ( llanitos1Obj === null ) {return [];}
   
    Object.keys( llanitos1Obj ).forEach( key=> {

      const llanitos: LlanitosModel = llanitos1Obj[key];
      llanitos.idLla = key;

      llanitos1.push( llanitos );

    });

    return llanitos1;
  }

  eliminarDestino(destino: LlanitosModel){
    return this.http.delete(this.url+'/Llanitos/'+destino.idLla+".json");    
  }
}
