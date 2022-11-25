import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AllendeModel } from 'src/app/models/allende.model';
import { AllendeService } from 'src/app/services/allende.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allende-dest',
  templateUrl: './allende-dest.component.html',
  styleUrls: ['./allende-dest.component.css']
})
export class AllendeDestComponent implements OnInit {

  allendeDest: AllendeModel = new AllendeModel();
  urlS: string[];
  idUser: string;

  constructor( private allendeService: AllendeService, private router: Router) {
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

    if ( this.allendeDest.idAll ) {
      peticion = this.allendeService.actualizarAllende(this.allendeDest)
    } else{
      peticion = this.allendeService.crearAllende(this.allendeDest)
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.allendeDest.destinoAll,
        text: 'Se actualizó',
        icon: 'success'
      }).then((result) => {
        if(result.isConfirmed){
          this.router.navigate(['/allende/'+this.idUser]);   
        }            
      });
    });

  }

}
