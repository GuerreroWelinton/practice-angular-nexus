import { Component, inject, OnInit } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { ProductsGrid } from '../../shared/components/products-grid/products-grid';
import { CategoryCard } from '../../shared/components/category-card/category-card';
import { HeroItem } from '../../shared/interfaces/hero-interface';
import { ProductCardOrientation } from '../../shared/interfaces/product-interface';
import { Category } from '../../shared/interfaces/category-interface';
import { BookstoreApi } from '../bookstore/bookstore-api';
import { CafeteriaApi } from '../cafeteria/cafeteria-api';

@Component({
  selector: 'nexus-home',
  imports: [Hero, ProductsGrid, CategoryCard],
  templateUrl: './home.html',
  styles: ``,
})
export class Home implements OnInit {
  protected readonly cafeteriaApi = inject(CafeteriaApi);
  protected readonly bookstoreApi = inject(BookstoreApi);

  readonly heroTitle = '¡Tu aventura empieza en Nexus!';
  readonly heroDescription =
    'Un espacio multifuncional donde la librería universitaria, la cafetería y el coworking se integran para acompañarte en tu día a día.';

  readonly heroItems: HeroItem[] = [
    {
      id: 1,
      title: 'Imagen 1',
      img: 'assets/images/hero/1.svg',
    },
    {
      id: 2,
      title: 'Imagen 2',
      img: 'assets/images/hero/2.svg',
    },
    {
      id: 3,
      title: 'Imagen 3',
      img: 'assets/images/hero/3.svg',
    },
    {
      id: 4,
      title: 'Imagen',
      img: 'assets/images/hero/4.svg',
    },
  ];

  readonly categories: Category[] = [
    {
      title: 'Librería',
      description:
        'Amplia selección de libros académicos, técnicos y literatura para tu desarrollo',
      icon: 'book-open',
      route: '/bookstore',
      bgColor: 'primary',
    },
    {
      title: 'Cafetería',
      description: 'Café de especialidad, bebidas y snacks para acompañar tus jornadas de estudio',
      icon: 'coffee',
      route: '/cafeteria',
      bgColor: 'warning',
    },
    {
      title: 'Coworking',
      description: 'Espacios cómodos y equipados para trabajar, estudiar y colaborar',
      icon: 'users',
      route: '/coworking',
      bgColor: 'success',
    },
  ];

  readonly discountedCafeteriaProducts = this.cafeteriaApi.discountedProducts;
  readonly discountedBookstoreProducts = this.bookstoreApi.discountedProducts;

  readonly productCardOrientation = ProductCardOrientation;

  ngOnInit(): void {
    this.cafeteriaApi.loadMockCafeteriaProducts();
    this.bookstoreApi.loadMockBookstoreProducts();
  }
}
