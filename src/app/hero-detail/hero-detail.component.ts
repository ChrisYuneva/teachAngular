import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    //ActivatedRoute содержит инорфмацию о маршруте к этому экземпляру HeroDetailComponent. Этому компоненту интересен список параметров маршрута, выделенных из URL. Параметр "id" - id отображаемого героя.
    private route: ActivatedRoute,
    // HeroService получает информацию о герое с удаленного сервера, и HeroDetailComponent будет использовать его для получения героя для отображения.
    private heroService: HeroService,
    // location - это сервис фреймворка Angular для взаимодействия с браузером. Мы обратимся к ней позднее для возврата к тому виду, из которому мы пришли.
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const param = this.route.snapshot.paramMap.get('id')
    if(param) {
      const id = +param;
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const test = this.hero;
    if(test) {
      this.heroService.updateHero(test)
        .subscribe(() => this.goBack());
    }

  }
}
