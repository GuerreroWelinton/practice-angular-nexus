import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../../interfaces/header-interface';
import { ShoopingCartManager } from '../../services/shooping-cart-manager';
import { ThemeManager } from '../../services/theme-manager';
import { FeatherIcon } from '../feather-icon/feather-icon';

@Component({
  selector: 'nexus-header',
  imports: [NgTemplateOutlet, FeatherIcon, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  protected readonly themeManager = inject<ThemeManager>(ThemeManager);
  protected readonly shoppingCartManager = inject<ShoopingCartManager>(ShoopingCartManager);

  readonly currentTheme = this.themeManager.getCurrentTheme();
  readonly totalCartItems = this.shoppingCartManager.totalCartItems;

  readonly headerNavigationItems: MenuItem[] = [
    { label: 'Librería ', path: '/bookstore' },
    { label: 'Cafetería', path: '/cafeteria' },
    { label: 'Coworking', path: '/coworking' },
    { label: 'Preguntas Frecuentes', path: '/faqs' },
    { label: 'Contacto', path: '/contact' },
  ];

  toggleTheme(): void {
    this.themeManager.toggleTheme();
  }
}
