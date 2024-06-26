import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
   //Esta ruta vacia es para que nos muestre la misma ruta Inicio 
    path:"",component:InicioComponent
  },
  {
     //Agregamos la ruta para el componente Inicio
    path:"Inicio",component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
