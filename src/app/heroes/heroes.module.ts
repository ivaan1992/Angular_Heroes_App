import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@angular/core';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';




@NgModule({
  declarations: [
    AddHeroComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  exports: [
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
