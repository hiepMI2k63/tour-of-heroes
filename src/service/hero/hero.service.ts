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

 getHeroes(): Observable<Hero[]> {
  this.messageService.add('HeroService: fetched heroes');
  return of(HEROES);;
}



getHero(id: number): Observable<Hero> {
  // For now, assume that a hero with the specified `id` always exists.
  // Error handling will be added in the next step of the tutorial.
  const hero = HEROES.find(h => h.id === id)!;
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(hero);
}


}
