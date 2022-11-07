import { Component, OnInit } from '@angular/core';
import { Hero } from '../common/hero';
import { HeroService } from '../../service/hero/hero.service';
import { HEROES } from '../common/mock-heroes';
import { MessageService } from 'src/service/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?:Hero;
  selectedArrayHero:Hero[]=[];
  //heroes = HEROES;
  heroes: Hero[] =[];
  hero:Hero = {
    id:1,
    name:'Windstorm'
  }

  // DJ via contructor
  constructor(private heroService:HeroService, private messageService:MessageService ) { }

  getHeroes(): void{

    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)

  }

  ngOnInit(): void {

    this.getHeroes();
    
  }
  onSelect(hero: Hero):void{

    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);

  }
  

}
