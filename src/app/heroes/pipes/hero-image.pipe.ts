import { Pipe, PipeTransform } from '@angular/core';
import { Superhero } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform( hero: Superhero ): string {

    if( !hero.id && !hero.alt_img ) {
      return 'assets/no-image.png'
    } else if ( hero.alt_img ) {
      return hero.alt_img;
    } else {
      return `assets/heroes/${ hero.id }.jpg`;
    }
  }

}
