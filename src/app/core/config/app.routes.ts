import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: 'home',
    loadComponent: () => import('../../features/home/home').then((m) => m.Home),
    title: 'Nexus - Inicio',
  },

  {
    path: 'bookstore',
    loadComponent: () => import('../../features/bookstore/bookstore').then((m) => m.Bookstore),
    title: 'Nexus - Librería',
  },

  {
    path: 'cafeteria',
    loadComponent: () => import('../../features/cafeteria/cafeteria').then((m) => m.Cafeteria),
    title: 'Nexus - Cafetería',
  },

  {
    path: 'coworking',
    loadComponent: () => import('../../features/coworking/coworking').then((m) => m.Coworking),
    title: 'Nexus - Coworking',
  },

  {
    path: 'faqs',
    loadComponent: () => import('../../features/faqs/faqs').then((m) => m.Faqs),
    title: 'Nexus - Preguntas Frecuentes',
  },

  {
    path: 'contact',
    loadComponent: () => import('../../features/contact/contact').then((m) => m.Contact),
    title: 'Nexus - Contacto',
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
