import { Component, effect, ElementRef, inject, viewChild } from '@angular/core';
import { Product, ProductSource } from '../../interfaces/product-interface';
import { ModalManager } from '../../services/modal-manager';

@Component({
  selector: 'nexus-modal',
  imports: [],
  templateUrl: './modal.html',
  styles: ``,
})
export class Modal {
  protected readonly modalManager = inject<ModalManager<Product>>(ModalManager);
  protected readonly product = this.modalManager.getData();

  readonly openModalButton = viewChild<ElementRef<HTMLButtonElement>>('openModalButton');
  readonly modalElement = viewChild<ElementRef<HTMLDivElement>>('modalElement');

  readonly productSource = ProductSource;

  constructor() {
    effect(() => {
      if (this.modalManager.isOpen()) {
        this.openModal();
      }
    });
  }

  openModal() {
    this.openModalButton()?.nativeElement.click();
  }

  close() {
    this.modalManager.closeModal();
  }
}
