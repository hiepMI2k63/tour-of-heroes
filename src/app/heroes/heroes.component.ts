import { Component, Injectable, OnInit } from '@angular/core';
import { Hero } from '../common/hero';
import { HeroService } from '../../service/hero/hero.service';
import { HEROES } from '../common/mock-heroes';
import { MessageService } from 'src/service/message/message.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] =[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }


}
