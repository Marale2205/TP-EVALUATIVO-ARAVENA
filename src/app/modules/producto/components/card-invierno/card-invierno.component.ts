import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-invierno',
  templateUrl: './card-invierno.component.html',
  styleUrls: ['./card-invierno.component.css']
})
export class CardInviernoComponent {
  // Colección de todos los productos de forma local
  coleccionProductos: Producto[] = [];

  // Colección de productos de una sola categoría
  coleccionInvierno: Producto[] = [];

  // Variable para seleccionar productos específicos
  productoSeleccionado!: Producto;

  // Variable para manejar estado del modal
  modalVisible: boolean = false;

  // Patentamos de forma local el servicio para acceder en él
  constructor(public servicioCrud: CrudService){}

  // Inicializa al momento que renderiza el componente
  ngOnInit(): void{
    // Accedemos a método 'obtenerProducto' y nos subscribimos a los cambios
    // recibimos notificación ante modificaciones
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      // Mostrará la colección de esa categoría hasta el momento
      this.mostrarProductoInvierno();
    })
  }

  mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoSeleccionado = info;
  }

  // Función para filtrar los productos de tipo "alimentación"
  mostrarProductoInvierno(){
    // Iteramos colección de productos con un 'forEach'
    this.coleccionProductos.forEach(producto => {
      // Si es de tipo "alimentación" -> condicional
      if(producto.categoria === "invierno"){
        // Lo sube/ guarda en la colección de productos de tipo "alimentación"
        this.coleccionInvierno.push(producto);
      }
    })
  }
  mensajeReparacion() {
    alert("¡Opps! ocurrio un problema")
  }
}
