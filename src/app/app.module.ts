import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { ListPrestarComponent } from './components/prestar/list-prestar/list-prestar.component';
import { ListLibroComponent } from './components/libro/list-libro/list-libro.component';
import { ListEjemplarComponent } from './components/ejemplar/list-ejemplar/list-ejemplar.component';
import { ListAutorComponent } from './components/autor/list-autor/list-autor.component';
import { CreateUsuarioComponent } from './components/usuario/create-usuario/create-usuario.component';
import { CreatePrestarComponent } from './components/prestar/create-prestar/create-prestar.component';
import { CreateLibroComponent } from './components/libro/create-libro/create-libro.component';
import { CreateEjemplarComponent } from './components/ejemplar/create-ejemplar/create-ejemplar.component';
import { CreateAutorComponent } from './components/autor/create-autor/create-autor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListUsuarioComponent,
    ListPrestarComponent,
    ListLibroComponent,
    ListEjemplarComponent,
    ListAutorComponent,
    CreateUsuarioComponent,
    CreatePrestarComponent,
    CreateLibroComponent,
    CreateEjemplarComponent,
    CreateAutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
