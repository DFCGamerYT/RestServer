import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { ModificarComponent } from './persona/modificar/modificar.component';
import { CrearComponent } from './persona/crear/crear.component';

const routes: Routes = [
  {path:'persona', component: PersonaComponent},
  {path:'persona/:id/modificar', component: ModificarComponent},
  {path:'crear', component: CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
