import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';
//import { ToastrService } from 'ngx-toastr';
import { MapCustomService } from 'src/app/services/map-custom.service';
import * as ruta  from '../../../Rutas/ruta.json' ;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{
  @ViewChild ('myNameElem') myNameElem!: ElementRef;

  constructor (private mapCustomService: MapCustomService, private socket:Socket) {
    
  }

  ngOnInit(): void {
    this.mapCustomService.buildMap()
    .then((data) => {
      console.log('*** TODO BIEN *****');
    })
    .catch((err) => {
      console.log('******* ERROR ******', err);
    });

    this.socket.fromEvent('position')
      .subscribe((coords: any) => {
       // console.log('******* DESDE SERVER ****', coords);
        this.mapCustomService.addMarkerCustom(coords);
      })
  }

  drawRoute(): void{

    const rutaAux = ruta

    //console.log('***puntos de origen y destino', this.myNameElem.nativeElement.value)
    
    // console.log(!!this.mapCustomService.isDraw())
        this.mapCustomService.isDraw();
          switch(this.myNameElem.nativeElement.value){
            case "none":
              break;
            case "rutaInsurgentes":
              this.mapCustomService.loadCoords(rutaAux.rutaInsurgentes);
              //this.mapCustomService.emitirLocalizacion(rutaAux.rutaInsurgentes);
              break;
            case "rutaAllende":
              this.mapCustomService.loadCoords(rutaAux.rutaAllende);
              break;
            case "rutaMexico":
              this.mapCustomService.loadCoords(rutaAux.rutaMexico);
              break;
            case "rutaBellavista":
              this.mapCustomService.loadCoords(rutaAux.rutaBellavista);
              break;
            case "rutaProgeso5":
              this.mapCustomService.loadCoords(rutaAux.rutaProgreso5);
              break;  
            default:
              break;
          }
  
   // this.mapCustomService.loadCoords();
  }

  testBorrar(): void{
    //this.mapCustomService.borraMarcador();
    this.mapCustomService.borrarLayer();
  }

  /*
  testMarker(): void {
    this.mapCustomService.addMarkerCustom([-104.85582547944031, 21.473295482907613]);
    //this.mapCustomService.radioMarcador();
  }*/

  
  testLocalizacion(){
    this.mapCustomService.obtenerLocalizacion();
  }
  

  
}