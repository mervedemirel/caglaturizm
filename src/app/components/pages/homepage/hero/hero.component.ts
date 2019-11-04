import {Component, OnInit} from '@angular/core';
import Siema from 'siema';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const mySiema = new Siema({
      selector: '.siema',
      perPage: 1,
      duration: 1200,
      loop: true
    });

    setInterval(() => mySiema.next(), 10000);

    const prev = document.querySelector('.Hero__slider--prev');
    const next = document.querySelector('.Hero__slider--next');

    prev.addEventListener('click', () => mySiema.prev());
    next.addEventListener('click', () => mySiema.next());

  }
}

