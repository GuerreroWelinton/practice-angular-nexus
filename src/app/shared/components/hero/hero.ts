import { Component, input } from '@angular/core';
import { HeroItem } from '../../interfaces/hero-interface';

@Component({
  selector: 'nexus-hero',
  imports: [],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  title = input.required<string>();
  description = input.required<string>();
  heroItems = input.required<HeroItem[]>();
}
