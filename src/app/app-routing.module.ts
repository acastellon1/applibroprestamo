import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { ListPrestarComponent } from './components/prestar/list-prestar/list-prestar.component';
import { ListLibroComponent } from './components/libro/list-libro/list-libro.component'; 
import { ListEjemplarComponent } from './components/ejemplar/list-ejemplar/list-ejemplar.component'; 
import { ListAutorComponent } from './components/autor/list-autor/list-autor.component';  

const routes: Routes = [

  {
    path: "usuario",
    component: ListUsuarioComponent
  },

  {
    path: "prestar",
    component: ListPrestarComponent
  },

  {
    path: "libro",
    component: ListLibroComponent
  },

  {
    path: "ejemplar",
    component: ListEjemplarComponent
  },

  {
    path: "autor",
    component: ListAutorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
