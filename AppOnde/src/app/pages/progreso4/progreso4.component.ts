import { Component, OnInit } from '@angular/core';
import { Progreso4Model } from 'src/app/models/progreso4.model';
import { Progreso4Service } from 'src/app/services/progreso4.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progreso4',
  templateUrl: './progreso4.component.html',
  styleUrls: ['./progreso4.component.css']
})
export class Progreso4Component implements OnInit {
  
  destino!: Progreso4Model;
  progreso41: Progreso4Model[] = [];
  urlS: string[];
  idUser: string;

  constructor( private progreso4Service: Progreso4Service, private router: Router) {    
    var url = window.location.toString();    
    this.urlS = url.split('/');
    this.idUser = this.urlS[4];    
   }

  ngOnInit(): void {

    this.progreso4Service.getProgreso4()
      .subscribe( resp => 
        this.progreso41 = resp);
  }

  eliminar(i: any){
    //console.log(this.progreso41[i]);    
    this.destino = this.progreso41[i];
    Swal.fire({
      title: '¿Seguro que quieres eliminar este registro?',
      showDenyButton: true,            
      denyButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Destino eliminado', '', 'success')
        
        let peticion: Observable<any>;
        
        peticion = this.progreso4Service.eliminarDestino(this.destino);

        peticion.subscribe( resp => {
          Swal.fire({
            title: this.destino?.destinoDP4,
            text: 'Destino eliminado correctamente',
            icon: 'success'        
          }).then((result) => {
            if(result.isConfirmed){
              location.reload(); 
            }                       
          })
        });
      }
    });
  }
}
