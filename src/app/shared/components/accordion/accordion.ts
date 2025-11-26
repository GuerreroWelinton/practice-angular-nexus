import { Component, input } from '@angular/core';
import { AccordionItem } from '../../interfaces/accordion-interface';

@Component({
  selector: 'nexus-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styles: ``,
})
export class Accordion {
  accordionItems = input.required<AccordionItem[]>();
}
