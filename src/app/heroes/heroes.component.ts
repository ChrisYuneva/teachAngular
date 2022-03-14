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

  i: number=1;

  pic = [
    {k: '../../assets/1.jpg'},
    {k: '../../assets/2.jpg'},
    {k: '../../assets/3.jpg'},
    {k: '../../assets/4.jpg'},
  ]

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  test(): void {
    this.count++;
  }

  slide(): void {
    setTimeout(() => {
      // while (this.i < 4  ){
      //   this.i++
      // }
      for(this.i; this.i<4; this.i++) {
        console.log('jknj')
      }
    }, 0)


  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
