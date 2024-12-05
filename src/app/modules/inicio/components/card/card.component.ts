import { Component } from '@angular/core';
import { Tarjeta } from 'src/app/models/tarjeta';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public tarjeta: Tarjeta[];
  constructor() {
    this.tarjeta = [
      {
        id: "1",
        titulo: "Ropa de Invierno",
        imagen: "../../../../../assets/imagenes/invierno/3.png ",
        alt: "Ropa de invierno juvenil",
        categoria: "invierno",
        enlace: "../../../../../assets/imagenes/invierno/3.png "
      },
      {
        id: "2",
        titulo: "Ropa de Verano",
        imagen: "../../../../../assets/imagenes/verano/8.png",
        alt: "Ropa de Verano juvenil",
        categoria: "verano",
        enlace: "../../../../../assets/imagenes/verano/8.png"
      },
      {
        id: "3",
        titulo: "Ropa Formal",
        imagen:"../../../../../assets/imagenes/formal/5.png",
        alt: "Ropa de sastre para distintos eventos ",
        categoria: "formal",
        enlace: "../../../../../assets/imagenes/formal/5.png"
      },
    ]
  }

}
