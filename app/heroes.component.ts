import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


@Component({
	selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router, 
    private heroService: HeroService) { 
  }
  
  ngOnInit() {
	this.getHeroes();
  }
  
  getHeroes() {
	//this.heroes = this.heroService.getHeroes();
	this.heroService.getHeroes().then(Heroes => this.heroes = Heroes);
	//this.heroService.getHeroesSlowly().then(Heroes => this.heroes = Heroes);
  }
  
  onSelect(hero: Hero) { this.selectedHero = hero; }
  
  gotoDetail(hero: Hero) {
    let link = ['/detail', this.selectedHero.id];
    this.router.navigate(link);
  }
  
}
