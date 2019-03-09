import { Component, OnInit } from '@angular/core';
import {Hero}  from '../hero';
import {HEROES} from '../mock-heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // hero :Hero={
  //   id:1,
  //   name:"furqan",
  // }
  heroes=HEROES;
  selectedHero:Hero;
  constructor() { }

  ngOnInit() {
  }
  selectHero(hero){
    this.selectedHero=hero;
    console.log('selected hero',hero)
  }
}
