import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { CrudComponent } from './pages/crud/crud.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { DesarrolladoresComponent } from './pages/desarrolladores/desarrolladores.component';
import { AllendeComponent } from './pages/allende/allende.component';
import { AllendeDestComponent } from './pages/allende-dest/allende-dest.component';
import { LlanitosComponent } from './pages/llanitos/llanitos.component';
import { LlanitosDestComponent } from './pages/llanitos-dest/llanitos-dest.component';
import { Progreso4Component } from './pages/progreso4/progreso4.component';
import { Progreso4DestComponent } from './pages/progreso4-dest/progreso4-dest.component';
import { AddRutaComponent } from './pages/add-ruta/add-ruta.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ToastrModule } from 'ngx-toastr';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { HorarioAllendeComponent } from './pages/horario-allende/horario-allende.component';
import { HorarioComponent } from './pages/horario/horario.component';
import { HorarioInsurgentesComponent } from './pages/horario-insurgentes/horario-insurgentes.component';
import { HorarioLlanitosComponent } from './pages/horario-llanitos/horario-llanitos.component';
//import { ToastrModule } from 'ngx-toastr';


const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    CrudComponent,
    RutasComponent,
    CuentaComponent,
    DesarrolladoresComponent,
    AllendeComponent,
    AllendeDestComponent,
    LlanitosComponent,
    LlanitosDestComponent,
    Progreso4Component,
    Progreso4DestComponent,
    AddRutaComponent,
    PrincipalComponent,
    HorariosComponent,
    HorarioAllendeComponent,
    HorarioComponent,
    HorarioInsurgentesComponent,
    HorarioLlanitosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
