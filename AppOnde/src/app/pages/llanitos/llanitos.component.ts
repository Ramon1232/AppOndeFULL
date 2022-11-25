import { Component, OnInit } from '@angular/core';
import { LlanitosModel } from 'src/app/models/llanitos.model';
import { LlanitosService } from 'src/app/services/llanitos.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-llanitos',
  templateUrl: './llanitos.component.html',
  styleUrls: ['./llanitos.component.css']
})
export class LlanitosComponent implements OnInit {

  destino!: LlanitosModel;
  llanitos1: LlanitosModel[] = [];
  urlS: string[];
  idUser: string;
  constructor(private llanitosService: LlanitosService) { 
    var url = window.location.toString();
    this.urlS = url.split('/');
    this.idUser = this.urlS[4];
  }

  ngOnInit(): void {

    this.llanitosService.getLlanitos()
      .subscribe( resp => 
        this.llanitos1 = resp);

  }

  eliminar(i: any){
    //console.log(this.progreso41[i]);    
    this.destino = this.llanitos1[i];
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
        
        peticion = this.llanitosService.eliminarDestino(this.destino);

        peticion.subscribe( resp => {
          Swal.fire({
            title: this.destino?.destinoLla,
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
