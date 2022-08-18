import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superhero } from '../interfaces/heroes.interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl

  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>( `${this.baseUrl}/heroes` );
  }

  getHeroById( id: string ): Observable<Superhero> {
    return this.http.get<Superhero>( ` ${this.baseUrl}/heroes/${ id }` );
  }

  getSuggestions( term: string ): Observable<Superhero[]> {
    return this.http.get<Superhero[]>( `${this.baseUrl}/heroes?q=${ term }&_limit=5` );
  }

  addHero( hero: Superhero ): Observable<Superhero> {
    return this.http.post<Superhero>( `${ this.baseUrl }/heroes`, hero );
  }

  updateHero( hero: Superhero ): Observable<Superhero> {
    return this.http.put<Superhero>( `${ this.baseUrl }/heroes/${ hero.id }`, hero );
  }

  deleteHero(id: string ): Observable<any> {
    return this.http.delete<any>( `${ this.baseUrl }/heroes/${ id }` );
  }


}
