import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AllendeModel } from '../models/allende.model';

@Injectable({
  providedIn: 'root'
})
export class AllendeService {

  private url = "https://allende-destinos-default-rtdb.firebaseio.com";

  constructor( private http: HttpClient ) { }


  crearAllende( allende: AllendeModel){
    return this.http.post(`${ this.url }/Allende.json`, allende)
              .pipe(
                map( (resp: any) => {
                  allende.idAll = resp.name;
                  return allende;
                })
              );
  }

  actualizarAllende( allende: AllendeModel){

    const allendeTemp = {
      ...allende
    };

    delete allendeTemp.idAll;

    return this.http.put(`${ this.url }/Allende/${ allende.idAll}.json`, allendeTemp)
  }


  getAllende() {
    return this.http.get(`${ this.url }/Allende.json`)
    .pipe(
      map( this.crearArreglo )
    );
  }

  private crearArreglo( allende1Obj: any ) {

    const allende1: AllendeModel [] = [];

    if ( allende1Obj === null ) {return [];}
   
    Object.keys( allende1Obj ).forEach( key=> {

      const allende: AllendeModel = allende1Obj[key];
      allende.idAll = key;

      allende1.push( allende );

    });

    return allende1;
  }

  eliminarDestino(destino: AllendeModel){
    return this.http.delete(this.url+'/Allende/'+destino.idAll+".json");    
  }
}
