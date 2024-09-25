import { Component } from '@angular/core';
import { Carrusel } from 'src/app/models/carrusel';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  public producto:Carrusel[]

  constructor(){
    this.producto=[
      {
      img:"../../../../../assets/imagenes/1.png",
      alt:"Campera +  shin"
      },
      {
        img:"../../../../../assets/imagenes/2.png",
        alt:"Pulover + shin"
      },
      {
        img:"../../../../../assets/imagenes/3.png",
        alt:"Pulover + top + shin "
      },
      {
        img:"../../../../../assets/imagenes/4.png",
        alt:"Saco Largo + pantalon de sastre"
      },
      {
        img:"../../../../../assets/imagenes/5.png",
        alt:"Top de lenceria + conjunto blaco"
      },
      {
        img:"../../../../../assets/imagenes/6.png",
        alt:"Prenda negra con cartera + pantalon de sastre"
      },{
        img:"../../../../../assets/imagenes/7.png",
        alt:"Sueter color verde + shin"
      },{
        img:"../../../../../assets/imagenes/8.png",
        alt:"Conjunto de verano color verde"
      },{
        img:"../../../../../assets/imagenes/9.png",
        alt:"Vestido blacon con flores"
      },{
        img:"../../../../../assets/imagenes/10.png",
        alt:""
      },{
        img:"../../../../../assets/imagenes/11.png",
        alt:"Conjutno de vestir + top blanco"
      },{
        img:"../../../../../assets/imagenes/12.png",
        alt:"Remera top de Morley"
      },{
        img:"../../../../../assets/imagenes/13.png",
        alt:"Bolso negro con blusa negra + shin beige"
      }
      
  ]
  }

}
