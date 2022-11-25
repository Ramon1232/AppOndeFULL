import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { RutaModel } from 'src/app/models/ruta.model';
import { RutasService } from 'src/app/services/rutas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-ruta',
  templateUrl: './add-ruta.component.html',
  styleUrls: ['./add-ruta.component.css']
})
export class AddRutaComponent implements OnInit {

  ruta: RutaModel = new RutaModel();
  urlS: string[];
  idUser: string;
  constructor( private rutasService: RutasService) {
    var url = window.location.toString();
    this.urlS = url.split('/');
    this.idUser = this.urlS[4];  
   };

  ngOnInit(): void {
  }

  guardar( form: NgForm){

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

    if( this.ruta.id ){
      peticion = this.rutasService.actualizarRuta( this.ruta );
    } else {
      peticion = this.rutasService.crearRuta( this.ruta );
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.ruta.nombreRuta,
        text: 'Se actualizó',
        icon: 'success'
      });
    });
  }

}
