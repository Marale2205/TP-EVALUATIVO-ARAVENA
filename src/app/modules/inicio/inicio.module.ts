import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
//Angular Material 
import {MatToolbarModule} from '@angular/material/toolbar';

/*Incorporamos Angular Material */
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    InicioComponent,
    CarruselComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule
  ],
  exports:[
    InicioComponent,
    CarruselComponent,
    CardComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule
  ]
})
export class InicioModule { }
