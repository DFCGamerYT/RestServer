import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//HTTP
import { HttpClientModule } from '@angular/common/http';
import { PersonaComponent } from './persona/persona.component';
import { CrearComponent } from './persona/crear/crear.component';
import { ModificarComponent } from './persona/modificar/modificar.component';
import { GeneroPipe } from './persona/pipes/genero.pipe';
import { EstadoPipe } from './persona/pipes/estado.pipe';

//FORMS
import { FormsModule } from '@angular/forms';
import { PeliculaComponent } from './pelicula/pelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    ModificarComponent,
    PersonaComponent,
    GeneroPipe,
    EstadoPipe,
    PeliculaComponent
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
