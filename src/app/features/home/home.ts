import { Component } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { HeroItem } from '../../shared/interfaces/hero-interface';

@Component({
  selector: 'nexus-home',
  imports: [Hero],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
  readonly heroTitle = 'Tu aventura empieza en Nexus!';
  readonly heroSubtitle =
    'Espacio multifuncional que integra gestión de librería universitaria, servicios de cafetería y reserva de espacios de coworking.';

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
}
