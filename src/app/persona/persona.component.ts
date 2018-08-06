import { Component, OnInit } from '@angular/core';
import { PersonaService } from './services/persona.service';
import { Persona } from './models/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: []
})
export class PersonaComponent implements OnInit {

  public personas:Array<Persona>;

  constructor(private _personaService: PersonaService) { }

  ngOnInit() {
    this._personaService.getPersonaList().subscribe(
      this.setPersona.bind(this),
      this.setError.bind(this)
    )
  }

  setPersona(data: Array<Persona>){
    this.personas = data;
  }

  setError(data: any){
    console.log(data);
  }

  eliminar(id: number){
    console.log(id);
    this._personaService.deletePersona(id).subscribe(
      this.setError.bind(this)
    )
  }
}
