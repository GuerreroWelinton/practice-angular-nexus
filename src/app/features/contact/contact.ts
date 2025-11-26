import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'nexus-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styles: ``,
})
export class Contact {
  protected readonly formBuilder = inject(FormBuilder);

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

  onSubmit() {
    if (this.contactForm.valid) {
      alert('Formulario enviado con éxito');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
