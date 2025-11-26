import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cart } from '../cart/cart';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Modal } from '../modal/modal';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'nexus-layout',
  imports: [Header, Footer, RouterOutlet, Modal, Sidebar, Cart],
  templateUrl: './layout.html',
  styles: ``,
})
export class Layout {}
