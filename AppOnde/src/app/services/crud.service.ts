import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'https://usuarios-93764-default-rtdb.firebaseio.com';

  constructor( private http: HttpClient) { }

  crearUsuario( usuario: UsuarioModel) {
    return this.http.post(this.url+'/usuarios.json', usuario)
      .pipe(
        map( (resp: any) => {
          usuario.id = resp.name;
          return usuario;
        })
      );
  }

  actualizarUsuario( usuario: UsuarioModel){
    const usuarioTemp = {
      ...usuario
    };

    delete usuarioTemp.id;

    return this.http.put(this.url+'/usuarios/'+usuario.id+".json", usuarioTemp)    
  }

  eliminarUsuario( usuario: UsuarioModel){
    return this.http.delete(this.url+'/usuarios/'+usuario.id+".json");    
  }

  getUsuario(){
    return this.http.get(this.url+'/usuarios.json')
      .pipe(
        map( this.crearArreglo )
      );
  }

  private crearArreglo(usuariosObj: any){
    
    const usuarios: UsuarioModel [] = [];
    
    //console.log(usuariosObj);


    if(usuariosObj === null){
      return [];
    }

    Object.keys( usuariosObj ).forEach( key => {
      const usuario: UsuarioModel = usuariosObj[ key ];
      usuario.id = key;

      usuarios.push( usuario );
    });
    return usuarios;
  }
}
