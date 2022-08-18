import { Component, OnInit } from '@angular/core';
import { Publisher, Superhero } from '../../interfaces/heroes.interfaces';

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

  constructor() { }

  ngOnInit(): void {
  }

}
