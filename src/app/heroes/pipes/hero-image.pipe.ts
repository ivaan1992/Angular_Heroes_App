import { Pipe, PipeTransform } from '@angular/core';
import { Superhero } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform( hero: Superhero ): string {
    return `assets/heroes/${ hero.id }.jpg`;
  }

}
