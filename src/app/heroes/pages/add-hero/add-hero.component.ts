import { Component, OnInit } from '@angular/core';
import { Publisher, Superhero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: []
})
export class AddHeroComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC -Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },

  ];

  hero: Superhero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  saveInfo() {

    if( this.hero.superhero.trim().length === 0 ) {
      return;
    }


    this.heroesService.addHero( this.hero )
    .subscribe( resp => {
      console.log( 'ans', resp );
    })
  }

}
