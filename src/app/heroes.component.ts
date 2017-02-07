import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core'

@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl:'./heroes.component.html',
  styleUrls:['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  title: string = 'Tour of Heros';
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit():void{
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
