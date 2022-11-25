import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LlanitosModel } from 'src/app/models/llanitos.model';
import { LlanitosService } from 'src/app/services/llanitos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-llanitos-dest',
  templateUrl: './llanitos-dest.component.html',
  styleUrls: ['./llanitos-dest.component.css']
})
export class LlanitosDestComponent implements OnInit {

  llanitosDest: LlanitosModel = new LlanitosModel();
  urlS: string[];
  idUser: string;
  
  constructor( private llanitosService: LlanitosService, private router: Router) {
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

    if ( this.llanitosDest.idLla ) {
      peticion = this.llanitosService.actualizarLlanitos(this.llanitosDest)
    } else{
      peticion = this.llanitosService.crearLlanitos(this.llanitosDest)
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.llanitosDest.destinoLla,
        text: 'Se actualizó',
        icon: 'success'
      }).then((result) => {
        if(result.isConfirmed){
          this.router.navigate(['/llanitos/'+this.idUser]);   
        }            
      });
    });

  }

}
