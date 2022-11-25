import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import {UsuarioComponent} from './pages/usuario/usuario.component'
import {RutasComponent} from './pages/rutas/rutas.component'
import {CrudComponent} from './pages/crud/crud.component'
import {CuentaComponent} from './pages/cuenta/cuenta.component'
import {DesarrolladoresComponent} from './pages/desarrolladores/desarrolladores.component'
import { Progreso4Component } from './pages/progreso4/progreso4.component';
import { LlanitosComponent } from './pages/llanitos/llanitos.component';
import { AllendeComponent } from './pages/allende/allende.component';
import { Progreso4DestComponent } from './pages/progreso4-dest/progreso4-dest.component';
import { LlanitosDestComponent } from './pages/llanitos-dest/llanitos-dest.component';
import { AllendeDestComponent } from './pages/allende-dest/allende-dest.component';
import { AddRutaComponent } from './pages/add-ruta/add-ruta.component';
import { PrincipalComponent } from './pages/principal/principal.component'

const routes: Routes = [
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'crud/:id', component: CrudComponent },
  { path: 'rutas/:id', component: RutasComponent },
  { path: 'cuenta/:id', component: CuentaComponent },
  { path: 'desarrolladores/:id', component: DesarrolladoresComponent },
  { path: 'progreso4/:id', component: Progreso4Component},
  { path: 'progreso4Dest/:id', component: Progreso4DestComponent},
  { path: 'llanitos/:id', component: LlanitosComponent},
  { path: 'llanitosDest/:id', component: LlanitosDestComponent},
  { path: 'allende/:id', component: AllendeComponent},
  { path: 'allendeDest/:id', component: AllendeDestComponent},
  { path: 'add-ruta/:id', component: AddRutaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }

];
@NgModule({  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
