import { Component, NgModule, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  correo: string;
  pass: string;
  id?: string;    
  constructor( private crudService: CrudService, private router: Router) { 
    this.correo = "";
    this.pass = "";
    this.id = "";    
  }

  ngOnInit(){
    this.crudService.getUsuario()
      .subscribe(resp => {
        //console.log(resp);
        this.usuarios = resp;
      });
  }

  ingresar( form: NgForm){
    if(form.invalid){
      Swal.fire({
        title: "Error",
        text: "Rellena los campos",
        icon: "error"        
      });
      return;
    }
    var cor = this.correo.split("@");
    var b=false;
    if(cor.length == 2){
      for(var i = 0; i < this.usuarios.length; i++){             
        if(this.correo == this.usuarios[i].mail && this.pass == this.usuarios[i].password){
          //console.log("usuario encontrado");
          this.id = this.usuarios[i].id;
          this.router.navigate(['/rutas/'+this.id]);
          b = true;
          return;
        }
      }            
      Swal.fire({
        title: "Error",
        text: "Usuario o contraseña incorrecta",
        icon: "error"        
      });    
    }else{
      Swal.fire({
        title: "Error",
        text: "Formato de correo no valido",
        icon: "error"        
      });
    }                
  }
  
}
