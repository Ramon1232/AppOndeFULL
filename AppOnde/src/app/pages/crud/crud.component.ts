import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  usuario = new UsuarioModel();
  confPass: string;

  constructor(private crudService: CrudService, private router: Router) { 
    this.confPass = "";
  }  

  ngOnInit(): void {    
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
      console.log("Las contraseñas no coinciden");
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
        text: 'Usuario registrado con éxito',
        icon: 'success'        
      }).then((result) => {
        if(result.isConfirmed){
          this.router.navigate(['/usuario/']);
        }        
      })      
    })

  }

}
