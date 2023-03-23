import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Components/agregar/agregar.component';
import { EditarComponent } from './Components/editar/editar.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ListadoComponent } from './Components/listado/listado.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},

  {path:'inicio', component:InicioComponent},
  {path:'listado', component:ListadoComponent},
  {path:'editar/:id', component: EditarComponent},
  {path:'agregar', component:AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
