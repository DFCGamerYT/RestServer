import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styles: []
})
export class CrearComponent implements OnInit {

  public persona:any = {};

  constructor(private _personaService: PersonaService, private router: Router) {
    this.persona.estado = 0;
    this.persona.genero = 0;
  }

  ngOnInit() {
  }
  actualizar(){
    this._personaService.savePersona(this.persona).subscribe(
      this.setNavergar.bind(this),
      this.setError.bind(this)
    )
  }

  setNavergar(data: any){
    this.router.navigate(['persona']);
  }

  setError(data: any){
    console.log(data);
  }
}
