import { Injectable } from '@angular/core';

import { Observable } from '../../../../node_modules/rxjs';
import { Persona } from '../models/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private API_URL: string = "http://localhost:3000/persona";

  constructor(private http: HttpClient) { }

  public getPersonaList(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.API_URL);
  }

  public getPersonaById(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.API_URL + '/' +id);
  }

  public savePersona(persona: Persona): Observable<any>{
    return this.http.post(this.API_URL, persona);
  }

  public deletePersona(id: number): Observable<any>{
    return this.http.delete(this.API_URL+ '/' +id);
  }

  public updatePersona(id: number, persona:Persona): Observable<any>{
    return this.http.put(this.API_URL+ '/' +id, persona);
  }
}
