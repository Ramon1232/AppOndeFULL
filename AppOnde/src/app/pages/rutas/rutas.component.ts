import { Component, OnInit } from '@angular/core';
import { RutaModel } from 'src/app/models/ruta.model';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  rutas: RutaModel[] = [];
  urlS: string[];
  idUser: string;
  constructor(private rutasService: RutasService) {
    var url = window.location.toString();
    this.urlS = url.split('/');
    this.idUser = this.urlS[4];    
  }

  ngOnInit(): void {    
    this.rutasService.getRutas()
      .subscribe( resp => this.rutas = resp);
  }

}
