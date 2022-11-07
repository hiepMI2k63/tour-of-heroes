import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../common/hero';
import { Location } from '@angular/common';
import { HeroService } from 'src/service/hero/hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero| undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {

    console.log("in detail");

    this.getHero();
  }

 // return void cha hop ly thuc ra return hero
  getHero(): void {

    // Request// get id product
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log( this.route.snapshot);

    // find product in database
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
      console.log(this.hero);
  }

  goBack(): void {
    this.location.back();
  }
}
