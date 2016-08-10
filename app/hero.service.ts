import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes() {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  private handleError(error: any) {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

  
  /* asych mocker
    getHeroesSlowly(){
		return new Promise<Hero[]>(resolve => 
			setTimeout(() => resolve(HEROES), 4000)); //2 seconds
	}*/

	getHero(id: number) {
		return this.getHeroes()
			.then(heroes => heroes.find(hero => hero.id === id));
    }

}
