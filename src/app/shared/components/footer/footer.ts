import { Component, signal } from '@angular/core';

@Component({
  selector: 'nexus-footer',
  imports: [],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  year = signal(new Date().getFullYear());
}
