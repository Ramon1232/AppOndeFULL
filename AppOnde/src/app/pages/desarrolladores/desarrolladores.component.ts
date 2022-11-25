import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desarrolladores',
  templateUrl: './desarrolladores.component.html',
  styleUrls: ['./desarrolladores.component.css']
})
export class DesarrolladoresComponent implements OnInit {

  urlS: string[];
  idUser: string;

  constructor() {
    var url = window.location.toString();
    this.urlS = url.split('/');
    this.idUser = this.urlS[4];  
   }

  ngOnInit(): void {
  }

}
