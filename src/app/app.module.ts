import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './Components/listado/listado.component';
import { EditarComponent } from './Components/editar/editar.component';
import { AgregarComponent } from './Components/agregar/agregar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './Components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    EditarComponent,
    AgregarComponent,
    NavbarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
