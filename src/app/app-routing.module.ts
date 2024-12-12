import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { rutaProtegidaGuard } from './guards/ruta-protegida.guard';

const routes: Routes = [
  {
    //La ruta de  inicialización el Inicio 
    path: "", component: InicioComponent
  },
  {
    path:"",loadChildren:() =>import('./modules/producto/producto.module'). then(m=> m.ProductoModule) },
  {
    //La ruta  que vincula la  inicializa del inicio con todo su contenido y una carga peresosa, y  
    //Las cuales nos  llevaran alas rutas hijas del modulo con sus repectivas hijas 
    path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  //Caraga peresosa para autenificacion 
  {path:"", loadChildren:()=> import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)

  },
  {
    path:"",loadChildren:()=> import('./modules/carrito/carrito.module').then(m=>m.CarritoModule)
  },
  {
    path:"",loadChildren:()=> import('./modules/admin/admin.module').then(m=>m.AdminModule),
    
    // Definimos al guardian que proteja la ruta de Admin y que espere un rol de tipo "admin"
    canActivate:[rutaProtegidaGuard],data:{rol:'admin'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
