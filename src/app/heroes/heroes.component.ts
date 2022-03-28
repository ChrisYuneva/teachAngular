import {Component, OnInit} from '@angular/core';

import {Hero} from "../hero";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  count: number=0;

  i: number=0;

  pic = [
    '../../assets/1.jpg',
    '../../assets/2.jpg',
   '../../assets/3.jpg',
  '../../assets/4.jpg',
  ]

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  test(): void {
    this.count++;
  }

  slide(): void {
    this.i++;
    if(this.i > this.pic.length-1) {
      this.i = 0;
    }
  }

  slideB(): void {
    this.i--;
    if(this.i < 0) {
      this.i = this.pic.length-1;
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
