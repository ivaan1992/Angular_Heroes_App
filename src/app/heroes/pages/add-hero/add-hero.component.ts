import { Component, OnInit } from '@angular/core';
import { Publisher, Superhero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

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

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe (
      switchMap( ({ id }) => this.heroesService.getHeroById( id ) )
    )
    .subscribe( ( hero => this.hero = hero ) );


  }

  saveInfo() {

    if( this.hero.superhero.trim().length === 0 ) {
      return;
    }

    if( this.hero.id ) {
      //Update hero

      this.heroesService.updateHero( this.hero )
      .subscribe( hero => console.log( 'Updating:', hero ) )
    } else {
      this.heroesService.addHero( this.hero )
      .subscribe( resp => {
        console.log( 'Answer:', resp )
      });
    }
  }
}
