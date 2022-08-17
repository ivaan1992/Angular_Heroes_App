import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superhero } from '../interfaces/heroes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {


  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>( 'http://localhost:3000/heroes' );
  }
}
