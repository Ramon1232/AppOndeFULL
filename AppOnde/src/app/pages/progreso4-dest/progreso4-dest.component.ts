import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Progreso4Model } from 'src/app/models/progreso4.model';
import { Progreso4Service } from 'src/app/services/progreso4.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-progreso4-dest',
  templateUrl: './progreso4-dest.component.html',
  styleUrls: ['./progreso4-dest.component.css']
})
export class Progreso4DestComponent implements OnInit {

  progreso4Dest: Progreso4Model = new Progreso4Model();
  urlS: string[];
  idUser: string;
  constructor( private progreso4Service: Progreso4Service, private router: Router) { 
    var url = window.location.toString();
    this.urlS = url.split('/');
    this.idUser = this.urlS[4];    
  };

  ngOnInit(): void {
  }

  guardar ( form: NgForm){

    if ( form.invalid ){
      console.log('Formulario no válido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if ( this.progreso4Dest.idP4 ) {
      peticion = this.progreso4Service.actualizarProgreso4(this.progreso4Dest)  
    } else{
      peticion = this.progreso4Service.crearProgreso4(this.progreso4Dest)
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.progreso4Dest.destinoDP4,
        text: 'Destino agregado correctamente',
        icon: 'success'
      }).then((result) => {
        if(result.isConfirmed){
          this.router.navigate(['/progreso4/'+this.idUser]);   
        }            
      });
    });

  }

}
