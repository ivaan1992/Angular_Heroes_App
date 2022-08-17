import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Superhero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: []
})
export class HeroComponent implements OnInit {

  hero!: Superhero
  constructor( private activatedRouter: ActivatedRoute,
               private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.activatedRouter.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroById( id ) )
    ).subscribe( hero => this.hero = hero );
  }

}
