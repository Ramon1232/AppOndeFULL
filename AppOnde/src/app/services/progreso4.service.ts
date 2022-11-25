import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Progreso4Model } from '../models/progreso4.model';

@Injectable({
  providedIn: 'root'
})
export class Progreso4Service {

  private url = "https://progreso4-destinos-default-rtdb.firebaseio.com";

  constructor( private http: HttpClient ) { }


  crearProgreso4( progreso4: Progreso4Model){
    return this.http.post(`${ this.url }/Progreso4.json`, progreso4)
              .pipe(
                map( (resp: any) => {
                  progreso4.idP4 = resp.name;
                  return progreso4;
                })
              );
  }

  actualizarProgreso4( progreso4: Progreso4Model){

    const progreso4Temp = {
      ...progreso4
    };

    delete progreso4Temp.idP4;

    return this.http.put(`${ this.url }/Progreso4/${ progreso4.idP4}.json`, progreso4Temp)
  }


  getProgreso4() {
    return this.http.get(`${ this.url }/Progreso4.json`)
    .pipe(
      map( this.crearArreglo )
    
    );
  }

  private crearArreglo( progreso41Obj: any ) {

    const progreso41: Progreso4Model [] = [];

    if ( progreso41Obj === null ) {return [];}
   
    Object.keys( progreso41Obj ).forEach( key=> {

      const progreso4: Progreso4Model = progreso41Obj[key];
      progreso4.idP4 = key;

      progreso41.push( progreso4 );

    });

    return progreso41;
  }  

  eliminarDestino(destino: Progreso4Model){
    return this.http.delete(this.url+'/Progreso4/'+destino.idP4+".json");    
  }
}
