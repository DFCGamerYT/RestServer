import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { PersonaService } from '../services/persona.service';
import { Persona } from '../models/persona';

import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styles: []
})
export class ModificarComponent implements OnInit {

  public persona:Persona = new Persona();
  public id: any;

  constructor(private route:  ActivatedRoute, private _personaService: PersonaService, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');
    this._personaService.getPersonaById(this.id).subscribe(
      this.setPersona.bind(this),
      this.setError.bind(this)
    )
  }

  actualizar(){
    console.log(this.persona);
    this._personaService.updatePersona(this.id,this.persona).subscribe(
    this.getlistar.bind(this),
    this.setError.bind(this)
    )
  }
  setPersona(data: Persona){   
    this.persona = data;
  }
  setError(data: any){
    console.log(data);
  }

  getlistar(data:any){
    this.router.navigate(['persona']);
  }
}
