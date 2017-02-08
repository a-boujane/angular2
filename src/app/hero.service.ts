import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Hero } from './hero'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    id:number;
    private heroesUrl='api/heroes';

    constructor(private http:Http){}
    
    
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(reponse=>reponse.json().data as Hero[])
            .catch(this.handleError);
    }

private handleError(error:any): Promise<any>{
    console.error("An error occurec",error);
    return Promise.reject(error.message ||error);
}

    getHeroesSlowly(): Promise<Hero[]> {
        console.log("called GetHeroesSlowly");
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000)
        });
    }
    getHero(id: number): Promise<Hero> {
        const url= `${this.heroesUrl}/${id}`;
        console.log("executing Get Hero by ID: "+ id);
        return this.http.get(url)
        .toPromise()
        .then(resp=>resp.json().data as Hero)
        .catch(this.handleError);
    }
}