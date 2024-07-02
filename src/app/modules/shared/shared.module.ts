import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Angular Material 
import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
/*Incorporamos Angular Material */
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    //DECLARAMOS EL NAVBAR Y EL FOOTER
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    Component
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    Component
  ]
})
export class SharedModule { }
