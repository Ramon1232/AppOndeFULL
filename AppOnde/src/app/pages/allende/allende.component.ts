import { Component, OnInit } from '@angular/core';
import { AllendeModel } from 'src/app/models/allende.model';
import { AllendeService } from 'src/app/services/allende.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allende',
  templateUrl: './allende.component.html',
  styleUrls: ['./allende.component.css']
})
export class AllendeComponent implements OnInit {

  destino!: AllendeModel;
  allende1: AllendeModel[] = [];
  urlS: string[];
  idUser: string; 
  constructor(private allendeService: AllendeService) { 
    var url = window.location.toString();
    this.urlS = url.split('/');
    this.idUser = this.urlS[4];    
  }

  ngOnInit(): void {

    this.allendeService.getAllende()
      .subscribe( resp => 
        this.allende1 = resp);

  }

  eliminar(i: any){
    //console.log(this.progreso41[i]);    
    this.destino = this.allende1[i];
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
        
        peticion = this.allendeService.eliminarDestino(this.destino);

        peticion.subscribe( resp => {
          Swal.fire({
            title: this.destino.destinoAll,
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
