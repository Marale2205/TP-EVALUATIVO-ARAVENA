import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import {Pedido} from '../../../../models/pedido'
import { AuthService } from '../../../autentificacion/services/authservice.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
coleccionPedidos:Pedido[]=[];

constructor(
  public servicioCarrito:CarritoService,
  public servicioAuht:AuthService
){}
ngOnInit(){
  this.servicioAuht.obtenerUid().then(uid=>{
    if(uid){
      this.servicioAuht.obtenerRol(uid).subscribe(rol=>{
        if(rol === 'usuario'){
          this.servicioCarrito.iniciarCarrito();
          this.servicioCarrito.obtenerCarrito().subscribe(producto=>
            this.coleccionPedidos=producto
            )
        }else{
          console.error('No se obtuvieron el usuario de manera correcta')
        }
      })
    }
  })
}

quitarPedido(pedido:Pedido){
  this.servicioCarrito.borrarPedido(pedido);
}
}
