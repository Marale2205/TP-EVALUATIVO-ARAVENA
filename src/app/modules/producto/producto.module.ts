import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { EleganteComponent } from './pages/estilos/elegante/elegante.component';
import { OtonoComponent } from './pages/estaciones/otono/otono.component';
import { InviernoComponent } from './pages/estaciones/invierno/invierno.component';

import { UrbanoComponent } from './pages/estilos/urbano/urbano.component';
import { VeranoComponent } from './pages/estaciones/verano/verano.component';
import { PrimaveraComponent } from './pages/estaciones/primavera/primavera.component';
//ANGULAR MATERIAL  
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import{CardInviernoComponent} from '../producto/components/card-invierno/card-invierno.component'
@NgModule({
  declarations: [
    EleganteComponent,
    OtonoComponent,
    InviernoComponent,
    VeranoComponent,
    UrbanoComponent,
    PrimaveraComponent,
    CardInviernoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatCardModule,
    MatButtonModule

  ],
  exports:[
    //componentes para las vistas en el menu despegable,
    //el cual estan separados por carpteas y sus componetes para las vitas 
    EleganteComponent,
    OtonoComponent,
    InviernoComponent,
    UrbanoComponent,
    VeranoComponent,
    PrimaveraComponent,
    MatCardModule,
    MatButtonModule,
    CardInviernoComponent
  ]
})
export class ProductoModule { }
