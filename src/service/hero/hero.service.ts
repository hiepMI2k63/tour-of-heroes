import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../app/common/hero';
import { HEROES } from '../../app/common/mock-heroes';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 // DJ via contructor
 constructor(private messageService: MessageService) { }

  getHeroes():Observable<Hero[]>{

    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
    
  }
 

}
