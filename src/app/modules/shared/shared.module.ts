import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Angular Material 
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
/*Incorporamos Angular Material */
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatCardModule} from '@angular/material/card';
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
    AppRoutingModule,
    MatCardModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule

  ]
})
export class SharedModule { }
