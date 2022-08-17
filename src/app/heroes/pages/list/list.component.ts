import { Component, OnInit } from '@angular/core';
import { Superhero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
    `
    mat-card {
      margin-top: 1rem;
    }
    `
  ]
})
export class ListComponent implements OnInit {
  heroes: Superhero[] = [];

  constructor( private heroesService: HeroesService ) { }

   ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe( heroes => {
      this.heroes = heroes
    });
  }
}
