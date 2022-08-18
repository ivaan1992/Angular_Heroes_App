import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Superhero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`
    .minimum {
      width: 50%;
    }
  `

  ]
})
export class SearchComponent implements OnInit {

  term: string = '';
  heroes: Superhero[] = [];
  heroSelected: Superhero | undefined ;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  search() {

    this.heroesService.getSuggestions( this.term )
    .subscribe( heroes => this.heroes = heroes );
  }

  optionSelected( event: MatAutocompleteSelectedEvent ) {
    if( !event.option.value ) {
      this.heroSelected = undefined;
      return;
    }

    const hero: Superhero = event.option.value;
    this.term = hero.superhero;

    this.heroesService.getHeroById( hero.id! )
    .subscribe( hero => this.heroSelected = hero )
  }

}
