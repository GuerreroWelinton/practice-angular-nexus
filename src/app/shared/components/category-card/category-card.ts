import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatherIcon } from '../feather-icon/feather-icon';
import { Category } from '../../interfaces/category-interface';

@Component({
  selector: 'nexus-category-card',
  imports: [RouterLink, FeatherIcon],
  templateUrl: './category-card.html',
  styles: ``,
})
export class CategoryCard {
  category = input.required<Category>();
}
