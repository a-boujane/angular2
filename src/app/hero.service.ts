import { Injectable } from '@angular/core';

import { Hero } from './hero'
import { HEROES } from './mock-heroes'


@Injectable()
export class HeroService {
    id:number;
    constructor(){
        this.id=Math.random();
        console.log(this)
    }
    
    getHeroes(): Promise<Hero[]> {
        console.log("called getHeroes in the Service");
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly(): Promise<Hero[]> {
        console.log("called GetHeroesSlowly");
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000)
        });
    }
    getHero(id: number): Promise<Hero> {
        console.log("executing Get Hero by ID: "+ id);
        return this.getHeroes()
            .then(heroes => heroes.find(hero=>hero.id===id));
    }
}