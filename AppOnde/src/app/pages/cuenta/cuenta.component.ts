import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { CrudService } from 'src/app/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  
  usuario = new UsuarioModel();
  urlS: string[];
  confPass: string;
  usuarios: UsuarioModel[] = [];

  constructor(private crudService: CrudService, private router: Router) { 
    this.confPass = "";  
    var url = window.location.toString();
    this.urlS = url.split('/');
    this.usuario.id = this.urlS[4];         
  }

  ngOnInit(): void {
    this.crudService.getUsuario()
      .subscribe(resp => {
       // console.log(resp);
        this.usuarios = resp;
        this.llenarDatos();
    });          
  }    

  llenarDatos(): void{
    for(var i=0; i<this.usuarios.length; i++){
      if(this.usuarios[i].id == this.usuario.id){        
        this.usuario.nombre = this.usuarios[i].nombre;
        this.usuario.password = this.usuarios[i].password;
        this.usuario.mail = this.usuarios[i].mail;
        this.usuario.genero = this.usuarios[i].genero;
        return;
      }
    }
  }
  guardar(form: NgForm){
    if(form.invalid){
      //console.log("Formulario no valido");
      Swal.fire({
        title: 'Error',
        text: 'Formulario no valido',
        icon: 'error'        
      });
      return;
    }
    if(this.usuario.password != this.confPass){
      Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'error'        
      });
      return;
    }
    
    Swal.fire({
      title: "Espere",
      text: "Guardando informacion",
      icon: "info",
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if(this.usuario.id){
      peticion = this.crudService.actualizarUsuario(this.usuario);
    }else{
      peticion = this.crudService.crearUsuario(this.usuario);
    }    

    peticion.subscribe( resp => {
      Swal.fire({
        title: this.usuario.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'        
      })
    })
  }

  eliminar(){
    Swal.fire({
      title: '¿Seguro que quieres eliminar tu cuenta?',
      showDenyButton: true,            
      denyButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Usuario eliminado', '', 'success')
        
        let peticion: Observable<any>;
        
        peticion = this.crudService.eliminarUsuario(this.usuario);

        peticion.subscribe( resp => {
          Swal.fire({
            title: this.usuario.nombre,
            text: 'Usuario eliminado correctamente',
            icon: 'success'        
          }).then((result) => {
            if(result.isConfirmed){
              this.router.navigate(['/usuario/']);   
            }            
          })
        });
      }
    });
  }

}
