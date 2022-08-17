import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Superhero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
    margin-top: 1rem;
  }
  `
  ]
})
export class HeroComponent implements OnInit {

  hero!: Superhero
  constructor( private activatedRouter: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router) { }

  ngOnInit(): void {

    this.activatedRouter.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroById( id ) )
    ).subscribe( hero => this.hero = hero );
  }

  backToList() {
    this.router.navigate(['/heroes/list']);
  }
}
