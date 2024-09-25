import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  //Llamamos alas rutas hijas para inicioSesion y Registro 
  {path:"InicioSessión",component:InicioSesionComponent,
  },
  {path:"Registro", component:RegistroComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }

