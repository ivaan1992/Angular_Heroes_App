import { Component, OnInit } from '@angular/core';
import { Publisher, Superhero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [
    `
    img {
      width: 80%;
      border-radius: 5px;
    }
    `
  ]
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
               private activatedRoute: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {

    if( !this.router.url.includes('edit') ) {
      return;
    }

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
      //Create hero

      this.heroesService.addHero( this.hero )
      .subscribe( hero => {
        this.router.navigate(['/heroes', hero.id]);
      });
    }
  }

  deleteHero() {
    this.heroesService.deleteHero( this.hero.id! )
    .subscribe( resp => {
      this.router.navigate(['/heroes'])
    })
  }
}
