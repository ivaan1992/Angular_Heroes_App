import { Component, Input } from '@angular/core';
import { Superhero } from '../../interfaces/heroes.interfaces'

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [`
  mat-card {
    margin-top: 2rem;
    height: 80vh;
  }
  button {
    margin-top: 30px;
  }
  `
]
})
export class HeroCardComponent {

  @Input() hero!: Superhero;


}
