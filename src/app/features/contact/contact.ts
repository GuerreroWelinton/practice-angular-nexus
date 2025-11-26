import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'nexus-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styles: ``,
})
export class Contact {
  protected readonly formBuilder = inject(FormBuilder);

  protected readonly isProcessing = signal(false);

  readonly contactForm = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,}$/)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly fullName = this.contactForm.get('fullName');
  readonly email = this.contactForm.get('email');
  readonly phoneNumber = this.contactForm.get('phoneNumber');
  readonly message = this.contactForm.get('message');

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isProcessing.set(true);

      await new Promise((resolve) => setTimeout(resolve, 300));

      this.contactForm.reset();
      this.isProcessing.set(false);

      alert(
        '¡Mensaje enviado con éxito! 📧\n\nGracias por contactarnos. Te responderemos a la brevedad.\n\n¡Que tengas un excelente día!',
      );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
