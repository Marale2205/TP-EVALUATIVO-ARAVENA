import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  {
    //La ruta de  inicialización el Inicio 
    path: "", component: InicioComponent
  },
  {
    //La ruta  que vincula la  inicializa del inicio con todo su contenido y una carga peresosa, y  
    //Las cuales nos  llevaran alas rutas hijas del modulo con sus repectivas hijas 
    path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
