import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InviernoComponent } from './pages/estaciones/invierno/invierno.component';
import { OtonoComponent } from './pages/estaciones/otono/otono.component';
import { PrimaveraComponent } from './pages/estaciones/primavera/primavera.component';
import { VeranoComponent } from './pages/estaciones/verano/verano.component';
import { EleganteComponent } from './pages/estilos/elegante/elegante.component';
import { UrbanoComponent } from './pages/estilos/urbano/urbano.component';

const routes: Routes = [
  //rutas hijas son las que llamo para verlas en la vistas
  {
    path:"urbano",component:UrbanoComponent
  },
  {
    path:"elegante",component:EleganteComponent
  },
  {
    path:"invierno",component:InviernoComponent
  },
  {
    path:"otono",component:OtonoComponent
  },
  {
    path:"verano",component:VeranoComponent
  },
  {
    path:"primavera",component:PrimaveraComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
