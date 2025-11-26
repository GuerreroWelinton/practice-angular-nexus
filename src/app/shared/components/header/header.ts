import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../../interfaces/header-interface';
import { FeatherIcon } from '../feather-icon/feather-icon';

@Component({
  selector: 'nexus-header',
  imports: [NgTemplateOutlet, FeatherIcon, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  readonly headerNavigationItems: MenuItem[] = [
    { label: 'Librería ', path: '/bookstore' },
    { label: 'Cafetería', path: '/cafeteria' },
    { label: 'Coworking', path: '/coworking' },
    { label: 'Preguntas Frecuentes', path: '/faqs' },
    { label: 'Contacto', path: '/contact' },
  ];
}
