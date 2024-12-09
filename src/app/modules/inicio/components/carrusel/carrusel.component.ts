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
      img:"../../../../../assets/imagenes/invierno/1.png",
      alt:"Campera +  shin"
      },
      {
        img:"../../../../../assets/imagenes/invierno/2.png",
        alt:"Pulover + shin"
      },
      {
        img:"../../../../../assets/imagenes/invierno/3.png",
        alt:"Pulover + top + shin "
      },
      {
        img:"../../../../../assets/imagenes/formal/4.png",
        alt:"Saco Largo + pantalon de sastre"
      },
      {
        img:"../../../../../assets/imagenes/formal/5.png",
        alt:"Top de lenceria + conjunto blaco"
      },
      {
        img:"../../../../../assets/imagenes/formal/6.png",
        alt:"Prenda negra con cartera + pantalon de sastre"
      },{
        img:"../../../../../assets/imagenes/invierno/7.png",
        alt:"Sueter color verde + shin"
      },{
        img:"../../../../../assets/imagenes/verano/8.png",
        alt:"Conjunto de verano color verde"
      },{
        img:"../../../../../assets/imagenes/verano/9.png",
        alt:"Vestido blacon con flores"
      },{
        img:"../../../../../assets/imagenes/verano/10.png",
        alt:""
      },{
        img:"../../../../../assets/imagenes/verano/11.png",
        alt:"Conjutno de vestir + top blanco"
      },{
        img:"../../../../../assets/imagenes/formal/12.png",
        alt:"Remera top de Morley"
      },{
        img:"../../../../../assets/imagenes/formal/13.png",
        alt:"Bolso negro con blusa negra + shin beige"
      }
      
  ]
  }

}
