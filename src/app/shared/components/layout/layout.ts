import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'nexus-layout',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './layout.html',
  styles: ``,
})
export class Layout {}
